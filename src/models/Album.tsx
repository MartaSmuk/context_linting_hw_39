export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface AlbumsContextInterface {
  albums: Album[];
  setAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
}
