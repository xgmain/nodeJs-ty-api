// const DB = require("../../database/db.json");
// const { saveToDatabase } = require("../../database/json/utils");
// const { v4: uuid } = require("uuid");

// const index = (req) => {
//     const {
//         params: { page, size },
//     } = req;

//     const filterParams = req.query;

//     try {
//         let musics = paginator(DB.musics, page, size).data

//         if (filterParams.mode) {
//             return musics.filter((music) =>
//                 music.mode.toLowerCase().includes(filterParams.mode)
//             );
//         }

//         if (filterParams.equipment) {
//             return musics.filter((music) =>
//                 music.equipment.includes(filterParams.equipment)
//             );
//         }

//         if (filterParams.sortBy) {
//             return musics.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
//         }
        
//         return musics;
//     } catch (error) {
//         throw error;
//     }
// };

// const show = (musicId) => {
//     try {
//         return DB.musics.find((music) => music.id === musicId);
//     } catch (error) {
//         throw error;
//     }
// };
  
// const create = (musicToinsert) => {
//     const music = {
//         ...musicToinsert,
//         id: uuid(),
//         createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
//         updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
//     };

//     try {
//         const isAlreadyAdded = DB.musics.findIndex((musicToinsert) => music.name === musicToinsert.name) > -1;

//         if (isAlreadyAdded) {
//             throw {
//                 status: 400,
//                 message: `music with the name '${musicToinsert.name}' already exists`,
//             };
//         }

//         DB.musics.push(musicToinsert);
//         saveToDatabase(DB);
//         return musicToinsert;
      
//     } catch (error) {
//         throw { status: error?.status || 500, message: error?.message || error };
//     }
// };
  
// const update = (musicId, changes) => {
//     try {
//         const isAlreadyAdded = DB.musics.findIndex((music) => music.name === changes.name) > -1;

//         if (isAlreadyAdded) {
//             throw {
//                 status: 400,
//                 message: `music with the name '${changes.name}' already exists`,
//             };
//         }

//         const indexForUpdate = DB.musics.findIndex(
//           (music) => music.id === musicId
//         );

//         if (indexForUpdate === -1) {
//             throw {
//                 status: 400,
//                 message: `Can't find music with the id '${musicId}'`,
//             };
//         }

//         const updatedmusic = {
//             ...DB.musics[indexForUpdate],
//             ...changes,
//             updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
//         };

//         DB.musics[indexForUpdate] = updatedmusic;
//         saveToDatabase(DB);
//         return updatedmusic;

//       } catch (error) {
//         throw { status: error?.status || 500, message: error?.message || error };
//       }
// };

// const paginator = (items, page, per_page) => {
//     var page = page || 1,
//     per_page = per_page || 10,
//     offset = (page - 1) * per_page,
  
//     paginatedItems = items.slice(offset).slice(0, per_page),
//     total_pages = Math.ceil(items.length / per_page);

//     return {
//         page: page,
//         per_page: per_page,
//         pre_page: page - 1 ? page - 1 : null,
//         next_page: (total_pages > page) ? page + 1 : null,
//         total: items.length,
//         total_pages: total_pages,
//         data: paginatedItems
//     };
// }
  
// module.exports = {
//     index,
//     show,
//     create,
//     update,
// };