var swiper = new Swiper(".Swiper-container", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




var swiper = new Swiper(".swiper-testimonials", {
  effect: "coverflow", // تأثير السلايدر يكون ثلاثي الأبعاد  
  grabCursor: true, // يخلي شكل الماوس كأنه بيمسك العنصر  
  centeredSlides: true, // يخلي الشرائح تبقى في النص  
  slidesPerView: 3, // عدد الشرائح اللي بتظهر في نفس الوقت  
  loop: true, // يخلي السلايدر يلف بدون توقف  
  coverflowEffect: {
      rotate: 50, // درجة ميل الشرائح الجانبية  
      stretch: 0, // المسافة بين الشرائح  
      depth: 100, // العمق بتاع التأثير  
      modifier: 1, // تأثير الكوفر فلو بيتغير حسب القيمة دي  
      slideShadows: false, // يلغي الظلال عشان الشكل يكون أوضح  
  },
  pagination: {
      el: ".swiper-pagination", // عنصر الترقيم (النقط اللي تحت السلايدر)  
  },
  breakpoints: {  // هنا بنظبط شكل السلايدر حسب حجم الشاشة  
      320: { slidesPerView: 1 },  // لو الشاشة صغيرة جدًا (موبايل صغير) → يعرض شريحة واحدة  
      640: { slidesPerView: 1 },  // موبايل متوسط → شريحة واحدة برضه  
      768: { slidesPerView: 2 },  // لو تابلت → يعرض شريحتين  
      1024: { slidesPerView: 3 }, // لو شاشة كبيرة → يعرض 3 شرائح  
  }
});
