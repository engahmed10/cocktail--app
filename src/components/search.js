import React ,{Component} from 'react'

export default class  SearchCocktail extends Component{
  state={
        query:""
  }
handleChange=(e)=>{

   this.setState({[e.target.name]:e.target.value})

}

handleSearch=()=>{
    
          this.props.cokctails(this.state.query)
}




render(){
   return <div>
               <input type='text'  name="query"  onChange={(e)=>this.handleChange(e)} />
               <button   onClick={(e)=>this.handleSearch(e)}>search</button>
           </div>
}


}
