"use client";
import { useSession } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const AuthGuard = ({ children }) => {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  // Define public routes that don't require authentication
  const publicRoutes = ["/login", "/signup"];

  useEffect(() => {
    if (!isPending && !session?.user && !publicRoutes.includes(pathname)) {
      router.push("/login");
    }
  }, [session, isPending, pathname, router]);

  // Show loading state while checking authentication
  if (isPending && !publicRoutes.includes(pathname)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f2ea]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#df8620] mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated and not on a public route, don't render children
  if (!session?.user && !publicRoutes.includes(pathname)) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;