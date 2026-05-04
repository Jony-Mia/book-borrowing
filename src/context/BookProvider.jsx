"use client";
import React, { createContext, useState } from 'react';


export let BookContext = createContext([])
const BookProvider = ({children}) => {
    let [bookList, setBookList] = useState([])
    return (
        <BookContext.Provider value={[bookList, setBookList]} >
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;