import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavBar/NavBar';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';
import axios from 'axios';
import './App.css';
import MusicFilteredForm from './Components/MusicFilteredForm/MusicFilteredForm';
import AddSongForm from './Components/AddSongForm/AddSongForm';
import UpdateSongModal from './Components/UpdateSongModel/UpdateSongModel';


function App() {
  //const [songs, setSongs] = useState([]);

    //useEffect(() => {
        //const fetchSongs = async () => {
            //try {
                //const response = await axios.get('http://127.0.0.1:8000/api/music/');
                //setSongs(response.data);
           // } catch (error) {
               // console.error('Oops. Error fetching songs:', error);

            //}
            
        //};

        //fetchSongs();
   // },[]);
  
  return (
    
    <div>
      <NavigationBar/>
      <br></br>
      <MusicFilteredForm/>
      <hr 
        size="10"
        color= 'black'
        align= 'center'
        width="1400px">
        </hr>
      <AddSongForm/>
      
    </div>

  

  );
}

export default App;
