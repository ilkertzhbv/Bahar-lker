export const sceneNavigation = [
  { id: "hero", label: "Açılış" },
  { id: "message", label: "Mesaj" },
  { id: "book", label: "Tanışma" },
  { id: "memories", label: "Anılar" },
  { id: "videos", label: "Video" },
  { id: "music", label: "Şarkılar" },
  { id: "timeline", label: "Zaman" },
  { id: "letter", label: "Mektup" },
  { id: "final", label: "Final" }
];

export const storyLines = [
  "Her şey sıradan bir gün gibi görünüyordu.",
  "Sonra bir mesaj geldi.",
  "Kimse bunun hayatımızı değiştireceğini bilmiyordu.",
  "Ve o küçük bildirim, büyük bir hikayenin ilk sahnesi oldu."
];

export const openingCredits = [
  { label: "Başroller", value: "Bahar & İlker" },
  { label: "Tür", value: "Romantik dijital hatıra" },
  { label: "Atmosfer", value: "Sinematik, zarif, unutulmaz" }
];

export const chapterPages = [
  {
    title: "İlk Satır",
    subtitle: "Bir cümleyle açılan kapı",
    text: "Bahar ve İlker'in hikayesi, kalabalığın içinde sessizce parlayan bir cümleyle başladı. O an küçük görünüyordu, ama zaman onu en kıymetli başlangıca çevirdi.",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Tanışma",
    subtitle: "Saatlerin yetmediği günler",
    text: "Her konuşma biraz daha derinleşti. Gülüşler, beklenen mesajlar, gecenin uzayan sessizliği ve iki kalbin birbirini tanıma telaşı aynı sayfaya yazıldı.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Biz",
    subtitle: "İki ayrı yolun aynı ritmi",
    text: "Sonra 'sen' ve 'ben' usulca 'biz' oldu. Her anı daha sıcak, her yol daha anlamlı, her yarın daha güzel görünmeye başladı.",
    image:
      "https://images.unsplash.com/photo-1501901609772-df0848060b33?auto=format&fit=crop&w=1400&q=85"
  }
];

const memoryImages = [
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1513279922550-250c2129b13a?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1460364157752-926555421a7e?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=85"
];

export const memories = Array.from({ length: 10 }, (_, index) => ({
  title: `Anı ${index + 1}`,
  moment: ["İlk gülüş", "Uzun yol", "Sessiz akşam", "Küçük kutlama", "Bizim günümüz"][
    index % 5
  ],
  caption:
    index % 2 === 0
      ? "Gülüşümüzün zamanı durdurduğu o küçük ama unutulmaz an."
      : "Bize ait bir gün, bize ait bir ışık, bize ait bir hatıra.",
  image: memoryImages[index]
}));

const videoPosters = [
  "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85"
];

export const videos = Array.from({ length: 10 }, (_, index) => ({
  title: `Video ${index + 1}`,
  tag: ["Gülüş", "Yol", "Gece", "Sürpriz", "Hatıra"][index % 5],
  duration: ["00:38", "01:12", "02:05", "00:51", "01:44"][index % 5],
  poster: videoPosters[index]
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
    date: "İlk Hatıra",
    title: "Kaydedilen An",
    text: "Bir fotoğraf, sadece görüntü değil; o günün kokusu, sesi ve kalp ritmi oldu."
  },
  {
    date: "Bugün",
    title: "Hikaye Devam Ediyor",
    text: "Her yeni gün, bu dijital günlüğe eklenmeyi bekleyen yeni bir sahne."
  }
];

export const promises = [
  "Güzel günlerde daha çok gülmek.",
  "Zor günlerde birbirinin yanında kalmak.",
  "Küçük anları büyük hatıralara dönüştürmek.",
  "Bu hikayeyi her gün yeniden sevmek."
];

export const stats = [
  { label: "Birlikte Geçen Gün", value: 365 },
  { label: "Fotoğraf Alanı", value: 10 },
  { label: "Video Alanı", value: 10 },
  { label: "Hatıra", value: 128 }
];
