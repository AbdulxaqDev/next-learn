import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Next JS pre rendering</h1>
      <Link href="/users">Users</Link>
      <Link href="/blog">Blog</Link>
    </>
  );
}
