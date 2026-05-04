"use client";
import { useState } from "react";
import { Button, Input, InputGroup, TextField } from "@heroui/react";
import { Magnifier } from '@gravity-ui/icons';
import { poppins } from "@/app/layout";

const Search = ({ search, setSearch, onClear }) => {
    const [query, setQuery] = useState(search || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(query.trim());
    };

    const handleClear = () => {
        setQuery("");
        setSearch("");
        if (onClear) onClear();
    };

    return (
        <form className="md:w-[45%] w-[80%] mt-5 mx-auto" onSubmit={handleSubmit}>
            <TextField className="rounded-5xl" aria-label="Search Section">
                <InputGroup>
                    <InputGroup.Prefix>
                        <Magnifier />
                    </InputGroup.Prefix>
                    <InputGroup.Input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="p-3 w-full"
                        placeholder="Search by title, author or category"
                    />
                    <InputGroup.Suffix className="text-white flex gap-2">
                        <Button type="submit" variant="ghost" className={`${poppins.className} bg-[#fe9a00] text-white`}>
                            Search
                        </Button>
                        <Button type="button" onClick={handleClear} className={`${poppins.className}`}>
                            Clear
                        </Button>
                    </InputGroup.Suffix>
                </InputGroup>
            </TextField>
        </form>
    );
};

export default Search;