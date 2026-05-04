"use client"
import { useSession } from '@/lib/auth-client';
import { BookContext } from '@/context/BookProvider';
import { Person } from '@gravity-ui/icons';
import { Avatar, Button, Card, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { nunito } from '../layout';


const Borrowed = () => {
    let [bookList, setBookList] = useContext(BookContext)
    let { data } = useSession()
    let user = data?.user

    return (
        <div className="my-5 mt-20 container mx-auto px-5">
            <br />
            <br />

            <div>
                <div className='flex items-center gap-3'>
                    <Avatar size='lg'>
                        <Avatar.Image
                            alt="Small Avatar"
                            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
                        />
                        <Avatar.Fallback>SM</Avatar.Fallback>
                    </Avatar>
                    <div>
                        <h1 className={`${nunito.className}  text-3xl `}> {user?.name} </h1>
                        <p>{user?.email}</p>
                    </div>
                </div>
            </div>
            <br />
            <Separator />
            <br />
            <h1 className={`${nunito.className} font-bold text-3xl text-center block`}> Books </h1>
            {

                bookList.length === 0 && (<div className='h-screen flex items-center justify-center'>
                    <p className=" ">No book Borrowed</p>
                </div>)
            }
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

const BookCard = ({ id, title, author, category, img, description, data }) => {

    return (
        <Card className=" relative shadow">
            <Button className={"top-2 absolute right-2 bg-blue-900 "}>{category}</Button>
            <Image src={img} className="aspect-square rounded-2xl" width={"300"} height={"300"} alt={title} />
            <Card.Header>
                <Card.Title>
                    <span className={`${nunito.className} line-clamp-1 text-xl font-semibold my-3`}>{title}</span>
                </Card.Title>
                <Card.Description className="flex items-center gap-2">
                    <Person />
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