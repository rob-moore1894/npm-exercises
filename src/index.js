"use strict";
const $ = require('jquery');


$(document).ready(function() {


    const sayHello = (name) => 'Hello!';
    console.log(sayHello());

    function hello(){
        return $('body').text('Hello World');
    }

    hello();

});