import Link from 'next/link';

export default function RouterPage() {
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
          <Link className="link" href="/routing/push-state">
            push-state
          </Link>
        </li>
        <li>
          <Link className="link" href="/routing/replace-state">
            replace-state
          </Link>
        </li>
      </ul>
    </nav>
  );
}
