import React from "react";
import "./SongTable.css";

const SongTable = (props) => {
  let renderedRows = props.songs.map((song) => {
    return (
      <tr key={song.id}>
        <th scope="col">{song.id}</th>
        <td>{song.title}</td>
        <td>{song.album}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td>
        <td>{song.releaseDate}</td>
      </tr>
    );
  });

  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Album</th>
          <th scope="col">Artist</th>
          <th scope="col">Genre</th>
          <th scope="col">Release Date</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default SongTable;
