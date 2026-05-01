import { Button, Card } from "@heroui/react";
import Link from "next/link";

const SideCard = ({title, author, category, img, }) => {

    return (
        <Card className=" relative shadow">
            <Button className={"top-2 absolute right-2 bg-blue-900 "}>{category}</Button>
            <img src={img} className="aspect-square rounded-2xl" />
            <Card.Header>
                <Card.Title>{title}</Card.Title>
                <Card.Description>
                   {author}
                </Card.Description>
            </Card.Header>
            <Card.Footer className="justify-between">
                {/* <p>8 available</p> */}
                <Button className={"bg-[#e18e2e]"}>View Details</Button>
            </Card.Footer>
        </Card>
    );
}


export default SideCard;