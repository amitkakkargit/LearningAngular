"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var asyncSubject = new rxjs_1.AsyncSubject();
//Subscriber 1
asyncSubject.subscribe(function (data) {
    console.log("Subscriber 1: ", data);
});
asyncSubject.next("A");
asyncSubject.next("B");
asyncSubject.next("C");
asyncSubject.complete();
//Subscriber 2
asyncSubject.subscribe(function (data) {
    console.log("Subscriber 2: ", data);
});
asyncSubject.next("D");
asyncSubject.complete();
//Subscriber 3
asyncSubject.subscribe(function (data) {
    console.log("Subscriber 3: ", data);
});
/*
     tsc asyncSubject.ts && node asyncSubject.js
*/
