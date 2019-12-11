INSERT INTO department_table (department_name)
VALUES ("Sales");

INSERT INTO department_table (department_name)
VALUES ("Engineering");

INSERT INTO department_table (department_name)
VALUES ("Finance");

INSERT INTO department_table (department_name)
VALUES ("Legal");

INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Lead Sales Rep", 75000, 1);

INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Head Engineer", 95000, 2);

INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Finance Lead", 85000, 3);

INSERT INTO role_table (title, salary, dep_ID)
VALUES ("Head Lawyer", 155000, 4);

INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Chad", "Johnson", 1, NULL);

INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Pierre", "Paqquete", 1, 1);

INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Elfriede", "Benkert", 3, NULL);

INSERT INTO employee_table (first_name, last_name, role_ID, mng_ID)
VALUES ("Sam", "Kwang-Sun", 3, 3);
