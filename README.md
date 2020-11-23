This projects-app with react was built by creating a server with Node, GraphQL and Prisma and the frontend side with React JS (with Context, Hooks and Router), Javascript ES6, UUID, Bootstrap and Apollo. The user can add, update and delete a project and can add and delete a task (each project can have many tasks). This is a Work In Progress project. 

# Clone the project and start running it by following this:

## In the root, run Create React App:
#### 1 - `yarn install`
#### 2 - `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## In the server folder, run the server: 
#### 1 - `yarn install`
#### 2 - `node src/index.js` >> Runs the server on [http://localhost:4000](http://localhost:4000)
#### 3 (another tab) - `npx prisma studio --experimental` >> Runs a Prisma Studio on [http://localhost:5555](http://localhost:5555)
#### 4 (another tab) - `prisma playground` >> Runs a Prisma playground on [http://localhost:3000/playground](http://localhost:3000/playground)

-------------------------------------

#### To deploy and update Prisma (WIP):
On the server folder run: 
#### `npx prisma migrate save --experimental`
#### `npx prisma migrate up --experimental`
#### `prisma deploy`
#### `prisma generate`

##### HTTP: [https://eu1.prisma.sh/filipa-marta-e131a6/projects-app/dev](https://eu1.prisma.sh/filipa-marta-e131a6/projects-app/dev)
##### WS: [wss://eu1.prisma.sh/filipa-marta-e131a6/projects-app/dev](wss://eu1.prisma.sh/filipa-marta-e131a6/projects-app/dev)
##### Prisma Admin: [https://eu1.prisma.sh/filipa-marta-e131a6/projects-app/dev/_admin](https://eu1.prisma.sh/filipa-marta-e131a6/projects-app/dev/_admin)

This app was built as a tech challenge for Loka.
