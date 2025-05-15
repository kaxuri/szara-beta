-- Create the database
CREATE DATABASE IF NOT EXISTS szara_school_db;
USE szara_school_db;

-- Create authors table
CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    avatar_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create tags table
CREATE TABLE tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    slug VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create posts table
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    image_url VARCHAR(255),
    author_id INT NOT NULL,
    tag_id INT NOT NULL,
    published BOOLEAN DEFAULT false,
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
);

-- Insert sample data
INSERT INTO authors (name, email, avatar_url) VALUES
('Jan Kowalski', 'jan.kowalski@szkola.pl', '/avatars/jan-kowalski.jpg'),
('Anna Nowak', 'anna.nowak@szkola.pl', '/avatars/anna-nowak.jpg');

INSERT INTO tags (name, slug) VALUES
('Wydarzenie', 'wydarzenie'),
('Osiągnięcia', 'osiagniecia'),
('Informacje', 'informacje');

INSERT INTO posts (title, slug, content, image_url, author_id, tag_id, published, published_at) VALUES
(
    'Narodowe Święto Niepodległości',
    'narodowe-swieto-niepodleglosci',
    '# Narodowe Święto Niepodległości w naszej szkole

11 listopada to wyjątkowy dzień dla każdego Polaka. W tym roku, jak co roku, w naszej szkole odbyły się uroczyste obchody Narodowego Święta Niepodległości.

## Program uroczystości

W ramach obchodów zorganizowaliśmy:

- Uroczysty apel z udziałem całej społeczności szkolnej
- Występ chóru szkolnego z repertuarem pieśni patriotycznych
- Konkurs wiedzy o historii Polski
- Wystawę prac plastycznych o tematyce niepodległościowej

## Znaczenie święta

Narodowe Święto Niepodległości to czas refleksji nad historią naszego kraju i wartościami, które doprowadziły do odzyskania przez Polskę niepodległości w 1918 roku. To również okazja do zastanowienia się nad tym, co dla nas oznacza wolność i niepodległość w dzisiejszych czasach.

## Zaangażowanie uczniów

Cieszymy się z aktywnego udziału naszych uczniów w przygotowaniach i obchodach święta. Ich zaangażowanie i kreatywność w przygotowaniu dekoracji, występów i projektów związanych z tym ważnym dniem są godne podziwu.

Dziękujemy wszystkim za udział w obchodach i zachęcamy do pielęgnowania pamięci o naszej historii nie tylko od święta, ale każdego dnia.',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Strona%20G%C5%82%C3%B3wna%20Widok%20(1)-min-JteCWre0eOZ0GSTI4cGUg8Fkw29pw7.png',
    1,
    1,
    true,
    '2023-11-11 12:00:00'
);
