import Back from '@/components/back';

interface IProps {
  params: Promise<Record<string, string[]>>;
  searchParams: Promise<Record<string, string>>;
}

export default async function SlugPage({ searchParams, params }: IProps) {
  const sp = await searchParams;
  const p = await params;
  console.log(sp, p);

  return (
    <div className="slug-page">
      <h1>动态路由 slug page</h1>
      <p>可以在地址栏输入 `/routing/vz/xxx/xyz`</p>
      <p>slug的值是{p.slug.join('/')}</p>
      <Back />
    </div>
  );
}
