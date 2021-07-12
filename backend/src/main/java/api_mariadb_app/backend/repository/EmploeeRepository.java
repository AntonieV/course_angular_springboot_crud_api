package api_mariadb_app.backend.repository;

import api_mariadb_app.backend.model.Emploee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// JPARepository basically expose database code methods like save, delete, findById and deleteById and more and it
// exposes a lot of methods and provides out of the box implementation for all the database methods
// there isn't need to write any binder plate code that is required to down layer
// JpaRepository extends PagingAndSortingRepository, and this extends CrudRepository

@Repository
public interface EmploeeRepository extends JpaRepository<Emploee, Long> {
}
