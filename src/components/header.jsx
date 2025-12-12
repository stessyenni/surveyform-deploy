import React from 'react'
import Link from "next/link";

function Header () {
  return (
    <div className="Header">
      <nav className="Menu">
        <div>
          <ul className="flex flex-row gap-10 items-center justify-center">
            <Link href="/"> Survey Form</Link>

            <Link href="/view"> Survey</Link>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Header
