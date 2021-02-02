import React, {Component}  from 'react'

import SearchCocktail from './search'
import Sort from './sort'


export default class Cocktail extends Component {
   
            state={
                 drinks:[]
            }
   componentDidMount() {
       this.fetchCocktail()
   }

   fetchCocktail=(query="margarita")=>{
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
         .then(res=>res.json())
         .then(data=>
          this.setState({drinks: data["drinks"]})
         
         )
   }

   handleSort=(e)=>{
       
     let sorted=this.state.drinks.sort((a,b)=>{
       
               if(a.strDrink > b.strDrink){return 1}
               if(a.strDrink < b.strDrink){ return -1}
               if(a.strDrink == b.strDrink){return 0}
     })

     this.setState({drinks:sorted})

   }

  render(){

    return (  
    
    <div>
    <SearchCocktail cokctails={this.fetchCocktail} />
    <button  onClick={(e)=>this.handleSort(e)}>Sort</button>

      <div>{this.state.drinks.map((drink,index)=>
         <div class='cocktail-card'>
        <div class='title'>{drink.strDrink}</div>
        <div class="cata">{drink.strCategory}</div>
        <div class="instruct" >
        {drink.strInstructions}</div>
        <img style={{'width':'200px','height':'200px','padding-left':'5em'}} 
        
        src={drink.strDrinkThumb} />
        <button  class='button'>push</button>
        </div>
         )
          }
       </div>
       
       </div>)

  }


}


