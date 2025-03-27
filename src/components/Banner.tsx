"use client";
import Slider from "react-slick";
import Image from "next/image";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import bannerone from "@/img/banner-1.webp";
import bannertwo from "@/img/banner-2.webp";
import bannerthree from "@/img/banner-3.webp";

const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="py-5 px-1 bg-slate-50 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-sm text-4xl flex items-center justify-center z-20 absolute right-[-0.1rem] top-1/2 transform -translate-y-1/2"
            onClick={onClick}
        >
            <IoIosArrowForward />
        </div>
    );
};

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div
            className="py-5 px-1 bg-slate-50 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-sm text-4xl flex items-center justify-center z-20 absolute left-0.1 top-1/2 transform -translate-y-1/2"
            onClick={onClick}
        >
            <IoIosArrowBack />
        </div>
    );
};

const Banner = () => {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <main>
            <div className="relative">
                <Slider {...settings}>
                    <div>
                        <Image src={bannerone} alt="Banner 1" className="w-full h-full relative" />
                    </div>
                    <div>
                        <Image src={bannertwo} alt="Banner 2" className="w-full h-full relative" />
                    </div>
                    <div>
                        <Image src={bannerthree} alt="Banner 3" className="w-full h-full relative" />
                    </div>
                </Slider>
            </div>
        </main>
    );
};

export default Banner;
