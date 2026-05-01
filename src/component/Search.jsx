import { Input, InputGroup, Label, SearchField, TextField } from "@heroui/react";
import {Magnifier} from '@gravity-ui/icons';
const Search = () => {
    return (
        <TextField className={'w-150 mt-5 mx-auto rounded-5xl '}>
            <InputGroup>
                <InputGroup.Prefix>
                    <Magnifier />
                <InputGroup.Input className={"p-3"} placeholder="Search by title" />
                </InputGroup.Prefix>
            </InputGroup>

        </TextField>
    );
};

export default Search;