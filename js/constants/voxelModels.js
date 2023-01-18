// Models
import angelfish from "../voxelModels/angelfish.js";
import clownfish from "../voxelModels/clownfish.js";
import goldfish from "../voxelModels/goldfish.js";
import smallfish from "../voxelModels/smallfish.js";
import pufferfish from "../voxelModels/pufferfish.js";

const voxelModels = {
    'smallfish': {
        image: 'images/smallfish.png',
        model: smallfish,
    },
    'goldfish': {
        image: 'images/goldfish.png',
        model: goldfish,
    },
    'clownfish': {
        image: 'images/clownfish.png',
        model: clownfish,
    },
    'angelfish': {
        image: 'images/angelfish.png',
        model: angelfish,
    },
    'pufferfish': {
        image: 'images/pufferfish.png',
        model: pufferfish,
    },
};

export default voxelModels;
