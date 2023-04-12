const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log(`Successfully connected to game server`);
    conn.write('Name: HA7');
  });
  
  conn.on('data', (data) => {
    console.log(`server says: ${data}`);
  });
  return conn;
};
module.exports = { connect };