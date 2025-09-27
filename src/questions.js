import cinSeddi from "./assets/pictures/cin-seddi.jpg";
import pamuk from "./assets/pictures/pamuk.jpg";
import tarkan from "./assets/pictures/tarkan.jpg";
import fobi from "./assets/pictures/fobi.jpg";
import balik from "./assets/pictures/balik.jpg";
import bandira from "./assets/pictures/bandira.jpg";
import billboard from "./assets/pictures/billboard.jpg";
import parfum from "./assets/pictures/parfum.jpg";
import trex from "./assets/pictures/trex.jpg";
import mutluluk from "./assets/pictures/mutluluk.jpg";


export const QUESTIONS = [
  {
    id:1,
    text: "Çin Seddini oluşturan taşlar birbirine ne ile tutturulmuştur?",
    image: cinSeddi,
    options: [
      { id:"a" , text:"Bambu Harcı"},
      { id:"b" , text:"Anne Duası"},
      { id:"c" , text:"Pirinç Unu"},
      { id:"d" , text:"Noodle"},
    ],
    correctOptionId: "c",
  },
  {
    id:2,
    text: "İlk Pamuk şekeri bulan kişinin mesleği nedir?",
    image: pamuk,
    options: [
      { id:"a" , text:"Gıda Mühendisi"},
      { id:"b" , text:"Diş Doktoru"},
      { id:"c" , text:"Ev Hanımı"},
      { id:"d" , text:"Güzellik Uzmanı"},
    ],
    correctOptionId: "b",
  },
  {
    id:3,
    text:
      "Tarkan'ın 'Hüp' klibini izledikten sonra gaza gelip 'Tarkan keşke beni hüpletseydi' diye açıklamda bulunan kişi kimdir?",
      image: tarkan,
      options: [
      { id:"a" , text:"Gülben Ergen"},
      { id:"b" , text:"Hülya Avşar"},
      { id:"c" , text:"Harika Avcı"},
      { id:"d" , text:"Sevtap Parman"},
    ],
    correctOptionId: "a",
  },
  {
    id:4,
    text: "Pteronofobi nedir?",
    image: fobi,
    options: [
      { id:"a" , text:"Yeşil ışık yanar yanmaz korna çalacak korkusu"},
      { id:"b" , text:"Fakir kalma korkusu"},
      { id:"c" , text:"Taksi bulamama korkusu"},
      { id:"d" , text:"Kuş tüyüyle gıdıklanma korkusu"},
    ],
    correctOptionId: "d",
  },
  {
    id:5,
    text:
    "Ortalama ömürleri 5 yıl olan Japon balıklarının en uzun yaşayanı Tish, bütün istatistikleri alt üst ederek kaç yıl boyunca hayata tutunmayı başarmıştır?",
    image: balik,
    options: [
      { id:"a" , text:"43"},
      { id:"b" , text:"78"},
      { id:"c" , text:"23"},
      { id:"d" , text:"99"},
    ],
    correctOptionId: "a",
  },
  {
    id:6,
    text:
      "90'lara damgasını vuran 'Bandıra Bandıra' şarkısının söz yazarı kimdir?",
    image: bandira,
    options: [
      { id:"a" , text:"Sezen Aksu"},
      { id:"b" , text:"Sibel Can"},
      { id:"c" , text:"Mustafa Sandal"},
      { id:"d" , text:"Bülent Ersoy"},
    ],
    correctOptionId: "c",
  },
  {
    id:7,
    text:
      "Hangi şarkıcımız yine kendisi gibi şarkıcı olan sevgilisinden ayrıldıktan sonra tam evinin karşısındaki apartmanın tamamını kendi posteriyle kaplatmıştır?",
    image: billboard,
    options: [
      { id:"a" , text:"Hande Yener"},
      { id:"b" , text:"Hadise"},
      { id:"c" , text:"Gülşen"},
      { id:"d" , text:"Simge"},
    ],
    correctOptionId: "b",
  },
  {
    id:8,
    text: "Antik Roma'da kadınlar parfüm olarak ne kullanıyordu?",
    image: parfum,
    options: [
      { id:"a" , text:"Gül Suyu"},
      { id:"b" , text:"Bal"},
      { id:"c" , text:"Gladyatör Teri"},
      { id:"d" , text:"Kan"},
    ],
    correctOptionId: "c",
  },
  {
    id:9,
    text: "T-Rex'in yaşayan en yakın akrabası aşağıdakilerden hangisidir?",
    image: trex,
    options: [
      { id:"a" , text:"İnekler"},
      { id:"b" , text:"Tavuklar"},
      { id:"c" , text:"Timsahlar"},
      { id:"d" , text:"Köpekler"},
    ],
    correctOptionId: "b",
  },
  {
    id:10,
    text:
      "Her şeyin olduğu gibi mutluluğun da fobisi varmış. Bu fobiye ne ad verilir?",
    image: mutluluk,
    options: [
      { id:"a" , text:"Çerofobi"},
      { id:"b" , text:"Euphobia"},
      { id:"c" , text:"Felicifobia"},
      { id:"d" , text:"Mutluluk Korkusu"},
    ],
    correctOptionId: "a",
  },
];

