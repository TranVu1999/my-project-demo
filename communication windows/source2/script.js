const list = document.querySelector('ul');
const txtMessage = document.getElementById("txtMessage")
const btnSubmitMessage = document.getElementById("btnSubmitMessage");
let port2;

// Listen for the initial port transfer message
window.addEventListener('message', initPort);

// Setup the transerred port
function initPort(e) {
    console.log('init', e)
    port2 = e.ports[0];
    port2.onmessage = onMessage;
}

// Hande messages received on port2;
function onMessage(e) {
    const listItem = document.createElement('li');
    listItem.textContent = e.data;
    list.appendChild(listItem);
}

btnSubmitMessage.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();
    port2.postMessage(txtMessage.value);
}