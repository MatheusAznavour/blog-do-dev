function validateSigninInput(...args){
    for(let i = 0; i < args.length; i++){
        if(!args[i]){
            console.log("A field is empty!!");
            return false;
        }
    }
    const email = args[1]

    console.log(args, email)

}

module.exports = {validateSigninInput};