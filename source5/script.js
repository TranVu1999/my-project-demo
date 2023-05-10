const draggableElements = document.querySelectorAll('.draggable');
const droppableElements = document.querySelectorAll('.droppable');
const draggableContainer = document.querySelector('.draggable-elements');
let isReadyToCompute = false;

// Handle Drag and Drop on Container
draggableContainer.addEventListener('dragover', handleDragOverContainer);

function handleDragOverContainer(e) {
    e.preventDefault();
    const draggableElms = [...draggableElements];
    const item = draggableElms.reduce((closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientX - ((box.left + box.width / 2));
        // console.log('box: ', box);
        // console.log('e.clientX: ', e.clientX);
        // console.log('offset: ', offset);
        // console.log('closest.offset: ', closest.offset);
        if(offset > 0) {
            return {offset: offset, elm: child}
        }
        return closest
    }, {offset: Number.NEGATIVE_INFINITY}).elm;

    if(item !== null) {
        draggableContainer.insertBefore(item, item)
    }

    console.log('item: ', item);
}

draggableElements.forEach(elm => {
    elm.addEventListener('dragstart', dragStart);
    // elm.addEventListener('drag', drag);
    // elm.addEventListener('dragend', dragEnd);
});

droppableElements.forEach(elm => {
    elm.addEventListener('dragenter', dragEnter);
    elm.addEventListener('dragover', dragOver);
    elm.addEventListener('dragleave', dragLeave);
    elm.addEventListener('drop', drop);
});

// Drag and Drop functions
function dragStart(e) {
    console.log('dragging...', e.target.src);

    e.dataTransfer.setData('src', e.target.src)
}

function dragEnter(e) {
    e.preventDefault();
    console.log('dragEnter');
}

function dragLeave(e) {
    e.preventDefault();
    console.log('dragLeave');
}

function dragOver(e) {
    e.preventDefault();
    console.log('dragOver');
}

function drop(e) {
    e.preventDefault();
    const draggableElementData = e.dataTransfer.getData('src');
    console.log('drop', draggableElementData);
    e.target.style.backgroundColor = 'grey';
    e.target.innerHTML = `<img src='${draggableElementData}' alt='alt test' />`;
}