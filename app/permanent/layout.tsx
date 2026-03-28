import type { Metadata } from "next";

import "../globals.css";

export const metadata: Metadata = {
  title: "Test landing"
};

export default function PermanentLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className={"bg-white"}>
      {children}
    </div>
  );
}
