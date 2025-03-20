import { ReactNode } from 'react';

interface IProps {
  analytics: ReactNode;
  team: ReactNode;
  children: ReactNode;
}

export default function ParallelLayout(props: IProps) {
  const { analytics, team, children } = props;

  return (
    <div className="parallel-layout">
      <h1>parallel layout</h1>
      <div style={{ padding: 30 }}>{analytics}</div>

      <div style={{ padding: 30 }}>{team}</div>

      {/* children页面的渲染需要在当前目录下实现一个 `default.tsx` */}
      <div style={{ padding: 30 }}>{children}</div>
    </div>
  );
}
