import React from 'react';

const Cards = (props) => {
    return(
        <>
            <div id="Card">
                <div className="Title">{props.title}</div>
                <div className="Image">
                    <img src={props.imgsrc} />
                </div>
                <div className="Link">
                    <span>{props.pname}</span>
                    <span><button><a href={props.link} target = "_blank">Watch&nbsp;now</a></button></span>
                </div>
            </div>
        </>
    );
}

export default Cards;
