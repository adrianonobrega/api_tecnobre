import { DataSource } from "typeorm";
import { AppDataSource } from "../../database";
import {app} from "../../app"
import request from "supertest"

describe("Testing the user routes", () => {

    const userAdmin = {
        name:"Adriano Nóbrega",
        email:"adrianonobrega26@gmail.com",
        cnpj:"14894617741",
        password:"12345",
        address:"Rua alberto lima",
        cep:"22775550",
        number:"123",
        district:"rj",
        city:"Rio de janeiro",
        state:"jacarepagua",
        isAdm:true
    }
    
    const login = {
        email:"adrianonobrega26@gmail.com",
        password:"12345"
      }

    const productCreate = {
      description: "biscoito de chocolate crocante",
      name:"biscoito da sorte",
      brand:"garoto",
      category:"biscoito",
      image:"linkdasjhdfaskjgtdyasdtfasghdaTARGASVDFGFGAD",
      price:1.99
    }  

    const productUpdate = {
      name: "biscoito cream craker",
      price: 2.99
    }

    let product: any[] = []


    let connection: DataSource;
  
    beforeAll(async () => {
      await AppDataSource.initialize()
        .then((res) => (connection = res))
        .catch((err) => {
          console.error("Error during Data Source initialization", err);
        });
    });
  
    afterAll(async () => {
      await connection.destroy();
    });


    test("must be able to create a product", async () => {
        
      await request(app).post("/users").send(userAdmin)
      const userResponse = await request(app).post("/login").send(login)
      const response = await request(app)
    .post(`/products/${userResponse.body.id}`).send(productCreate)
    .set({'Authorization': 'Bearer ' + userResponse.body.token})
    product.push(response.body)
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id")
 });


 test("should be able to list all products", async () => {
        
  const response = await request(app).get(`/products/`).send(product)
  expect(response.status).toBe(200)
  expect(response.body).toHaveProperty("map")

});

test("must be able to list a product", async () => {
  const id = product[0].id
  const response = await request(app)
  .get(`/products/${id}`)
  expect(response.status).toBe(200)
  expect(response.body).toHaveProperty("id")
});

test("must be able to update a product", async () => {
  const userResponse = await request(app).post("/login").send(login)
  const id = product[0].id
  const response = await request(app)
  .patch(`/products/${id}`).send(productUpdate)
  .set({'Authorization': 'Bearer ' + userResponse.body.token})
  expect(response.status).toBe(200)
  expect(response.body).toHaveProperty("name")
});

test("must be able to delete a product", async () => {
  const userResponse = await request(app).post("/login").send(login)
  const id = product[0].id
  const response = await request(app)
  .delete(`/products/${id}`)
  .set({'Authorization': 'Bearer ' + userResponse.body.token})
  expect(response.status).toBe(204)

});
     
  });