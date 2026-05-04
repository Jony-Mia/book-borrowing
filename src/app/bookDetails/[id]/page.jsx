'use client';

import Image from "next/image";
import { features } from "../../../../API/features";
import { nunito, poppins } from "@/app/layout";
import { Button, ToastDescription } from "@heroui/react";
import { Books, Person } from "@gravity-ui/icons";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { BookContext } from "@/context/BookProvider";
const Page = async ({ params }) => {
    let { id } = await params;
    let [bookList, setBookList] = useContext(BookContext)
    let singleBookData = features()
    let ids = Number(id)
    let {
        title,
        author,
        description,
        category,
        available_quantity,
        image_url
       } = singleBookData.find(data => data.id === ids)

    let borrowBook = () => {
        ToastDescription("Book Borrowed")
        setBookList([...bookList, data])
    }

    return (
        <div className=" container mx-auto pt-15 bg-[#faf7f2] rounded-2xl mt-32">
            <ToastContainer />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col p-10 rounded-2xl items-center">
                    <Image src={image_url} alt={title} width="320" height="360" className="rounded-2xl" />
                    <p className={`text-2xl font-bold mt-5 ${nunito.className} flex items-center gap-3`}> <Person /> Author: {author}</p>
                </div>
                <div>
                    <p className={`${poppins.className} text-[#fe9a00]`}>{category}</p> <br />
                    <h1 className={`${nunito.className} font-semibold text-3xl `}>{title}</h1>
                    <p className={`${poppins.className} flex items-center gap-2  `}> <Person /> <span className={` ${poppins.className} italic`}> {author}</span> </p> <br />
                    <p className={`${poppins.className}`}>{description}</p> <br />
                    <p className={`${poppins.className} bg-white p-4 rounded-2xl w-[90%] my-3 flex gap-2 items-center`}><Books className="text-[#fe9a00]" /> {available_quantity} Copies Left</p>

                    <Button size="lg" className="bg-[#fe9a00] px-8 py-6 font-bold rounded-md" onClick={()=>borrowBook()}>Borrow Book</Button>
                </div>
            </div>
        </div>
    );
};



export default Page;