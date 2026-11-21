// ===== আপনার সব তথ্য এই ফাইলে =====

// ব্রাউজার ট্যাবের নাম (ফাঁকা রাখলে ডিফল্ট থাকবে)
const SITE_TITLE = "";

// আপনার নিজের কার্ড
const ME = {
  photo: "images/me.jpg",   // ছবির ফাইল, না থাকলে ""
  name: "Ornob",
  age: "21",
  about: "Content Creator",
  email: "",                // যেমন "you@gmail.com" (ফাঁকা হলে দেখাবে না)
  whatsapp: ""              // যেমন "8801XXXXXXXXX" (দেশের কোড সহ, + ছাড়া)। ফাঁকা হলে Chat-এ "not available" বার্তা আসবে
};

// বন্ধুদের কার্ড (নতুন বন্ধু যোগ করতে একটা { ... }, block কপি করুন)
const MEMBERS = [
  { photo: "", name: "", age: "", about: "", email: "", whatsapp: "" },
  { photo: "", name: "", age: "", about: "", email: "", whatsapp: "" },
  { photo: "", name: "", age: "", about: "", email: "", whatsapp: "" }
];

// ===== বিজ্ঞাপন (Adsterra / Monetag) =====
// নেটওয়ার্ক থেকে পাওয়া কোড এখানে পেস্ট করুন। ফাঁকা থাকলে ওই জায়গা দেখাবে না।
const ADS = {
  top: "",          // পেজের একদম উপরে
  inline: "",       // কার্ডের মাঝে
  inlineEvery: 10,  // কত কার্ড পরপর মাঝের বিজ্ঞাপন আসবে
  bottom: ""        // পেজের একদম নিচে
};
