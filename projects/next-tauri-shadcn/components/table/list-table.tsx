'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import { ListTable } from '@visactor/vtable/es/ListTable';

import { mockData } from './mock';

export default function VListTable({ sidebarRef }: {
  sidebarRef: RefObject<HTMLDivElement> | null;
}) {
  const tableRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | string>('100%');

  useEffect(() => {
    if (typeof window === 'undefined' || !tableRef.current) return;
    let tableInstance: ListTable;

    import('@visactor/vtable').then(({ ListTable }) => {
      tableInstance = new ListTable({
        container: tableRef.current,
        ...mockData,
      });
    });

    // 监听容器大小变化
    function setSize() {
      if (tableInstance) {
        let dw = window.innerWidth;
        if (sidebarRef && sidebarRef.current) {
          const sidebarRect = sidebarRef.current.getBoundingClientRect();
          dw = window.innerWidth - sidebarRect.width;
        }
        // 虽然偏大了 `2rem`，但是无伤大雅
        tableInstance.setCanvasSize(dw, tableInstance.canvasHeight as number);
        // 调整容器宽度
        setWidth(`calc(${dw}px - 2rem)`);
        // 调整表格大小
        tableInstance.resize();
      }
    }
    setSize();

    window.addEventListener('resize', setSize);

    return () => {
      if (tableInstance) {
        tableInstance.release();
      }
      window.removeEventListener('resize', setSize);
    };
  }, [sidebarRef]);

  return <div ref={tableRef} style={{ width, height: 400 }}></div>;
}
