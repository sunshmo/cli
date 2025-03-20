import { prRedirect } from '@/app/routing/redirect-helper';

export default function PermanentRedirectPage() {
  return (
    <div onClick={prRedirect}>
      permanentRedirect 函数允许你将用户永久重定向到另一个 URL
    </div>
  );
}
