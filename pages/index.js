import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className='w-1/2 mx-auto my-4'>
      <nav>
        <ul className='flex justify-center w-full'>
          <li className='mr-auto font-bold text-lg'>
            <Link href='/'>
              <a>Chat app</a>
            </Link>
          </li>
          {user ? (
            <li className='mr-4'>
              <Link href='/api/auth/logout'>
                <a>Logout</a>
              </Link>
            </li>
          ) : (
            <li className='mr-4'>
              <Link href='/api/auth/login'>
                <a>Login</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
