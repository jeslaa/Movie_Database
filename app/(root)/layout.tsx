import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />

      <div className="pt-24">{children}</div>
    </main>
  );
};

export default RootLayout;
