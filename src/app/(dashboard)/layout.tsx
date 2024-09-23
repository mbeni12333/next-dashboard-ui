import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex overflow-hidden bg-gray-100">
      <aside className="flex flex-col w-[8%]  lg:w-[16%] xl:w-[14%] h-screen bg-white shadow-md min-w-[64px] text-lg">
        <Link
          href="/dashboard"
          className="flex flex-row justify-center items-center lg:justify-start gap-2 p-4 "
        >
          <Image src="/logo.png" alt="Lama Dev Logo" width={30} height={30} />
          <span className="text-lg font-bold text-gray-900 hidden lg:block">
            PlastWood
          </span>
        </Link>
        <Menu />
      </aside>
      <main className="flex-1 w-[92%]  lg:w-[84%] xl:w-[84%] h-screen overflow-y-auto">
        <Navbar />

        <div className="py-6 sm:px-8 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
