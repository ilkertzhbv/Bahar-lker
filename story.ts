export const storyLines = [
  "Her şey sıradan bir gün gibi görünüyordu.",
  "Sonra bir mesaj geldi.",
  "Kimse bunun hayatımızı değiştireceğini bilmiyordu.",
  "Ve hikaye başladı."
];

export const chapterPages = [
  {
    title: "İlk Satır",
    text: "Bahar ve İlker'in hikayesi, kalabalığın içinde sessizce parlayan bir cümleyle başladı. O an küçük görünüyordu, ama zaman onu en kıymetli başlangıca çevirdi.",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Tanışma",
    text: "Her konuşma biraz daha derinleşti. Gülüşler, beklenen mesajlar, gecenin uzayan sessizliği ve iki kalbin birbirini tanıma telaşı aynı sayfaya yazıldı.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Biz",
    text: "Sonra 'sen' ve 'ben' usulca 'biz' oldu. Her anı daha sıcak, her yol daha anlamlı, her yarın daha güzel görünmeye başladı.",
    image:
      "https://images.unsplash.com/photo-1501901609772-df0848060b33?auto=format&fit=crop&w=1400&q=85"
  }
];

export const memories = Array.from({ length: 10 }, (_, index) => ({
  title: `Anı ${index + 1}`,
  caption:
    index % 2 === 0
      ? "Gülüşümüzün zamanı durdurduğu o küçük ama unutulmaz an."
      : "Bize ait bir gün, bize ait bir ışık, bize ait bir hatıra.",
  image: [
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
  ][index % 5]
}));

export const videos = Array.from({ length: 10 }, (_, index) => ({
  title: `Video ${index + 1}`,
  duration: ["00:38", "01:12", "02:05", "00:51", "01:44"][index % 5],
  poster: [
    "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85"
  ][index % 5]
}));

export const songs = [
  {
    name: "Kalbimin Baharı",
    artist: "Bizim Hikayemiz",
    memory: "İlk uzun konuşmanın arka planı gibi.",
    date: "14 Şubat"
  },
  {
    name: "Geceye Yazılan",
    artist: "Bahar & İlker",
    memory: "Geç saatte gelen o iyi geceler mesajı.",
    date: "03 Nisan"
  },
  {
    name: "Aynı Yol",
    artist: "Hatıra Defteri",
    memory: "Beraber yürürken her şeyin hafiflediği gün.",
    date: "22 Mayıs"
  },
  {
    name: "İyi Ki",
    artist: "Final Sahnesi",
    memory: "Birbirimize her baktığımızda yeniden başlayan şarkı.",
    date: "Bugün"
  }
];

export const timeline = [
  {
    date: "İlk Mesaj",
    title: "Başlangıç",
    text: "Bahar ve İlker'in hikayesi bir bildirim sesiyle kapısını araladı."
  },
  {
    date: "İlk Sohbet",
    title: "Saatler Yetmedi",
    text: "Kısa cevaplar yerini uzun cümlelere, uzun cümleler sıcak bir alışkanlığa bıraktı."
  },
  {
    date: "İlk Buluşma",
    title: "Gerçek Sahne",
    text: "Ekrandaki kelimeler, yan yana atılan gerçek adımlara dönüştü."
  },
  {
    date: "Bugün",
    title: "Hikaye Devam Ediyor",
    text: "Her yeni gün, bu dijital günlüğe eklenmeyi bekleyen yeni bir sahne."
  }
];

export const stats = [
  { label: "Birlikte Geçen Gün", value: 365 },
  { label: "Fotoğraf Alanı", value: 10 },
  { label: "Video Alanı", value: 10 },
  { label: "Hatıra", value: 128 }
];
