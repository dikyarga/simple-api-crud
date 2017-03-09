## simple-api-crud

A project for Mid Test at @hacktiv8


### Tech stack
- ExpressJS
- MongoDB

### MVC
No view needed, just Postman it

### Database Schema

#### Food
- name
- price
- expired_date

#### Restaurants
- name
- owner
- address
- open_status

#### Routes API
#### Food
Routes | HTTP | Description
--- | --- | ---
**/api/foods** | `GET` | Get all foods
**/api/foods/:id** | `GET` | Get Single food
**/api/foods/** | `POST` | Create a food
**/api/foods/:id** | `DELETE` | Delete a food
**/api/foods/:id** | `PUT` | Update data of a food
**/api/foods/:id** | `PATCH` | Update data of a user with specifict food

#### Restaurant
Routes | HTTP | Description
--- | --- | ---
**/api/restaurants** | `GET` | Get all restaurants
**/api/restaurants/:id** | `GET` | Get Single restaurant
**/api/restaurants/** | `POST` | Create a restaurant
**/api/restaurants/:id** | `DELETE` | Delete a restaurant
**/api/restaurants/:id** | `PUT` | Update data of a restaurant
**/api/restaurants/:id** | `PATCH` | Update data of a user with specifict restaurant

#### NOTE
- CRUD, careful when update.
- No relationship 😄

#### Step

##### Release 0
- Documenting first. READ.ME
  - Description
  - Step
  - Schema

##### Release 1
- foods CRUD

##### Release 2
- restaurants CRUD

##### Release 3
- Refactor
