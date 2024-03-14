"use server";

import { liveblocksClient } from "@/lib/liveblocksClient";
import { getUserEmail } from "@/lib/userClient";
import Link from "next/link";

export default async function Boards() {
  const email = await getUserEmail();
  const { data: rooms } = await liveblocksClient.getRooms({
    userId: email,
  });

  return (
    <div className="grid md:grid-cols-4 gap-2">
      {rooms?.length > 0 &&
        rooms.map((room) => (
          <Link
            key={room.id}
            href={`/boards/${room.id}`}
            className="rounded-full ml-2 bg-rose-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
          >
            {room.metadata.boardName}
          </Link>
        ))}
    </div>
  );
}
