import React from 'react'
import GridItem from './GridItem'
import '../assets/styles/GridItemHolder.css'
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';





export default function GridItemHolder({itemList}) {

  return (
    <div className='gridContainer' >
          {itemList.map((id, index) => (
          <Link to={`/product/${id.id}`} key={uuidv4()}>
                    <GridItem imgSrc={id.image} key={id.id} name={id.title} price={id.price}/>
          </Link>
          
          ))}
         {/*}
          <Routes>
           
            <Route
              path="/product/:id"
              element={({ match }) => (
              <ProductDetails
                  product={itemList.find(
                  (itemList) => String(itemList.id) === match.params.id
                  )}
                />
                )}
                  /> 
                  <Route path="/product/*" element={<Shop/>} />
                  <Route path='/product/:id' element={<ProductDetails />} />
            </Routes>{*/}
    </div>
  )
}
