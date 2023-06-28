import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios';

const AppContext = React.createContext()
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const getFavoritesFromLocalStorage= ()=>{
    let favorites = localStorage.getItem('favorites')

    if(favorites){
        favorites = JSON.parse(localStorage.getItem('favorites'))
    }
    else{
        favorites = []
    }
    return favorites
}

const AppProvider = ({children}) =>{
    const [loading , setLoading] = useState(false)
    const [meals , setMeals] = useState([])
    const [ searchTerm, setSearchTerm] = useState('')
    const [showModal,setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)
    const [favorites,setFavorites] = useState(getFavoritesFromLocalStorage())

    //this is the process with fetch api process
    // try {
    //     const response = await fetch('https://randomuser.me/api/')
    // const data = await response.json()
    // console.log(data)
    // } catch (error) {
    //     console.log("error")
    // }

    const fetchMeal = async(url) =>{
        //this is the process with axios process . axios we have to install . itss a dependency
        setLoading(true)
        try {
            const {data} = await axios.get(url)
            if(data.meals){
                setMeals(data.meals)
            }
            else{
                setMeals([])
            }
            
        } catch (error) {
            console.log(error.response)
        }
        setLoading(false)
    } 

    const fetchRandomMeal = () =>{
        fetchMeal(randomMealUrl)
    }
    const selectMeal = (idMeal,favoriteMeal)=>{
        let meal;
        if(favoriteMeal){
            meal = favorites.find((meal)=>meal.idMeal === idMeal)
        }
        else{
            meal = meals.find((meal)=>meal.idMeal === idMeal)
        }
        setSelectedMeal(meal)
        setShowModal(true)
    }
    const closeModal = ()=>{
        setShowModal(false)
    }
    const addToFavorites = (idMeal) =>{
        const meal = meals.find((meal)=>meal.idMeal === idMeal)
        const alreadyFavorite = favorites.find((meal)=>meal.idMeal === idMeal)
        if(alreadyFavorite) return
        const updatedFavorites = [...favorites,meal]
        setFavorites(updatedFavorites)
        localStorage.setItem('favorites',JSON.stringify(updatedFavorites))
    }
    const removeFromFavorites = (idMeal) =>{
        const updatedFavorites = favorites.filter((meal)=>meal.idMeal !== idMeal)
        setFavorites(updatedFavorites)
        localStorage.setItem('favorites',JSON.stringify(updatedFavorites))
    }
    useEffect(()=>{
        fetchMeal(allMealsUrl)
    },[])

    useEffect(()=>{
        if(!searchTerm) return
        fetchMeal(`${allMealsUrl}${searchTerm}`)
    },[searchTerm])

    return <AppContext.Provider value={{loading , meals , setSearchTerm , fetchRandomMeal, showModal,selectMeal,selectedMeal,closeModal , addToFavorites,removeFromFavorites,favorites}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}


export {AppContext ,AppProvider}