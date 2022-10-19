import { DataSource } from "typeorm";
import { AppDataSource } from "../../database";
import {app} from "../../app"
import request from "supertest"

describe("Testing the user routes", () => {

    const name = "mail"
    const email = "mail@mail.com"
    const cpf = "12345678920"
    const cnpj = "10241023654789"
    const password = "1234"
    const birth_data = "26111993"
    const isAdm = true
    const group = "funcionario"
    const address = "Rua alberto lima"
    const cep = "22775550"
    const number = "123"
    const district = "rj"
    const city = "Rio de janeiro"
    const state = "jpa"
    const store = false

    const login = {
      email:email,
      password:password
    }

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
  
    test("Should be able to create a new user", async () => {
         const userData = {name,email,cpf,password,birth_data,isAdm,group,address,cep,number,district,city,state}

         const response = await request(app).post("/users").send(userData)
         expect(response.status).toBe(201)
         expect(response.body).toEqual(expect.objectContaining({
            id: response.body.id,
            name,
            email,
            isAdm,
            store,
            address,
            cep,
            number,
            district,
            city,
            state
         }))
      
    });

    test("Should be able to return a list of all registered users", async () => {
    
      const userResponse = await request(app).post("/login").send(login)
      const response = await request(app)
      .get("/users")
      .set({'Authorization': 'Bearer ' + userResponse.body.token})
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty("map")
      expect(response.body).not.toHaveProperty("password")
    });


    test("Must be able to return a user by ID", async () => {
      
      const userResponse = await request(app).post("/login").send(login)
      const response = await request(app)
      .get(`/users/${userResponse.body.id}`)
      .set({'Authorization': 'Bearer ' + userResponse.body.token})
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty("map")
      expect(response.body).not.toHaveProperty("password")
      
    });


    test("Must be able to return a user by ID", async () => {
      
      const userResponse = await request(app).post("/login").send(login)
      const response = await request(app)
      .get(`/users/${userResponse.body.id}`)
      .set({'Authorization': 'Bearer ' + userResponse.body.token})
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty("map")
      expect(response.body).not.toHaveProperty("password")
    });

    test("must be able to update a user", async () => {
      const userUpdate = {
        name:"Adriano Nóbrega",
        email:"adrianonobrega26@gmail.com",
        password:"12345"
      }

      const userResponse = await request(app).post("/login").send(login)
      const response = await request(app)
      .patch(`/users/${userResponse.body.id}`).send(userUpdate)
      .set({'Authorization': 'Bearer ' + userResponse.body.token})
      expect(response.status).toBe(200)
      expect(response.body).toHaveProperty("name")
      expect(response.body).not.toHaveProperty("password")
    });


    test("must be able to delete a user", async () => {
      const login = {
        email:"adrianonobrega26@gmail.com",
        password:"12345"
      }
      const userResponse = await request(app).post("/login").send(login)
      const response = await request(app)
      .delete(`/users/${userResponse.body.id}`)
      .set({'Authorization': 'Bearer ' + userResponse.body.token})
      expect(response.status).toBe(204)
     
    });



  });