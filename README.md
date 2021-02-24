To run the project: 
  get both copies of servers form github by runing code below: 
```
git clone https://github.com/TadasSudzius/c19-frontend.git
```
do the same with the other repo
```
git clone https://github.com/TadasSudzius/c19-backend.git
```
At this point you should have two folders `c19-frontend` and `c19-frontend`. Next you need to install
dependencies for both servers. Run:
```
cd c19-frontend
```
```
npm install
```
and..
```
cd c19-backend
```
```
npm install
```
Now you need to start servers by getting to their directories and runing command `npm start` , just before you run it make sure your ports `3000` (backend) and `8081` (frontend) are available. If you need to change them:
for backend - change port value in file `env.js`, frontend - in file `package.json` change port number at the scripts object:
```
"start": "set PORT=8081 && react-scripts start",
```
if you are on the Linux command should look like:
```
"start": "PORT=8081 react-scripts start",
```
### Docker
Working with docker it's better to remove port part all together to avoid conflicts 

Libraries and technologies:
node.js
https://nodejs.org/en/
react
https://reactjs.org/
node-cache
https://www.npmjs.com/package/node-cache
Semantic UI
https://semantic-ui.com/
d3js
https://d3js.org/
nivo
https://nivo.rocks/
and google..
