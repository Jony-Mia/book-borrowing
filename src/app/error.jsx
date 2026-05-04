"use client"
import Image from 'next/image';

const error = () => {
    return (
        <div>
            <Image src={"https://i.pinimg.com/736x/c1/ef/30/c1ef307f2cedb1da35d9ed82c30ea854.jpg"} width="1000" height="1000" alt="error image" />
        </div>
    );
};

export default error;