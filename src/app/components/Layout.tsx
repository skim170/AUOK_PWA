import { Home, Briefcase, ShoppingBag, Users, Store, Bell, User, Menu, Search } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet';
import { Badge } from '@/app/components/ui/badge';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const menuItems = [
    { id: 'home', label: '홈', icon: Home },
    { id: 'jobs', label: '구인구직', icon: Briefcase },
    { id: 'market', label: '중고마켓', icon: ShoppingBag },
    { id: 'clubs', label: '동호회', icon: Users },
    { id: 'stores', label: '상점', icon: Store },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop & Mobile Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">어</span>
              </div>
              <span className="font-bold text-xl hidden sm:block">어번-오펠라이카</span>
              <span className="font-bold text-xl sm:hidden">어-오</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? 'default' : 'ghost'}
                    onClick={() => onNavigate(item.id)}
                    className="gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="icon" onClick={() => onNavigate('profile')}>
                <User className="w-5 h-5" />
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col gap-4 mt-8">
                    {menuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Button
                          key={item.id}
                          variant={currentPage === item.id ? 'default' : 'ghost'}
                          onClick={() => onNavigate(item.id)}
                          className="w-full justify-start gap-3"
                        >
                          <Icon className="w-5 h-5" />
                          {item.label}
                        </Button>
                      );
                    })}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="flex items-center justify-around h-16">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center flex-1 h-full gap-1 ${
                  currentPage === item.id ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
