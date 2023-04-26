class User{
    #username
    #password
    constructor(username, password){
        this.#username = username
        this.#password = password
    }
    get getPassword(){
        return this.#password.replace(/./g,"*")
    }
    get username(){
        return this.#username
    }
    set setPassword(newpassword){
        let re = /[A-Z][0-9]/
        let res = re.test(newpassword)
        if(newpassword.length<8 || !res){
            console.error("Password must be at least 8 characters long and contain at least one number and one uppercase letter.")
        }
        else{
        this.#password = newpassword
        }

    }
    getdetails(){
        console.log(this.#username+" "+this.#password);
    }
}

const user = new User("Swarna","Ferrari");
console.log(user.getPassword)
user.setPassword = "mypassword";
user.setPassword = "MyPassword";
user.setPassword = "Mypassword123"
console.log(user.getPassword)
