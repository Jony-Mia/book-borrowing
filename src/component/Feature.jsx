
import { CircleDollar } from "@gravity-ui/icons";
import { Avatar, Button, Card, CloseButton, Link } from "@heroui/react";
import Image from "next/image";
import HeroImg from "../assets/hero-book.jpg"
import { nunito, poppins } from "@/app/layout";
import SideCard from "./SideCard";
import { features } from "../../API/features";

const Feature = () => {
    let featureList = features();
    console.log(featureList);
    
    return (
        <div className=" grid-cols-2 container m-auto w-full justify-center">

                <h1 className={`${nunito.className} mt-7 text-4xl font-bold text-center`}>Feature Books</h1> <br /> 
            <div className="gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container p-5">
                {
                    featureList.slice(0,4).map(data=>{
                            return(
                                <SideCard key={data.id} title={data.title} author={data.author} img= {data.image_url} category={data.category} ></SideCard>

                            )
                    })
                }
            </div>
        </div>
    );

};

export default Feature;