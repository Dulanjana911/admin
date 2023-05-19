"use client";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Navigation() {
  return (
    <div className="flex justify-between border-black shadow-md items-center  px-4 py-2">
      <h1 className="text-xl font-semibold">Smart Car Park</h1>
      <div className="flex gap-x-4">
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
          <Link href={"/manage"} className="rounded-md border border-black p-1">Manage</Link>
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
}

export default Navigation;
