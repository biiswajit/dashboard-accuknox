import React from "react";

export function CatagoryLayout(
{ catagoryName, children }: {catagoryName: string, children: React.ReactNode}) {

  return (<div className="h-fit my-10 mx-4 p-2 bg-gray-100 rounded-md">
    <p className="px-10 text-2xl font-semibold">{catagoryName}</p>
    {children}
  </div>);
}