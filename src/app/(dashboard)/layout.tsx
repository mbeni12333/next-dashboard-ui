import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
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
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex overflow-hidden">
          <aside className="flex flex-col w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] h-screen bg-white">
            <Link
              href="/dashboard"
              className="flex flex-row justify-center items-center lg:justify-start gap-2 p-4 border-b-4"
            >
              <Image
                src="/logo.png"
                alt="Lama Dev Logo"
                width={50}
                height={50}
              />
              <span className="text-2xl font-bold text-gray-900 hidden lg:block">
                Schoolii
              </span>
            </Link>
            <Menu />
          </aside>
          <main className="flex-1 w-[86%] md:w-[92%] lg:w-[84%] xl:w-[84%] h-screen bg-green-100 overflow-y-auto">
            <nav className="bg-blue-50 shadow">
              <header className="bg-blue-100 shadow">
                <div className="py-4 px-4 sm:px-8 lg:px-8">
                  <h1 className="text-3xl font-bold text-gray-900">Navbar</h1>
                </div>
              </header>
            </nav>
            <div className="py-6 sm:px-8 lg:px-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
