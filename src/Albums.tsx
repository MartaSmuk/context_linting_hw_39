import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AlbumsContext } from './context/AlbumsProvider';
import { Album } from './models/Album.tsx';

export function Albums() {
  const context = useContext(AlbumsContext);

  if (!context) {
    return <div>Error: Albums context is not available.</div>;
  }

  const { albums } = context;

  return (
    <>
      <h1>Our Albums</h1>
      <ul>
        {albums.map((album: Album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
