const nodeTitle = document.getElementById('nodeTitle');

nodeTitle.addEventListener('input', (event) => {
    nodeTitle.style.height = 'auto';
    nodeTitle.style.height = `${event.target.scrollHeight}px`;
})

const nodeDescription = document.getElementById('nodeDescription');

nodeDescription.addEventListener('input', (event) => {
    nodeDescription.style.height = 'auto';
    nodeDescription.style.height = `${event.target.scrollHeight}px`;
})





// Node Controller
controlerContainer = document.getElementById('controler-container');
widthHeightContro = document.getElementById('width-height-contro');
fontSizeContro = document.getElementById('font-size-contro');
coloContro = document.getElementById('colo-contro');

controlerContainerBox = document.querySelectorAll('.controler-container-box');
widthHeightContro.addEventListener('click', () => {
    if (widthHeightContro.classList.contains('node-controler-active')) {
        widthHeightContro.classList.remove('node-controler-active')
        controlerContainerBox[0].style.display = "none"
        controlerContainerBox[1].style.display = "none"


    } else {
        widthHeightContro.classList.add('node-controler-active')
        controlerContainerBox[0].style.display = "block"
        controlerContainerBox[1].style.display = "block"
    }
})

fontSizeContro.addEventListener('click', () => {
    if (fontSizeContro.classList.contains('node-controler-active')) {
        fontSizeContro.classList.remove('node-controler-active')
        controlerContainerBox[2].style.display = "none"
    } else {
        fontSizeContro.classList.add('node-controler-active')
        controlerContainerBox[2].style.display = "block"
    }
})

coloContro.addEventListener('click', () => {
    if (coloContro.classList.contains('node-controler-active')) {
        coloContro.classList.remove('node-controler-active')
        controlerContainerBox[3].style.display = "none"
    } else {
        coloContro.classList.add('node-controler-active')
        controlerContainerBox[3].style.display = "block"
    }
})