'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        首页
      </Link>

      <Link
        className={`link ${pathname.startsWith('/routing') ? 'active' : ''}`}
        href="/routing"
      >
        routing
      </Link>
    </nav>
  );
}
