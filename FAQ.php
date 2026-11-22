<?php
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ - Foodie Reppy</title>
    <style>
        <?php include './homepage/style.css'; ?>

body {
    margin: 0;
    min-height: 100vh;
    padding-top: 70px;
    font-family: 'Nunito', sans-serif;
    color: var(--text);
    background-color: var(--cream);
    background-image:
        radial-gradient(
            ellipse at 0% 0%,
            rgba(255, 222, 174, .35),
            transparent 35%
        ),
        radial-gradient(
            ellipse at 100% 100%,
            rgba(255, 222, 174, .30),
            transparent 40%
        );
}
.header-title { 
    font-size: 20px;
    font-family: 'Caveat', cursive; 
    color: black; 
    display: flex;
    align-items: center; 
}
.faq-wrap {
    width: 90%;
    max-width: 1100px;
    margin: 100px auto 60px;
    padding: 0 20px;
}

.faq-wrap h1 {
    margin: 30px 0;
    font-size: 60px;
    text-align: center;
    color: #1a2a52;
}

.faq-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.faq-item {
    background: #FFF8E8;
    border-radius: 18px;
    padding: 25px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.12);
}

.faq-item h3 {
    margin: 0 0 12px;
    color: #1a2a52;
    font-size: 24px;
    line-height: 1.3;
}

.faq-item p {
    margin: 0;
    font-size: 18px;
    line-height: 1.6;
    color: #1a2a52;
}

@media (max-width: 768px) {

    .main-header {
        height: auto;
        padding: 15px 20px;
        flex-direction: column;
        gap: 12px;
    }

    .header-title {
        font-size: 18px;
        text-align: center;
    }

    .header-title::after {
        display: none;
    }

    .header-buttons {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
    }

    .pill-btn {
        font-size: 17px;
    }

    .faq-wrap {
        width: 90%;
        margin-top: 150px;
        padding: 0;
    }

    .faq-wrap h1 {
        font-size: 45px;
        margin-top: 20px;
        margin-bottom: 25px;
    }

    .faq-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .faq-item {
        padding: 20px;
    }

    .faq-item h3 {
        font-size: 21px;
    }

    .faq-item p {
        font-size: 16px;
        line-height: 1.5;
    }
}

@media (max-width: 480px) {

    .main-header {
        padding: 12px 15px;
    }

    .header-title {
        font-size: 16px;
    }

    .header-buttons {
        gap: 10px;
    }

    .pill-btn {
        font-size: 15px;
    }

    .faq-wrap {
        width: 92%;
        margin-top: 135px;
    }

    .faq-wrap h1 {
        font-size: 36px;
        margin-bottom: 20px;
    }

    .faq-grid {
        gap: 15px;
    }

    .faq-item {
        padding: 16px;
        border-radius: 14px;
    }

    .faq-item h3 {
        font-size: 18px;
        line-height: 1.4;
    }

    .faq-item p {
        font-size: 15px;
        line-height: 1.5;
    }
}
    </style>
</head>

<body>

    <header class="main-header">
        <div class="header-title">
            <h2>Welcome To Foodie Reppy</h2>
        </div>

        <div class="header-buttons">
            <a href="index.php">
                <button class="pill-btn home">Home</button>
            </a>

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

    <div class="faq-wrap"> 

    <h1>FAQ</h1>

    <div class="faq-grid">

        <div class="faq-item"> 
            <h3>What is Foodie Reppy?</h3> 
            <p>It is a recipe website where users can browse different cuisines and learn about classic dishes.</p> 
        </div> 

        <div class="faq-item"> 
            <h3>Can I view recipes by category?</h3> 
            <p>Yes. The Categories page lets you explore recipe collections by cuisine such as Filipino, Japanese, Italian, and more.</p> 
        </div> 

        <div class="faq-item"> 
            <h3>What information is included in each recipe?</h3> 
            <p>Each recipe includes a short description, a list of ingredients, and images of the ingredients to help users understand the dish better.</p> 
        </div> 

        <div class="faq-item"> 
            <h3>Can I search for a specific recipe?</h3> 
            <p>Yes. You can use the search feature on the Home page to look for recipes or dishes you want to find.</p> 
        </div> 

        <div class="faq-item"> 
            <h3>What cuisines are available on Foodie Reppy?</h3> 
            <p>Foodie Reppy includes different cuisines such as Filipino, Japanese, Italian, Chinese, Mexican, Indian, and American cuisine.</p> 
        </div> 

        <div class="faq-item"> 
            <h3>Can I see images of the ingredients?</h3> 
            <p>Yes. Some ingredients have images that can be viewed when interacting with the ingredient list.</p> 
        </div> 

        <div class="faq-item"> 
            <h3>How do I choose a cuisine?</h3> 
            <p>Go to the Categories page and select the cuisine you want to explore. The available recipes for that category will then be displayed.</p> 
        </div> 

        <div class="faq-item"> 
            <h3>Is Foodie Reppy easy to use?</h3> 
            <p>Yes. Foodie Reppy is designed with simple navigation so users can easily browse categories, select recipes, and view recipe information.</p> 
        </div>

    </div>

</div>
</body>
</html>