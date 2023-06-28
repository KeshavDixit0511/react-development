import { useGlobalContext } from '../Context'
import thumbsup from './thumbsup.png'

const Meals = () =>{
    const {meals,loading,selectMeal,addToFavorites} = useGlobalContext()
    
    if(loading){
        return<section className='section'>
            <h4>Loading..</h4>
        </section>
    }
    if(meals.length < 1){
        return <section className='section'>
            <h4>No Meals matched your search tearm. Please Try Again</h4>
        </section>
    }

    return <section className="section-center">
        {meals.map((singleMeal)=>{
            const {idMeal, strMeal:title , strMealThumb:image} = singleMeal
            return <article key={idMeal} className='single-meal'>
                <img alt='meal-image' src={image} className='img' onClick={()=> selectMeal(idMeal)} />
                <footer>
                    <h5>{title}</h5>
                    <button className='like-btn' onClick={()=> addToFavorites(idMeal)}><img style={{height:"20px"}} src={thumbsup} alt='thumbsup' /></button>
                </footer>
            </article>
        })}
    </section>
}

export default Meals

