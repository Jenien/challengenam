const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const imagekit = require('../libs/imagekit');
const path = require('path');

module.exports = {
  inputArtwork: async (req, res, next) => {
    try {
      let { title, description } = req.body;
      let strFile = req.file.buffer.toString('base64');

      const { url, fileId } = await imagekit.upload({
        fileName: Date.now() + path.extname(req.file.originalname),
        file: strFile,
      });

      const Artwork = await prisma.artwork.create({
        data: {
          userId: req.user.id,
          title,
          description,
          imageArt: url,
          fileId,
        }
      });

      if (!Artwork) {
        return res.status(400).json({
          status: false,
          message: 'Bad Request!',
          err: 'user id does not exist',
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: 'OK!',
        err: null,
        data: { Artwork },
      });
    } catch (err) {
      next(err);
    }
  },
  listArtwork: async (req, res, next) => {
    try {
      const userId = req.user.id;
  
      const userArtworkList = await prisma.artwork.findMany({
        where: {
          userId,
        }
      });
  
      return res.status(200).json({
        status: true,
        message: 'OK!',
        err: null,
        data: { artworkList: userArtworkList },
      });
    } catch (err) {
      next(err);
    }
  },
  viewImageArt : async (req, res, next) => {
    try {
      const fileId = req.params.fileId;
  
      const artwork = await prisma.artwork.findFirst({
        where: {
          fileId: fileId,
        },
        include: {
          user: true
        }
      });
  
      if (!artwork) {
        return res.status(404).json({
          status: false,
          message: 'Artwork not found',
          data: null
        });
      }
  
      return res.status(200).json({
        status: true,
        message: 'Success',
        data: artwork
      });
    } catch (error) {
      next(error);
    }
  },
};