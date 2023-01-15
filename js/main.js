// Helpers
import randomInRange from './helpers/randomInRange.js';
import { createFish, createFishes } from './helpers/fish.js';

// Models
import goldfish from './voxelModels/goldfish.js';
import smallfish from './voxelModels/smallfish.js';
import angelfish from './voxelModels/angelfish.js';

const fishes = [
    {
        id: 'goldfish',
        model: goldfish,
        count: randomInRange(10, 15),
    },
    {
        id: 'smallfish',
        model: smallfish,
        count: randomInRange(20, 25),
    },
    {
        id: 'angelfish',
        model: angelfish,
        count: randomInRange(2, 5),
    }
]

createFishes(fishes);
// createFish('goldfish', angelfish);