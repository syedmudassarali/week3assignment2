const express=require('express');
const {Enroll,Players, getPlayer, updatePlayer, deletePlayer}=require('../controllers/player');

const router=express.Router();
router
.route('/')
.post(Enroll);

router
.route('/')
.get(Players);

router
.route('/:id')
.get(getPlayer);

router
.route('/:id')
.put(updatePlayer);

router
.route('/:id')
.delete(deletePlayer);

module.exports= router;