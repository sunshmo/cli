import { use } from 'react';

async function getData() {
  return {
    data: 'ssr client',
  };
}

export default function SsrClient() {
  const data = use(getData());
  return (
    <div>
      <h1>ssr client</h1>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}
