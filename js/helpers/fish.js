import createVoxelModel from "./voxel.js";
import randomInRange from "./randomInRange.js";

function createFish(fishId, fishModel) {
    const fish = {
        position: {
            x: 0,
            y: 0,
            z: 0,
            rotateY: 0,
            rotateZ: 0,
        },
        element: createVoxelModel(fishId, fishModel)
    }

    document.body.appendChild(fish.element);
    // rotateFishStyling(fish, fish.position, { x: 0, y: 10, z: 10});
    moveFish(fish, randomInRange(0, 1000));
}

function rotateFishStyling(fish, currentPos, newPos) {
    const radianZ = Math.atan2(Math.abs(newPos.x - currentPos.x), newPos.y - currentPos.y);
    const degreeZ = (radianZ * (180 / Math.PI) * -1) + 90;

    const radianY = Math.atan2(newPos.x - currentPos.x, newPos.z - currentPos.z);
    const degreeY = radianY * (180 / Math.PI) - 90;

    fish.position.rotateY = degreeY;
    fish.position.rotateZ = degreeZ;

    fish.element.querySelector('.voxel-rotation').style.transform = `
        rotateY(${fish.position.rotateY}deg)
        rotateZ(${fish.position.rotateZ}deg)
    `;
}

function moveFish(fish, duration) {
    const element = fish.element;
    const newDuration =  randomInRange(2500, 10000);
    const currentPos = structuredClone(fish.position);
    fish.position.x = randomInRange(0, window.innerWidth);
    fish.position.y = randomInRange(0, window.innerHeight);
    fish.position.z = randomInRange(0, -500);

    rotateFishStyling(fish, currentPos, fish.position);

    element.style.transitionDuration = `${duration}ms`;
    element.style.transform = `
        translateX(${fish.position.x}px)
        translateY(${fish.position.y}px)
        translateZ(${fish.position.z}px)
    `;

    setTimeout(() => moveFish(fish, newDuration), duration);
}

function createFishes(fishesData) {
    fishesData.forEach(fishData => {
        for (let i = 0; i < fishData.count; i++) {
            createFish(fishData.id, fishData.model);
        }
    });
}

export {
    createFish,
    createFishes,
};
