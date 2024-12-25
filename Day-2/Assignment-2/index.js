const { createHmac } = require('node:crypto');

const secret = "Hello, Good Morning";
const hash = createHmac('sha256', secret).digest('hex');
console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e