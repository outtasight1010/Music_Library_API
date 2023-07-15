import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';


function App() {
  return (
    
    
    <div>
      <NavigationBar/>
      <h3>Song List</h3>
      <SearchBar/>
      <MusicTable/>

    </div>

  

  );
}

export default App;
