
"use client";
import {React, useEffect, useState} from 'react';
import { fetchSongs } from "../../utils/fetchSongs"; // Import the fetch function


export default function Singles() {
    const [songs, setSongs] = useState([]); // State to store songs
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [currentAudio, setCurrentAudio] = useState(null); // Track the currently playing audio


    useEffect(() => {
        async function loadSongs() {
            const data = await fetchSongs(); // Fetch songs from Firebase
            setSongs(data); // Set the songs in state
            setLoading(false); // Turn off loading
        }
        loadSongs();
    }, []);

    if (loading) {
        return <div>Loading songs...</div>;
    }

    const playAudio = (audioUrl) => {
        if (currentAudio) {
          currentAudio.pause();
          setCurrentAudio(null)
          return
        }
        
        const audio = new Audio(audioUrl); // Create a new audio instance
        audio.play(); // Start playback
        setCurrentAudio(audio); // Track the current audio
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {songs.map((song) => (
            <div
            key={song.id}
            className="p-4 bg-gray-800 rounded-md cursor-pointer"
            onClick={() => playAudio(song.audio)} // Play the MP3 on click
            >
            <img
                src={song.cover}
                alt={song.title || "No title"}
                className="w-full h-auto rounded-md"
            />
            <h2 className="text-lg font-bold mt-2">{song.title}</h2>
            <p className="text-sm text-gray-400">{song.artist}</p>
            <p className="text-sm text-gray-400">{song.duration}</p>
            </div>
        ))}
        </div>
    );
}
