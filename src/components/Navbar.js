import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-20 border-b">
      <div className="flex-1">
        <Link href="/" className="text-2xl font-black text-primary tracking-tighter">DevStack</Link>
      </div>
      <div className="flex-none gap-4">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><Link href="/items">Tools</Link></li>
          <li><Link href="/add-item">Submit Tool</Link></li>
        </ul>
        <Link href="/login" className="btn btn-primary btn-sm text-white">Admin Login</Link>
      </div>
    </div>
  );
}