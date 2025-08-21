import { Router } from "express";
import { Controller } from "../types/controller.type";
import type { Request, Response } from "express";

export class ProductsController implements Controller {
  path: string = "/products";
  router: Router = Router();

  constructor() {}

  registerRoute(): void {
    this.router.get("/", this.getProducts);
  }

  getProducts(req: Request, res: Response) {
    res.status(200).json({
      id: 1,
    });
  }
}
