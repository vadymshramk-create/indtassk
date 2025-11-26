import { Layout } from "@/components/Layout";

export default function Rituals() {
  const rituals = [
    {
      name: "Ритуал Місячної Пітьми",
      icon: "🌙",
      description:
        "Священний ритуал, що проводиться в новолуння, коли границі між світом живих та духів найтонші. Практикуючий входить в глибоку медитацію для зв'язку з астральним планом.",
      energy: "Інтуїція та вісновідання",
    },
    {
      name: "Тотемні Зв'язки",
      icon: "🦅",
      description:
        "Через танці і звуки намисто-барабана ельф створює енергетичний зв'язок з тотемною твариною, отримуючи її сили та мудрість на час ритуалу.",
      energy: "Сила та спритність",
    },
    {
      name: "Сни Астральних Змій",
      icon: "🐍",
      description:
        "Давній ритуал, який дарує трансформацію свідомості та здатність відвідувати астральні світи. Змія — ключовий тотем, що символізує оновлення духу та мудрість Землі.",
      energy: "Трансформація та регенерація",
    },
    {
      name: "Спів Предків",
      icon: "🎵",
      description:
        "Гармонічний спів, що пробуджує духи давніх ельфів та дозволяє їм передати свою мудрість. Звуки резонують з енергією землі й крові роду.",
      energy: "Спадщина та зв'язок",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-[#0a0a0a] border-b border-neon-pink/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-['Cinzel'] text-white mb-4">
            Духовні Шляхи
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ритуали та практики, що з'єднують нас з духовним світом
          </p>
        </div>
      </section>

      {/* Rituals Grid */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {rituals.map((ritual, index) => (
              <div
                key={index}
                className="card-mystical border-neon-pink/40 hover:border-neon-pink group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0 group-hover:animate-float">
                    {ritual.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-['Cinzel'] text-neon-pink mb-3">
                      {ritual.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {ritual.description}
                    </p>
                    <div className="pt-4 border-t border-neon-pink/20">
                      <p className="text-xs text-neon-pink font-semibold">
                        ✦ {ritual.energy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional content section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-dark-card border border-neon-pink/20 rounded-lg p-8">
              <h2 className="text-3xl font-['Cinzel'] text-neon-pink mb-6">
                Філософія Темних Ельфів
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Наші ритуали не є церемоніями святкування, а скоріше глибокими
                практиками гармонізації з космічними силами. Кожна практика
                вирішена спеціально для трансформації душі й зміцнення зв'язку
                зі світом духів.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ми віримо, що через ритуали ми не втікаємо від світу, а глибше
                розуміємо його справжню природу. Це шлях внутрішньої
                просвітленості й гармонії з усім живим.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
