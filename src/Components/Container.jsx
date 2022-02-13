import React, { useState } from 'react';
import Menu from './Menubar';
import Cards from './Card';
import data from './Data';

const pnames = [...new Set(data.map((ce) => ce.pname)), 'All'];
const Container = () => {
    const [items, setItems] = useState(data);
    const [pnamess, setPnames] = useState(pnames);
    const filterItem = (e) => {
        const updateItems = data.filter((event) => {
            return event.pname === e;
        }) ;
        if(e === 'All') setItems(data);
        else    setItems(updateItems);
    }
    return(
        <>
            <Menu 
                filterItem = { filterItem }
                pnamess = { pnamess }
            />
            
            <div className="Container">
                {items.map((val)=>{
                    return(
                        <>
                            <Cards
                                key = {val.id}
                                imgsrc = {val.imgsrc}
                                title = {val.title}
                                pname = {val.pname}
                                link =  {val.link}
                            />
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default Container;