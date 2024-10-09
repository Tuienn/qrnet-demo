// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img14 from "./assets/images/img-11.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function Test() {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <img src={img14} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img14} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img14} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
