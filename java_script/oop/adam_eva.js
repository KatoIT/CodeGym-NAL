function Apple(){
    this.weight = 10;

    this.decreate = function(){
        this.weight--;
    }

    this.isEmpty = function(){
        return this.weight == null;
    }

    this.getWeight = function(){
        return this.weight;
    }
}
function Human(name, gender, weight){
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    // Get - Set
    this.isMale = function(){
        return this.gender;
    }
    this.getWeight = function(){
        return this.weight;
    }
    this.getName = function () {
        return this.name;
    }
    this.setGender = function(gender){
        this.gender == gender;
    }
    this.setWeight = function(weight){
        this.weight == weight;
    }
    this.setName = function(name){
        this.name == name;
    }

    //
    this.checkApple = function(apple){
        return apple.weight > 0;
    }

    this.eat = function(apple){
        if (this.checkApple(apple)) {
            this.weight += 1;
            apple.decreate();
        } else {
            alert("Apples are out!");
        }
    }

    this.say = function(str){
        console.log(str);
    }
}

var ap = new Apple();
var adam = new Human("Adam", true, 50);
var eva = new Human("Eva", false, 45);

function buyApple() {
    ap = new Apple();
    start();
}

function start() {
    document.getElementById("Apple").innerHTML = "<h3>Weight of Apple: " + ap.getWeight() + "</h3>";
    document.getElementById("Human1").innerHTML = "<h3>Name: " + adam.getName() + "</h3>";
    document.getElementById("Human2").innerHTML = "<h3>Name: " + eva.getName() + "</h3>";
    document.getElementById("Weight1").innerHTML = "<p>Weight: " + adam.getWeight() + "</p>";
    document.getElementById("Weight2").innerHTML = "<p>Weight: " + eva.getWeight() + "</p>";
}
function adamEat() {
    adam.eat(ap);
    start();
}

function evaEat() {
    eva.eat(ap);
    start();
}
start();


