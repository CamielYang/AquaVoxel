// Helpers
import randomInRange from './helpers/randomInRange.js';
import { createFish, createFishes } from './helpers/fish.js';

// Models
import goldfish from './voxelModels/goldfish.js';
import smallfish from './voxelModels/smallfish.js';
import angelfish from './voxelModels/angelfish.js';

const fishes = [
    {
        model: voxelModels.clownfish.model,
        count: randomInRange(1, 2),
    },
    {
        model: voxelModels.goldfish.model,
        count: randomInRange(3, 5),
    },
    {
        model: voxelModels.smallfish.model,
        count: 15,
    },
    {
        model: voxelModels.angelfish.model(),
        count: randomInRange(1, 3),
    },
    {
        model: voxelModels.angelfish.model('#5d2260', '#eaeaea'),
        count: randomInRange(1, 3),
    }
]

createFishes(fishes);
// createFishShowcase(voxelModels.smallfish.model);
