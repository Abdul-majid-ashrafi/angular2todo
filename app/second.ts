import {Component} from 'angular2/core';
import {NextThird} from './third'

@Component({
    selector : 'mani',
    template :`<h1> I am using angular2..! </h1> <br/> <new-selector>Loading.. </new-selector>`,    //`<h1> I am in panacloud..! </h1>`
    directives: [NextThird]
})

export class NextSecond { }
