


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiplication (userNum1, userNum2) {
    var product = +userNum1 * +userNum2;
    console.log("userNum", userNum1)
    console.log("product", product);
    alert(product);
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function addition(userNum1, userNum2) {
    var sum = +userNum1 + +userNum2;
    console.log("sum", sum);
    alert(sum);
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtraction(userNum1, userNum2) {
    var difference = +userNum1 - +userNum2;
    console.log("difference", difference);
    alert(difference);
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function division(userNum1, userNum2) {
    var quotient = +userNum1 / +userNum2;
    console.log("quotient", quotient);
    alert(quotient);
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
function calculate() {
    function userInput() {
        let userNum = {};
        userNum.input1 = document.getElementById("num1").value;
        userNum.input2 = document.getElementById("num2").value;
        return userNum
    };
    document.querySelector("#multiply").addEventListener("click", function(){
        let finalInput = userInput()
        multiplication(finalInput.input1, finalInput.input2);

    });
    document.querySelector("#add").addEventListener("click", function () {
        let finalInput = userInput()
        addition(finalInput.input1, finalInput.input2);

    });
    document.querySelector("#subtract").addEventListener("click", function () {
        let finalInput = userInput()
        subtraction(finalInput.input1, finalInput.input2);

    });
    document.querySelector("#divide").addEventListener("click", function () {
        let finalInput = userInput()
        division(finalInput.input1, finalInput.input2);

    });
}
calculate();