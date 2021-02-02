import React, {Component}  from 'react'



export default class Cocktail extends Component {
   
            state={
                 drinks:[]
            }
   componentDidMount() {
         fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
         .then(res=>res.json())
         .then(data=>
          this.setState({drinks: data["drinks"]})
         
         )


         

   }

   



  render(){

    return <div>{this.state.drinks.map((drink,index)=>
        <div class='cocktail-card'>
        <div class='title'>{drink.strDrink}</div>
        <div class="cata">{drink.strCategory}</div>
        <div class="instruct" >
        {drink.strInstructions}</div>
        <img style={{'width':'200px','height':'200px','justify':'center'}} 
        
        src={drink.strDrinkThumb} />
        <button>push</button>
        </div>
    )
    }</div>

  }


}


