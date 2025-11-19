import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface DashboardHeaderProps {
  userEmail: string;
  onLogout?: () => void;
}

export default function DashboardHeader({
  userEmail,
  onLogout,
}: DashboardHeaderProps) {
  return (
    <header className="bg-emerald-800 text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <Avatar className="w-8 h-8 sm:w-10 sm:h-10 bg-white">
              <AvatarFallback className="text-emerald-800 text-sm sm:text-base">
                U
              </AvatarFallback>
            </Avatar>
            <span className="text-xs sm:text-sm">
              Logged in as: <span className="font-semibold">{userEmail}</span>
            </span>
          </div>
          <Button
            size="sm"
            className="bg-lime-300 hover:bg-lime-400 text-emerald-900 font-semibold"
            onClick={onLogout}
          >
            <LogOut className="w-4 h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
