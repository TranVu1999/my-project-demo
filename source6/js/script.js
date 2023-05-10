let isReadyMoveItem = false;
const modalTail = document.querySelector('#modalTail');
const draggableContainer = document.querySelector('.draggable-container');

document.addEventListener('mousedown', (e) => {
    console.log('title: ', e);
    if(e.button === 0) {
        // isReadyMoveItem = true;
        // modalTail.style.top = e.clientY + 'px';
        // modalTail.style.left = e.clientX + 'px';
    }


});

// document.addEventListener('mousemove', (e) => {
//     if(isReadyMoveItem) {
//         modalTail.style.top = e.clientY + 'px';
//         modalTail.style.left = e.clientX + 'px';
//     }

// });

// document.addEventListener('mouseup', (e) => {
//     isReadyMoveItem = false
// })

draggableContainer.addEventListener('dragover', e => {
    console.log('e', e)
})