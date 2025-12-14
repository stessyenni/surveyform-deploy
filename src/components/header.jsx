import React from 'react'
import Link from "next/link";

function Header () {
  return (
    <div className="Header">
      <nav className="Menu">
        <div>
          <ul className="w-full  text-white font-bold text-[17px] flex flex-row gap-10 items-center justify-center">
            <Link
              className="border-2 bg-[#ea5535] p-2 rounded-lg hover:bg-[#3c357c]"
              href="/"
            >
              {" "}
              Survey Form
            </Link>

            <Link
              className="border-2 bg-[#ea5535] p-2 rounded-lg hover:bg-[#3c357c]"
              href="/view"
            >
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
