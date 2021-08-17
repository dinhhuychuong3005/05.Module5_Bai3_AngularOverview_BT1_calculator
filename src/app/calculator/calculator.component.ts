import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  // templateUrl: './test.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public num1:any;
  public num2:any;
  public result:any;
  public resultString: any;

  sum() {
    this.result = this.num1 + this.num2;
    this.resultString = this.num1 + ' + ' + this.num2;
  }

  diff() {
    this.result = this.num1 - this.num2;
    this.resultString = this.num1 + ' - ' + this.num2;
  }
  multiplication() {
    this.result = this.num1 * this.num2;
    this.resultString = this.num1 + ' x ' + this.num2;
  }
  division() {
    this.result = this.num1 / this.num2;
    this.resultString = this.num1 + ' / ' + this.num2;
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
