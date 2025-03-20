export default function RedirectingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="routing-layout">
      <h1>这是 routing-layout</h1>
      {children}
    </div>
  );
}
