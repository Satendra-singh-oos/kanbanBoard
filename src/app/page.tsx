import Board from "@/components/Board";
import Boards from "@/components/Boards";
import LoginView from "@/components/views/LoginView";
import { authOptions } from "@/lib/authOptions";
import { MoveRight } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <LoginView />;
  }
  return (
    <div className="ml-2 mt-2">
      <h1 className="text-4xl">Your Boards:</h1>
      <span className="text-sm pl-2 font-light">
        {/* You Can Create/Find Your Boards Here... */}
        <Boards />
      </span>
      {/* <Board /> */}
      <div>
        <Link href={"/new-board"} className="btn primary flex w-52 gap-2 mt-5">
          <span>Create New Board</span>
          <span>
            <MoveRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
