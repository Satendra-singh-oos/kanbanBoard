"use client";

import React from "react";
import { createBoard } from "../actions/boardActions";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

export default function page() {
  const handleNewBoardSubmit = async (formData: FormData) => {
    const boardName = formData.get("name");
    if (typeof boardName === "string" && boardName.length > 2) {
      const { id } = await createBoard(boardName);

      redirect(`/boards/${id}`);
    } else {
      toast.error(
        "BoardName Must Be Character || Board Name Must be  minmum of 3 Character"
      );
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center"></div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Create Your Board
          </h2>

          <form className="mt-8" action={handleNewBoardSubmit}>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Board Name
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder=" Name"
                    name="name"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-mdpx-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-indigo-500"
                >
                  Create My Board
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
