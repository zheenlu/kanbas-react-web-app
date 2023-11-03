function Lab5 (app) {
  app.get("/a5", (req, res) => {
    res.send("Welcome to Lab 5");
  });
  app.get("/a5/hello/:name", (req, res) => {
    const name = req.params.name; // extract the name, which is stored in the params object
    res.send(`Hello ${name}`);
  });
  app.get("/a5/add/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`${a} + ${b} = ${a + b}`)
  });
  app.get("/a5/subtract/:a/:b", (req, res) => {
    const { a, b } = req.params; // another syntax using destructuring
    res.send(`${a} - ${b} = ${parseInt(a) - parseInt(b)}`)
  });
}

export default Lab5;