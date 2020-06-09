import React ,{Component} from 'react'     

import axios from 'axios'

const reducer = (state,action) =>{ 
    
        switch(action.type)
        {
          case "FILTER_PRODUCTS":
           
          return{
             ...state,
               
             filteredProducts :  (action.payload === -1) 
             ? [...state.products] 
             :  state.products.filter((product) =>{

                return product.productCategory.some( (category) => 
                  category.categoryId === action.payload)
             })

            


          }
          case "CALC_PRODUCT_COUNT":
          return{
             ...state, 
             
              totalProduct : state.filteredProducts.length
          }

          default :
          return state
        }

}


const Context = React.createContext();


export  class Provider extends Component {

  state = {

    products : [],
    categories : [],
    totalProduct : 0,
    filteredProducts : [],
    dispatch : action =>{  

      this.setState(state =>reducer(state,action))
    }

    
  }

  //axios
  componentDidMount = async () => {   
    
  
    const response1 =  await axios.get("https://medieinstitutet-wie-products.azurewebsites.net/api/products")
      
    //console.log(response.data)   
    const   response2 = await axios.get("https://medieinstitutet-wie-products.azurewebsites.net/api/categories")
      
    // console.log(response2.data)

    this.setState({
      products : response1.data,
      filteredProducts : response1.data,
      totalProduct : response1.data.length,
      categories : response2.data
      
    })
  }
  
    render() {
        return (
            
            <Context.Provider value = {this.state}>
             {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer;

export default Consumer;
