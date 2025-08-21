import express from "express";
import type { Application, Request, Response } from "express";
import { ProductsController } from "../controllers/products.controller.ts";
import type { Controller } from "../types/controller.type.ts";

export class Server {
  private app: Application;
  private port: number;

  constructor(port: number, controllers: Controller[]) {
    this.app = express();
    this.port = port;
    this.middleware();
    this.routes(controllers);
  }

  private middleware(): void {
    this.app.use(express.json());
  }

  private routes(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.app.use(controller.path, controller.router);
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on http://localhost:${this.port}`);
    });
  }
}
