import { faker } from '@faker-js/faker';
import Music from '../models/Music.js';

const musics = [];

new Music({
    name: faker.name.firstName(),
    mode: 'mtv'
})

for (let i = 0; i < 100; i++) {
    musics[i] = new Music({
        name: faker.name.firstName(),
        mode: faker.helpers.arrayElement(['song', 'mtv']) 
    })
}

let done = 0;

export const seedData = async () => {
    try {
      await Music.deleteMany({});
  
      for (let i = 0; i < musics.length; i++) {
        musics[i].save(function (err, result) {
            done++;
        });
      }
    } catch (err) {
      console.error(err);
    }
  
    console.log("Mock data is seeded from seed script.");
};