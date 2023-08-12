import React, { useState } from "react";
export const MixtapeContext = React.createContext()

export const MixtapeProvider = ({children, songs}) => {
    const [sortOrder, setSotOrder] = useState("dscending");
    const [genre, setGenre] = useState("all");
    return (
    <MixtapeContext.Provider value={{songs, sortOrder, setSotOrder, genre, setGenre}}>
        {children}
    </MixtapeContext.Provider>)
}
