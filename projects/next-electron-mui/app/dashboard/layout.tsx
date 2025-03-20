// 这是 `/dashboard` 路由下的布局组件，只有根布局可以包含 <html> 和 <body> 标签
export default function DashboardLayout({
                                          children,
                                        }: {
  children: React.ReactNode
}) {
  return <section className="dashboard-layout">{children}</section>
}
