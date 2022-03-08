import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='text-center'>
      <h1 className="font-title">404 Page Not Found</h1>
      <Link href='/'><a>Back to Home</a></Link>
    </div>
  );
}