"use client";
import { BookContext } from "@/context/BookProvider";
import { BookOpen } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";

const AllBookBorrow = ({data}) => {
    let borrowedBook = () => {
        setBookList(bookList)
        toast("Book borrowed")
    }
    return (
        <div>
            <div>
                <ToastContainer />
                <Button onClick={() => borrowedBook()} className="bg-[#fe9a00]  rounded-md" > <BookOpen /> Borrow </Button>
            </div>
        </div>
    );
};

export default AllBookBorrow;