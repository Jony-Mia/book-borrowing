
import { CircleDollar } from "@gravity-ui/icons";
import { Avatar, Button, Card, CloseButton, Link } from "@heroui/react";
import Image from "next/image";
import HeroImg from "../assets/hero-book.jpg"
import { nunito, poppins } from "@/app/layout";

const Feature = () => {
    return (
        <div className="grid grid-cols-2 container m-auto w-full justify-center">
            <div className="w-full grid relative justify-center items-center mt-30">
                <Image src={"https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_695370deb4324747c4b3cf1a_695370de45eb796c907235c1/scale_1200"} alt="feature image" width={"900"} height={"720"} className="absolute -z-10 rounded-2xl" />
                <div className="flex justify-center flex-col items-center mt-10 w-150 m-auto p-4 rounded-2xl bg-[#00338562] h-fit">
                    <h1 className={` ${nunito.className} capitalize my-5  ms-10 text-4xl bg-white px-6 py-3 rounded-2xl font-bold`}>Grab the deal of book</h1>
                    <p className={`w-[90%] text-center  text-[#ffffff] text-xl ${poppins.className} `}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam autem distinctio a impedit vero nihil magni neque quia quisquam tenetur, quos ipsum dolorum minus facere consequatur non eveniet dicta dolor.</p>
                    <br />
                    <Button className={"bg-amber-300 px-5 py-3 text-black rounded-2xl h-auto"}>View Details</Button>
                </div>
            </div>
            <div className="mt-12 p-3">
                <h1 className={`${nunito.className} text-4xl font-bold text-center`}>Feature Books</h1>
            </div>
        </div>
    );

};

export default Feature;