"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var subject = new rxjs_1.BehaviorSubject("Default Value");
subject.subscribe(function (data) {
    console.log("Subscriber A: " + data);
});
subject.next("R");
subject.next("Deepak");
subject.next("Deepa");
subject.subscribe(function (data) {
    console.log("Subscriber B: " + data);
});
subject.next("Deep");
/*
    tsc rxjsdemo.ts && node rxjsdemo.js
    Subscriber A: R
    Subscriber A: Deepak
    Subscriber A: Deepa
    Subscriber B: Deepa
    Subscriber A: Deep
    Subscriber B: Deep
*/ 
