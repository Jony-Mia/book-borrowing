"use client";
import Search from "@/component/Search";
import { nunito, poppins } from "../layout";
import { FilterCheckbox } from "@/component/FilterCheckbox";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { features } from "../../../API/features";
import { useState } from "react";

export let catcher = value => {
    return value;
}

const page = () => {
    let [catFilter, setCatFilter] = useState("all")
    let [search, setSearch] = useState('');
    let [visible, setVisible] = useState(true);

    let booklist = features()
    let filter = booklist.filter(fil => fil.category === catFilter);

    return (
        <div className="bg-[#f9f6f1bc] p-5">
            <div className="container mx-auto">
                <h1 className={`${nunito.className} text-center pt-8 font-semibold text-4xl`}>All Book</h1>
                {/* <p className={`${poppins.className} text-center text-md mt-5 text-muted`}>Search the catalog or filter by category to find your next read.</p> */}
                <div>
                    <Search setVisible={setVisible} setSearch={setSearch} search={search} />
                    <br />
                </div>
                <div>
                    <div>
                        <FilterCheckbox catFilter={catFilter} setCatFilter={setCatFilter} />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="container mx-auto">
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quia. */}
                <br />
                <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        catFilter === "all" ?
                            booklist.map((data) => {
                                console.log(data.category);
                                return (
                                    <BookCard
                                        key={data.id}
                                        title={data.title}
                                        author={data.author}
                                        img={data.image_url}
                                        category={data.category}
                                        description={data.description}
                                    />
                                )
                            })
                            :
                            filter.map((data) => {
                                console.log(data.category);
                                return (
                                    <BookCard
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
        </div>
    )
}

const BookCard = ({ title, author, category, img, description }) => {
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
                    {description}
                </Card.Description>
            </Card.Header>
            <Card.Footer className="justify-between">
                {/* <p>8 available</p> */}
                <Button className={`bg-[#e18e2e] text-white ${poppins.className}`}>Borrow Book</Button>
            </Card.Footer>
        </Card>
    );
}


export default page;