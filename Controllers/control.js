const Room = require("../Models/room");
const {StatusCodes} = require("http-status-codes");

const getAllRooms = async (req,res)=>{
    const room = await Room.find()
    res.status(StatusCodes.OK).json({room})
}

const getRoom = async (req,res)=>{
    const roomId = req.params.id;
    const room = await Room.findById({_id:roomId});
    res.status(StatusCodes.OK).json({room});
}

const createRoom = async (req,res)=>{
    const focus = await Room.create({
        name:req.body.name,
        room:req.body.room,
        energy:req.body.energy

    });
    res.status(StatusCodes.CREATED).json({focus});
}

const updateRoom = async (req,res)=>{
    const id = req.body.room;
    const room = await Room.findOneAndUpdate({room:id},req.body,{new:true, runValidators:true});
    res.status(StatusCodes.OK).json({room});
}

module.exports = {
    getAllRooms,
    getRoom,
    createRoom,
    updateRoom
}
