import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';
import './App.css';


function App() {
  return (
    
    
    <div>
      <NavigationBar/>
      <h2>Songs List</h2>
      
      <SearchBar/>
      <MusicTable/>

    </div>

  

  );
}

export default App;
