import http from "http";

import routes from "./route.js";

const server = http.createServer(routes);

server.listen(3000);
