import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-20">
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-primary">DevGear</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/items">Items</Link></li>
          <li><Link href="/add-item">Add Item</Link></li>
          <li><Link href="/login" className="btn btn-primary btn-sm text-white">Login</Link></li>
        </ul>
      </div>
    </div>
  );
}