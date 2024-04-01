import './App.css';

// Sample data
const albums = [
  { name: 'Album 1', artist: 'Artist 1', genre: 'Pop', ratings: 3.5 },
  { name: 'Album 2', artist: 'Artist 2', genre: 'Rock', ratings: 4.2 },
  { name: 'Album 3', artist: 'Artist 3', genre: 'Jazz', ratings: 2.8 },
];

const music = [
  { title: 'Song 1', artist: 'Artist 1', genre: 'Pop', ratings: 3.7 },
  { title: 'Song 2', artist: 'Artist 2', genre: 'Rock', ratings: 4.5 },
  { title: 'Song 3', artist: 'Artist 3', genre: 'Jazz', ratings: 2.3 },
];

const musicians = [
  { name: 'Musician 1', genre: 'Pop', ratings: 4.1 },
  { name: 'Musician 2', genre: 'Rock', ratings: 3.8 },
  { name: 'Musician 3', genre: 'Jazz', ratings: 4.3 },
];

const MusicianComponent = ({ musician }) => {
  const { name, genre, ratings } = musician;

  const ratingStyle = {
    color: ratings >= 4 ? 'green' : ratings >= 2 ? 'orange' : 'red',
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Genre: {genre}</p>
      <p>
        Ratings: <span style={ratingStyle}>{ratings}</span>
      </p>
    </div>
  );
};

const MusicComponent = ({ music }) => {
  const { title, artist, genre, ratings } = music;

  const ratingStyle = {
    color: ratings >= 4 ? 'green' : ratings >= 2 ? 'orange' : 'red',
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Genre: {genre}</p>
      <p>
        Ratings: <span style={ratingStyle}>{ratings}</span>
      </p>
    </div>
  );
};

const AlbumComponent = ({ album }) => {
  const { name, artist, genre, ratings } = album;

  const ratingStyle = {
    color: ratings >= 4 ? 'green' : ratings >= 2 ? 'orange' : 'red',
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Artist: {artist}</p>
      <p>Genre: {genre}</p>
      <p>
        Ratings: <span style={ratingStyle}>{ratings}</span>
      </p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Welcome to Music Record Shop</h1>
      <h2>Albums</h2>
      {albums.map((album, index) => (
        <AlbumComponent key={index} album={album} />
      ))}
      <h2>Music</h2>
      {music.map((song, index) => (
        <MusicComponent key={index} music={song} />
      ))}
      <h2>Musicians</h2>
      {musicians.map((musician, index) => (
        <MusicianComponent key={index} musician={musician} />
      ))}
    </div>
  );
}

export default App;
