'use client';

import { useContext } from "react";
import { BookContext } from "@/context/BookProvider";
import { Button } from "@heroui/react";

const BorrowBookButton = ({ book }) => {
    const [bookList, setBookList] = useContext(BookContext);

    const borrowBook = () => {
        if (bookList.some(b => b.id === book.id)) {
            alert("This book is already in your borrowed list.");
            return;
        }
        setBookList([...bookList, book]);
        alert("Book borrowed successfully!");
    };

    return (
        <Button className="bg-[#fe9a00]" onClick={borrowBook}>Borrow Book</Button>
    );
};

export default BorrowBookButton;