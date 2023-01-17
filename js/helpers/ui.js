// Helpers
import { createIconButton, createElement } from "./createElement.js";
import { createFish } from "../helpers/fish.js";

// Models
import voxelModels from "../constants/voxelModels.js";

let selectedFish;

function renderEditMenu() {
    const editMenu = document.createElement('div');
    editMenu.classList.add('edit-menu');

    const deleteButton = createIconButton('delete', {
        onclick: () => {
            selectedFish?.remove();
            selectedFish = null;

            setTimeout(() => {
                document.querySelector('.edit-menu').classList.remove('is--visible');
            }, 100);
        }
    });

    editMenu.appendChild(deleteButton);
    document.body.appendChild(editMenu);
};

function renderFishMenu() {
    const fishMenuContainer = createElement('div', 'fish-menu-container');

    const menuButton = createIconButton('menu', {
        onclick: () => {
            document.querySelector('.fish-menu-container').classList.toggle('is--visible');
            const buttonIcon = document.querySelector('.fish-menu-container__button span').textContent;
            document.querySelector('.fish-menu-container__button span').textContent = buttonIcon == 'close' ? 'menu' : 'close';
        },
        className: 'fish-menu-container__button'
    });
    fishMenuContainer.appendChild(menuButton);

    const fishMenu = createElement('div', 'fish-menu');
    const fishMenuTitle = createElement('div', 'fish-menu__title', { innerText: 'Spawnlist' });
    fishMenu.appendChild(fishMenuTitle);

    Object.keys(voxelModels).forEach(key => {
        const fishItem = createElement('div', 'fish-menu__item');
        fishItem.addEventListener('click', () => {
            const model = voxelModels[key].model;
            const fish = typeof model === 'function' ? model() : model;
            createFish(fish);
        });

        const fishItemImg = createElement('img', undefined, { src: voxelModels[key].image });
        fishItem.appendChild(fishItemImg);

        const fishItemName = createElement('div', 'fish-menu__item__name', { innerText: key });
        fishItem.appendChild(fishItemName);

        fishMenu.appendChild(fishItem);
    });
    fishMenuContainer.appendChild(fishMenu);

    document.body.appendChild(fishMenuContainer);
}

renderEditMenu();
renderFishMenu();

window.onload = () => {
    document.querySelector('.scene').addEventListener('click', (e) => {
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
};
