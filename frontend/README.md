https://www.youtube.com/watch?v=G46fjVzQ7BQ

Integrate Bootstrap 5 css library in the angular to make the app responsive and stylish.
1. Install the latest Bootstrap:
  
        npm install bootstrap --save

   And add to `angular.json` in section `styles`:

    "./node_modules/bootstrap/dist/css/bootstrap.css"


2. Alternatively you can add to global `styles.css`:

    @import "~bootstrap/dist/css/bootstrap.min.css";


3. Or alternatively you can download bootstrap css through remote link. 
Execute a google search for "bootstrap 5 cdn link":
https://getbootstrap.com/docs/5.0/getting-started/introduction/
    
    Copy CSS link from there and add it to `index.html` head section:
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">




For each functionality (create, list, update, datails) a separate component is created.
Communication with REST API is done by a Service. The Service is injected to each component.

REST API calls are needed for GET, POST (to modify or update), PUT (to create or overwrite) and DELETE.

Create a typescript class for Employee model which contains properties:
 
    ng g class employee

It is created to hold a response of the REST APIs. Add all properties that are defined in springboot app there.

Add components with:

    ng g c <name of component>
