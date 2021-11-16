import "./styles.css";
import { Component } from "react";
import axios from "axios";

//Import Components
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SongTable from "./components/SongTable/SongTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    this.fetchSongs();
  }

  fetchSongs = async () => {
    try {
      let response = await axios.get(
        "http://www.devcodecampmusiclibrary.com/api/music"
      );
      this.setState({
        songs: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  filterSongs = (filterTerm) => {
    let normalizedTerm = filterTerm.toLowerCase();
    if (normalizedTerm === "") {
      return this.fetchSongs();
    }
    let filteredSongs = this.state.songs.filter((song) => {
      if (
        song.title.toLowerCase().includes(normalizedTerm) ||
        song.album.toLowerCase().includes(normalizedTerm) ||
        song.genre.toLowerCase().includes(normalizedTerm) ||
        song.artist.toLowerCase().includes(normalizedTerm) ||
        song.releaseDate.toLowerCase().includes(normalizedTerm)
      ) {
        return true;
      }
    });
    this.setState({
      songs: filteredSongs,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <NavBar filterSongs={this.filterSongs} />
        {this.state.songs.length > 0 ? (
          <SongTable songs={this.state.songs} />
        ) : null}
        <Footer />
      </div>
    );
  }
}

export default App;
