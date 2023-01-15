// Helpers
import randomInRange from './helpers/randomInRange.js';
import { createFish, createFishes } from './helpers/fish.js';

// Models
import goldfish from './voxelModels/goldfish.js';
import smallfish from './voxelModels/smallfish.js';

const fishes = [
    {
        id: 'goldfish',
        model: goldfish,
        count: randomInRange(15, 20),
    },
    {
        id: 'smallfish',
        model: smallfish,
        count: randomInRange(20, 25),
    },
]

createFishes(fishes);

// createFish('goldfish', goldfish);