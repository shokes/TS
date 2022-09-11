"use strict";
let userInput;
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
generateError('an error occured', 484);
