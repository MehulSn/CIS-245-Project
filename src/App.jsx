import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Right from './right'
import Header from './header'
import CreateButton from './createbutton'
import VideoCarousel from './VideoCarousal'
import HomePage from './Home'
import CategoryPage from './Category'
import GamePage from './Game'
import LibraryPage from './library'
import IntroPage from './intro'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Header></Header>
    
        <Routes>
          <Route path='/' element={<IntroPage></IntroPage>}></Route>
          <Route path='/home' element={<HomePage></HomePage>}></Route>
          <Route path='/category' element={<CategoryPage></CategoryPage>}></Route>
          <Route path='/game' element={<GamePage></GamePage>}></Route>
          <Route path='/library' element={<LibraryPage></LibraryPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
    
}

export default App;
