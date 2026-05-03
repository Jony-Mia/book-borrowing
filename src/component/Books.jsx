import { Button, Card } from "@heroui/react";
import { features } from "../../API/features";
import { nunito } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";

const Books = () => {
    let books = features();
    return (
        <div className="my-5 container mx-auto">
            <h1 className={`${nunito.className} font-bold text-3xl text-center block`}> Books </h1>
            <div className="grid grid-cols-5 gap-6">
                {books.slice(0, 10).map((data) => {
                    return (
                        <BookCard key={data.id} id={data.id} description={data.description} title={data.title} author={data.author} img={data.image_url} category={data.category} />
                    )
                })
                }
            </div>
        </div>
    );
};

const BookCard = ({id, title, author, category, img, description }) => {

    return (
        <Card className=" relative shadow">
            <Button className={"top-2 absolute right-2 bg-blue-900 "}>{category}</Button>
            <Image src={img} className="aspect-square rounded-2xl" width={"300"} height={"300"} alt={title} />
            <Card.Header>
                <Card.Title>
                    <span className={`${nunito.className} line-clamp-1 font-semibold my-3`}>{title}</span>
                </Card.Title>
                <Card.Description>
                   {author} <br />
                    {/* {description} */}
                </Card.Description>
            </Card.Header>
            <Card.Footer className="justify-between">
                {/* <p>8 available</p> */}
               <Link href={`bookDetails/${id}`}> <Button className={"bg-[#e18e2e]"}>View Book</Button></Link>
            </Card.Footer>
        </Card>
    );
}
export default Books;