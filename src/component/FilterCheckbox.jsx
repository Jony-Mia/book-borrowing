"use client";
import { ListBox, Select } from "@heroui/react";
import { features } from "../../API/features";

export function FilterCheckbox({ catFilter, setCatFilter }) {
    let featureData = features();
    let categoryList = featureData.map(data => data.category);
    let category = [...new Set(categoryList)];
    return (
        <Select className="md:w-[45%] w-[80%] mx-auto" placeholder="Select one" aria-label="Filter by category">
            <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
                <ListBox>
                    <ListBox.Item textValue={"All"} onClick={() => setCatFilter("all")} >
                        All
                    <ListBox.ItemIndicator />
                    </ListBox.Item>
                    {
                        category.map((value, index) => {
                            return (
                                <ListBox.Item onClick={() => setCatFilter(value)} key={index} textValue={value}>
                                    {value}
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            )
                        })
                    }
                </ListBox>
            </Select.Popover>
        </Select>

    );
}