const zod = require('zod')

const employeeValidationSchema = zod.object({
    name: zod.string().min(3).max(20),
    age: zod.number().min(18).max(60),
    email:zod.string.email(),
    password:zod.string().min(3).max(15),
    count:zod.number().max(5)
    //phone:zod.string().regex(/^[6-9]{1}[0-9]{9}$/)
}).strict()