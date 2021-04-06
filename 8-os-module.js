const os=require('os')
const  user=os.userInfo()


console.log(os.userInfo())
console.log(os.uptime());
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    uptime: os.uptime(),
}
console.log(currentOS)