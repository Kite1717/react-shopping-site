import React, { Component } from 'react'

 class Product extends Component {

    
    render() {
        const {data} = this.props;
        return (
            <div className="card" style={{width: "18rem"}}>
            <div className="card-header">
              {data.name}     
            </div>
            <img className="card-img-top" src= {data.imageUrl} alt={data.name}/>
            <div className="card-body">
                <p className="card-text">{data.description}</p>
            
            </div>
            <div className="card-footer">
                <h5 className="card-title">{data.price}</h5>
                <h5 className="card-title">{data.year}</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        )
    }
}

export default Product;
 