"use client";

import { signIn } from "next-auth/react";
import React from "react";

export default function LoginBtn() {
  return (
    <button
      className="bg-pink-500 text-white py-2 px-4 ml-2 rounded-md"
      onClick={() => signIn("google")}
    >
      Login
    </button>
  );
}
