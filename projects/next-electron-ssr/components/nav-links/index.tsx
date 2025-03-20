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
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        关于
      </Link>

      <Link
        className={`link ${pathname === '/dashboard' ? 'active' : ''}`}
        href="/dashboard"
      >
        dashboard
      </Link>

      <Link
        className={`link ${pathname === '/meta' ? 'active' : ''}`}
        href="/meta"
      >
        meta
      </Link>

      <Link
        className={`link ${pathname.startsWith('/routing') ? 'active' : ''}`}
        href="/routing"
      >
        routing
      </Link>

      <Link
        className={`link ${pathname === '/use-selected-layout-segment' ? 'active' : ''}`}
        href="/use-selected-layout-segment"
      >
        useSelectedLayoutSegment
      </Link>
    </nav>
  );
}
