function ElectricLamp(){
    this.status = false;
    // 
    this.turnOff = function(){
        this.status = false;
    }
    this.turnOn = function () {
        this.status = true;
    }
    this.getStatus = function(){
        return this.status;
    }
}

function SwitchButton(name, gender, weight){
    this.status = false;
    this.lamp = new ElectricLamp();
    //
    this.connectToLamp = function(electricLamp){
        this.lamp = electricLamp;
        this.status = electricLamp.getStatus();
    }
    this.switchOff = function(){
        this.status = false;
        this.lamp.turnOff();
        document.write("<br>Lamp ON: " + this.lamp.getStatus());
        // document.getElementById("statusLamp").innerHTML = this.lamp.getStatus();
    }
    this.switchOn = function(){
        this.status = true;
        this.lamp.turnOn();
        document.write("<br>Lamp ON: " + this.lamp.getStatus());
        // document.getElementById("statusLamp").innerHTML = this.lamp.getStatus();
    }
}

var electricLamp = new ElectricLamp();
var switchButton = new SwitchButton();
switchButton.connectToLamp(electricLamp);

for (let i = 0; i < 10; i++) {
    switchButton.switchOn();
    switchButton.switchOff();
}

