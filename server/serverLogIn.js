'use strict';

const http = require('http');
const host = 'localhost';
const port = 9000;
const fs = require('fs');
const pathToBase = '../usersBase/db.json';

const requestListener = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const userData = JSON.parse(body);
        checkData(userData, res);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Error parsing JSON' }));
      }
    });
  }
};

const checkData = (data, res) => {
  fs.readFile(pathToBase, 'utf8', (error, fileContent) => {
    if (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Error reading file' }));
    } else {
      const allUsers = JSON.parse(fileContent);
      const nameInBase = allUsers.users.some(
        (person) => person.username === data.username,
      );
      const emailInBase = allUsers.users.some(
        (person) => person.email === data.email,
      );
      if (nameInBase || emailInBase) {
        res.statusCode = 409;
        res.end();
      } else {
        allUsers.users.push(data);
        fs.writeFile(pathToBase, JSON.stringify(allUsers, null, 2), (error) => {
          if (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Error download file' }));
          } else {
            res.statusCode = 200;
            res.end();
          }
        });
      }
    }
  });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
