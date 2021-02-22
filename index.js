// Write your solution in this file!
const driver = {} //object


// This function should not mutate the driver 
// and should return a new driver that 
// has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, value) {
    // newDriver = {}
    return Object.assign({}, driver, { [key]: value });
}

function  destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    // newDriver = {}
    return Object.assign(driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key) {
    let newobj = Object.assign({}, driver, key);
    delete newobj[key]
    return newobj
}

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key]
    return object
}