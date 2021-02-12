# codingame-api-node
A simple API wrapper for the undocumented Codingame API
# Build and minify
Make sure you have the dev dependencies installed, and run `npm run build`. Terser should minify the source file and the output should be in ``dist/index.js``.
# Use
``npm i codingame-api-node``

```js
const cg = require('codingame-api-node')
const api = new cg()
```
### Login
```
await api.login({Email:'email', Password: 'password'})
```

### Create Clash
```
clash = await api.CreateClash()
```
