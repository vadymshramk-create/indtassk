import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
        {/* Background mystical elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="text-9xl font-bold font-['Cinzel'] text-neon-pink mb-4 animate-glow">
            404
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-['Cinzel'] text-white mb-4">
            Шлях Загублений
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Вибачте, ця сторінка не існує у Королевстві Дзи'Маат. Цей шлях прихований від живих.
          </p>

          <Link
            to="/"
            className="btn-neon inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            <span>Повернутися до Дому</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
