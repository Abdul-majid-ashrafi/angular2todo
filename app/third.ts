import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common'

@Component({
    selector: "new-selector",
    templateUrl: 'app/home.html'
//     template: `<br/> <h2 style="color:red">{{studentName}}</h2>
//    Text1: <input type="text" [(ngModel)]="studentName" placeholder="Write Something"/><br/>
//   <button (click)="toLowerCase()">lowercase!</button> 
//   <button (click)="toUpperCase()">UpperCase</button>
// <button (click)="myFunction()"> Add </button>
// <button (click)="removeItem($index)"> removed </button>
// <ul>
//  <li *ngFor="#name of array">Hey {{ name }} </li> </ul>
//     `
   , directives: [NgFor]
})


export class NextThird{
    // teacherName : string;
    studentName : string;
        array: string[];
    
    constructor() {
        this.array = [];
    }
    
        toLowerCase () {
    this.studentName = this.studentName.toLowerCase();
  }
   toUpperCase () {
    this.studentName = this.studentName.toUpperCase();
  }
        myFunction (){
            this.array.push(this.studentName)
        }
        // removeItem($index){
        //     this.array.splice($index,1)
        // }
     
}