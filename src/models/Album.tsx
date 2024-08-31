// Define the Album interface
export interface Album {
  userId: number;
  id: number;
  title: string;
}

// Define the context interface
export interface AlbumsContextInterface {
  albums: Album[];
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
}
