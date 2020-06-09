import React, { Component } from 'react'

import Product from './Product' 

import Consumer from '../context'
 class ProductsRenderer extends Component {
    render() {
        return (
            <Consumer>
            {
    
              value =>{
                
                const {products} = value;  // page handler  and data
                 
                return (
                    <div>
                    <ul  className="list-group">
                    {
                            products.map(product =>{
                                console.log(product)
                                return(
                                <li key = {product.id} className="list-group-item list-group-item-warning">
                                <Product data  = {product} />
                                </li>
                                )
                            
                            })
                    }
                    </ul>
                </div>            
                )
              } 
    
            }
          </Consumer>
        )
    }
}
export default ProductsRenderer;
 