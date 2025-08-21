export class ProductService {
  constructor() {}

  public getMany(){
    return [
      {
        id: 1,
        name: "something",
      },
      {
        id: 2,
        name: "something more",
      },
    ];
  }
}
