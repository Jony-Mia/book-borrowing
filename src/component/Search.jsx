import { Button, Input, InputGroup, TextField } from "@heroui/react";
import { Globe, Magnifier } from '@gravity-ui/icons';
import { poppins } from "@/app/layout";
const Search = () => {
    return (
        <>
            <TextField className={'md:w-[45%] w-[80%] mt-5 mx-auto rounded-5xl '} aria-label="Search Section">
                <InputGroup>
                    <InputGroup.Prefix>
                        <Magnifier />
                    </InputGroup.Prefix>
                        <InputGroup.Input className={"p-3 w-full"} placeholder="Search by title" />
                    <InputGroup.Suffix className="bg-[#fe9a00] text-white">
                    <Button className={`${poppins.className}`}>Search</Button>
                    </InputGroup.Suffix>
                </InputGroup>
            </TextField>
        </>
    );
};

export default Search;