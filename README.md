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

# ROTAS NÃO AUTENTICADAS

## CADASTRO DE USUARIO.

POST /users

### Exemplo de requisição:

	{
		"name":"Adriano Nóbrega",
    "email":"adrianonobrega26@gmail.com",
    "cpf":"339348665-62",
    "password":"1234",
    "idade":28,
    "address":"Rua alberto lima",
    "cep":"22775550",
    "number":"123",
    "district":"rj",
    "city":"Rio de janeiro",
    "state":"jacarepagua"
	}

### Exemplo de resposta:
201:Created

	{
			"name": "Adriano Nóbrega",
      "email": "adrianonobrega26@gmail.com",
      "address": "Rua alberto lima",
      "number": "123",
      "cep": "22775550",
      "district": "rj",
      "city": "Rio de janeiro",
      "state": "jacarepagua"
	}
  
  ## CADASTRO DE LOJA.

POST /stores

### Exemplo de requisição:

	{
		"name":"adrInfo",
    "email":"devadrianonobrega261@gmail.com",
    "cnpj":"102.052.00.024/0001-25",
    "password":"1234",
    "address":"Rua alberto lima",
    "cep":"22775550",
    "number":"123",
    "district":"rj",
    "city":"Rio de janeiro",
    "state":"jacarepagua"
	}

### Exemplo de resposta:
201:Created

	{
			"name": "adrInfo",
      "email": "devadrianonobrega261@gmail.com",
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
				"id": "fe3ff958-a15d-4083-a74a-3216eb3a3201",
		"name": "Adriano Nóbrega",
		"email": "adrianonobrega26@gmail.com",
		"cpf": "339348665-62",
		"idade": 28,
		"isadm": false,
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
		"id": "fe3ff958-a15d-4083-a74a-3216eb3a3201",
		"name": "Adriano Nóbrega",
		"email": "adrianonobrega26@gmail.com",
		"cpf": "339348665-62",
		"idade": 28,
		"isadm": false,
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
    "idade": 28,
    "isadm": false,
    "created_at": "2022-10-14T17:42:03.535Z",
    "updated_at": "2022-10-14T17:43:26.133Z"
	}
	

## DELETAR O USUARIO ESPECIFICO.
POST /users/:id <br>
OBS: id do usuario cadastrado.

204:No Content

#LOJA

## LISTAR TODAS AS LOJAS.

GET /stores

### Exemplo de resposta:
200:OK

		[
			{
				"id": "c6b06e04-7a53-431e-b42a-cd773459aaed",
		"name": "adrInfo",
		"email": "devadrianonobrega261@gmail.com",
		"cnpj": "102.052.00.024/0001-25",
		"password": "$2a$10$EaSfDtRG2HcKI3lTkTuCQeP8f6MfEFSuqJLpOJoCe0lOc5Qm6faQ6",
		"isadm": false,
		"create_at": "2022-10-14T14:28:05.881Z",
		"update_at": "2022-10-14T14:28:05.881Z",
		"address": {
			"id": "b0f80544-fc03-428a-93d5-0f1997b5bbc5",
			"address": "Rua alberto lima",
			"cep": "22775550",
			"number": 123,
			"district": "rj",
			"city": "Rio de janeiro",
			"state": "cdd",
			"create_at": "2022-10-14T14:28:05.767Z",
			"update_at": "2022-10-14T14:28:05.767Z"
		}
			}
		]

## LISTAR UMA LOJA ESPECIFICA.

GET /stores/:id <br>
OBS: id da loja cadastrada.

### Exemplo de resposta:
200:OK

	{
		"id": "c6b06e04-7a53-431e-b42a-cd773459aaed",
		"name": "adrInfo",
		"email": "devadrianonobrega261@gmail.com",
		"cnpj": "102.052.00.024/0001-25",
		"isadm": false,
		"address": {
			"id": "b0f80544-fc03-428a-93d5-0f1997b5bbc5",
			"address": "Rua alberto lima",
			"cep": "22775550",
			"number": 123,
			"district": "rj",
			"city": "Rio de janeiro",
			"state": "cdd",
			"created_at": "2022-10-14T14:56:23.017Z",
			"updated_at": "2022-10-14T14:56:23.017Z"
		},
		"created_at": "2022-10-14T14:56:23.017Z",
		"updated_at": "2022-10-14T14:56:23.017Z"
	}


## ATUALIZAR A LOJA ESPECIFICA.
PATCH /stores/:id <br>
OBS: id da loja cadastrada.

### Exemplo de requisição:

	{
		"name":"Adriano Nóbrega Costa",
	  "email":"adrianonobrega2611@gmail.com",
	  "password":"12345"
	}

### Exemplo de resposta:
200:OK

	{
		"id": "c6b06e04-7a53-431e-b42a-cd773459aaed",
    "name": "Adriano Nóbrega Costa",
    "email": "adrianonobrega2611@gmail.com",
    "cnpj": "102.052.00.024/0001-25",
    "created_at": "2022-10-14T14:56:23.017Z",
    "updated_at": "2022-10-14T17:31:02.394Z"
	}
	

## DELETAR O USUARIO ESPECIFICO.
POST /stores/:id <br>
OBS: id da loja cadastrada.

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
