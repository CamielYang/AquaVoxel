// Helpers
import randomInRange from './helpers/randomInRange.js';
import { createFish, createFishes } from './helpers/fish.js';

// Models
import voxelModels from './constants/voxelModels.js';

let selectedFish;
const fishes = [
    {
        model: voxelModels.clownfish.model,
        count: randomInRange(2, 3),
    },
    // {
    //     model: voxelModels.goldfish.model,
    //     count: randomInRange(6, 8),
    // },
    // {
    //     model: voxelModels.smallfish.model,
    //     count: 15,
    // },
    // {
    //     model: voxelModels.angelfish.model(),
    //     count: randomInRange(2, 4),
    // },
    // {
    //     model: voxelModels.angelfish.model('#5d2260', '#eaeaea'),
    //     count: randomInRange(2, 4),
    // }
]

createFishes(fishes);

document.body.addEventListener('click', e => {
    if (e.target.className === 'voxel-model') {
        if (selectedFish) {
            selectedFish.classList.remove('selected');
        }
        selectedFish = e.target;
        selectedFish.classList.add('selected');
        document.querySelector('.edit-menu').classList.add('is--visible');
    }
    else {
        if (selectedFish) {
            selectedFish.classList.remove('selected');
        }
        document.querySelector('.edit-menu').classList.remove('is--visible');
    }
});

// createFish(voxelModels.angelfish.model());