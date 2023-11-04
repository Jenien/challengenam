const router = require('express').Router();
const authenticate = require('./auth.routes');
const  Artwork = require('./artwork.routes');
const { restrinct } = require('../middlewares/auth.middlewares');

router.use('/authenticate', authenticate);
router.use('/artwork', restrinct,  Artwork);

module.exports = router;