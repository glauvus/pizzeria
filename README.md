# Pizzeria
Pizzeria is a pizza store web application developed with Django and React.

  - Register
  - Browse the Menu
  - Order
  - Checkout
 
Please, visit the webpage: 
https://pizz3ria.herokuapp.com

![alt text](https://i.imgur.com/zMyZTb1.gif)

# API Documentation (*Not completed yet*)
=================
   * [Products](#products)
      * [Pizzas](#pizzas)
          * [Success Response](#success-response)
          * [Error Response](#error-response)
      * [Pasta](#pasta)
          * [Success Response](#success-response)
          * [Error Response](#error-response)
      * [Salads](#salads)
          * [Success Response](#success-response)
          * [Error Response](#error-response)
      * [Desserts](#desserts)
          * [Success Response](#success-response)
          * [Error Response](#error-response)
      * [Drinks](#drinks)
          * [Success Response](#success-response)
          * [Error Response](#error-response)
      * [Create Pizza](#create-pizza)
          * [Success Response](#success-response)
          * [Error Response](#error-response)

# Products

## Pizzas

Show all available pizzas.

**URL** : `/api/pizzas`

**URL Parameters** : None

**Method** : `GET`

**Auth required** : NO

**Data**: `{}`

### Success Response

**Condition** : If any pizzas exist.

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": 1,
    "name": "special",
    "price": "7.00",
    "toppings": [
         1,
         4,
         5,
         7
    ]
  },
  {
    "id": 2,
    "name": "margherita",
    "price": "5.00",
    "toppings": [
         1,
         4
    ]
  }
]
```

### Error Response

**Condition** : If no pizzas exist.

**Code** : `404 NOT FOUND`

**Content** : `{}`


## Pasta

Show all available pasta.

**URL** : `/api/pasta`

**URL Parameters** : None

**Method** : `GET`

**Auth required** : NO

**Data**: `{}`

### Success Response

**Condition** : If any pasta exist.

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": 1,
    "name": "bolgnese",
    "price": "5.00"
  },
  {
    "id": 2,
    "name": "carbonara",
    "price": "5.00"
  }
]
```

### Error Response

**Condition** : If no pasta exist.

**Code** : `404 NOT FOUND`

**Content** : `{}`


## Salads

Show all available salads.

**URL** : `/api/salads`

**URL Parameters** : None

**Method** : `GET`

**Auth required** : NO

**Data**: `{}`

### Success Response

**Condition** : If any salads exist.

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": 1,
    "name": "greek",
    "price": "4.50"
  },
  {
    "id": 2,
    "name": "avocado",
    "price": "4.00"
  }
]
```

### Error Response

**Condition** : If no salads exist.

**Code** : `404 NOT FOUND`

**Content** : `{}`


## Desserts

Show all available desserts.

**URL** : `/api/desserts`

**URL Parameters** : None

**Method** : `GET`

**Auth required** : NO

**Data**: `{}`

### Success Response

**Condition** : If any desserts exist.

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": 1,
    "name": "cupcake",
    "price": "3.50"
  },
  {
    "id": 2,
    "name": "waffle",
    "price": "4.00"
  }
]
```

### Error Response

**Condition** : If no desserts exist.

**Code** : `404 NOT FOUND`

**Content** : `{}`


## Drinks

Show all available drinks.

**URL** : `/api/drinks`

**URL Parameters** : None

**Method** : `GET`

**Auth required** : NO

**Data**: `{}`

### Success Response

**Condition** : If any drinks exist.

**Code** : `200 OK`

**Content example**

```json
[
  {
    "id": 1,
    "name": "beer",
    "price": "3.00"
  },
  {
    "id": 2,
    "name": "redbull",
    "price": "3.50"
  }
]
```

### Error Response

**Condition** : If no drinks exist.

**Code** : `404 NOT FOUND`

**Content** : `{}`


## Create Pizza

Create a custom pizza.

**URL** : `/api/pizzas/create`

**Method** : `POST`

**Auth required** : YES

**Data**

Provide the toppings for the pizza to be created.

```json
{
    "toppings": "[list of toppings]"
}
```

### Success Response

**Condition** : If custom pizza created successfully.

**Code** : `201 CREATED`

**Content example**

```json
{
  "id": 1,
  "name": "custom pizza",
  "price": "8.00",
  "toppings": [
       2,
       3,
       7,
       10
  ]
}
```

### Error Response

**Condition** : If no pizzas exist.

**Code** : `404 NOT FOUND`

**Content** : `{}`
