import { Controls } from "./components/Controls";
import { MixtapeProvider } from "./components/MaxtapeContext";
import { SongList } from "./components/SongList";
function App() {
  

  return (
    <MixtapeProvider songs={songs}>
      <div className="app">
        <h1 className="header">y 🔥 Mixtape</h1>
        TODO: make some music...? 🎶
        <Controls/>
        <SongList/>
      </div>
    </MixtapeProvider>
    

  )
}

export default App

const songs = [
  {
    artist: "Smash Mouth",
    genre: "pop",
    name: "All Star",
    year: 1999
  },
  {
    artist: "Drake",
    genre: "rap",
    name: "Hotline Bling",
    year: 2015
  },
  {
    artist: "Lizzo",
    genre: "hip hop",
    name: "Juice",
    year: 2019
  },
  {
    artist: "Rick Astley",
    genre: "rock",
    name: "Never Gonna Give You Up",
    year: 1987
  },
  {
    artist: "4 Non Blondes",
    genre: "rock",
    name: "What's Up",
    year: 1993
  }
];
