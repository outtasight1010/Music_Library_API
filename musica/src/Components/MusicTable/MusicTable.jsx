import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MusicTable.css';

const MusicTable = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/music/');
                setSongs(response.data);
            } catch (error) {
                console.error('Oops. Error fetching songs:', error);

            }
            
        };

        fetchSongs();
    },[]);

    return(
        
        <div className='music-table'>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                {songs.map((song) => (
                    <tr key={song.id}>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                    </tr>

                ))}
            </tbody>
        </table>
        </div>
    );
};

export default MusicTable;
