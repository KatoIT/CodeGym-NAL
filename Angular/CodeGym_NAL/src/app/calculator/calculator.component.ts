import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  firstNumber= 0;
  secondNumber: number = 0;
  operator = "+";

  constructor() {
  }

  ngOnInit(): void {
  }
  setOperator(ope: string){
    this.operator = ope;
  }
  calculator(): any {
    switch (this.operator) {
      case "+":
        return this.firstNumber + this.secondNumber;
      case "-":
        return this.firstNumber - this.secondNumber;
      case "x":
        return this.firstNumber * this.secondNumber;
      case "/":
        return this.firstNumber / this.secondNumber;
    }
  }
}
