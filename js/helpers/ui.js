import { createIconButton } from "./createElement.js";

let selectedFish;

function renderEditMenu() {
    const editMenu = document.createElement('div');
    editMenu.classList.add('edit-menu');

    const deleteButton = createIconButton('delete', () => {
        selectedFish?.remove();
        selectedFish = null;

        setTimeout(() => {
            document.querySelector('.edit-menu').classList.remove('is--visible');
        }, 100);
    });

    editMenu.appendChild(deleteButton);
    document.body.appendChild(editMenu);
};

renderEditMenu();

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