import { Router } from "express";
import type { Controller } from "../types/controller.type.ts";
import type { Request, Response } from "express";
import { ProductService } from "../services/products.service.ts";

export class ProductsController implements Controller {
  path: string = "/products";
  router: Router = Router();
  private productsService: ProductService;

  constructor(productsService: ProductService) {
    this.registerRoutes();
    this.productsService = productsService;
  }

  registerRoutes(): void {
    this.router.get("/", this.getProducts.bind(this));
  }

  private getProducts(req: Request, res: Response) {
    const products = this.productsService.getMany();
    res.status(200).json(products);
  }
}
