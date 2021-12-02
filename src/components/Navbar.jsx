import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-10 text-xl">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/blogs">Blogs</a>
        </li>
      </ul>
    </nav>
  );
}
