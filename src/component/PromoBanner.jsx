import { nunito, poppins } from '@/app/layout';
import { Button } from '@heroui/react';
import Image from 'next/image';

const PromoBanner = () => {
    return (
        <div>
            <div className="w-full grid justify-center items-center overflow-hidden mt-30 bg-[url(https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_695370deb4324747c4b3cf1a_695370de45eb796c907235c1/scale_1200)] h-[90vh] bg-cover">
                {/* <Image src={"https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_695370deb4324747c4b3cf1a_695370de45eb796c907235c1/scale_1200"} alt="feature image" width={"900"} height={"720"} className="absolute  w-full -z-10 rounded-2xl" /> */}
                <div className="flex justify-center flex-col items-center mt-40 w-150 m-auto p-4 rounded-2xl bg-[#00338562]">
                    <h1 className={` ${nunito.className} capitalize my-5  ms-10 text-4xl bg-white px-6 py-3 rounded-2xl font-bold`}>Grab the deal of book</h1>
                    <p className={`w-[90%] text-center  text-[#ffffff] text-xl ${poppins.className} `}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam autem distinctio a impedit vero nihil magni neque quia quisquam tenetur, quos ipsum dolorum minus facere consequatur non eveniet dicta dolor.</p>
                    <br />
                    <Button className={"bg-amber-300 px-5 py-3 text-black rounded-2xl h-auto"}>View Details</Button>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;