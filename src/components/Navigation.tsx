import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { Home, Gamepad2, Brain, Trophy, BarChart3, Coins, Leaf } from "lucide-react";

export function Navigation() {
  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/games", label: "Games", icon: Gamepad2 },
    { to: "/quiz", label: "Quiz", icon: Brain },
    { to: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { to: "/leaderboard", label: "Leaderboard", icon: Trophy },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="bg-gradient-primary rounded-xl p-2">
              <Leaf className="w-6 h-6 text-background" />
            </div>
            <span className="text-xl font-black bg-gradient-primary bg-clip-text text-transparent">
              EcoGaming
            </span>
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-primary text-background shadow-glow"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          {/* User Stats */}
          <div className="flex items-center gap-4">
            <Badge className="bg-gradient-token text-background font-bold px-3 py-1">
              <Coins className="w-3 h-3 mr-1" />
              2,450
            </Badge>
            <Badge className="bg-gradient-ecoin text-background font-bold px-3 py-1">
              <Leaf className="w-3 h-3 mr-1" />
              24
            </Badge>
            <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Profile
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-around py-3 border-t border-border/50">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                <Icon className="w-4 h-4" />
                <span className="text-xs font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}