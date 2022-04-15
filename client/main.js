import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.html';
import '../lib/collection.js';

Session.set("msgs", "tester");

Template.messenger.events({
  'click button'(events) {
    let myMessage = $("#getMsg").val(); //read users message
    $("#getMsg").val(""); //empty message box
    // console.log("msg:", myMessage);
    Session.set("msgs", myMessage);
  }
});

Template.messages.helpers({
  chatMsgs() {
    return "Hello";
  },
  msgFull() {
    return false;
  },
  newMsg() {
    return Session.get("msgs");
  }
});