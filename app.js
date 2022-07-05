const Sensors = require('./controllers/sensorsData');

const x = new Sensors();
x.list("FS-001-01", "2022").then((returns) => {console.log(returns)})