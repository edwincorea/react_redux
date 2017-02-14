const app = require("./app");
const {port} = require("./app");

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});