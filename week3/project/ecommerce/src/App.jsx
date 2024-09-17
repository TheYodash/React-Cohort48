import { useState } from 'react'
import './App.css'
import CategoryController from './components/CategoryController.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductsController from './components/ProductsController.jsx'
import Product from './components/product.jsx'
import Favourites from './components/Favourites.jsx'
import { FavouritesProvider } from './components/favouritesContext.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
        setSelectedCategory(null);
    } else {
    setSelectedCategory(category)
    }
  }

  return (
    <FavouritesProvider>
      <h1>Products</h1>
    <Router>
      <Routes>
        <Route path='/' element={
          <>
          <NavBar />
          <CategoryController selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick} />
          </>
        } />
        <Route path='/product/:id' element = { <Product />} />
        <Route path='/favourites' element = { <Favourites />} />
      </Routes>
    </Router>
    </FavouritesProvider>
  )
}

export default App