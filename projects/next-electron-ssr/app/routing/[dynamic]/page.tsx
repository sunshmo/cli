import Back from '@/components/back';

interface IProps {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

export default async function DynamicPage({ searchParams, params }: IProps) {
  const sp = await searchParams;
  const p = await params;
  console.log(sp, p);

  return (
    <div className="nested-page">
      <h1>动态路由 dynamic page</h1>
      <p>可以在地址栏输入 `/routing/1`、或者 `/routing/2` 或 `/routing/abc`</p>
      <p>dynamic的值是{p.dynamic}</p>
      <p>
        当输入`/routing/abc/xxx` 或 `/routing/abc/xx/xyz`
        会出现404错误，这个时候，可以看看 `[...slug]` 这种约定路由
      </p>
      <Back />
    </div>
  );
}
