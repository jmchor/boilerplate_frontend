<p align="center">
        <img src="https://badges.aleen42.com/src/react.svg" />
        <img src="https://img.shields.io/badge/Node%20-%20%235c5c5c?logo=nodedotjs&logoColor=%23339933&labelColor=%235c5c5c&color=%23339933" />
        <img src="https://img.shields.io/badge/GraphQL%20-%20%235c5c5c?logo=graphql&logoColor=%23E10098&labelColor=%235c5c5c&color=%23E10098" />
        <img src="https://img.shields.io/badge/TypeScript%20-%233178C6?logo=typescript&logoColor=%233178C6&labelColor=%235c5c5c" />
        <img src="https://badges.aleen42.com/src/vitejs.svg" />
        <img src="https://img.shields.io/npm/v/npm?logo=npm&color=%23CB3837" />
        <img src="https://img.shields.io/github/v/tag/jmchor/boilerplate_frontend?color=violet" />
        <img src="https://img.shields.io/website?url=https%3A%2F%2Fboilerplate.jmchor.dev&link=https%3A%2F%2Fboilerplate.jmchor.dev" />

</p>
</br>

<p align="center">
<img src="/public/cover.jpg" alt="that's the website" width="500px"/>
</p>

<h1 align="center">Boilerplate - Less Setup, More Code</h1>

<p align="center">To see the backend code, please click <b><a href="https://github.com/jmchor/boilerplate_backend">here</a></b> - and read the Wiki!</p>

</br>

<div align="center" style="font-size: 16px">
 Scratching your own itch is probably THE driving force behind hobby coding projects. That, and learning by doing.
 So here is the fruit of my labor learning to code a React app with a Node backend and a GraphQL server using Apollo. It is here to help you (and me) to set up your coding projects in no time, install the basic dependecies and keep track of what needs to be done using Kanban organization.

</div>
  <p align="center" style="font-size: 18px">For the "finished" app - <b>right through <a href="https://boilerplate.jmchor.dev" target="_blank">here</a></b></p>

---

</br>

### Local Setup

If you want to run the app locally (because nobody needs to see what you are working on), you are welcome to clone the repo or download the current release - or fork it, if you'd like to work on your own version. If you find a bug (more like "when"), submit a pull request!

#### Clone the repos

`git clone https://github.com/jmchor/boilerplate_frontend.git`

`git clone https://github.com/jmchor/boilerplate_backend.git`

##### Frontend

For personal use, running it development mode should be more than enough. Just install the dependencies and you're good. You don't even have to build the code (but you could with `npm run build`)

```bash
cd boilerplate_frontend
npm install
npm run dev
```

##### Backend

Backend is even easier. Clone the repo, install the dependencies and make it run. No build step (or, again, if you want to, with `npm run build`)

```bash
cd boilerplate_backend
npm install
npm run dev
```

The Frontend runs on port 5173, the backend currently on 4444. Adjust at your own leisure.

##### Connecting service

Of course, if you run it locally, you need to connect your own services.
Just make up a MongoDB instance on Atlas (or run one locally) and throw the connection link into an .env file in the backend, naming the variable
`MONGODB_URI`
You'll also need a secret for your jsonwebtoken. The variable is just called `JWT_SECRET`

For the Frontend you'll also need some stuff:

- `VITE_CLOUDINARY_NAME`
- `CLOUDINARY_KEY`
- `CLOUDINARY_SECRET`
- `VITE_CLOUDINARY_PRESET`
- `VITE_GRAPHQL_SERVER=http://localhost:4444/graphql`

So you better have a Cloudinary account where you can paste these things from. The "preset" you'll find in the Settings.
