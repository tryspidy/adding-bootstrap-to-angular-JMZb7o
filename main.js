npm install bootstrap
npm install jquery


Add this to angular.json

"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.css",
              "src/styles.css"
            ],
            "scripts": [
              "node_modules/bootstrap/dist/js/bootstrap.js",
              "node_modules/jquery/dist/jquery.js"
            ]