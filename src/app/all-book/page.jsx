import Search from "@/component/Search"
import { nunito, poppins } from "../layout";
import { FilterCheckbox } from "@/component/FilterCheckbox";

const page = () => {

    return (
        <div className="bg-[#f9f6f1bc]">
            <div className="container mx-auto">
                <h1 className={`${nunito.className} text-center pt-8 font-semibold text-4xl`}>All Book</h1>
                <p className={`${poppins.className} text-center text-md mt-5 text-muted`}>Search the catalog or filter by category to find your next read.</p>
                <div>
                    <Search />
                    <br />
                </div>
                <div>
                    <div>
                        <FilterCheckbox />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default page;