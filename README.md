

 <div id="header" align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/3670/3670163.png" width="100"/>
  <h2>Almabetter Capstone Project - Get Youtube Subscribers</h2>
</div>
<div align="center">
<h2>Hello ! </h2>
  <p>Sonal Soni here !</p> 
</div>

<!-- Links to social profiles  -->
<div id="badges" align="center">
  <a href="https://www.linkedin.com/in/sonal-soni-004b47115/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <a href="https://twitter.com/sonalsoni_8">
    <img src="https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge"/>
  </a>
</div>
This project is about making a system to handle YouTube subscribers using the backend. I have created a backend api which will send the response in form of JSON. To keep things organized, I used a method where different parts of the code are stored in separate files. For example, I put the part that connects to the API in one file, and the part that works with the database in another file.


## Project Description

<b>Project Name : <i>Get YouTube Subscribers</i> </b>
<a href ="https://get-youtube-subscriber-almabetter-backend-project-f2iwsy8z3.vercel.app/"/>
Live Here
</a><br>
<b>Video Demo : <i>Get YouTube Subscribers</i> </b>
<a href ="#"/>
Live Here
</a>

## Languages and Tools used:

 <div>
<img src="https://skills.thijs.gg/icons?i=mongodb" title="MongoDB" alt="MongoDB"/>&nbsp;
  <img src="https://avatars.githubusercontent.com/u/10251060?s=200&v=4" title="Postman" alt="Postman" width="50" height="50"/>&nbsp;
  <img src="https://skills.thijs.gg/icons?i=nodejs" title="NodeJS" alt="NodeJS" />&nbsp;
  <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" title="ExpressJS" alt="ExpressJS" width="50" height="50"/>&nbsp;  
</div>


## Characteristics

- User can get the all subscribers.
- User can get the all subscriber with only name and subscribedchannel.
- user can get the subscriber details by id.


## API Documentation
- GET [http://localhost:3000/] - The landing page where user will see the http requests list which they can perform to get subcribers details.

- GET [http://localhost:3000/subscribers] - When a user accesses the endpoint /subscribers, the user will retrieve an array of every subscriber in JSON format from the local MongoDB database.

- GET [http://localhost:3000/subscribers/names] - When a user accesses the endpoint /subscribers/names, the user will retrieve an array of all subscribers in JSON format with only the name and subscribed Channel fields from the local MongoDB database, where the data is kept.

- GET [http://localhost:3000/subscribers/:id] - The user must enter the subscribers ID that is kept in the database to get a specific subscribers information, such as name, subscribed Channel, and subscribed Date, from the endpoint /subscribers/:id in ID, where the data is stored in local MongoDB database.

Note:
If user provide an incorrect subscribers ID rather than the right subscribers ID (where the IDs do not match) that is kept in the database then the user will receive an error message in JSON format.
 

## Getting Started

Before running this application, you must have the following softwares:

Node.js https://nodejs.org/en

MongoDB https://www.mongodb.com/try/download/shell or simply create MongoDB account online

## **How To Run Locally**
- To run this project locally, use the following command in your CLI:

1. Clone this repository:

```bash
#  git clone https://github.com/HemantWD/Youtube-Subscribers.git
```

2. Install dependencies:

```bash
 npm i
```

3. Create a .env file and add monogodb uri

4. Create a database:

```bash
cd src
node createDatabase.js
```

5. Start the application:

```bash
 npm run start
```
- Go to any Browser and search localhost:3000

