import Img1 from "./../assets/services-image-1.png";
import Img2 from "./../assets/services-image-2.png";
import Img3 from "./../assets/services-image-3.png";
import Arrow from "./../assets/arrow.svg";

export const servicesData = [
  {
    image: Img1,
    title: "دليل سياحي",
    text: "نقدم لك خدمات الإرشاد السياحي لبناء خطط سفر مميزة.",
    arrow: <img src={Arrow} alt="arrow" className="lg:hidden absolute -top-[100px] -left-0" />,
  },
  {
    image: Img2,
    title: "حجوزات فندقية",
    text: "لا تقلق حول مكان إقامتك فنحن نهتم بكامل الحجوزات الخاصة بك.",
    arrow: <img src={Arrow} alt="arrow" className="hidden lg:block absolute -top-[100px] -left-0" />,
  },
  {
    image: Img3,
    title: "رحلات ميدانية",
    text: "لن تكون إجازتك مملة معنا فهنا الكثير من الخطط والرحلات المختلفة.",
  },
];
