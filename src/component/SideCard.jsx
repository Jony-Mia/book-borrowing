import { poppins } from "@/app/layout";
import { Button, Card } from "@heroui/react";
import Link from "next/link";

const SideCard = () => {

    return (
        <Card className="w-[400px] relative shadow">
            <Button className={"top-2 absolute right-2 bg-blue-900 "}>Story</Button>
            <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765" className="aspect-square rounded-2xl" />
            <Card.Header>
                <Card.Title>Become an Acme Creator!</Card.Title>
                <Card.Description>
                    Visit the Acme Creator Hub to sign up today and start earning credits from your fans and
                    followers.
                </Card.Description>
            </Card.Header>
            <Card.Footer>
                <Button>View Details</Button>
            </Card.Footer>
        </Card>
    );
}


export default SideCard;