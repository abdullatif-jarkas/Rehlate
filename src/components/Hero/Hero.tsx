import  img from '../../assets/hero/Rectangle 4.png'
import  img2 from '../../assets/hero/arrow.svg'
import  img3 from '../../assets/hero/Mouse.svg'

export default function Hero() {
  return (
    <div className="bg-[url(/hero.jpg)] text-white text-center bg-cover bg-center font-lama flex justify-center items-center h-screen">
        <div className="mt-24 flex flex-col justify-center items-center w-max">
        <h1 className="  text-shadow text-7xl font-bold mb-7">سافر معنا إلى العالم</h1>
        <p className=" w-2/3 font-lama text-2xl">نوفر لك أفضل الرحلات التي تحتاجها لجميع البلدان وبخدمات مخصصة لك ولعائلتك</p>
        <div className="flex relative mt-9 rounded-2xl w-[222px] bg-[#FEC430] p-3.5  gap-3 justify-center">
        <button className=" text-black text-2xl " >احجز الآن</button>
        <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-white">
            <img src={img} alt="arrow" />
        </div>
        <img src={img2} className=' -left-24 top-12 absolute' alt="" />

        </div>
        <div className=' flex flex-col mt-20'>
            <p>تابع للاسفل </p>
            <img src={img3} alt="" className='arrow' />
        </div>
        </div>
    </div>
  )
}
