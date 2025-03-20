// 1、`page.js`、`page.tsx`、`page.jsx` 是页面路由入口文件
// 2、页面默认是服务器组件，即省略了 `use server` 的写法；但可以设置为客户端组件，即在顶部写入 `use client`

import SsrServer from '@/components/ssr-server';
import SsrClient from '@/components/ssr-client';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      app
      <SsrServer />
      <SsrClient />
    </div>
  );
}
