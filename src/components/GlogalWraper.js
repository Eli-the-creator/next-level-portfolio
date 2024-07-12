import React from "react";

export default function GlogalWraper({ children }) {
  return (
    <div className="max-w-3xl px-1 md:px-0 mx-auto h-full overflow-y-scroll">
      {children}
    </div>
  );
}
