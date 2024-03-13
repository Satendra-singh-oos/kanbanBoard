import { authOptions } from "@/lib/authOptions";
import { Notebook } from "lucide-react";
import { getServerSession } from "next-auth";
import React from "react";
import LogoutBtn from "./LogoutBtn";
import LoginBtn from "./LoginBtn";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-blue-600 p-4 ">
      <div className="flex justify-between items-center ">
        <a
          href=""
          className="logo flex gap-2 text-gray-200 font-bold text-2xl pl-20"
        >
          <Notebook width={29} height={29} />
          KanbanBoard
        </a>
        <div>
          {session && (
            <>
              <span className="text-white ">Hello,{session?.user?.name}</span>
              <LogoutBtn />
            </>
          )}

          {!session && (
            <>
              <span>Not Logged In</span>
              <LoginBtn />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
