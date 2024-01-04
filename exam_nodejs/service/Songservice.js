const SongModel = require("../model/Song");

exports.get_all_songs = async () => {
  return await SongModel.find();
};

exports.add_a_new_song = async (songData) => {
  return await SongModel.create(songData);
};

exports.get_a_specific_song_by_ID = async (id) => {
  return await SongModel.findById(id);
};

exports.update_a_song_by_ID = async (id, updatedData) => {
  return await SongModel.findByIdAndUpdate(id, updatedData, { new: true });
};

exports.delete_a_song_by_ID = async (id) => {
  return await SongModel.findByIdAndDelete(id);
};
