# api_tecnobre


# Objetivo do projeto
  
  
   # RODAR O PROJETO
   	yarn typeorm migration:run -d src/database --> rodar as migrações 
	  yarn dev --> rodar o projeto
	
  
  # POSSIVEIS ERROS
  
  ## TOKEN INVALIDO OU SE NÃO PASSAR O TOKEN
  401:Unauthorized
  
  	{
	
	"message": "Invalid Token"
	
	}
	
## Usuario sem permissão admin
401:Unauthorized

  	{
	
		"message": "User must have admin permission"
		
	}
	
## Usuario sem permissão admin ou não é uma loja
401:Unauthorized

  	{
	
		"message": "User must have admin permission or be a store"
		
	}		
	
  ## USUARIO,LOJA,CARRINHO E ORDEM DE SERVIÇO QUE NÃO EXISTE
  
  400:Bad Request
  
  	{
	
		"message": "User not found"
		
	 }
   
   {
	
		"message": "Store not found"
		
	 }
   
	  {
	"message": "Invalid cart"
  }

     {
      "message": "invalid work order"
    }
	
	
## EMAIL JA ESTA CADASTRADO POR ALGUM USUARIO
400:Bad Request

  	{
	
	"message": "Email already exists"
	
	}
  
 ## CNPJ JA ESTA CADASTRADO POR ALGUM USUARIO
 400:Bad Request

  	{
	
	"message": "CNPJ already exists"
	
	}
  
 ## CPF JA ESTA CADASTRADO POR ALGUM USUARIO
 400:Bad Request

  	{
	
	"message": "CPF already exists"
	
	}
	
## EMAIL OU SENHA PASSADOS INCORRETAMENTE NO LOGIN
400:Bad Request

  	{
	
		"message": "Wrong email/password"
		
	}
	

## LISTAR TODOS OS PRODUTOS.

GET /products

### Exemplo de resposta:
200:OK

		[
			{
			  "id": "af535020-1f41-44db-b132-1126911ebd48",
			  "name": "biscoito da sorte",
			  "description": "biscoito de chocolate crocante",
			  "brand": "garoto",
			  "category": "biscoito",
			  "image": "linkdasjhdfaskjgtdyasdtfasghdaTARGASVDFGFGAD",
			  "price": "1.99",
			  "created_at": "2022-10-14T18:08:42.750Z",
			  "updated_at": "2022-10-14T18:08:42.750Z"
			}
		]

## LISTAR UM PRODUTO ESPECIFICO.

GET /products/:id <br>
OBS: id do produto cadastrado.

### Exemplo de resposta:
200:OK

	{
	    "id": "af535020-1f41-44db-b132-1126911ebd48",
	    "name": "biscoito da sorte",
	    "description": "biscoito de chocolate crocante",
	    "brand": "garoto",
	    "category": "biscoito",
	    "image": "linkdasjhdfaskjgtdyasdtfasghdaTARGASVDFGFGAD",
	    "price": "1.99",
	    "created_at": "2022-10-14T18:08:42.750Z",
	    "updated_at": "2022-10-14T18:08:42.750Z"
	}

	


# ROTAS NÃO AUTENTICADAS

## CADASTRO DE USUARIO.

POST /users

### Exemplo de requisição:

	{
		"name":"Adriano Nóbrega",
		"email":"devadrianonobrega26@gmail.com",
		"cpf":"14354637591",
		"password":"1234",
		"idade":28,
		"address":"Rua alberto lima",
		"cep":"22775550",
		"number":"123",
		"district":"rj",
		"city":"Rio de janeiro",
		"state":"jacarepagua",
		"isAdm":false
	}

### Exemplo de resposta:
201:Created

	{
		"id": "a350aa9c-781b-4f24-8432-46557c322518",
		"name": "Adriano Nóbrega",
		"email": "devadrianonobrega26@gmail.com",
		"isAdm": false,
		"store": false,
		"address": "Rua alberto lima",
		"number": "123",
		"cep": "22775550",
		"district": "rj",
		"city": "Rio de janeiro",
		"state": "jacarepagua"
	}
  
## LOGIN DE USUARIO.


POST /users/login

### Exemplo de requisição:

	{
		"email":"adrianonobrega26@gmail.com",
		"password":"1234"
	}

### Exemplo de resposta:
200:OK

		{
			"id": "6ef34565-2822-40a8-b002-e88247b3d8a0",
			"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkcmlhbm9ub2JyZWdhMjasdsdsdasdsaddsFsdsSFDFF"
		}
		
# ROTAS AUTENTICADAS

#Usuarios

## LISTAR TODOS OS USUARIOS.

GET /users

### Exemplo de resposta:
200:OK

		[
			{
				"id": "e827da17-bf3d-421a-9201-b46e493e3b2a",
				"name": "Adriano Nóbrega",
				"email": "adrianonobrega26@gmail.com",
				"cpf": "14894617790",
				"cnpj": null,
				"store": false,
				"birth_data": null,
				"isadm": true,
				"group": "client",
				"address": [
					{
						"id": "47228927-64b1-434e-aae8-40e848d845ce",
						"address": "Rua alberto lima",
						"cep": "22775550",
						"number": 123,
						"district": "rj",
						"city": "Rio de janeiro",
						"state": "jacarepagua",
						"created_at": "2022-10-14T14:56:23.017Z",
						"updated_at": "2022-10-14T14:56:23.017Z"
					}
				],
				"created_at": "2022-10-14T14:56:23.017Z",
				"updated_at": "2022-10-14T14:56:23.017Z"
			}
		]

## LISTAR O USUARIO ESPECIFICO.

GET /users/:id <br>
OBS: id do usuario cadastrado.

### Exemplo de resposta:
200:OK

	{
		"id": "e827da17-bf3d-421a-9201-b46e493e3b2a",
		"name": "Adriano Nóbrega",
		"email": "adrianonobrega26@gmail.com",
		"cpf": "13651426582",
		"idade": null,
		"isadm": true,
		"store": false,
		"group": "client",
		"address": [
			{
				"id": "47228927-64b1-434e-aae8-40e848d845ce",
				"address": "Rua alberto lima",
				"cep": "22775550",
				"number": 123,
				"district": "rj",
				"city": "Rio de janeiro",
				"state": "jacarepagua",
				"created_at": "2022-10-14T14:56:23.017Z",
				"updated_at": "2022-10-14T14:56:23.017Z"
			}
		],
		"created_at": "2022-10-14T14:56:23.017Z",
		"updated_at": "2022-10-14T14:56:23.017Z"
	}


## ATUALIZAR O USUARIO ESPECIFICO.
POST /users/:id <br>
OBS: id do usuario cadastrado.

### Exemplo de requisição:

	{
	  "name":"Adriano Nóbrega Costa",
	  "email":"adrianonobrega2611@gmail.com",
	  "password":"12345"
	}

### Exemplo de resposta:
200:OK

	{
    "id": "563476ef-e04f-4a88-a87d-279313188508",
    "name": "Adriano Nóbrega Costa",
    "email": "adrianonobrega2611@gmail.com",
    "cpf": "339348665-62",
    "birth_data": null,
    "isadm": false,
    "created_at": "2022-10-14T17:42:03.535Z",
    "updated_at": "2022-10-14T17:43:26.133Z"
	}
	

## DELETAR O USUARIO ESPECIFICO.
POST /users/:id <br>
OBS: id do usuario cadastrado.

204:No Content

#PRODUTOS

##Observação - Apenas lojas podem cadastrar produtos.

## CRIAR PRODUTOS.

POST /products/:id <br>
OBS: id da loja cadastrada.
 
 ### Exemplo de requisição:

	{
    "description":"biscoito de chocolate crocante",
    "name":"biscoito da sorte",
    "brand":"garoto",
    "category":"biscoito",
    "image":"linkdasjhdfaskjgtdyasdtfasghdaTARGASVDFGFGAD",
    "price":1.99
	}

 ### Exemplo de resposta:
201:Created

		
			{

          "store": "7881e3bd-c616-4f9c-931b-f7b65c9650b8",
          "id": "af535020-1f41-44db-b132-1126911ebd48",
          "name": "biscoito da sorte",
          "description": "biscoito de chocolate crocante",
          "brand": "garoto",
          "category": "biscoito",
          "image": "linkdasjhdfaskjgtdyasdtfasghdaTARGASVDFGFGAD",
          "price": 1.99
			}
		




## ATUALIZAR O PRODUTO ESPECIFICO.
PATCH /products/:id <br>
OBS: id do produto cadastrado.

### Exemplo de requisição:

	{
		"description":"biscoito de chocolate crocante",
    "name":"biscoito da sorte",
    "brand":"delVale",
    "price":5.00
	}

### Exemplo de resposta:
200:OK

	{
    "id": "af535020-1f41-44db-b132-1126911ebd48",
    "name": "biscoito da sorte",
    "description": "biscoito de chocolate crocante",
    "brand": "delVale",
    "image": "linkdasjhdfaskjgtdyasdtfasghdaTARGASVDFGFGAD",
    "price": 5,
    "category": "biscoito"
	}
	

## DELETAR O PRODUTO ESPECIFICO.
DELETE /products/:id <br>
OBS: id do produto cadastrado.

204:No Content

#Pedidos

## CRIAR UM PEDIDO.
POST carts/users/:id <br>
OBS: id do usuario cadastrado.

### Exemplo de requisição:

	{
	"products": [
        {
            "id":"b4130048-a73b-40c2-bc3d-478394a92a8f", //OBS - id do produto
            "quantity":2
        }
    ],
	"status":"aguardando pagamento",
    	"total_price":3
	}

### Exemplo de resposta:
201:Created

		[
	{
		"id": "f3c2daf6-daa8-474f-adf8-e911360fe70c",
		"status": "Aguardando pagamento",
		"total_price": "3.00",
		"products": [
			{
				"id": "b4130048-a73b-40c2-bc3d-478394a92a8f",
				"name": "garoto",
				"description": "biscoito da sorte",
				"brand": "dfsf",
				"category": "biscoito",
				"image": "dsafasdfsdffsdfsd",
				"price": "1.99",
				"created_at": "2022-10-14T18:06:30.262Z",
				"updated_at": "2022-10-14T18:06:30.262Z"
			}
		],
		"user": {
			"id": "563476ef-e04f-4a88-a87d-279313188508",
			"name": "Adriano Nóbrega Costa",
			"email": "adrianonobrega2611@gmail.com",
			"cpf": "339348665-62"
		},
		"address": [
			{
				"id": "5877f467-a692-4e9f-be6a-ee10c28c0a19",
				"address": "Rua alberto lima",
				"cep": "22775550",
				"number": 123,
				"district": "rj",
				"city": "Rio de janeiro",
				"state": "jacarepagua",
				"created_at": "2022-10-14T17:42:03.541Z",
				"updated_at": "2022-10-14T17:42:03.541Z"
			}
		],
		"created_at": "2022-10-17T17:11:12.582Z",
		"updated_at": "2022-10-17T17:11:12.582Z"
	}
]

## LISTAR TODOS OS PEDIDOS
POST /carts <br>

### Exemplo de resposta:

	[
		{
			"id": "05dc3fa1-8691-476e-a353-f4dd8f219feb",
			"status": "aguardando pagamento",
			"total_price": "349.99",
			"products": [
				{
					"id": "b4130048-a73b-40c2-bc3d-478394a92a8f",
					"name": "garoto",
					"description": "biscoito da sorte",
					"brand": "dfsf",
					"category": "biscoito",
					"image": "dsafasdfsdffsdfsd",
					"price": "1.99",
					"created_at": "2022-10-14T18:06:30.262Z",
					"updated_at": "2022-10-14T18:06:30.262Z"
				}
			],
			"user": {
			"id": "e827da17-bf3d-421a-9201-b46e493e3b2a",
			"name": "Adriano Nóbrega Costa",
			"cpf": "123456785",
			"cnpj": null,
			"address": [
				{
					"id": "3a753b6f-ab56-45e5-bdcb-29dd290d4438",
					"address": "Rua alberto lima",
					"cep": "22775550",
					"number": 123,
					"district": "rj",
					"city": "Rio de janeiro",
					"state": "jacarepagua",
					"created_at": "2022-10-18T16:12:03.751Z",
					"updated_at": "2022-10-18T16:12:03.751Z"
				}
				]
		},]
	
	
## LISTAR APENAS UM PEDIDO
POST /carts/:id <br>
OBS: id do pedido cadastrado.

### Exemplo de resposta:

	[
		{
			"id": "05dc3fa1-8691-476e-a353-f4dd8f219feb",
			"status": "aguardando pagamento",
			"total_price": "349.99",
			"products": [
				{
					"id": "b4130048-a73b-40c2-bc3d-478394a92a8f",
					"name": "garoto",
					"description": "biscoito da sorte",
					"brand": "dfsf",
					"category": "biscoito",
					"image": "dsafasdfsdffsdfsd",
					"price": "1.99",
					"created_at": "2022-10-14T18:06:30.262Z",
					"updated_at": "2022-10-14T18:06:30.262Z"
				}
			],
			"user": {
				"id": "7881e3bd-c616-4f9c-931b-f7b65c9650b8",
				"name": "adrInfo",
				"email": "devadrianonobrega261@gmail.com",
				"cnpj": "102.052.00.024/0001-25",
				"cpf": null
			},
			"address": {
				"id": "fb194c24-6bb1-4966-86f6-4c59afefb3dd",
				"address": "Rua alberto lima",
				"cep": "22775550",
				"number": 123,
				"district": "rj",
				"city": "Rio de janeiro",
				"state": "jacarepagua",
				"created_at": "2022-10-14T17:40:20.016Z",
				"updated_at": "2022-10-14T17:40:20.016Z"
			}
		}
	]

## Atualizar UM PEDIDO.
PATCH carts/:id <br>
OBS: id do pedido cadastrado.

POST carts/users/:id <br>
OBS: id da loja cadastrada.

### Exemplo de requisição:

	{
	"status":"Pedido sendo preparado para envio"
	}

### Exemplo de resposta:
200:OK

		
	{
		"status": "Pedido sendo preparado para envio"
	}


## DELETAR O PEDIDO ESPECIFICO.
DELETE /carts/:id <br>
OBS: id do pedido cadastrado.

204:No Content












#Ordem de serviço

## CRIAR UMA ORDEM DE SERVIÇO.
POST /os/:id <br>
OBS: id do usuario cadastrado.

### Exemplo de requisição:

	{
	"name_equipament":"televisão modelo ax400",
	"description":"não esta ligando",
	"status":"Encaminhado para a assistencia tecnica."
	}

### Exemplo de resposta:
201:Created

		[
		{
		"id": "044d4c87-e894-4fe7-b046-8e9a40a55a21",
		"name_equipament": "televisão modelo ax400",
		"description": "não esta ligando",
		"solution": "...",
		"status": "Encaminhado para a assistencia tecnica.",
		"total_price": null,
		"user": {
			"id": "7881e3bd-c616-4f9c-931b-f7b65c9650b8",
			"name": "adrInfo",
			"email": "devadrianonobrega261@gmail.com",
			"cnpj": "102052000240001-25",
			"cpf": null
		},
		"address": {
			"id": "fb194c24-6bb1-4966-86f6-4c59afefb3dd",
			"address": "Rua alberto lima",
			"cep": "22775550",
			"number": 123,
			"district": "rj",
			"city": "Rio de janeiro",
			"state": "jacarepagua",
			"created_at": "2022-10-14T17:40:20.016Z",
			"updated_at": "2022-10-14T17:40:20.016Z"
		},
		"created_at": "2022-10-17T18:22:27.732Z",
		"updated_at": "2022-10-17T18:22:27.732Z"
		}
	]
	

## LISTAR TODAS AS ORDENS DE SERVIÇO.
GET /os/ <br>

### Exemplo de resposta:
200:OK
	[
		{
		"id": "f0cb254f-6843-41cd-a8ff-e076256b21fa",
		"name_equipament": "televisão modelo ax400",
		"description": "não esta ligando",
		"status": "Encaminhado para a assistencia tecnica.",
		"imagem": null,
		"solution": null,
		"total_price": null,
		"user": {
			"id": "e827da17-bf3d-421a-9201-b46e493e3b2a",
			"name": "Adriano Nóbrega Costa",
			"email": "adrianonobrega2611@gmail.com",
			"cnpj": "102052000240001-25",
			"cpf": null
		},
		"address": [
			{
				"id": "3a753b6f-ab56-45e5-bdcb-29dd290d4438",
				"address": "Rua alberto lima",
				"cep": "22775550",
				"number": 123,
				"district": "rj",
				"city": "Rio de janeiro",
				"state": "jacarepagua",
				"created_at": "2022-10-18T16:12:03.751Z",
				"updated_at": "2022-10-18T16:12:03.751Z"
		},]
	
	
## LISTAR APENAS UMA ORDEM DE SERVIÇO.
GET /os/:id <br>
OBS: id da ordem de serviço cadastrada.

### Exemplo de resposta:

	[
		{
			"id": "05dc3fa1-8691-476e-a353-f4dd8f219feb",
			"status": "aguardando pagamento",
			"total_price": "349.99",
			"products": [
				{
					"id": "b4130048-a73b-40c2-bc3d-478394a92a8f",
					"name": "garoto",
					"description": "biscoito da sorte",
					"brand": "dfsf",
					"category": "biscoito",
					"image": "dsafasdfsdffsdfsd",
					"price": "1.99",
					"created_at": "2022-10-14T18:06:30.262Z",
					"updated_at": "2022-10-14T18:06:30.262Z"
				}
			],
			"user": {
				"id": "7881e3bd-c616-4f9c-931b-f7b65c9650b8",
				"name": "adrInfo",
				"email": "devadrianonobrega261@gmail.com",
				"cnpj": "102052000240001-25",
				"cpf": null
			},
			"address": {
				"id": "fb194c24-6bb1-4966-86f6-4c59afefb3dd",
				"address": "Rua alberto lima",
				"cep": "22775550",
				"number": 123,
				"district": "rj",
				"city": "Rio de janeiro",
				"state": "jacarepagua",
				"created_at": "2022-10-14T17:40:20.016Z",
				"updated_at": "2022-10-14T17:40:20.016Z"
			}
		}
	]

## ATUALIZAR UMA ORDEM DE SERVIÇO.
PATCH os/:id <br>
OBS: id da ordem de serviço cadastrada.

### Exemplo de requisição:

	{
		"name_equipament":"televisão modelo ax400",
		"description":"Foi identificado problema na fonte do equipamento e a solução será a troca",
		"total_price":150.00
	}

### Exemplo de resposta:
200:OK

		
	{
		"id": "5e7ff2e9-85b0-410a-b99e-85ffd10e10b3",
		"status": "Encaminhado para a assistencia tecnica.",
		"description": "Foi identificado problema na fonte do equipamento e a solução será a troca",
		"name_equipament": "televisão modelo ax400",
		"total_price": 150,
		"imagem": null
	}


## DELETAR O PEDIDO ESPECIFICO.
DELETE /carts/:id <br>
OBS: id do pedido cadastrado.

204:No Content
