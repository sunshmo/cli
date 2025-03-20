async function getServerData() {
  return { title: 'ssr server' };
}

export default async function SsrServer() {
  const data = await getServerData();
  return <div>{data.title}</div>;
}
