import Card from "../UI/Card";
import cssStyle from "./AvailableMeals.module.css"
import MealItem from "./MealItem";
import React,{useContext,useEffect,useState} from 'react';
import localMeal from './localMeal.js'



  const AvaialbleMeals = () =>{
    const [isLoading,setIsLoading] = useState(true);
    const [availableMeals,setAvailableMeals] = useState(localMeal)
    useEffect(()=>{
      /*
      replace the URL with API call which can give dynamic meal data
      fetch("https://dummy-southeast1.firebasedatabase.app/meals.json").then((resp)=>{
        resp.json().then((mealsJson)=>{
          const transformedMeals = [];
          for(let key in mealsJson){
            transformedMeals.push({
              id: key,
              name: mealsJson[key].name,
              description: mealsJson[key].description,
              price: mealsJson[key].price,
            });
          }
          setIsLoading(false);
          setAvailableMeals(transformedMeals);

        });
        

      })
      */


    },[]);

    

   let availableMeal= availableMeals.map( (item) => <MealItem key={item.id}  mealItem={item}></MealItem>)
    return (<section className={cssStyle['meals']}>
           <Card><ul>{availableMeal}</ul>
           </Card>        
    </section>);

  }

  export default AvaialbleMeals;