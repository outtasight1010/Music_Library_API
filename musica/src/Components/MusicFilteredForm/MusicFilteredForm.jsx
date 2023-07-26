import React, { useState, useEffect } from 'react';
import MusicTable from '../MusicTable/MusicTable';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';


const MusicFilteredForm = () => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    
    axios.get('http://127.0.0.1:8000/api/music/').then((response) => {
      setSongs(response.data);
    });
  }, []);

  useEffect(() => {
    // Filter the musicData based on the searchQuery
    const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())||
    song.album.toLowerCase().includes(searchQuery.toLowerCase())||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())||
    song.genre.toLowerCase().includes(searchQuery.toLowerCase())

    );
    setFilteredSongs(filteredSongs);
  }, [searchQuery, songs]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter the musicData based on the searchQuery
  
    
    


  console.log('Filtered Songs', filteredSongs);

  return (
    <div>
     
      <SearchBar onSearch={handleSearch} />
     
      <MusicTable songs={filteredSongs} />
    </div>
  );
};

export default MusicFilteredForm;
