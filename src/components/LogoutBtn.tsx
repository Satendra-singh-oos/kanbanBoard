"use client";

import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutBtn() {
  return (
    <button
      className="bg-pink-500 text-white py-2 px-4 ml-2 rounded-md"
      onClick={() => signOut()}
    >
      Logout
    </button>
  );
}
