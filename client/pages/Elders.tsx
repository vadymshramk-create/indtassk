import { Layout } from "@/components/Layout";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sparkles } from "lucide-react";

export default function Elders() {
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({ name: "", birthDate: "" });
  const [selectedClan, setSelectedClan] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const clans = [
    {
      name: "Клан Нічних Сяйв",
      icon: "🐺",
      leader: "Верховний Шаман Суріан",
      description:
        "Клан ночі та вовків. Хранителі давніх магій темноти й ночі. Стежини Суріана визнаються наймудрішими серед усіх темних ельфів.",
      traits: ["Магія", "Мудрість", "Духовність"],
    },
    {
      name: "Клан Камінних Шаманів",
      icon: "⚔️",
      leader: "Вождь Ізидир",
      description:
        "Клан Воїнів Тіні, охоронці меж. Їхня сила — у поєднанні бойової майстерності та первісної магії Землі. Вождь Ізидир — непереможний, його міць перевершує міць будь-якого ворога.",
      traits: ["Сила", "Честь", "Захист"],
    },
    {
      name: "Клан Примарних Ельфів",
      icon: "👻",
      leader: "Ясновидиця Мерідаелія",
      description:
        "Клан Сновидців Сутінків. Вони є медіумами, які можуть перетинати завісу світів, спілкуючись із Духами Предків. Верховна Шаманка Мерідаелія бачить мереживо майбутнього, направляючи Королівство за покликом Долі.",
      traits: ["Дар духів", "Передбачення", "Трансцендентність"],
    },
    {
      name: "Клан Живої Крові",
      icon: "🌿",
      leader: "Целителька Мелюен",
      description:
        "Клан цілителів та тих, хто опікується природою. Вони використовують магію природи й рослин для лікування й відновлення. Мелюен дає нове життя всьому, що було втрачено.",
      traits: ["Лікування", "Природа", "Обновлення"],
    },
    {
      name: "Клан Тоніх Гір",
      icon: "🏔️",
      leader: "Древній Гарлуман",
      description:
        "Клан гірського краю, хранителі земних мудростей. Їх легенди йдуть глибше у час від початку світу. Гарлуман старіший за саму гору Дзи'Маат.",
      traits: ["Досвід", "Стійкість", "Земля"],
    },
  ];

  const getAssignedClan = (birthDate: string) => {
    const date = new Date(birthDate);
    const month = date.getMonth() + 1;

    if (month <= 2) return clans[0]; // Клан Ночіші (Jan-Feb)
    if (month <= 4) return clans[1]; // Клан Камін (Mar-Apr)
    if (month <= 6) return clans[2]; // Клан Призрачних Ельфів (May-Jun)
    if (month <= 8) return clans[3]; // Клан Живої Крові (Jul-Aug)
    return clans[4]; // Клан Тоніх Гір (Sep-Dec)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.birthDate) return;

    setIsAnimating(true);

    setTimeout(() => {
      const assigned = getAssignedClan(formData.birthDate);
      setSelectedClan(assigned.name);
      setIsAnimating(false);
    }, 2000);
  };

  const handleReset = () => {
    setFormData({ name: "", birthDate: "" });
    setSelectedClan(null);
    setOpenDialog(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-[#0a0a0a] border-b border-neon-pink/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold font-['Cinzel'] text-white mb-4">
              Клани та Старійшини
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Ієрархія й структура Королевства Дзи'Маат
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                setOpenDialog(true);
                setSelectedClan(null);
                setFormData({ name: "", birthDate: "" });
              }}
              className="btn-neon inline-flex items-center justify-center gap-2"
            >
              <Sparkles size={20} />
              <span>Вступити клан</span>
            </button>
          </div>
        </div>
      </section>

      {/* Clans Grid */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {clans.map((clan, index) => (
              <div
                key={index}
                className="card-mystical border-neon-pink/40 hover:border-neon-pink group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl flex-shrink-0 group-hover:animate-float">
                    {clan.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-['Cinzel'] text-neon-pink mb-2">
                      {clan.name}
                    </h3>
                    <p className="text-sm font-semibold text-gray-400 mb-3">
                      {clan.leader}
                    </p>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {clan.description}
                    </p>
                    <div className="pt-4 border-t border-neon-pink/20">
                      <div className="flex gap-2 flex-wrap">
                        {clan.traits.map((trait, i) => (
                          <span
                            key={i}
                            className="text-xs bg-neon-pink/10 border border-neon-pink/30 text-neon-pink px-2 py-1 rounded"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hierarchy Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-dark-card border border-neon-pink/20 rounded-lg p-8">
              <h2 className="text-3xl font-['Cinzel'] text-neon-pink mb-6">
                Ієрархія Королівства
              </h2>

              <div className="space-y-6">
                <div className="border-l-2 border-neon-pink pl-4">
                  <h3 className="text-neon-pink font-semibold mb-2">
                    1. Верховний Король/Королева
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Найдавніший та найпотужніший серед темних ельфів, якому
                    доручена охорона магічного балансу.
                  </p>
                </div>

                <div className="border-l-2 border-neon-pink/60 pl-4">
                  <h3 className="text-neon-pink font-semibold mb-2">
                    2. Верховний Шаман та Вождь Клану
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Лідери кожного з п'яти великих кланів, що керують духовними
                    й світськими справами своїх родин.
                  </p>
                </div>

                <div className="border-l-2 border-neon-pink/40 pl-4">
                  <h3 className="text-neon-pink font-semibold mb-2">
                    3. Старійшини та Вчені
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Досвідчені члени клану, які оберігають знання й передають їх
                    молодому поколінню.
                  </p>
                </div>

                <div className="border-l-2 border-neon-pink/20 pl-4">
                  <h3 className="text-neon-pink font-semibold mb-2">
                    4. Воїни та Практикуючі
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Активні члени клану, які виконують обов'язки й розвивають
                    свої магічні здібності.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sorting Hat Modal */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="border-neon-pink/40 bg-dark-card max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-['Cinzel'] text-neon-pink text-center">
              Магічний Капелюх Королівства
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {!selectedClan ? (
              <>
                {/* Sorting Hat Visualization */}
                <div className="flex justify-center">
                  <div
                    className={`text-7xl transition-all duration-1000 ${
                      isAnimating ? "animate-bounce scale-125" : "scale-100"
                    }`}
                    style={{
                      textShadow: isAnimating
                        ? "0 0 30px #FC0FC0, 0 0 50px #FC0FC0"
                        : "0 0 10px #FC0FC0",
                    }}
                  >
                    🧙‍♂️
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-neon-pink mb-2">
                      Ваше Ім'я
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Напишіть своє ім'я"
                      className="w-full bg-[#0a0a0a] border border-neon-pink/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-neon-pink focus:shadow-lg focus:shadow-neon-pink/50 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neon-pink mb-2">
                      Дата Народження
                    </label>
                    <input
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) =>
                        setFormData({ ...formData, birthDate: e.target.value })
                      }
                      className="w-full bg-[#0a0a0a] border border-neon-pink/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-neon-pink focus:shadow-lg focus:shadow-neon-pink/50 transition-all"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isAnimating}
                    className="btn-neon w-full disabled:opacity-50"
                  >
                    {isAnimating ? "Шляпа мислить..." : "Дізнатись мій клан"}
                  </button>
                </form>

                <p className="text-xs text-gray-400 text-center italic">
                  Духи вкажуть шлях до клану, що відповідає вашій сутності
                </p>
              </>
            ) : (
              <>
                {/* Result */}
                <div className="text-center space-y-4">
                  <div className="text-6xl animate-bounce">✨</div>

                  <div>
                    <p className="text-gray-300 mb-3">Капелюх обрав для вас:</p>
                    <p className="text-3xl font-['Cinzel'] text-neon-pink mb-4">
                      {selectedClan}
                    </p>
                  </div>

                  <div className="bg-[#0a0a0a] border border-neon-pink/20 rounded-lg p-4">
                    <p className="text-white font-semibold mb-2">
                      {formData.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      Ви офіційно прийняті до королівства!
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="btn-outline-neon w-full"
                  >
                    Закрити
                  </button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
