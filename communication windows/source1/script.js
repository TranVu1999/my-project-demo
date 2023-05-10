const txtMessage = document.getElementById("txtMessage")
const btnSubmitMessage = document.getElementById("btnSubmitMessage");
const iframe = document.querySelector("iframe");
const output = document.getElementById("parentReceivedMessage");

const channel = new MessageChannel();
const port1 = channel.port1;

// Wait for the iframe to load
iframe.addEventListener("load", onLoad);

function onLoad() {
    // Listen for button clicks
    btnSubmitMessage.addEventListener('click', onClick);

    // Listen for messages on ports
    port1.onmessage = onMessage;

    // Transfer port2 to the iframe
    iframe.contentWindow.postMessage('init', '*', [channel.port2]);
}

// Post a message on port1 when the button is clicked
function onClick(e) {
    e.preventDefault();
    port1.postMessage(txtMessage.value);
}

// Handle messages received on port1
function onMessage(e) {
    output.innerHTML = e.data;
    txtMessage.value = '';
}