function hasProperties(person){
    try{
        if(person.hasOwnProperty("name") && person.hasOwnProperty("age")){
            return `Name: ${person.name}, Age: ${person.age}`
        }
        else{
            throw("Invalid parameter type");
        }
    }
    catch(err){
        return err;
    }
}

console.log(hasProperties({name : "Swarna",age : 21}));
console.log(hasProperties({name : "Swarna"}));
console.log(hasProperties(["name", "Swarna"]));

