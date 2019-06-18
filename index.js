// Followed this tutorial to create thie Lambda Function
// https://www.youtube.com/watch?v=PEatXsXIkLc 

'use strict';
console.log('Loading function');

exports.handler = async (event, context, callback) => {
    let min = 0;
    let max = 10;
    
    let generatedNumber = Math.floor(Math.random() * max) + min;
    
    callback(null, generatedNumber);
};