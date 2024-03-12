"use client";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function NewColumnForm() {
  const [coloumName, setColoumName] = useState("");
  function handleNewColoumn(e: FormEvent) {
    e.preventDefault();
    // take care of empty coloimName input
    if (coloumName.length <= 0) {
      toast.error("CloumName Should not be empty");
      return;
    }

    alert("new coloum: " + coloumName);

    // at last empty the state after sumbit complete
    setColoumName("");
  }
  return (
    <form onSubmit={handleNewColoumn} className="max-w-xs">
      <label className="block ">
        <span className="text-gray-600 block">Coloum name:</span>
        <input
          type="text"
          placeholder="new column name"
          value={coloumName}
          onChange={(e) => setColoumName(e.target.value)}
        />
      </label>
      <button type="submit" className="mt-2 block w-full">
        Create Coloumn
      </button>
    </form>
  );
}
