import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Permanent"
};

export default function TattooLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className={"bg-black flex"}>
      {children}
    </div>
  );
}
