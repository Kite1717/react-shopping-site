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
          case "ADD_USER":
          return{
             ...state, 
             
             users :[...state.users,action.payload]
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
