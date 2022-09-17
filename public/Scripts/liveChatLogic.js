const socket = io("https://kuts-restaurant-4-y.herokuapp.com");

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
    socket.emit('message', {data: message.value})
}

socket.on('message', ({data}) => {
    handleNewMessage(data);
})

handleNewMessage = (message) => {
    messages.appendChild(buildNewMessage(message));
}

const buildNewMessage = (message) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(message))
    return li;
}