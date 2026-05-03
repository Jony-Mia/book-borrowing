import Image from "next/image";
import { features } from "../../../../API/features";
import { nunito, poppins } from "@/app/layout";
import { Button } from "@heroui/react";
const page = async ({ params }) => {
    let { id } = await params;
    let singleBookData = features()
    let ids = Number(id)
    let {
        title,
        author,
        description,
        category,
        available_quantity,
        image_url } = singleBookData.find(data => data.id === ids)

    return (
        <div className=" container mx-auto pt-15">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col bg-red-50 p-10 rounded-2xl items-center">
                    <Image src={image_url} alt={title} width="320" height="360" className="rounded-2xl" />
                    <p className={`text-2xl font-bold mt-5 ${nunito.className}`}>Author: {author}</p>
                </div>
                <div>
                   <h1 className={`${nunito.className} font-semibold text-3xl `}>{title}</h1>
                    <p className={`${poppins.className}`}>{author}</p> 
                    <p className={`${poppins.className}`}> Available: {available_quantity}</p>
                    <p className={`${poppins.className}`}>{category}</p> <br />
                    <p className={`${poppins.className}`}>{description}</p> <br />

                    <Button className="bg-[#fe9a00]">Borrow Book</Button>
                </div>
            </div>
        </div>
    );
};



export default page;