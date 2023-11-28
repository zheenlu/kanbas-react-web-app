function HelloRoutes(app) {
  app.get("/", (req, res) => {
    res.send("Welcome to Node.js");
  });

  app.get("/hello", (req, res) => {
    res.send("Hello Zhen");
  });
}

export default HelloRoutes;