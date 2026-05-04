"use client";
import Search from "@/component/Search";
import { nunito, poppins } from "../layout";
import { FilterCheckbox } from "@/component/FilterCheckbox";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { features } from "../../../API/features";
import { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { BookContext } from "@/context/BookProvider";

export let catcher = value => value;

const Page = () => {
    const [catFilter, setCatFilter] = useState("all");
    const [search, setSearch] = useState('');
    const booklist = features();

    const filteredBooks = useMemo(() => {
        const normalizedSearch = search.trim().toLowerCase();
        return booklist.filter((book) => {
            const matchesCategory = catFilter === "all" || book.category === catFilter;
            if (!matchesCategory) {
                return false;
            }

            if (!normalizedSearch) {
                return true;
            }

            return [book.title, book.author, book.category, book.description]
                .filter(Boolean)
                .some((value) => value.toLowerCase().includes(normalizedSearch));
        });
    }, [booklist, catFilter, search]);

    return (
        <div className="bg-[#f9f6f1bc] p-5">
            <div className="container mx-auto md:mt-6 mt-4 lg:mt-10">
                <h1 className={`${nunito.className} text-center pt-8 font-semibold md:text-3xl text-2xl lg:text-4xl`}>All Book</h1>
                <div>
                    <Search search={search} setSearch={setSearch} />
                    <br />
                </div>
                <div>
                    <FilterCheckbox catFilter={catFilter} setCatFilter={setCatFilter} />
                </div>
                <p className={`${poppins.className} text-center text-sm text-muted mt-3`}>
                    Showing <strong>{filteredBooks.length}</strong> of <strong>{booklist.length}</strong> books
                    {catFilter !== "all" && ` in ${catFilter} category`}
                    {search && ` matching "${search}"`}
                </p>
            </div>
            <br />
            <div className="container mx-auto">
                {filteredBooks.length === 0 ? (
                    <div className="py-20 text-center text-xl text-muted">
                        No books found. Try another search term or category.
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredBooks.map((data) => (
                            <BookCard
                                data={data}
                                key={data.id}
                                title={data.title}
                                author={data.author}
                                img={data.image_url}
                                category={data.category}
                                description={data.description}
                                id={data.id}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

const BookCard = ({ title, author, category, img, description, id, data }) => {
      let [bookList, setBookList] = useContext(BookContext)
        
        let borrowBook=()=>{
            console.log(bookList);
            setBookList([...bookList,data])
        }
    return (
        <Card className=" relative shadow">
            <Button className={"top-2 absolute text-white right-2 bg-blue-900 "}>{category}</Button>
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
                <Button size="sm" className={`bg-[#e18e2e] text-white ${poppins.className}`} onClick={()=>borrowBook()}>Borrow Book</Button>
                <Link href={`/bookDetails/${id}`}> <Button variant="primary" >View Book</Button></Link>

            </Card.Footer>
        </Card>
    );
}


export default Page;