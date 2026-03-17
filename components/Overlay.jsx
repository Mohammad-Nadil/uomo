"use client";
import useLockStore from "@/app/store/lock";
import React from "react";

const Overlay = () => {
  const { lock, lockView } = useLockStore();

  return (
    <div
      onClick={lock ? lockView : undefined}
      className={
        lock
          ? "fixed top-0 left-0 h-full w-full bg-black/40 z-30"
          : "hidden"
      }
    ></div>
  );
};

export default Overlay;