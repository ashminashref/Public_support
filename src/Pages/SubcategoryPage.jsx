import React from 'react'
import subcategories from '../Components/Data/Categories'
function Subcategorypage() {
  return (
    <div>
        <Container>
            {subcategories.map((items, index)=> (
                <h1 key={index}>{items.name}</h1>
            ))}
        </Container>
    </div>
  )
}

export default Subcategorypage