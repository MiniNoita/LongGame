import { createServer } from "node:http";
import { Server, type Socket } from "socket.io";

const PORT = 3000;

const server = createServer();

const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
		credentials: true,
	},
});

io.on("connection", (socket: Socket) => {
	// ...
});

io.on("message", (socket: Socket) => {
	socket.broadcast.emit("message", "Hello");
});

server.listen(PORT, "0.0.0.0", () => {
	console.log(`Listening on port ${PORT}`);
});
