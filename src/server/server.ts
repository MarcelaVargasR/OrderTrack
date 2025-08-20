import express from "express";
import type { Application, Request, Response } from "express";

export class Server {
  private app: Application;
  private port: number;

  constructor(port: number) {
    this.app = express()
    this.port = port
    this.middleware
    this.routes
  }

  private middleware():void{
    this.app.use(express.json())
  }

  private routes():void{
    this.app.get('/',(_req:Request, res:Response) => {
        res.send('This is a Route')
    })
  }

  public listen():void{
    this.app.listen(this.port,() => {
        console.log(`Server running on http://localhost:${this.port}`)
    })
  }

}
