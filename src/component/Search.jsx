"use client";
import { Button, Input, InputGroup, TextField } from "@heroui/react";
import { Globe, Magnifier } from '@gravity-ui/icons';
import { poppins } from "@/app/layout";
const Search = ({ catFilter, setSearch, setVisible }) => {
    let searching=(e)=>{
        setSearch(e.target.value);        
        setVisible(false)
    }
    return (

        <>
            <TextField className={'md:w-[45%] w-[80%] mt-5 mx-auto rounded-5xl '} aria-label="Search Section">
                <InputGroup>
                    <InputGroup.Prefix>
                        <Magnifier />
                    </InputGroup.Prefix >
                        <InputGroup.Input onChange={searching} className={"p-3 w-full"} placeholder="Search by title" />
                    <InputGroup.Suffix className="bg-[#fe9a00] text-white">
                    <Button variant="ghost" className={`${poppins.className}`}>Search</Button>
                    </InputGroup.Suffix>
                </InputGroup>
            </TextField>
        </>
    );
};

export default Search;