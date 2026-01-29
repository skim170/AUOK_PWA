"use client";

import { usePathname, useRouter } from "next/navigation";
import { Layout } from "@/app/components/Layout";

const pageIds = new Set([
  "home",
  "jobs",
  "market",
  "clubs",
  "stores",
  "profile",
]);

function getPageFromPath(pathname: string) {
  if (pathname === "/") return "home";
  const segment = pathname.split("/")[1] || "home";
  return pageIds.has(segment) ? segment : "home";
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname() ?? "/";
  const currentPage = getPageFromPath(pathname);

  const handleNavigate = (page: string) => {
    const target = page === "home" ? "/" : `/${page}`;
    router.push(target);
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {children}
    </Layout>
  );
}
