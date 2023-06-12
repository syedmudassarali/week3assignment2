const Player=require('../models/Player');

// @desc Add New Player
// @route POST /api/v1/player/enroll
// @access Public
exports.Enroll= async(req,res,next) => {
    const player= await Player.create(req.body);
    res.status(201).json({success:true, data: player, msg:"Added new Player"});
}

// @desc List of all Player
// @route GET /api/v1/player
// @access Public
exports.Players= async (req,res,next) => {
    try {
        const players=await Player.find();
        res.status(200).json({success:true, data: players, msg:"Players Listed"});
    } catch (error) {
        res.status(400).json({success:false, msg:"Player not found"});
    }
    
}

// @desc List single player
// @route GET /api/v1/user/:id
// @access Public
exports.getPlayer= async (req,res,next) => {
    try {
        const player=await Player.findById(req.params.id);
        res.status(200).json({success:true, data: player, msg:"Player Listed"});
    } catch (error) {
        res.status(400).json({success:false, msg:"Player not found"});
    }
    
}
// @desc Update single player
// @route GET /api/v1/user/:id
// @access Public
exports.updatePlayer= async (req,res,next) => {
    const user=await Player.findByIdAndUpdate(req.params.id, req.body, {
        new :true,
        runValidators: true
    });
    if(!user){
        return res.status(400).json({success:false});
    }
    res.status(200).json({success:true, data:user});
}
// @desc Delet single player
// @route DELETE /api/v1/player/:id
// @access Public

exports.deletePlayer= async (req,res,next) => {
    const user=await Player.findByIdAndDelete(req.params.id, req.body, {
        new :true,
        runValidators: true
    });
    if(!user){
        return res.status(400).json({success:false});
    }
    res.status(200).json({success:true, data:user});
}


