import { Elysia } from "elysia";
import { readdirSync } from "fs";
import path from "path";

const app = new Elysia();



app.get("/", () => "yes");
app.get("/ping", () => "pong!");

readdirSync(path.join(__dirname, 'routes')).forEach((file) => {
  require(`./routes/${file}`).default(app);
  console.log(`Loaded route ${file}`);
});


app.listen(3000, () => {
  console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);
});