import RootLayout from "../components/RootLayout";
import "./globals.css";
import React from "react";

export const metadata = {
  title: {
    template: "Personal branding",
    default: "Jagadeeswar",
  },
};

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
