interface IProps {
  params: Promise<Record<string, string[]>>;
  searchParams: Promise<Record<string, string[]>>;
}

export async function generateStaticParams() {
  return [
    { dynamic: '1' }, // /routing/1/2
    { dynamic: '2' }, // /routing/2
    { dynamic: '3' }, // /routing/3
    { dynamic: 'abc' }, // /routing/abc
  ];
}

export default async function DynamicPage({ params }: IProps) {
  const p = await params;

  return (
    <div className="nested-page">
      <h1>动态路由 dynamic page</h1>
      <p>可以在地址栏输入 `/routing/1`、或者 `/routing/2` 或 `/routing/abc`</p>
      <p>dynamic的值是{p.dynamic}</p>
      <p>
        当输入`/routing/abc/xxx` 或 `/routing/abc/xx/xyz`
        会出现404错误，这个时候，可以看看 `[...slug]` 这种约定路由
      </p>
    </div>
  );
}
