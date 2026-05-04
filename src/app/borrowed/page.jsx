"use client";
import { BookContext } from '@/context/BookProvider';
import { Person } from '@gravity-ui/icons';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { nunito } from '../layout';


const Borrowed = () => {
    let [bookList, setBookList] = useContext(BookContext)
      if(bookList.length===0){
        return (
            <div className='h-screen flex items-center justify-center'>
                <p className=" ">No book Borrowed</p>
            </div>
        )
      }
    return (
        <div className="my-5 mt-10 container mx-auto px-5">
            <h1 className={`${nunito.className} font-bold text-3xl text-center block`}> Books </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-6">
                {bookList.slice(0, 10).map((data) => {
                    return (
                        <BookCard 
                        data={data} 
                        id={data.id} 
                        key={data.id} 
                        title={data.title} 
                        author={data.author} 
                        img={data.image_url} 
                        category={data.category}
                        description={data.description} 
                         />
                    )
                })
                }
            </div>
        </div>
    );
};

const BookCard = ({id, title, author, category, img, description, data }) => {
    
    return (
        <Card className=" relative shadow">
            <Button className={"top-2 absolute right-2 bg-blue-900 "}>{category}</Button>
            <Image src={img} className="aspect-square rounded-2xl" width={"300"} height={"300"} alt={title} />
            <Card.Header>
                <Card.Title>
                    <span className={`${nunito.className} line-clamp-1 text-xl font-semibold my-3`}>{title}</span>
                </Card.Title>
                <Card.Description  className="flex items-center gap-2">
                        <Person/>
                        {author} 
                    {/* {description} */}
                </Card.Description>
            </Card.Header>
            <Card.Footer className="justify-between">
                {/* <p>8 available</p> */}
               {/* <Button className={"bg-[#e18e2e]"} onClick={()=>setBookList([...bookList,data])} >Borrow Book</Button> */}
                <Link href={`bookDetails/${id}`}> <Button variant="primary" >View Book</Button></Link>
               
            </Card.Footer>
        </Card>
    );
}
export default Borrowed;