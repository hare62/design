class Person {
  constructor(name){
    this.name = name;
    
  }
  getName() {
    return this.name;
  }

}
let p = new Person("张三");
alert(p.getName())