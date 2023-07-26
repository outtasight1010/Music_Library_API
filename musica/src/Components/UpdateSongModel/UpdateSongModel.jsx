import React, { useState } from 'react';
import axios from 'axios';

const UpdateSongModal = ({ isOpen, onClose, songData }) => {
  const [updatedSongData, setUpdatedSongData] = useState({
    title: songData.title,
    artist: songData.artist,
    album:songData.album,
    genre:songData.genre,
    releaseDate: songData.releaseDate,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedSongData({ ...updatedSongData, [name]: value });
  };

  const handleUpdate = () => {
    axios.put(`'http://127.0.0.1:8000/api/music/${songData.id}`, updatedSongData)
      .then((response) => {
        console.log('Song updated successfully!', response.data);
        onClose();
      })
      .catch((error) => {
        console.error('Error updating song:', error);
      });
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>Update Song</h2>
        <label>
          Title:
          <input type="text" name="title" value={updatedSongData.title} onChange={handleChange} />
        </label>
        <label>
          Artist:
          <input type="text" name="artist" value={updatedSongData.artist} onChange={handleChange} />
        </label>
        <label>
          Release Date:
          <input type="text" name="releaseDate" value={updatedSongData.releaseDate} onChange={handleChange} />
        </label>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default UpdateSongModal;
