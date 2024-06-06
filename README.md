<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>URL Shortener</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1, h2 {
            color: #333;
        }
        a {
            color: #721817;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        ul li {
            background: #e0e0e2;
            margin: 10px 0;
            padding: 10px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>URL Shortener</h1>
        <p>Welcome to the URL Shortener project! This application allows users to shorten long URLs into more manageable, shorter links. It's built with Node.js, Express, MongoDB, and EJS templating.</p>
        
        <h2>Live Demo</h2>
        <p><a href="#" target="_blank">Click here to see the live application</a> <!-- Replace `#` with your actual live link --></p>
        
        <h2>Screenshot</h2>
        <img src="screenshot.png" alt="URL Shortener Screenshot" style="max-width: 100%; height: auto;"> <!-- Replace `screenshot.png` with the actual path to your screenshot -->
        
        <h2>Features</h2>
        <ul>
            <li>Shorten long URLs into short, easy-to-share links.</li>
         
            <li>View a list of all shortened URLs.</li>
        </ul>
        
        <h2>Installation</h2>
        <p>To run this project locally, follow these steps:</p>
        <ol>
            <li>Clone the repository:</li>
            <pre><code>git clone https://github.com/your-username/url_shortener.git
cd url_shortener</code></pre> <!-- Replace the URL with your actual repository URL -->
            <li>Install dependencies:</li>
            <pre><code>npm install</code></pre>
            <li>Start the MongoDB server:</li>
            <pre><code>mongod</code></pre>
            <li>Run the application:</li>
            <pre><code>npm start</code></pre>
            <li>Open your browser and navigate to:</li>
            <pre><code>http://localhost:8000</code></pre>
        </ol>
        
        <h2>Usage</h2>
        <p>1. Enter a long URL in the input field and click "Shorten URL".</p>
        <p>2. The application will generate a short URL and display it below.</p>
        <p>3. Click on the short URL to be redirected to the original long URL.</p>
        
        <h2>Technologies Used</h2>
        <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>EJS</li>
            <li>HTML/CSS</li>
        </ul>
        
      
        
        <h2>License</h2>
        <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
    </div>
</body>
</html>