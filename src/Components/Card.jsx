import React from 'react';

const Cards = ({ items }) => {
  return (
    <>
      <div className="Container">
        {items.map((val) => {
          return (
            <div  className="Card" key={val.id}>
              <div className="Title">{val.title}</div>
              <div className="Image">
                <img src={val.imgsrc} alt="webseries_pic" />
              </div>
              <div className="Link">
                <span>{val.pname}</span>
                <span>
                  <button>
                    <a href={val.link} target="_blank" rel="noreferrer">
                      Watch&nbsp;now
                    </a>
                  </button>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
