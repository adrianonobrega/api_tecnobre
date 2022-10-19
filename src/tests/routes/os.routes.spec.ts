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

    const osCreate = {
        name_equipament: "televisão modelo ax400",
        description:"não esta ligando",
        status:"Encaminhado para a assistencia tecnica.",
    }  

    const osUpdate = {
        description: "Foi identificado problema na fonte do equipamento e a solução será a troca",
        total_price: 150,
        status:"problema verificado"
    }

    let os: any[] = []

   


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


    test("must be able to create a ordem service", async () => {
        
      await request(app).post("/users").send(userAdmin)
      const userResponse = await request(app).post("/login").send(login)
      const response = await request(app)
    .post(`/os/${userResponse.body.id}`).send(osCreate)
    .set({'Authorization': 'Bearer ' + userResponse.body.token})
    os.push(response.body)

    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("map")
 });

 test("should be able to list all ordem service", async () => {
        
    const userResponse = await request(app).post("/login").send(login)
    const response = await request(app)
    .get(`/os/`)
    .set({'Authorization': 'Bearer ' + userResponse.body.token})
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("map")
});

test("should be able to list a ordem service", async () => {
    
    const userResponse = await request(app).post("/login").send(login)
    const id = os.map((item) => item[0].id)
    const response = await request(app)
    .get(`/os/${id}`)
    .set({'Authorization': 'Bearer ' + userResponse.body.token})
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("map")
});

test("must be able to update a ordem service", async () => {
    
    const userResponse = await request(app).post("/login").send(login)
    const id = os.map((item) => item[0].id)
    const response = await request(app)
    .patch(`/os/${id}`).send(osUpdate)
    .set({'Authorization': 'Bearer ' + userResponse.body.token})
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("id")
});

test("must be able to delete a ordem service", async () => {
    
    const userResponse = await request(app).post("/login").send(login)
    const id = os.map((item) => item[0].id)
    const response = await request(app)
    .delete(`/os/${id}`)
    .set({'Authorization': 'Bearer ' + userResponse.body.token})
    expect(response.status).toBe(204)
   
});
     
  });