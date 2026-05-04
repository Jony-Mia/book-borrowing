import Image from "next/image";
import { features } from "../../../../API/features";
import { nunito, poppins } from "@/app/layout";
import { Button } from "@heroui/react";
import { Books, Person } from "@gravity-ui/icons";
import BorrowBookButton from "@/component/BorrowBookButton";
const page = async ({ params }) => {
    let { id } = await params;
    let singleBookData = features()
    let ids = Number(id)
    let book = singleBookData.find(data => data.id === ids)

    if (!book) {
        return (
            <div className="container mx-auto pt-20 text-center">
                <p className="text-xl">Book not found.</p>
            </div>
        );
    }

    let {
        title,
        author,
        description,
        category,
        available_quantity,
        image_url } = book

    return (
        <div className=" container mx-auto pt-15 bg-[#faf7f2] rounded-2xl mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col p-10 rounded-2xl items-center">
                    <Image src={image_url} alt={title} width="320" height="360" className="rounded-2xl" />
                    <p className={`text-2xl font-bold mt-5 ${nunito.className} flex items-center gap-3`}> <Person/> Author: {author}</p>
                </div>
                <div>
                    <p className={`${poppins.className} text-[#fe9a00]`}>{category}</p> <br />
                   <h1 className={`${nunito.className} font-semibold text-3xl `}>{title}</h1>
                    <p className={`${poppins.className} flex items-center gap-2  `}> <Person/> <span className={` ${poppins.className} italic`}> {author}</span> </p> <br />
                    <p className={`${poppins.className}`}>{description}</p> <br />
                    <p className={`${poppins.className} bg-white p-4 rounded-2xl w-[90%] my-3 flex gap-2 items-center`}><Books className="text-[#fe9a00]" /> {available_quantity} Copies Left</p>

                    <BorrowBookButton book={book} />
                </div>
            </div>
        </div>
    );
};



export default page;