import Image from "next/image";
import HeroImg from "@/assets/hero-book.jpg"
import { nunito, poppins, robotoMono } from "@/app/layout";
import { Button } from "@heroui/react";
import { ArrowChevronRight } from "@gravity-ui/icons";
const Hero = () => {
    return (
        <div className="bg-gradient-to-br from-[#f3ecdf] via-[#faf7f2] to-[#f3ecdf] pt-10">
            <div className="lg:grid-cols-2 grid-cols-1 grid container mt-5 m-auto">
                <div className="flex flex-col justify-center p-4 md:p-8">
                    <h1 className={`${robotoMono.className} md:text-5xl sm:text-3xl text-4xl lg:text-7xl font-bold lg:leading-20`}>Find Your <br /> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#df8620] to-[#fe9a00]">Next Read</span> </h1>
                    <br />
                    <p className={`w-full lg:w-[70%] ${poppins.className} text-muted text-lg leading-7`}>Borrow from a curated collection of stories, science, and tech. Every great journey begins between two covers — yours starts here.</p>
                    <br />
                    <div className="flex gap-4 flex-wrap">
                        <Button className="bg-gradient-to-r from-[#df8620] to-[#fe9a00] rounded-lg py-3 px-8 text-white font-semibold h-auto hover:shadow-lg transition-all duration-300">Browse Now <ArrowChevronRight/> </Button>
                        <Button className="bg-white border-2 border-[#df8620] text-[#df8620] rounded-lg py-3 px-8 font-semibold h-auto hover:bg-[#f3ecdf] transition-all duration-300">Become A Member</Button>
                    </div>
                </div>
                <div className="flex justify-end p-5 items-center">
                    <Image width={700} height={700} alt="Book Image" src={HeroImg} className="rounded-3xl shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Hero;