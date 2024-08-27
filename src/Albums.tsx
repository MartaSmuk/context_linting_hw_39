import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Album {
    userId: number;
    id: number;
    title: string;
  }

export function Albums() {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then((data: Album[]) => setAlbums(data))
            .catch(error => console.error("Error fetching albums:", error));
    }, []);

    return(
        <>
            <h1>Our Albums</h1>
            {
                albums.map( album => (
                    <Link key={album.id} to={`/albums/${album.id}`}>
                        <li>{album.title}</li>
                    </Link>
                ))
            }
        </>
    )
}