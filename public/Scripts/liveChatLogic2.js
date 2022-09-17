// import {io} from 'socket.io-client'; подключить отдельно в скриптах

import {response} from "express";

const socket = io('http://localhost:1234');
const messages = ref([]);
const messageText = ref('');
const joined = ref(false);
const name = ref('');
const typingDisplay = ref('');

onBeforeMount(() => {
    socket.emit('findAllMessages', {}, (response) => {
        messages.value = response;
    });

    socket.on('message', (message) => {
        messages.value.push(message);
    });

    socket.on('typing', ({name, isTyping}) => {
        if (isTyping){
            typingDisplay.value = '${name} is typing...'
        }else{
            typingDisplay.value = '';
        }
    });
});

const joined = () => {
    socket.emit('join', { name: name.value}, ()=> {
        joined.value = true;
    });
}

const sendMessage = () => {
    socket.emit('createMessage', {text: messageText.value}, response => {
        messageText.value = '';
    });
}

let timeout;
const emtTyping = () => {
    socket.emit('typing', { isTyping: true });
    timeout = setTimeout(() => {
        socket.emit('typing', {isTyping: false});
    }, 2000);

}