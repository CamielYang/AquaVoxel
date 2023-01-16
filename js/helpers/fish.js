import createVoxelModel from "./voxel.js";
import randomInRange from "./randomInRange.js";
import cssShortestRotate from "./cssShortestRotate.js";

const scene = document.querySelector('.scene');

function createFish(fishModel) {
    const fish = {
        position: {
            x: 0,
            y: 0,
            z: 0,
            rotateY: 0,
            rotateZ: 0,
        },
        element: createVoxelModel(fishModel)
    }

    scene.appendChild(fish.element);
    moveFish(fish, randomInRange(0, 1000));
}

function rotateFishStyling(fish, currentPos, newPos) {
    const radianZ = (Math.abs(newPos.x - currentPos.x) > Math.abs(newPos.z - currentPos.z))
        ? Math.atan2(Math.abs(newPos.x - currentPos.x), newPos.y - currentPos.y)
        : Math.atan2(Math.abs(newPos.z - currentPos.z), newPos.y - currentPos.y);
    const degreeZ = (radianZ * (180 / Math.PI) * -1) + 90;

    const radianY = Math.atan2(newPos.x - currentPos.x, newPos.z - currentPos.z);
    const degreeY = radianY * (180 / Math.PI) - 90;

    fish.position.rotateY = cssShortestRotate(currentPos.rotateY, degreeY);
    fish.position.rotateZ = degreeZ;

    fish.element.querySelector('.voxel-rotation').style.transform = `
        rotateY(${fish.position.rotateY}deg)
        rotateZ(${fish.position.rotateZ}deg)
    `;
}

function moveFish(fish, duration) {
    if (!fish.element.parentElement) {
        return;
    }

    const newDuration =  randomInRange(2500, 10000);
    const currentPos = structuredClone(fish.position);
    fish.position.x = randomInRange(0, window.innerWidth);
    fish.position.y = randomInRange(0, window.innerHeight);
    fish.position.z = randomInRange(-500, 0);

    rotateFishStyling(fish, currentPos, fish.position);
    fish.element.style.transitionDuration = `${duration}ms`;
    fish.element.style.zIndex = fish.position.z;
    fish.element.style.transform = `translate3d(${fish.position.x}px, ${fish.position.y}px, ${fish.position.z}px)`;

    setTimeout(() => moveFish(fish, newDuration), duration);
}

function createFishes(fishesData) {
    fishesData.forEach(fishData => {
        for (let i = 0; i < fishData.count; i++) {
            createFish(fishData.model);
        }
    });
}

export {
    createFish,
    createFishes,
};
