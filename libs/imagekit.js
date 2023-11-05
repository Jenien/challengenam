const imagekit = require('imagekit');

const imagekitClient = new imagekit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

module.exports = {
  deleteFile: async (fileId) => {
    try {
      const response = await imagekitClient.deleteFile(fileId);
      return response;
    } catch (error) {
      throw new Error(`Error deleting file: ${error.message}`);
    }
  },
};
