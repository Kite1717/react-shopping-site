import React, { Component } from 'react'

import logo from '../assets/no_image.png';
 class Product extends Component {

    state = {

        src : this.props.data.imageUrl,
        error: false,
    }
    
    onError = () => {
        if (!this.state.error) {
          this.setState({
           src : logo, 
            error: true,
          });
        }
      }
    render() {
        const {data} = this.props;
        const { src } = this.state;
        return (
            <div className="card" style={{width: "18rem"}}>
            <div className="card-header">
              <h2>{data.name}     </h2>
            </div>
            <img className="card-img-top" src= {src} alt={data.name} onError={this.onError} />
            <div className="card-body">
                <p className="card-text">{data.description}</p>
            
            </div>
            <div className="card-footer">
                <h5 className="card-title"> Price : {data.price}</h5>
                <h5 className="card-title">Release date : {data.year}</h5>
                <a href="/#" className="btn btn-success btn-lg btn-block">Add Cart</a>
            </div>
          </div>
        )
    }
}

export default Product;
 