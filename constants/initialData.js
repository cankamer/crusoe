// Gün isimlerini içeren liste
const boxTitles = [
  "Pazartesi", 
  "Salı", 
  "Çarşamba", 
  "Perşembe", 
  "Cuma", 
  "Cumartesi", 
  "Pazar", 
  "Notlar"
];

// Bu listeyi kullanarak kutuları oluşturuyoruz
export const initialBoxesData = boxTitles.map((dayName, index) => ({
  id: index.toString(),
  title: dayName, // <-- BURASI ÖNEMLİ: title artık boş değil, gün ismi
  tasks: [
    { id: 't1', text: '' },
    { id: 't2', text: '' },
    { id: 't3', text: '' },
  ]
}));