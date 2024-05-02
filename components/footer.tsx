"use client";

import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  LinktreeLogo,
  SnapchatLogo,
  TiktokLogo,
  TwitchLogo,
  XLogo,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          href="#"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-gray-600"
        >
          <GithubLogo size={24} />
        </Link>
        <Link
          href="#"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-gray-600"
        >
          <XLogo size={24} />
        </Link>
        <Link
          href="#"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-gray-600"
        >
          <FacebookLogo size={24} />
        </Link>
        <Link
          href="#"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-gray-600"
        >
          <TwitchLogo size={24} />
        </Link>
        <Link
          href="#"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-gray-600"
        >
          <TiktokLogo size={24} />
        </Link>
        <Link
          href="#"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-gray-600"
        >
          <InstagramLogo size={24} />
        </Link>
        <Link
          href="#"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-gray-600"
        >
          <LinkedinLogo size={24} />
        </Link>
        <Link
          href="#"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-gray-600"
        >
          <SnapchatLogo size={24} />
        </Link>
        <Link
          href="#"
          rel="noopener noreferrer"
          className="mx-2 text-gray-500 hover:text-gray-600"
        >
          <LinktreeLogo size={24} />
        </Link>
      </div>
    </footer>
  );
}
