import React from 'react'
import Link from "next/link";

function Header () {
  return (
    <div className="Header">
      <nav className="Menu">
        <div>
          <ul className="flex flex-row gap-10 items-center justify-center hover:bg-amber-400">
            <Link href="/"> Survey Form</Link>

            <Link href="/view"> Survey List</Link>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Header
