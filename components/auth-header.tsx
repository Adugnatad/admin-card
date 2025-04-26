import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

export default function AuthHeader() {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/coop_logo.svg"
            alt="Coop Bank of Oromia"
            width={132}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Welcome, Admin</span>
            <Button variant="outline" size="sm" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
