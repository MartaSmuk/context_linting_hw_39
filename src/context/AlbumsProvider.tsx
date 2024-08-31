import { createContext, useState, useEffect, ReactNode } from "react"
import { Album, AlbumsContextInterface } from "../models/Album";

// interface Album {
//     userId: number;
//     id: number;
//     title: string;
//   }

export const AlbumsContext = createContext<AlbumsContextInterface | null>(null);

function AlbumsProvider({children}: { children: ReactNode }) {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then((data: Album[]) => setAlbums(data))
            .catch(error => console.error("Error fetching albums:", error));
    }, []);

    const albumsValueToExport = { albums, setAlbums };

    return (
        <AlbumsContext.Provider value={albumsValueToExport}>
            {children}
        </AlbumsContext.Provider>
    )
}

export default AlbumsProvider;

