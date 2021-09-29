# Picmash
Steps to build and deploy

Clone https://github.com/chamoddissanayake/Picmash.git
Open 'Picmash - Backend' and 'Picmash - Web' in 2 IDEs
In 'Picmash - Web' 
 1) run 'npm install'
 2) run 'npm start' 
    The frontend will be started in port 3000
In 'Picmash - Backend'
 1) Configure maven if it is not installed in your system.
 2) run 'mvn clean install'
 3) Start MySQL in port 3306 and create a database named 'picmas'
 4) replace your given username and password in application.properties file.
 5) run 'mvn spring-boot:run' or click the run button in PicmasApplication.java main method.
 6) The backend will be started in port 8001

Open the browser and navigate to the http://localhost:3000


Demo Video:
https://drive.google.com/file/d/1Px8c2rVAyXguKxELIB3hgKblTRKTLsCr/view?usp=sharing
