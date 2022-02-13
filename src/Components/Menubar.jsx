import React from 'react'

const Menu = ({filterItem, pnamess}) => {
  return (
    <>
      <div className='btns'>
        {
          pnamess.map((ce, index) => {
            return <button key={index} onClick={() => filterItem(ce)}>{ce}</button>
          })
        }
      </div>
    </>
  )
}

export default Menu;