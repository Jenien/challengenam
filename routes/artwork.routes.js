const router = require('express').Router();
const { inputArtwork,listArtwork,viewImageArt,deleteImageArt} = require('../controllers/artwork.controllers');
const { image } = require('../libs/multer');

router.put('/upload', image.single('imageArt'), inputArtwork);
router.get('/list', listArtwork);
router.get('/view/:fileId', viewImageArt);
router.delete('/delete/:fileId', deleteImageArt);
module.exports = router;