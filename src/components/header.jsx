import React from 'react'
import Link from "next/link";

function Header () {
  return (
    <div className="Header">
      <nav className="Menu">
        <div>
          <ul className="w-[50%] bg-amber-600 flex flex-row gap-10 items-center justify-center">
            <Link className=" hover:bg-amber-400" href="/">
              {" "}
              Survey Form
            </Link>

            <Link className=" hover:bg-amber-400" href="/view">
              {" "}
              Survey List
            </Link>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
}

export default Header
