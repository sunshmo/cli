'use client';

import { useRouter } from 'next/navigation';

export default function UseRouter() {
  const router = useRouter();

  return <button onClick={() => router.push('/about')}>useRouter</button>;
}
