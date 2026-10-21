<?php
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foodie Reppy</title>
    <style>
        <?php include './homepage/style.css'; ?>
    </style>
</head>

<body>

<header class="main-header">

    <div class="header-title">
        <h2>Welcome To Foodie Reppy</h2>
    </div>

    <div class="header-buttons">

        <a href="Categories.php">
            <button class="pill-btn categories">Categories</button>
        </a>

        <a href="About.php">
            <button class="pill-btn about">About</button>
        </a>

        <a href="FAQ.php">
            <button class="pill-btn faq">FAQ</button>
        </a>

    </div>

</header>

<div class="recipe-title">

    <h1>Food Recipe</h1>
<div class = recipe-container>
    <div class="recipe-subtitle">
        <span></span>
        <p>DISCOVER. COOK. ENJOY.</p>
        <span></span>
    </div>
<p>Breathe new life into your daily meals. We make cooking fun,
        stress-free, and absolutely delicious for foodies of all skill levels.</p>
</div>

<div class="search-wrap">

    <div class="searchIcon">
        <img src="https://img.icons8.com/?size=100&id=112468&format=png&color=000000" class="searchIconImg">
    </div>

    <input class="search" type="search" placeholder="Search...">

</div>

<div class="box">

    <button class="slider-btn prev" onclick="slide(-1)">&#10094;</button>

    <div class="slider-track-wrap">

        <div class="slider-track" id="sliderTrack">

            <a class="cuisine-card" href="Categories.php?type=filipino">

                <div class="cuisine-img">

                    <img src="images/filipino.png" alt="Filipino Cuisine">

                    <div class="cuisine-overlay">
                        <h2>Filipino<br>Cuisine</h2>
                        <span class="card-arrow">&#10095;</span>
                    </div>

                </div>

            </a>

            <a class="cuisine-card" href="Categories.php?type=japanese">

                <div class="cuisine-img">

                    <img src="images/japanese.png" alt="Japanese Cuisine">

                    <div class="cuisine-overlay">
                        <h2>Japanese<br>Cuisine</h2>
                        <span class="card-arrow">&#10095;</span>
                    </div>

                </div>

            </a>

            <a class="cuisine-card" href="Categories.php?type=italian">

                <div class="cuisine-img">

                    <img src="images/italian.png" alt="Italian Cuisine">

                    <div class="cuisine-overlay">
                        <h2>Italian<br>Cuisine</h2>
                        <span class="card-arrow">&#10095;</span>
                    </div>

                </div>

            </a>

            <a class="cuisine-card" href="Categories.php?type=chinese">

                <div class="cuisine-img">

                    <img src="images/chinese.png" alt="Chinese Cuisine">

                    <div class="cuisine-overlay">
                        <h2>Chinese<br>Cuisine</h2>
                        <span class="card-arrow">&#10095;</span>
                    </div>

                </div>

            </a>

            <a class="cuisine-card" href="Categories.php?type=mexican">

                <div class="cuisine-img">

                    <img src="images/mexican1.png" alt="Mexican Cuisine">

                    <div class="cuisine-overlay">
                        <h2>Mexican<br>Cuisine</h2>
                        <span class="card-arrow">&#10095;</span>
                    </div>

                </div>

            </a>

            <a class="cuisine-card" href="Categories.php?type=indian">

                <div class="cuisine-img">

                    <img src="images/indianfood.jpg" alt="Indian Cuisine">

                    <div class="cuisine-overlay">
                        <h2>Indian<br>Cuisine</h2>
                        <span class="card-arrow">&#10095;</span>
                    </div>

                </div>

            </a>

            <a class="cuisine-card" href="Categories.php?type=american">

                <div class="cuisine-img">

                    <img src="images/american.jpg" alt="American Cuisine">

                    <div class="cuisine-overlay">
                        <h2>American<br>Cuisine</h2>
                        <span class="card-arrow">&#10095;</span>
                    </div>

                </div>

            </a>

        </div>

    </div>

    <button class="slider-btn next" onclick="slide(1)">&#10095;</button>

</div>

<footer class="footer">

    <div class="footer-content">

        <div class="footer-brand">

            <h2>Foodie Reppy</h2>

            <p>Discover. Cook. Enjoy.</p>

        </div

    <div class="footer-bottom">

        <p>© 2026 Foodie Reppy. All Rights Reserved.</p>

    </div>

</footer>

<script>
    <?php include './homepage/script.js'; ?>
</script>

</body>
</html>