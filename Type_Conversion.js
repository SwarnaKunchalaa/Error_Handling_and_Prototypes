
function convertToNumber(input){
    try{
        input = Number(input)
        if(isNaN(input)){
            throw ("Invalid Number")
        }
        else{
            console.log(input)
        }
    }
    catch(err){
        console.log(err)
    }
}

convertToNumber("123")
convertToNumber("abc")