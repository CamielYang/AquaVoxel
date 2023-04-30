// Helpers
import './helpers/ui.js';
import randomInRange from './helpers/randomInRange.js';
import { createFish, createFishes, createFishShowcase } from './helpers/fish.js';

// Models
import voxelModels from './constants/voxelModels.js';

// const fishes = [
//     {
//         model: voxelModels.clownfish.model,
//         count: randomInRange(1, 2),
//     },
//     {
//         model: voxelModels.goldfish.model,
//         count: randomInRange(3, 5),
//     },
//     {
//         model: voxelModels.smallfish.model,
//         count: 10,
//     },
//     {
//         model: voxelModels.angelfish.model(),
//         count: randomInRange(2, 3),
//     },
//     {
//         model: voxelModels.angelfish.model('#5d2260', '#eaeaea'),
//         count: randomInRange(2, 3),
//     },
//     {
//         model: voxelModels.pufferfish.model,
//         count: randomInRange(1, 2),
//     },
// ]

// createFishes(fishes);

createFish(voxelModels.testFish.model);