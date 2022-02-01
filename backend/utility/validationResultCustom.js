const { validationResult } = require("express-validator");

module.exports = validationResultCustom=validationResult.withDefaults({
    formatter: error=>{
        return{
            messagge: error.param+" "+error.value+" "+error.msg
        }
    }
})