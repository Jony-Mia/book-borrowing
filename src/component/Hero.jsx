import Image from "next/image";
import HeroImg from "@/assets/hero-book.jpg"
import { nunito, poppins, robotoMono } from "@/app/layout";
import { Button } from "@heroui/react";
import { ArrowChevronRight } from "@gravity-ui/icons";
const Hero = () => {
    return (
        <div className="bg-[#f3ecdf] pt-10">
            <div className="lg:grid-cols-2 grid-cols-1 grid container mt-5 m-auto">
                <div className="flex flex-col justify-center p-4">
                    <h1 className={`${robotoMono.className} md:text-5xl sm:text-3xl text-4xl lg:text-7xl font-bold lg:leading-20 `} >Find Your <br /> <span className="italic text-[#df8620]">Next Read</span> </h1>
                    <br />
                    <p className={` w-full lg:w-[70%] ${poppins.className} text-muted text-lg`}>Borrow from a curated collection of stories, science, and tech. Every great journey begins between two covers — yours starts here.</p>
                    <br />
                    <div>
                        <Button className={"bg-amber-500 rounded-lg py-3 mx-3 px-6 text-md h-auto"}>Browse Now <ArrowChevronRight/> </Button>
                        <Button variant="outline" className={"bg-white rounded-lg py-3 mx-3 px-6 text-md h-auto"}>Become A Member</Button>
                    </div>
                </div>
                <div className="flex justify-end p-5">
                    <Image width={700} height={700} alt="Book Image" src={HeroImg} className="rounded-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Hero;