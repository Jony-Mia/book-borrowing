"use client";
import { BookOpen } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { toast, ToastContainer } from "react-toastify";

const BorrowButton = ({data, setBookList, bookList}) => {

    let borrowedBook = () => {
        setBookList(bookList)
        
        toast("Book borrowed")
    }
    return (
        <div>
            <ToastContainer/>
            <Button onClick={()=>borrowedBook()}  className="bg-[#fe9a00]  rounded-md" > <BookOpen/> Borrow </Button>
        </div>
    );
};

export default BorrowButton;