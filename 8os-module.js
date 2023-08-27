
const os=require('os')
const user=os.userInfo();

console.log(user);

console.log(`System uptime is ${os.uptime()} seconds`);

const currentOs={
    name:os.type(),
    release:os.release(),
    freeMem:os.freemem(),
    totalMem:os.totalmem(),
};

console.log(currentOs);