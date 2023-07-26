
import React, { useState } from 'react';
import axios from 'axios';

const AddSongForm = () => {
  const [songData, setSongData] = useState({
    title: '',
    artist: '',
    album: '',
    genre: '',
    releaseDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData({ ...songData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to the backend API using Axios
    axios.post('http://127.0.0.1:8000/api/music/', songData)
      .then((response) => {
        // Handle successful response, e.g., show a success message
        console.log('Song added successfully!', response.data);
      })
      .catch((error) => {
        // Handle error response, e.g., show an error message
        console.error('Error adding song:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>
        Title:
        <input type="text" name="title" value={songData.title} onChange={handleChange} style={styles.input} />
      </label>
      <label style={styles.label}>
        Artist:
        <input type="text" name="artist" value={songData.artist} onChange={handleChange} style={styles.input} />
      </label>
      <label style={styles.label}>
        Album:
        <input type="text" name="artist" value={songData.album} onChange={handleChange} style={styles.input} />
      </label>
      <label style={styles.label}>
        Genre:
        <input type="text" name="artist" value={songData.genre} onChange={handleChange} style={styles.input} />
      </label>
      <label style={styles.label}>
        Release Date:
        <input type="text" name="releaseDate" value={songData.releaseDate} onChange={handleChange} style={styles.input} />
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
