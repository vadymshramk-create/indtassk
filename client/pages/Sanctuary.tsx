import { Layout } from "@/components/Layout";
import { useState } from "react";
import { Send } from "lucide-react";

export default function Sanctuary() {
  const [formData, setFormData] = useState({
    name: "",
    clan: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", clan: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-[#0a0a0a] border-b border-neon-pink/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-['Cinzel'] text-white mb-4">
            Святилище
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Місце духовного зв'язку та спілкування
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Map & Location */}
            <div className="flex flex-col gap-8">
              {/* Stylized Map */}
              <div className="relative rounded-lg overflow-hidden border-2 border-neon-pink/40 opacity-90 h-80 md:h-96 bg-dark-card flex items-center justify-center group">
                <img src="/map.jpg" />
                {/* Hover effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-neon-pink/20 to-transparent"></div>
              </div>

              {/* Location Text */}
              <div className="bg-dark-card border border-neon-pink/20 rounded-lg p-6">
                <h3 className="text-2xl font-['Cinzel'] text-neon-pink mb-4">
                  Місцезнаходження
                </h3>
                <p className="text-gray-300 mb-4 italic">
                  "Тільки обрані можуть знайти наш Шлях"
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Королівство Дзи'Маат знаходиться у глибинах підземного світу,
                  прихованого від очей звичайних людей магією та стародавніми
                  закляттями. Місцезнаходження розкривається лише тим, чия душа
                  готова прийняти темну мудрість.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="flex flex-col">
              <div className="bg-dark-card border border-neon-pink/20 rounded-lg p-8 flex-1">
                <h3 className="text-2xl font-['Cinzel'] text-neon-pink mb-6">
                  Зв'язатися з Духами
                </h3>

                {submitted ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="text-4xl mb-4">✦</div>
                      <p className="text-neon-pink font-['Cinzel'] text-lg mb-2">
                        Ваше послання передано
                      </p>
                      <p className="text-gray-400 text-sm">
                        Духи предків вже почули ваш голос
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-semibold text-neon-pink mb-2">
                        Ім'я
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-neon-pink/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-pink focus:shadow-lg focus:shadow-neon-pink/50 transition-all"
                        placeholder="Введіть ваше ім'я"
                      />
                    </div>

                    {/* Clan Field */}
                    <div>
                      <label className="block text-sm font-semibold text-neon-pink mb-2">
                        Клан
                      </label>
                      <select
                        name="clan"
                        value={formData.clan}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-neon-pink/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-pink focus:shadow-lg focus:shadow-neon-pink/50 transition-all"
                      >
                        <option value="">Оберіть клан</option>
                        <option value="nocish">Клан Нічних Сяйв</option>
                        <option value="kamin">Клан Камінних Шаманів</option>
                        <option value="pryzrach">Клан Примарних Ельфів</option>
                        <option value="zhiva">Клан Живої Крові</option>
                        <option value="gori">Клан Темних Гір</option>
                        <option value="other">Інші</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-sm font-semibold text-neon-pink mb-2">
                        Послання
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-[#0a0a0a] border border-neon-pink/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-neon-pink focus:shadow-lg focus:shadow-neon-pink/50 transition-all resize-none"
                        placeholder="Напишіть ваше послання до духів..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-neon w-full inline-flex items-center justify-center gap-2"
                    >
                      <span>Надіслати послання</span>
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-dark-card border border-neon-pink/20 rounded-lg p-8">
              <h2 className="text-3xl font-['Cinzel'] text-neon-pink mb-6">
                Святилище Дзи'Маат
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Святилище служить священним місцем для того, щоб всі, хто вірить
                у мудрість темних ельфів, могли встановити контакт з нашим
                королевством. Сюди приходять шукачі світла в темноті, люди зі
                своїми питаннями й потребою в духовному керівництві.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Коли ви відправляєте послання, воно не просто куди-небудь
                пропадає. Кожне слово, кожна думка передається духам предків,
                які слухають з глибин землі й можуть внести зміни в ваш духовний
                шлях. Будьте чесні й щирі у своєму зверненні.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
