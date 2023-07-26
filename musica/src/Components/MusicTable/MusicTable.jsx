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
                        <th className='title-header'>Title</th>
                        <th className='album-header'>Album</th>
                        <th className='artist-header'>Artist</th>
                        <th className='genre-header'>Genre</th>
                        <th className='releaseDate-header'>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                {songs.map((song) => (
                    <tr key={song.id}>
                        <td className='title-cell'>{song.title}</td>
                        <td className='album-cell'>{song.album}</td>
                        <td className='artist-cell'>{song.artist}</td>
                        <td className='genre-cell'>{song.genre}</td>
                        <td className='releaseDate-cell'>{song.release_date}</td>
                    </tr>

                ))}
            </tbody>
        </table>
        </div>
    );
};

export default MusicTable;
