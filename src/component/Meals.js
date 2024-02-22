
import MealItem from './MealItem.js';
import useHttp from './hook/useHttp.js';
import Error from './Error.js';

const requestConfig ={};

const Meals = () => {

   const { data: loadedMeals,isLoading,error,sendRequest} = useHttp('http://localhost:3000/meals',requestConfig,[]);

     if(isLoading){
        return <p className='center'>Fetching meals...</p>;
     }
     if(error){
      return <Error title='Failed to fetch meals' message={error}/>
     }

    //  if(!data){
    //     return <p>No meals found.</p>;
    //  }
 
 return <ul id ='meals'> {loadedMeals.map(meal =>
 <MealItem key={meal.id} meal={meal}/>)}</ul>;

}

export default Meals;