-- Create the sports_players database
CREATE DATABASE IF NOT EXISTS sports_players;

-- Switch to the sports_players database
USE sports_players;

-- Create the sports_players table
CREATE TABLE IF NOT EXISTS players (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255),
    gender VARCHAR(45),
    image_url TEXT,
    sports VARCHAR(255),
    created_at DATETIME,
    updated_at DATETIME
);

-- Insert the information of sports players
INSERT INTO players (name, gender, image_url, sports, created_at, updated_at) VALUES
('LeBron James', 'Male', 'img=/i/headshots/nba/players/full/1966.png&w=350&h=', 'Basketball, Football, Soccer', NOW(), NOW()),
('Serena Williams', 'Female', 'img=/i/headshots/tennis/players/full/394.png&w=350&h=254', 'Tennis, Volleyball, Basketball', NOW(), NOW()),
('Lionel Messi', 'Male', 'img=/i/headshots/soccer/players/full/45843.png&w=350&h=254', 'Soccer, Basketball, Tennis', NOW(), NOW()),
('Tom Brady', 'Male', 'img=/i/headshots/nfl/players/full/2330.png&w=350&h=254', 'Football, Basketball, Baseball', NOW(), NOW()),
('Megan Rapinoe', 'Female', 'HCsU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c2kuY29tLy5pbWFn/ZS9jX2xpbWl0LGNz/X3NyZ2IsZmxfcHJv/Z3Jlc3NpdmUscV9h/dXRvOmdvb2Qsd183/MDAvTVRZNE1EQTRN/VGszT1RnMk1UTXpN/alkxL29seW1waWNz/LWRheS0xMy13b21l/bi1zLWZvb3RiYWxs/LWZpbmFsLW1hdGNo/LTI2LXVzYS12LWph/cGFuLTVkMjc0ZTFk/ZjljNmVjYzE2ZTAw/MDAwMWpwZy5qcGc', 'Soccer, Basketball, Volleyball', NOW(), NOW()),
('Cristiano Ronaldo', 'Male', 'https://imgs.search.brave.com/ys8glmzc7tI8frgRwDyGUmVtuNAVs3pdO9A_IK1Wudw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9nZXR0/eWltYWdlcy05NzE0/NjMxMTAuanBnP2Ny/b3A9MXh3OjEuMHho/O2NlbnRlcix0b3Am/cmVzaXplPTY0MDoq', 'Soccer, Basketball, Baseball', NOW(), NOW()),
('Becky Hammon', 'Female', 'https://imgs.search.brave.com/DVKUquWbAhwbwWof3BKjKB3Ubc7dG7Bs1VJ_g7d15Ak/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c2kuY29tLy5pbWFn/ZS9jX2xpbWl0LGNz/X3NyZ2IsZmxfcHJv/Z3Jlc3NpdmUscV9h/dXRvOmdvb2Qsd183/MDAvTVRZNE1UZzFO/VFEyTURRM09Ea3dO/ekExL2JlY2t5LWhh/bW1vbi0yMDA3LTc1/Mzk4NjM3X21hc3Rl/cmpwZy5qcGc', 'Basketball, Soccer, Volleyball', NOW(), NOW()),
('Steph Curry', 'Male', 'img=/i/headshots/nba/players/full/3975.png&w=350&h=254', 'Basketball, Golf, Soccer', NOW(), NOW()),
('Patrick Mahomes', 'Male', 'img=/i/headshots/nfl/players/full/3139477.png&w=350&h=254', 'Football, Baseball, Basketball', NOW(), NOW()),
('Alex Morgan', 'Female', 'https://imgs.search.brave.com/t1YOHGBd3sDc4OrZysLzkcpwzd1DQEJIc0vuV0w_o_4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy83NDA4NzUt/YWxleC1tb3JnYW4t/Y29tcHV0ZXItd2Fs/bHBhcGVyLmpwZw', 'Soccer, Basketball, Softball', NOW(), NOW()),
('Kevin Durant', 'Male', 'img=/i/headshots/nba/players/full/3202.png&w=350&h=254', 'Basketball, Football, Baseball', NOW(), NOW()),
('Breanna Stewart', 'Female', 'img=/i/headshots/wnba/players/full/2998928.png&w=350&h=254', 'Basketball, Volleyball, Soccer', NOW(), NOW()),
('Clayton Kershaw', 'Male', 'img=/i/headshots/mlb/players/full/28963.png&w=350&h=254', 'Baseball, Basketball, Football', NOW(), NOW()),
('Sue Bird', 'Female', 'img=/i/headshots/wnba/players/full/91.png&w=350&h=254', 'Basketball, Soccer, Volleyball', NOW(), NOW()),
('Mike Trout', 'Male', 'img=/i/headshots/mlb/players/full/30836.png&w=350&h=254', 'Baseball, Basketball, Football', NOW(), NOW()),
('Carli Lloyd', 'Female', 'https://imgs.search.brave.com/nBjQflPbmRhd2NCsO2gYV4jkFQGw7N6ZcaqiZp5_49k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQyNDQ1/OTQuanBn', 'Soccer, Basketball, Volleyball', NOW(), NOW()),
('Giannis Antetokounmpo', 'Male', 'img=/i/headshots/nba/players/full/3032977.png&w=350&h=254', 'Basketball, Soccer, Track and Field', NOW(), NOW()),
('Maya Moore', 'Female', 'https://imgs.search.brave.com/0CbjAvF102bPnuzjG1c2ulg0MuOCyOoQkG4l7q1kNGQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU2L2M3/L2YxLzU2YzdmMTli/OTIyNmVmMGUwNjE3/MGRkMDUxMjdlMWZm/LmpwZw', 'Basketball, Soccer, Volleyball', NOW(), NOW()),
('Kylian Mbappé', 'Male', 'z8E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDMxMzc1/MzguanBn', 'Soccer, Basketball, Tennis', NOW(), NOW()),
('Simone Biles', 'Female', 'https://imgs.search.brave.com/NzWJA51J7B7l4sNZDhCOtRKTcnaYzZavtcLkR9nDk9E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMjMvMTczMTIz/LTA1MC1FMjhBMDVC/MC9TaW1vbmUtQmls/ZXMtZmxvb3ItZXhl/cmNpc2Utcm91dGlu/ZS1hcnRpc3RpYy1n/eW1uYXN0aWNzLU9j/dC02LTIwMTMuanBn/P3c9NDAwJmg9MzAw/JmM9Y3JvcA', 'Gymnastics, Volleyball, Basketball', NOW(), NOW()),
('Paul George', 'Male', 'img=/i/headshots/nba/players/full/4251.png&w=350&h=254', 'Basketball, Volleyball, Football', NOW(), NOW());
