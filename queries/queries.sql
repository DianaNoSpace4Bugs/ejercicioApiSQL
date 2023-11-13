
-- QUERIES ENTRIES
-- Esta query llama a los datos cuando se los paso para el email
SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
FROM entries AS e
INNER JOIN authors AS a
ON e.id_author=a.id_author
WHERE a.email=$1
ORDER BY e.title;

-- Esta query me da todas las entries de mi DB
SELECT * FROM entries;


-- Esta query llama a los datos que le paso en función del email del autor
SELECT name || " " || lastname AS fullname, email, image
FROM authors
WHERE email=$1;

-- Esto actualiza el titulo de las entries
UPDATE entries
SET title = $1
WHERE title =$2;

-- Esto borra entry por titulo
DELETE FROM entries
WHERE title = $1;

-- QUERIES AUTHORS

-- Esta query me da todos los authors de mi DB
SELECT * FROM authors;

-- Esto añade cosas a authors
INSERT INTO authors(name,surname,email,image)
VALUES ($1,$2,$3,$4);

-- Esto actualiza la info de foto de author
UPDATE authors
SET image = $1
WHERE name = $2;

-- Esto borra autor por email
DELETE FROM authors
WHERE email = $1;