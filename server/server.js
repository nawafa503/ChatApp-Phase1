import {app, socketServer} from "./app.js";

const PORT = process.env.PORT || 3000;
const SOCKET_PORT = process.env.SOCKET_PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

socketServer.listen(SOCKET_PORT, () => {
    console.log(`Socket server running on port ${SOCKET_PORT}`);
})