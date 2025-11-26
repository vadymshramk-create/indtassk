import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
        {/* Background mystical elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>

          {/* Mystical grid */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FC0FC0" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          {/* Title */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-['Cinzel'] mb-4 text-white">
              Сяйво Тіней
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-['Cinzel'] text-neon-pink animate-glow">
              Королівство Дзи'Маат
            </h2>
          </div>

          {/* Mystical totem visualization */}
          <div className="relative w-full max-w-sm mx-auto mb-12 h-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-pink/20 to-purple-600/10 blur-2xl"></div>

            <div
              className="relative z-20 text-6xl drop-shadow-2xl"
              style={{ textShadow: "0 0 30px #FC0FC0" }}
            >
              ◆ ✦ ◆
            </div>

            {/* Ornamental border */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 200"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#FC0FC0"
                strokeWidth="2"
                opacity="0.5"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#FC0FC0"
                strokeWidth="1"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Slogan */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light italic">
            "Де Тіні Плетуть Духовні Шляхи"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/rituals"
              className="btn-neon inline-flex items-center justify-center gap-2"
            >
              <span>Осягнути Ритуали</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/sanctuary"
              className="btn-outline-neon inline-flex items-center justify-center gap-2"
            >
              <span>Ввійти у Сутінки</span>
              <Sparkles size={20} />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-neon-pink"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-20 sm:py-32 bg-[#0a0a0a] border-t border-neon-pink/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Cinzel'] text-center mb-12 text-white">
            Про Королівство
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Mystery */}
            <div className="card-mystical group">
              <div className="text-4xl mb-4 text-neon-pink group-hover:animate-float">
                🌙
              </div>
              <h3 className="text-neon-pink font-['Cinzel'] text-xl mb-4">
                Містика та Магія
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Дзи'Маат — давнє королівство, що існує у глибинах Підземного
                Світу, де магія пронизує кожну тінь і живить подих стародавніх
                духів.
              </p>
            </div>

            {/* Card 2: Shamanism */}
            <div className="card-mystical group">
              <div className="text-4xl mb-4 text-neon-pink group-hover:animate-float">
                🦅
              </div>
              <h3 className="text-neon-pink font-['Cinzel'] text-xl mb-4">
                Шаманські Традиції
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ми є хранителями старовинних шаманських ритуалів, які
                підтримують наш зв'язок із предками та незримими духами
                підземних глибин.
              </p>
            </div>

            {/* Card 3: Unity */}
            <div className="card-mystical group">
              <div className="text-4xl mb-4 text-neon-pink group-hover:animate-float">
                ⚡
              </div>
              <h3 className="text-neon-pink font-['Cinzel'] text-xl mb-4">
                Духовна Єдність
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                В Дзи'Маат усі клани об'єднані спільною метою - збереження
                рівноваги між світом живих та світом духів.
              </p>
            </div>
          </div>

          {/* Long form content */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-dark-card border border-neon-pink/20 rounded-lg p-8">
              <h3 className="text-2xl font-['Cinzel'] text-neon-pink mb-6">
                Легенда Темних Ельфів
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                За переказами Старійшин, багато епох тому, коли сяйво поверхні
                стало нестерпним для нашого народу, Темні Ельфи відійшли у
                підземні глибини. Саме там, у вічній пітьмі, вони віднайшли не
                просто притулок, а справжню силу, гідність і міцний зв'язок із
                прадавніми духами — охоронцями підземних таємниць.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Наша традиція виросла із синтезу ельфійської магії та шаманської
                мудрості. Вона навчила нас слухати голоси предків, розуміти мову
                рун та взаємодіяти з енергіями, що пульсують у кожній жилі
                Землі. Ось чому ми — не просто раса, а Хранителі Давніх Знань та
                рівноваги цього світу.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections Preview */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Cinzel'] text-center mb-12 text-white">
            Досліджуйте Королівство
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Rituals Preview */}
            <Link
              to="/rituals"
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-purple-600/5 group-hover:from-neon-pink/40 group-hover:to-purple-600/20 transition-all"></div>
              <div className="relative border border-neon-pink/30 group-hover:border-neon-pink rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="text-2xl font-['Cinzel'] text-neon-pink mb-3">
                  Духовні Шляхи
                </h3>
                <p className="text-gray-300 mb-4">
                  Відкрийте таємниці ритуалів та магічних практик
                </p>
                <div className="text-neon-pink font-semibold flex items-center justify-center gap-2 group-hover:gap-4 transition-all">
                  Дізнатися більше <ArrowRight size={20} />
                </div>
              </div>
            </Link>

            {/* Clans Preview */}
            <Link
              to="/elders"
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-purple-600/5 group-hover:from-neon-pink/40 group-hover:to-purple-600/20 transition-all"></div>
              <div className="relative border border-neon-pink/30 group-hover:border-neon-pink rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">👑</div>
                <h3 className="text-2xl font-['Cinzel'] text-neon-pink mb-3">
                  Клани та Старійшини
                </h3>
                <p className="text-gray-300 mb-4">
                  Познайомтесь з давніми родинами королівства
                </p>
                <div className="text-neon-pink font-semibold flex items-center justify-center gap-2 group-hover:gap-4 transition-all">
                  Дізнатися більше <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
