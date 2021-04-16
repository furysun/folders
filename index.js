import css from '/styles.css';
import material from '/material-icons/material-icons.css';

const data = [
    {
        'folder': true,
        'title': 'Pictures',
        'children': [
            {
                'title': 'logo.png'
            },
            {
                'folder': true,
                'title': 'Vacations',
                'children': [
                    {
                        'title': 'spain.jpeg'
                    }
                ]
            }
        ]
    },
    {
        'folder': true,
        'title': 'Desktop',
        'children': [
            {
                'folder': true,
                'title': 'screenshots',
                'children': null
            }
        ]
    },
    {
        'folder': true,
        'title': 'Downloads',
        'children': [
            {
                'folder': true,
                'title': 'JS',
                'children': null
            },
            {
                'title': 'nvm-setup.exe'
            },
            {
                'title': 'node.exe'
            }
        ]
    },
    {
        'title': 'credentials.txt'
    }
];

const rootNode = document.getElementById('root');

// TODO: your code goes here

(() => {
    renderList(data, rootNode, false);
})();

function renderList(data, el, contentHidden) {
    const ulElement = document.createElement('ul');

    if (contentHidden) {
        ulElement.style.display = 'none';
    }

    data.forEach((dataEl) => {
        const titleLi = createTitleLi(dataEl);
        ulElement.appendChild(titleLi);

        if (dataEl.children) {
            const containerLi = createContainerLi(dataEl);
            ulElement.appendChild(containerLi);
        } else if (dataEl.folder) {
            const emptyFolderLi = createEmptyFolderLi();
            ulElement.appendChild(emptyFolderLi);
        }
    });

    el.appendChild(ulElement);
}

function createEmptyFolderLi(displayEmptyFolder) {
    const emptyFolderLi = document.createElement('li');
    const emptyFolderUl = document.createElement('ul');
    if (!displayEmptyFolder) {
        emptyFolderUl.style.display = 'none';
    }

    const emptyFolderLiInner = document.createElement('li');
    const emptyFolderLiInnerText = document.createTextNode('Empty folder');

    emptyFolderLiInner.appendChild(emptyFolderLiInnerText);
    emptyFolderUl.appendChild(emptyFolderLiInner);
    emptyFolderLi.appendChild(emptyFolderUl);
    emptyFolderLi.setAttribute('class', 'empty-folder');

    return emptyFolderLi;
}

function createTitleLi(dataEl) {
    const liElement = document.createElement('li');

    const iconElement = createIcon(dataEl.folder);
    const liText = document.createTextNode(dataEl.title);

    liElement.appendChild(iconElement);
    liElement.appendChild(liText);

    liElement.onclick = openOrCloseFolder;
    liElement.oncontextmenu = showContextMenu;

    return liElement;
}

function showContextMenu(event) {
    event.preventDefault();

    const targetElement = event.target;
    targetElement.style.backgroundColor = 'darkgrey';

    const menuBackground = createMenuBackground(targetElement);

    const menu = document.createElement('ul');
    menu.setAttribute('class', 'menu');
    menu.style.marginLeft = event.clientX + 'px';
    menu.style.marginTop = event.clientY + 'px';

    const renameElement = createRenameElement(targetElement);
    const deleteElement = createDeleteElement(targetElement);

    menu.appendChild(renameElement);
    menu.appendChild(deleteElement);

    menuBackground.appendChild(menu);
    rootNode.appendChild(menuBackground);
    rootNode.style.position = 'relative';
}

function createRenameElement(targetElement) {
    const renameElement = document.createElement('li');
    const renameElementText = document.createTextNode('Rename');
    renameElement.appendChild(renameElementText);

    renameElement.onclick = (e) => {
        if (targetElement.tagName === 'I') {
            clickRename(e, targetElement.parentNode);
        } else {
            clickRename(e, targetElement);
        }
    };

    return renameElement;
}

function createDeleteElement(targetElement) {
    const deleteElement = document.createElement('li');
    const deleteElementText = document.createTextNode('Delete');
    deleteElement.appendChild(deleteElementText);

    deleteElement.onclick = () => {
        clickDelete(targetElement);
    };

    return deleteElement;
}

function clickDelete(targetElement) {
    const parent = targetElement.parentNode;

    if (targetElement.tagName === 'I') {
        targetElement.parentElement.remove();
    } else {
        if (targetElement.nextElementSibling && targetElement.nextElementSibling.getAttribute('class') === 'empty-folder') {
            targetElement.nextElementSibling.remove();
        } else if (targetElement.nextElementSibling && targetElement.nextElementSibling.tagName === 'DIV') {
            targetElement.nextElementSibling.remove();
        }
        targetElement.remove();
    }

    if (parent.childNodes.length === 0) {
        const parentUl = parent.parentElement.parentElement;
        parent.parentElement.remove();
        const emptyFolderLi = createEmptyFolderLi(true);

        parentUl.appendChild(emptyFolderLi);
    }
}

function createMenuBackground(targetElement) {
    const menuBackground = document.createElement('div');
    menuBackground.setAttribute('class', 'menu-background');
    menuBackground.style.position = 'absolute';

    menuBackground.onclick = (e) => {
        e.preventDefault();
        closeMenu(targetElement);
    };

    menuBackground.oncontextmenu = (e) => {
        e.preventDefault();
        closeMenu(targetElement);
    };

    return menuBackground;
}

function clickRename(e, targetElement) {
    const text = targetElement.childNodes[1].textContent;
    targetElement.removeChild(targetElement.childNodes[1]);

    const nameInput = document.createElement('input');
    nameInput.setAttribute('value', text);

    targetElement.appendChild(nameInput);

    nameInput.addEventListener('focus', function () {
        if (text.includes('.')) {
            this.setSelectionRange(0, text.split('.')[0].length);
        } else {
            this.select();
        }
    });

    nameInput.addEventListener('focusout', function (e) {
        const targetElement = e.target;
        const value = e.target.value;

        const text = document.createTextNode(value);

        const parent = targetElement.parentNode;
        parent.removeChild(targetElement.parentNode.childNodes[1]);
        parent.appendChild(text);
    });

    nameInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            const targetElement = e.target;
            const value = e.target.value;

            const text = document.createTextNode(value);

            const parent = targetElement.parentNode;

            try {
                parent.removeChild(targetElement.parentNode.childNodes[1]);
                parent.appendChild(text);
            } catch (e) {
                // can be deleted during focusout event
            }
        }
    });

    nameInput.focus();
}

function closeMenu(targetElement) {
    rootNode.childNodes.forEach((node) => {
        if (node.tagName === 'DIV') {
            rootNode.removeChild(node);
        }
    });

    targetElement.style.backgroundColor = 'white';
}

function createContainerLi(dataEl) {
    const containerLi = document.createElement('div');

    renderList(dataEl.children, containerLi, true);

    return containerLi;
}

function createIcon(isFolder) {
    const iconElement = document.createElement('i');
    iconElement.setAttribute('class', 'material-icons ' + (isFolder ? 'icon-orange' : 'icon-grey'));
    const iconText = document.createTextNode(isFolder ? 'folder' : 'insert_drive_file');
    iconElement.appendChild(iconText);

    return iconElement;
}

function openOrCloseFolder(event) {
    const targetElement = event.target;

    if (targetElement.tagName === 'I') {
        if (targetElement.parentElement.nextElementSibling) {
            const ulUnderIcon = targetElement.parentElement.nextElementSibling.firstChild;
            if (ulUnderIcon.tagName === 'UL') {
                ulUnderIcon.style.display = ulUnderIcon.style.display === 'none' ? 'block' : 'none';
            }

            const iconElement = targetElement.firstChild;
            if (iconElement && iconElement.parentElement.parentElement.getAttribute('class') !== 'empty-folder') {
                swapFolderIcon(iconElement);
            }
        }

        return 1;
    }

    if (targetElement.nextElementSibling) {
        const iconElement = targetElement.firstChild;

        targetElement.nextElementSibling.childNodes.forEach((el) => {
            if (el.tagName === 'UL') {
                swapFolderIcon(iconElement);
                el.style.display = el.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
}

function swapFolderIcon(iconElement) {
    if (iconElement.textContent === 'folder') {
        iconElement.textContent = 'folder_open';
    } else if (iconElement.textContent === 'folder_open') {
        iconElement.textContent = 'folder';
    }
}