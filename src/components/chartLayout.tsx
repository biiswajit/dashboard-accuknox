import React from "react";

export function ChartLayout(
{ children }: { children: React.ReactNode }) {

  return (
    <div
    className="border-2 border-gray-200 rounded-md m-3 p-5 shadow-md bg-white hover:bg-gray-100">
      {children}
    </div>);
}