const router = require('express').Router();
const { inputArtwork,listArtwork,viewImageArt} = require('../controllers/artwork.controllers');
const { image } = require('../libs/multer');

router.put('/upload', image.single('imageArt'), inputArtwork);
router.get('/list', listArtwork);
router.get('/view/:fileId', viewImageArt);
module.exports = router;