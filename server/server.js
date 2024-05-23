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
        console.log(userData);
        if (req.url === '/login') {
          handleRegister(userData, res);
        } else if (req.url === '/signin') {
          handleLogin(userData, res);
        } else {
          res.statusCode = 404;
          res.end(JSON.stringify({ error: 'Not Found' }));
        }
      } catch (error) {
        console.error('Error parsing JSON:', error);
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Error parsing JSON' }));
      }
    });
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
};

const handleRegister = (data, res) => {
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
            res.end(JSON.stringify({ error: 'Error writing file' }));
          } else {
            res.statusCode = 200;
            res.end();
          }
        });
      }
    }
  });
};

const handleLogin = (data, res) => {
  fs.readFile(pathToBase, 'utf8', (error, fileContent) => {
    if (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: 'Error reading file' }));
    } else {
      const allUsers = JSON.parse(fileContent);
      const nameInBase = allUsers.users.some(
        (person) => person.username === data.username,
      );
      const passwordInBase = allUsers.users.some(
        (person) => person.password === data.password,
      );
      if (nameInBase && passwordInBase) {
        res.statusCode = 200;
        res.end();
      } else {
        res.statusCode = 404;
        res.end();
      }
    }
  });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on https://${host}:${port}`);
});
