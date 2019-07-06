import MessageService from "./message-service.js"

let userId = "henry";
const messageService = new MessageService(userId);

window.addEventListener("load", function(){
    document.getElementById("greeting").innerHTML = `Welcome ${userId}`;
    messageService.getAllMessages().then(successCallback, errorCallback);

    function successCallback(response) {
        populateMessages(response);
    }

    function errorCallback(response) {
        populateMessages(response)
    }
});

function populateMessages(messages) {
    messages.forEach(message => {
        const messageListItem = document.createElement("LI");
        const userIdHeading = document.createElement("h3");
        const messageParagraph = document.createElement("p");
        const messageContent = document.createTextNode(message.message);
        const userIdContent = document.createTextNode(message.fromid);
        userIdHeading.appendChild(userIdContent);
        messageParagraph.appendChild(messageContent);
        messageListItem
            .appendChild(userIdHeading)
            .appendChild(messageParagraph);
        document.getElementById("message-list").appendChild(messageListItem)
    })
}