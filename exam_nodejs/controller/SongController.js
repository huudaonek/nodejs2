const songService = require("../service/Songservice");

exports.get_all_songs = async (req, res) => {
  try {
    const songs = await songService.get_all_songs();
    res.json({ data: songs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.add_a_new_song = async (req, res) => {
  try {
    const song = await songService.add_a_new_song(req.body);
    res.json({ data: song, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.get_a_specific_song_by_ID = async (req, res) => {
  try {
    const songId = req.params.id;
    const song = await songService.get_a_specific_song_by_ID(songId);
    res.json({ data: song, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.update_a_song_by_ID = async (req, res) => {
  try {
    const songId = req.params.id;
    const updatedSong = await songService.update_a_song_by_ID(songId, req.body);
    res.json({ data: updatedSong, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete_a_song_by_ID = async (req, res) => {
  try {
    const songId = req.params.id;
    const deletedSong = await songService.delete_a_song_by_ID(songId);
    res.json({ data: deletedSong, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
