import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <h2>{process.env.ENVIRONMENT}</h2>
      <Link href="/about">About</Link>
    </div>
  );
}
