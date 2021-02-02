import react, { Component } from 'react';

class sort extends Component {
    constructor() {
        super();

        this.state={
            cocktails:""
        }
    }
   


   handleSort=(e)=>{
       
     this.props.cokctails.sort((a,b)=>{
       
               if(a.strDrink > b.strDrink){return -1}
               if(a.strDrink < b.strDrink){ return 1}
               if(a.strDrink == b.strDrink){return 0}
     })

   }

    render() {

        return <button  onClick={(e)=>this.handleSort(e)}>Sort</button>
    }
}
export default sort;