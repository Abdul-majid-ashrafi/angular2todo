import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common'

@Component({
    selector: "new-selector",
    templateUrl: 'app/home.html'
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
            this.studentName = ''
        }
        removeItem(index){
            this.array.splice(index,1)
        }
     
}
