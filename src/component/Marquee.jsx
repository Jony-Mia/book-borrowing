import { Star, TriangleDownFill } from "@gravity-ui/icons";
import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <Marquee className="py-4 bg-[#121b2b]" autoFill>
            <p className="mx-10 text-amber-200 flex items-center gap-5 "> <Star/> Borrow book 2, Free Book 1</p>
        </Marquee>
    );
};

export default Marque;