
import React, { useState } from 'react';
import axios from 'axios';

const AddSongForm = () => {
  const [songs, setSongs] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
    release_date: '',
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
  
    // If the field is the releaseDate, convert it to the "YYYY-MM-DD" format
    if (name === 'releaseDate') {
      const dateObj = new Date(value);
      const formattedDate = dateObj.toISOString().slice(0, 10);
      setSongs({ ...songs, [name]: formattedDate });
    } else {
      setSongs({ ...songs, [name]: value });
    }
  };
  

  function handleSubmit(event) {
    event.preventDefault();
    console.log(songs);
  
    axios.post('http://127.0.0.1:8000/api/music/', songs)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
  

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Title:
        <input type="text" name="title" value={songs.title} onChange={handleInput} style={styles.input} />
      </label>
      <label style={styles.label}>
        Artist:
        <input type="text" name="artist" value={songs.artist} onChange={handleInput} style={styles.input} />
      </label>
      <label style={styles.label}>
        Album:
        <input type="text" name="album" value={songs.album} onChange={handleInput} style={styles.input} />
      </label>
      <label style={styles.label}>
        Genre:
        <input type="text" name="genre" value={songs.genre} onChange={handleInput} style={styles.input} />
      </label>
      <label style={styles.label}>
        Release Date:
        <input type="text" name="release_date" value={songs.releaseDate} onChange={handleInput} style={styles.input} />
      </label>
      <button type="submit" style={styles.button}>Add Song</button>
    </form>
  );
};

// CSS styles as inline objects
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'darkgrey',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '5px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AddSongForm;
