const express = require("express");
const router = express.Router();
const {
    getAllRooms,
    getRoom,
    createRoom,
    updateRoom
} = require("../Controllers/control");

router.route("/").get(getAllRooms).post(createRoom).patch(updateRoom);
router.route("/:id").get(getRoom)

module.exports = router;