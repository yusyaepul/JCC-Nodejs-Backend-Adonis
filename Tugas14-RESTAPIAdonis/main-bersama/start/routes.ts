/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.resource('venues', 'VenuesController').apiOnly().middleware({ show: ['auth'] })
Route.resource('venues.fields', 'FieldsController').apiOnly().middleware({ store: ['auth'] })

Route.post('/fields/:id/bookings', 'BookingsController.bookings').as('bookings').middleware(['auth'])
Route.get('/fields/:id', 'FieldsController.show').as('fields.show').middleware(['auth'])
Route.get('/bookings/:id', 'BookingsController.show').as('bookings.show').middleware(['auth'])
Route.post('/bookings/:id', 'BookingsController.store').as('pembooking').middleware(['auth'])

Route.post('/register', 'AuthController.register').as('auth.register')
Route.post('/login', 'AuthController.login').as('auth.login')
