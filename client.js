const net = require("net");
const { IP, PORT, NAME } = require('./constant');
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: ${NAME}`);
    // setInterval(() => {
    //   conn.write('Move: up')
    // }, 1000);

  });
  
  conn.on('data', (data) => {
    console.log(`server says: ${data}`);
  });
  return conn;
};
module.exports = { connect };