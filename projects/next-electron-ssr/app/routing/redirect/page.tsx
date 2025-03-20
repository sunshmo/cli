'use client';

import { redirect } from 'next/navigation';
import { logout } from '@/app/routing/redirect-helper';

export default function Redirect() {
  return (
    <div>
      <button onClick={() => redirect('/404')}>redirect到 404 页面</button>
      <button onClick={() => redirect('https://google.com')}>
        redirect到https://google.com
      </button>
      <button onClick={logout}>redirect login</button>
    </div>
  );
}
