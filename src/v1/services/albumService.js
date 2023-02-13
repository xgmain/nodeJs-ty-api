// const DB = require("../../database/db.json");
// const { saveToDatabase } = require("../../database/json/utils");

// const show = (musicId) => {
//     try {
//       const album = DB.albums.filter((album) => album.music.includes(musicId) );

//       if (!album) {
//           throw {
//               status: 400,
//               message: `Can't find album with the id '${musicId}'`,
//           };
//       }
//       return album;

//     } catch (error) {
//         throw error;
//     }
// };

// module.exports = { show };