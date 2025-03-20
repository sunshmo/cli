'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function RouterPage() {
  const segment = useSelectedLayoutSegment();
  console.log('RouterPage', segment);

  return (
    <nav className="routing-page">
      <ul>
        <li>
          <Link className="link" href="/routing/detail">
            (routing-groups)/detail
          </Link>
        </li>
        <li>
          <Link className="link" href="/routing/modify">
            (routing-groups)/modify
          </Link>
        </li>
        <li>
          <Link className="link" href="/routing/1/2/3">
            [...slug]
          </Link>
        </li>
        <li>
          <Link className="link" href="/routing/1">
            [dynamic]
          </Link>
        </li>
        <li>
          <Link className="link" href="/routing/nested">
            nested page
          </Link>
        </li>
        <li>
          <Link className="link" href="/routing/parallel">
            parallel
          </Link>
        </li>
        <li>
          <Link className="link" href="/routing/permanent-redirect">
            permanent-redirect
          </Link>
        </li>
        <li>
          <Link className="link" href="/routing/push-state">
            push-state
          </Link>
        </li>
        <li>
          <Link className="link" href="/routing/redirect">
            redirect
          </Link>
        </li>
        <li>
          <Link className="link" href="/routing/replace-state">
            replace-state
          </Link>
        </li>
        <li>
          <Link className="link" href="/routing/use-router">
            useRouter
          </Link>
        </li>
      </ul>
    </nav>
  );
}
