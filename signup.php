<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    header("Content-Type: application/json");

    require __DIR__ . "/database.php";

    $fullName = trim($_POST["fullName"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $plainPassword = $_POST["password"] ?? "";
    $confirm = $_POST["confirmPassword"] ?? "";

    $errors = [];

    if (mb_strlen($fullName) < 2) {
        $errors["fullName"] = "Please enter your full name.";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors["email"] = "Please enter a valid email address.";
    }
    if (strlen($plainPassword) < 8) {
        $errors["password"] = "Password must contain at least 8 characters.";
    }
    if ($plainPassword !== $confirm) {
        $errors["confirmPassword"] = "Passwords do not match.";
    }

    if ($errors) {
        http_response_code(422);
        echo json_encode(["success" => false, "errors" => $errors]);
        exit;
    }

    $level = ob_get_level();

    try {
        ob_start();
        $con = getConnection();
        ob_end_clean();

        if (!$con) {
            throw new Exception("Database connection failed.");
        }


        $stmt = $con->prepare("SELECT id FROM users WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->close();
            $con->close();
            http_response_code(409);
            echo json_encode([
                "success" => false,
                "errors" => ["email" => "This email is already registered."],
            ]);
            exit;
        }
        $stmt->close();


        $hash = password_hash($plainPassword, PASSWORD_DEFAULT);

        $stmt = $con->prepare(
            "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)"
        );
        $stmt->bind_param("sss", $fullName, $email, $hash);
        $stmt->execute();

        $stmt->close();
        $con->close();

        echo json_encode(["success" => true, "message" => "Account created! You can now log in."]);
    } catch (Throwable $e) {
        while (ob_get_level() > $level) {
            ob_end_clean();
        }
        error_log($e->getMessage());
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Something went wrong. Please try again."]);
    }

    exit; 
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up | Foodie Reppy</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./signup/signup.css">
</head>
<body>
  <header class="site-header">
    <a class="brand" href="index.php" aria-label="Foodie Reppy home">Foodie Reppy</a>
    <nav class="main-nav" aria-label="Main navigation">
      <a href="index.php">Home</a>
      <a href="Categories.php">Categories</a>
      <a href="About.php">About</a>
      <a href="FAQ.php">FAQ</a>
    </nav>
    <button class="menu-toggle" id="menuToggle" type="button" aria-label="Toggle navigation" aria-expanded="false">☰</button>
  </header>

  <main class="page-main">
    <section class="signup-card" aria-labelledby="signupTitle">
      <div class="card-heading">
        <a class="card-brand">Foodie Reppy</a>
        <h1 id="signupTitle">Create Your Account</h1>
      </div>

      <form id="signupForm" novalidate>
        <div class="form-field">
          <label for="fullName">Full Name</label>
          <input id="fullName" name="fullName" type="text" placeholder="Enter your full name" autocomplete="name" required>
          <small class="error-message" id="nameError"></small>
        </div>

        <div class="form-field">
          <label for="email">Email Address</label>
          <input id="email" name="email" type="email" placeholder="Enter your email address" autocomplete="email" required>
          <small class="error-message" id="emailError"></small>
        </div>

        <div class="form-field">
          <label for="password">Password</label>
          <div class="password-wrap">
            <input id="password" name="password" type="password" placeholder="Create a password" autocomplete="new-password" required>
            <button class="password-toggle" type="button" data-toggle="password" aria-label="Show password">◉</button>
          </div>
          <small class="hint">Use at least 8 characters.</small>
          <small class="error-message" id="passwordError"></small>
        </div>

        <div class="form-field">
          <label for="confirmPassword">Confirm Password</label>
          <div class="password-wrap">
            <input id="confirmPassword" name="confirmPassword" type="password" placeholder="Re-enter your password" autocomplete="new-password" required>
            <button class="password-toggle" type="button" data-toggle="confirmPassword" aria-label="Show confirm password">◉</button>
          </div>
          <small class="error-message" id="confirmError"></small>
        </div>

        <button class="primary-button" type="submit">Sign Up</button>
        <div class="separator"><span></span><p>or</p><span></span></div>
        <a class="secondary-button" href="login.php">Already have an account? <strong>Log In</strong></a>
        <p class="form-feedback" id="formFeedback" role="status" aria-live="polite"></p>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-brand">
      <a class="brand" href="index.php">Foodie Reppy</a>
      <p>Discover. Cook. Enjoy.</p>
    </div>
    <small>© <span id="year"></span> Foodie Reppy. All Rights Reserved.</small>
  </footer>

  <script src="./signup/signup.js"></script>
</body>
</html>