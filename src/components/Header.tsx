import Link from 'next/link';
import React from 'react';

function Header({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">loop</Link>
        <nav>
          <ul className="flex space-x-4">
            {isLoggedIn ? (
              <>
                <li><Link href="/record" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Create loop</Link></li>
                <li><Link href="/logout" className="hover:text-gray-400">Logout</Link></li>
              </>
            ) : (
              <li><Link href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Sign In</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;