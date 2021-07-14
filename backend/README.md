#Database config:
Add database config (url, username, password for database and hibernate properties) to backend/src/main/resources/application.properties

#Add packages to backend:
**model:**

add `employee` class with JPA table annotations.
    
**conroller:**

**repository:**

add repository interface `EmploeeRepository`.

**exception:**

#Create RESTful services:

Add to exception package the `ResourceNotFoundException` class. It can be thrown if a resource not exists in the database.
It should extends `RuntimeException`, which internally implements serializable. With ResponseStatus it returns a not found http status to the client.
