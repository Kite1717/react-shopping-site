import React ,{Component} from 'react'     

import axios from 'axios'

const reducer = (state,action) =>{ 
    
        switch(action.type)
        {
          case "DELETE_USER":
          return{
             ...state,
             
             users : state.users.filter(user => action.payload !== user.id)

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
    dispatch : action =>{  

      this.setState(state =>reducer(state,action))
    }

    
  }

  //axios
  componentDidMount = async () => {   
    
  
    const response =  await axios.get("https://medieinstitutet-wie-products.azurewebsites.net/api/products")

    console.log(response.data)   

    this.setState({

      products : response.data
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
