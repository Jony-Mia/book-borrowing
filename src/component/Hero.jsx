import Image from "next/image";
import HeroImg from "@/assets/hero-book.jpg"
import { nunito, poppins, robotoMono } from "@/app/layout";
import { Button } from "@heroui/react";
import { ArrowChevronRight } from "@gravity-ui/icons";
const Hero = () => {
    return (
        <div className="bg-[#f3ecdf]">
            <div className="grid-cols-2 grid container m-auto">
                <div className="flex flex-col justify-center">
                    <h1 className={`${robotoMono.className} text-7xl font-bold leading-20 `} >Find Your <br /> <span className="italic text-[#df8620]">Next Read</span> </h1>
                    <br />
                    <p className={`w-[70%] ${poppins.className} text-muted text-lg`}>Borrow from a curated collection of stories, science, and tech. Every great journey begins between two covers — yours starts here.</p>
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