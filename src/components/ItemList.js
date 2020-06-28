import React from 'react'
import {Items} from './Items'
import { dummyProducts } from "../services/dummy";

export const ItemList = () => { 
    
    
    const database = dummyProducts
    return (
        <div>
            {
                database.map(item =>(
                    <Items name={item.name} 
                    price={item.price} 
                    key={item.id} 
                    photo={item.photo}
                    description={item.description} />
                ))
            }
        </div>
    )
}
