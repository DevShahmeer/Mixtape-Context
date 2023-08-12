import React, { useContext } from "react";
import { Song } from "./Song";
import { MixtapeContext } from "./MaxtapeContext";

export const SongList = () => {
  // Your code here! ✨
    const {genre, sortOrder,songs} = useContext(MixtapeContext);
    const filteredSongs = genre === "all" ? songs : songs.filter(song => song.genre === genre);
    const sortedSongs = [...filteredSongs].sort((a,b)=> {
        if(sortOrder === "ascending"){
        return a.year - b.year;
    } else {
        return b.year - a.year;
        }
    })
    return (
        <>
            <h2>TODO: Update taste in music...?</h2>
            {sortedSongs.map((song, index) => (
            <Song 
            artist={song.artist}
            genre={song.genre} 
            name={song.name} 
            year={song.year}
            key={index} />
            ))}
        </>
    );
};
