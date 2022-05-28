const json = require('koa-json')
const Koa = require('koa')
const cors = require('@koa/cors');

const app = new Koa()

app.use(cors());
app.use(json())

app.use((ctx) => {
  ctx.body = { foo: 'bar' }
})

app.listen(3000);