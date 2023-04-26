class Car{
    company
    model
    year
    constructor(c,m,y){
        this.company = c
        this.model = m
        this.year = y
    }
    getDescription(){
        return `This is a ${this.company} ${this.model} ${this.year}`;
    }

}
const myCar = new Car("Ferrari","Roma",2022);
console.log(myCar.getDescription());
