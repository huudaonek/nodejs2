const express = require("express");
const {
  get_all_songs,
  add_a_new_song,
  get_a_specific_song_by_ID,
  update_a_song_by_ID,
  delete_a_song_by_ID,
} = require("../controller/SongController");

const router = express.Router();

router.route("/").get(get_all_songs).post(add_a_new_song);
router
  .route("/:id")
  .get(get_a_specific_song_by_ID)
  .put(update_a_song_by_ID)
  .delete(delete_a_song_by_ID);

module.exports = router;
