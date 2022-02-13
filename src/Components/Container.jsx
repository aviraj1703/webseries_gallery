import React, { useState } from 'react';
import Menu from './Menubar';
import Cards from './Card';
import data from './Data';

const pnames = [...new Set(data.map((ce) => ce.pname)), 'All'];
const Container = () => {
    const [items, setItems] = useState(data);
    const filterItem = (e) => {
        const updateItems = data.filter((event) => {
            return event.pname === e;
        }) ;
        if(e === 'All') setItems(data);
        else    setItems(updateItems);
    }
    return(
        <>
            <Menu filterItem={filterItem} pnamess={pnames} />
            <Cards items={items} />
        </>
    );
}

export default Container;
