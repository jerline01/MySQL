// 1. Create tables for the above list given

CREATE TABLE Users (
    value TEXT
);

CREATE TABLE Codekata (
    problems_solved INTEGER
);

CREATE TABLE Attendance (
    value INTEGER
);

CREATE TABLE Topics (
    value TEXT
);

CREATE TABLE Tasks (
    value TEXT
);

CREATE TABLE Company_drives (
    no_of_companies INTEGER
);

CREATE TABLE Mentors (
    names TEXT
);

CREATE TABLE Students_activated_courses (
    no_of_courses INTEGER
);

CREATE TABLE Courses (
    value TEXT
);

// 2. Insert at least 5 rows of values in each table

// 3. Get number problems solved in codekata by combaining the users

SELECT * FROM Codekata 
left join Users
on problems_solved = value;

// 4. Display the no of company drives attended by a user

SELECT * FROM Company_drives 
left join Users
on  no_of_companies = value;

// 5. Combine and display students_activated_courses and courses for a specific user groping them based on the course

SELECT * FROM Students_activated_courses
left join Courses 
on no_of_courses = value;

// 6. List all the mentors

SELECT * FROM Mentors;

// 7. List the number of students that are assigned for a mentor

SELECT * FROM Users 
left join Mentors
on value = names;
