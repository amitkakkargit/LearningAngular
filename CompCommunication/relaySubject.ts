import {ReplaySubject} from "rxjs";

const relaySubject = new ReplaySubject(2);

//First Subscriber
relaySubject.subscribe((data)=>
{
    console.log("Subscriber A:" + data);
});

relaySubject.next("Value A");
relaySubject.next("Value B");
relaySubject.next("Value C");

relaySubject.subscribe((data)=>
{
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
    Subscriber A: Value D
    Subscriber B: Value D   
*/