import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-neon-pink/20">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center ">
              <img
                className="w-16 h-16 rounded-full group-hover:shadow-lg group-hover:shadow-neon-pink/50 transition-all "
                src="/logo.JPG"
              />
            </div>
            <span className="text-2xl font-bold font-['Cinzel'] text-white hidden sm:inline">
              Дзи'Маат
            </span>
          </Link>

          <ul className="flex items-center gap-1 sm:gap-2 md:gap-8">
            <li>
              <Link
                to="/"
                className="text-sm md:text-base px-3 md:px-4 py-2 rounded-lg hover:text-neon-pink hover:bg-neon-pink/10 transition-all duration-300"
              >
                Дім
              </Link>
            </li>
            <li>
              <Link
                to="/rituals"
                className="text-sm md:text-base px-3 md:px-4 py-2 rounded-lg hover:text-neon-pink hover:bg-neon-pink/10 transition-all duration-300"
              >
                Ритуали
              </Link>
            </li>
            <li>
              <Link
                to="/elders"
                className="text-sm md:text-base px-3 md:px-4 py-2 rounded-lg hover:text-neon-pink hover:bg-neon-pink/10 transition-all duration-300"
              >
                Клани
              </Link>
            </li>
            <li>
              <Link
                to="/sanctuary"
                className="text-sm md:text-base px-3 md:px-4 py-2 rounded-lg hover:text-neon-pink hover:bg-neon-pink/10 transition-all duration-300"
              >
                Святилище
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-[#0a0a0a] border-t border-neon-pink/20 mt-20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-neon-pink font-['Cinzel'] text-lg mb-4">
                Королівство
              </h3>
              <p className="text-gray-400 text-sm">
                Сяйво Тіней: Королівство Дзи'Маат
              </p>
            </div>
            <div>
              <h3 className="text-neon-pink font-['Cinzel'] text-lg mb-4">
                Навігація
              </h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-neon-pink transition-colors"
                  >
                    Дім
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rituals"
                    className="hover:text-neon-pink transition-colors"
                  >
                    Ритуали
                  </Link>
                </li>
                <li>
                  <Link
                    to="/elders"
                    className="hover:text-neon-pink transition-colors"
                  >
                    Клани
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sanctuary"
                    className="hover:text-neon-pink transition-colors"
                  >
                    Святилище
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-neon-pink font-['Cinzel'] text-lg mb-4">
                Контакти
              </h3>
              <p className="text-sm text-gray-400">
                Тільки обрані можуть знайти наш Шлях
              </p>
            </div>
          </div>

          <div className="border-t border-neon-pink/20 pt-8 text-center text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Королевство Темних Ельфів. Всі права
              захищені.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
