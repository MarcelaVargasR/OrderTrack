import { Server } from "./server/server.ts";
import { ProductsController } from "./controllers/products.controller.ts";
import { ProductService } from "./services/products.service.ts";

const productsService = new ProductService();
const server = new Server(3000, [new ProductsController(productsService)]);
server.listen();
