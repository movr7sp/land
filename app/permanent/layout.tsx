import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Tattoo"
};

export default function PermanentLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className={"bg-white flex"}>
      {children}
    </div>
  );
}
