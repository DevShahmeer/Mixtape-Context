import React, { useContext } from "react";
import { MixtapeContext } from "./MaxtapeContext";

export const Controls = () => {
    const { genre, sortOrder, setGenre, setSortOrder, songs } = useContext(MixtapeContext);

    const changeGenre = ({ target }) => {
        setGenre(target.value);
    }

    const toggleSortOrder = () => {
        setSortOrder(prevSortOrder => prevSortOrder === "ascending" ? "descending" : "ascending");
    }
    
    return (
        <div className="controls">
            <select onChange={changeGenre} value={genre}>
                <option value="all">All</option>
                <option value="hip hop">Hip Hop</option>
                <option value="rap">RAP</option>
                <option value="rock">Rock</option>
                <option value="pop">Pop</option>
            </select>
            <button onClick={toggleSortOrder}>{sortOrder}</button>
        </div>
    );
};
