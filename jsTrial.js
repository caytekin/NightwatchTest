/**
 * Created by cigdem.aytekin on 28-9-2015.
 */


function myFirstFunction() {
    alert("Toedels first function");
}

myFirstFunction();

var mySecondFunction = function() {
    alert("Toedels second function");
}

mySecondFunction();

var myThirdFunction = function(aParam) {
    alert("Toedels third function: " + aParam);
}

myThirdFunction("Cigdem!");


var myFourthFunction = function(param1, funcParam) {
    alert("Toedels fourth function, should call first function " + param1);
    funcParam();
}

myFourthFunction("Naz", myFirstFunction );



//function myFifthFunction() {
//    return { function anotherFunction () { alert("xyz"); } () ;}
//}


// function myFirstCallback (aMessage, function(abc) {
//        alert("Does this execute?"); } )
//{
//    alert("This should execute");
//};
//
//myFirstCallBack("Nihoha");