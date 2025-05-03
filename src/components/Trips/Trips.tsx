import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import { cardData } from "../../data/cardData";
import SliderCard from "../Slider/SliderCard";

export default function Trips() {
  const { t } = useTranslation();
  return (
    <section>
        <div className="md:my-[120px] my-[70px] px-[20px] lg:px-[60px]">
            <SectionTitle title={t("trips.title")} text={t("trips.text")}/>
        </div>
        <div className="slider  grid md:h-auto h-[370px] overflow-hidden w-100% pr-[20px] lg:pr-[60px] relative">
            <div className="flex animate-slide  md:w-[calc(380px*8)] w-[calc(235px*8)]  md:gap-6 gap-5 slide-track">
                {[ ...cardData, ...cardData ].map((e,i) => (
                    <SliderCard
                     key={i}
                     img={e.img}
                     city={e.city}
                     days={e.days}
                     cost={e.cost}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}
