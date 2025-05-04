import img from "../../assets/hero/Rectangle 4.png";
import img2 from "../../assets/hero/arrow.svg";
import img3 from "../../assets/hero/Mouse.svg";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="font-lama flex h-screen items-center justify-center overflow-hidden bg-[url(/hero.jpg)] bg-cover bg-center p-5 text-center text-white">
      <div className="mt-30 flex w-max flex-col items-center justify-center sm:mt-32">
        <h1 className="text-shadow mb-4.5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
          {t("hero.mainTitle")}
        </h1>
        <p className="font-lama w-11/12 text-lg sm:w-2/3 md:text-xl lg:text-2xl">
          {t("hero.subtitle")}
        </p>
        <div className="animate-shadowPulse relative mt-9 mb-10 flex w-[300px] items-center justify-center gap-3 rounded-2xl bg-[#FEC430] p-3.5 sm:w-[222px]">
          <button className="text-lg font-medium text-black lg:text-xl">
            {t("plansSection.businessPlan.button")}
          </button>
          <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
            <img
              src={img}
              alt="arrow"
              className="ltr:rotate-180"
              loading="lazy"
            />
          </div>
          <img
            src={img2}
            className="absolute top-24 -left-5 sm:top-12 sm:-left-24"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="mt-10 flex flex-col">
          <p className="text-lg lg:text-xl">{t("hero.Scroll")}</p>
          <img
            src={img3}
            alt="mouse"
            className="w-20 sm:w-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
