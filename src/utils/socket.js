import { io } from "socket.io-client";
import { BASE_URL } from "../assets/ApiRoutes";

export const socket = io(BASE_URL)

export const socketConnect = () => {
    socket.on('connect', () => {
        console.log(`conected with id: ${socket.id}`);
    })
}