"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var relaySubject = new rxjs_1.ReplaySubject(2);
//First Subscriber
relaySubject.subscribe(function (data) {
    console.log("Subscriber A:" + data);
});
relaySubject.next("Value A");
relaySubject.next("Value B");
relaySubject.next("Value C");
relaySubject.subscribe(function (data) {
    console.log("Subscriber B:" + data);
});
relaySubject.next("Value D");
/*
    tsc relaySubject.ts && node relaySubject.js
    Subscriber A: Value A
    Subscriber A: Value B
    Subscriber A: Value C
    Subscriber B: Value B
    Subscriber B: Value C
    Subscriber B: Value D
    Subscriber A: Value D
*/ 
