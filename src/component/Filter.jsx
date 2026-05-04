import React from 'react';
import { FilterCheckbox } from './FilterCheckbox';
import Search from './Search';

const Filter = () => {
    return (
        <div>
             <div className="container mx-auto">
                <h1 className={`${nunito.className} text-center pt-8 font-semibold text-4xl`}>All Book</h1>
                
                <div>
                    <Search setVisible={setVisible} setSearch={setSearch} search={search} />
                    <br />
                </div>
                <div>
                    <div>
                        <FilterCheckbox catFilter={catFilter} setCatFilter={setCatFilter} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;