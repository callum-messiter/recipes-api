# Recipes API (SubSec)

## Project Summary

All in all a fun task. I tried to balance two things: 1) keeping the structure fairly simple, since this was such a small application, 2) Writing it to be 
maintainable, as if it would grow. Hopefully there isn't too much unecessary abstraction.

### Lifecylce

*Route*:

- Requested by clients
- Calls a Controller


*Controller*:

- Checks request params are valid
- Business logic
- Specifies and sends the response


*Data*:

- Recipe data - array serving as mock data


*Model*:

- Defines Recipe object


*Middleware*

- Error handler function registered on all routes. If error occurs in Controller, Controller passes control to the error handler, and the error is returned

### Thoughts

I opted to build a single, versatile endpoint for returning an array of recipes, rather than multiple endpoints for different filter parameters.
As such, the `recipes/list` endpoint will handle any combination of filter parameters (e.g. name, cookingTime), and will only return recipes 
that match all provided filters. It will also return all available recipes if no filter parameters are provided in the request.

Going forward, this might be harder to manage, and maybe the endpoint could be broken down to handle differnet types of filtering.

Regarding the actual filtering functionality, there may also be more performant ways of doing it.

Finally, I chose not to return the "not found" error given in the specs. My thinking was that if the client requests a list of arrays,
and none are avaiable, or none match the provided filters, the API should return a 200 response code with an empty array (because
the request was successfully fulfilled). The client is then in charge of informing the user that the result set is empty.

### ToDo

An endpoint for retrieving a specific recipe would be useful. A SPA may make use of this on a "recipe" screen, for example, 
which would show the details of a specific recipe. This functionality would require each recipe object to have a unique `id` property, 
so that it can be referenced in the route, e.g. '/recipe/:recipeId'. Using the recipe name as a unique identifier would be sub-optimal.

Maybe we could build this one together!

## Dependencies

- NPM >= v5.2.0
- Node >= v8.9.3
- Mocha (optional): `npm install -g mocha`
- Install app dependencies: `npm install`

## How To Run

`npm start`


### With Tests (optional)

- `npm test`
- `npm start`


## Calling Endpoints

- Postman

E.g. `GET http://localhost:3000/recipe/list?name=beef`

- Browser

E.g. `http://localhost:3000/recipe/list?name=chicken&ingredients=chicken`