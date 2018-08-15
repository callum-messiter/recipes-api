define({ "api": [
  {
    "type": "get",
    "url": "/recipe/:recipeId",
    "title": "Get",
    "group": "Recipe",
    "version": "1.0.0",
    "name": "Get",
    "description": "<p>This endpoint should be used for retrieving the details of a specific recipe.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response (200): ",
          "content": "{\n    \"name\": String,\n    \"imageUrl\": String,\n    \"ingredients\": String[],\n    \"cookingTime\": String\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "recipeNotFound (404): ",
          "content": "{  \n    \"error\": \"recipeNotFound\",\n    \"msg\": \"Sorry, this recipe doesn't exist or may have been removed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "router/RecipeRouter.js",
    "groupTitle": "Recipe",
    "groupDescription": "<p>Used by clients to retrieve recipe data</p>",
    "sampleRequest": [
      {
        "url": "/api/recipe/:recipeId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/recipe/list",
    "title": "List",
    "group": "Recipe",
    "version": "1.0.0",
    "name": "List",
    "description": "<p>This endpoint should be used to retrieve a list of available recipes. The recipes can be filtered using the below query parameters. If no query parameters are provided, all available recipes will be returned in the response object.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filters",
            "description": "<p>A stringified JSON object. Each property is a key-value pair where the key represents the recipe property, e.g. &quot;ingredients&quot;, and the value represents the filter to be applied to the list of recipes, e.g. &quot;Lemon&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response (200): ",
          "content": "Recipe[]",
          "type": "json"
        }
      ]
    },
    "filename": "router/RecipeRouter.js",
    "groupTitle": "Recipe",
    "groupDescription": "<p>Used by clients to retrieve recipe data</p>",
    "sampleRequest": [
      {
        "url": "/api/recipe/list"
      }
    ]
  }
] });
