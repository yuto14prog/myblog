import Link from 'next/link';
import { Layout } from '../components';

export default function Custom404() {
  return (
    <Layout>
      <div className='text-center'>
        <h1 className="font-title">404 Page Not Found</h1>
        <Link href='/'><a>Back to Home</a></Link>
      </div>
    </Layout>
  );
}