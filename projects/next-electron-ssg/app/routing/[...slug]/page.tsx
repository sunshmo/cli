interface IProps {
  params: Promise<Record<string, string[]>>;
  searchParams: Promise<Record<string, string[]>>;
}

// 确保 generateStaticParams() 覆盖所有 URL
export async function generateStaticParams() {
  return [
    { slug: ['1', '2'] }, // /routing/1/2
    { slug: ['1', '2', '3'] }, // /routing/1/2
    { slug: ['a', 'b'] }, // /routing/a/b
    { slug: ['test', 'xyz'] }, // /routing/test/xyz
    { slug: ['vz', 'xxx', 'xyz'] }, // /routing/vz/xxx/xyz
  ];
}

export default async function SlugPage({ params }: IProps) {
  const p = await params;

  return (
    <div className="slug-page">
      <h1>动态路由 slug page</h1>
      <p>可以在地址栏输入 /routing/vz/xxx/xyz</p>
      <p>slug的值是{p.slug.join('/')}</p>
    </div>
  );
}
