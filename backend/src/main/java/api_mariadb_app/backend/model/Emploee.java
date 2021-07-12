package api_mariadb_app.backend.model;

import javax.persistence.*;

@Entity // to map model to the relational database table
@Table(name = "employees") // to provide a table name
public class Emploee {

    @Id // defines a primary key for table and
    @GeneratedValue(strategy = GenerationType.IDENTITY) // use a primary key generation strategy for that
    private long id;

    @Column(name = "first_name") // to provide a column name to the field, it maps a column name to the field
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email_id")
    private String emailId;

    // default constructor is needed when ever created a parameters constructor because
    // hibernate internally uses proxies to create new proxies objects
    public Emploee() {

    }

    public Emploee(String firstName, String lastName, String emailId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
}
