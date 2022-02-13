import React from 'react';

const Cards = ({ items }) => {
  return (
    <>
      <div className="Container">
        {items.map((val) => {
          return (
            <div id="Card">
              <div className="Title">{val.title}</div>
              <div className="Image">
                <img src={val.imgsrc} />
              </div>
              <div className="Link">
                <span>{val.pname}</span>
                <span>
                  <button>
                    <a href={val.link} target="_blank">
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
