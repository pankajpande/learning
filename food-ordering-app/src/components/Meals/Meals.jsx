import MealsSummary from "./MealsSummary";
import AvaialbleMeals from "./dummyMeal";
import { Fragment } from "react";

const Meals = () =>{
return (
    <Fragment>
        <MealsSummary></MealsSummary>
        <AvaialbleMeals></AvaialbleMeals>
    </Fragment>
);
}

export default Meals;