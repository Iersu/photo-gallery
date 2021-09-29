import React,{useState,useEffect} from 'react'

const Context = React.createContext()

function ContextProvider({ children }) {
    const [allPhotos,setAllPhotos] = useState([])
    const[favPhotos, setFavPhotos] = useState([])
    const [cartItems , setCartItems] = useState([])
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

   useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setAllPhotos(data))
   },[])

   const  toggleFavorite = (id) => {
    const updatedArr = allPhotos.map(photo => {
        if(photo.id === id)
        {return {...photo, isFavorite:!photo.isFavorite}}
        
        return photo
    })

        setAllPhotos(updatedArr)
    }
    useEffect(() => {
        const update = allPhotos.filter(item => item.isFavorite === true)
        setFavPhotos(update)

    },[allPhotos])


    const addToCart = (newItem) => {
        setCartItems(prev => [...prev, newItem])
    }

    const emptyCart = () => {
        setCartItems([])
    }

    const removeFromCart = (id) => {
        const update = cartItems.filter(item => item.id !== id)
        setCartItems(update)
    }
    const removeFav = (id) => {
        const update = favPhotos.filter(item => item.id !== id)
        setFavPhotos(update)

    }

    return (
        <Context.Provider value={{
            allPhotos,
            toggleFavorite,
            cartItems,
            addToCart,
            emptyCart,
            removeFromCart,
            favPhotos, 
            removeFav
        }}>
           {children}
        </Context.Provider>

    )
}

export  {ContextProvider,Context}
