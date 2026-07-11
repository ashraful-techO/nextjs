import Link from "next/link";
import React from "react";

function PraciceLayout({
  children,
  marketingSlot,
  salesSlot,
}: {
  children: React.ReactNode;
  marketingSlot: React.ReactNode;
  salesSlot: React.ReactNode;
}) {
  return (
    <div>
      <nav className="flex gap-10 m-8">
        <Link href="/development">Development</Link>
        <Link href="/testing">Testing</Link>
        <Link href="/maketing">Marketing</Link>
        <Link href="/maketing/settings">Marketing settings</Link>
        <Link href="/sales">Sales</Link>
      </nav>

      <div className="flex">
        {marketingSlot}
        {salesSlot}
      </div>

      {children}
    </div>
  );
}

export default PraciceLayout;
