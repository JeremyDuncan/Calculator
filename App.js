// Build a JavaScript Calculator
// Objective: Build an app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/wgGVVX.

// Fulfill the below user stories and get all of the calculationOutputs to pass. Use whichever libraries or APIs you need. Give it your own personal style.


// User Story #1: My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".

// User Story #2: My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".

// User Story #3: My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".

// User Story #4: My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".

// User Story #5: My calculator should contain a clickable element with an id="clear".

// User Story #6: My calculator should contain an element to display values with a corresponding id="display".

// User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.

// User Story #8: As I input numbers, I should be able to see my input in the element with the id of display.

// User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.

// User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros.

// User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.

// User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.

// User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)).

// User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.

// User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

// Note On Calculator Logic: It should be noted that there are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.

// EXAMPLE: 3 + 5 x 6 - 2 / 4 =

// Immediate Execution Logic: 11.5
// Formula/Expression Logic: 32.5

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

class ReactApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputNumbers: [],
      numList: [],
      calculation: "",
      hasDecimal: false
    }
    this.getCalculation = this.getCalculation.bind(this)
    this.enterNumber = this.enterNumber.bind(this)
    this.Calculate = this.calculate.bind(this)
  }

  // functions
  //==================== Check Decimal Functions ==============================>
  // resets decimal state
  resetDecimal = () => {
    this.setState({hasDecimal: false})
  }
  // Add decimal to inputNumbers array if decimal is not present in number
  enterDecimal = (num) => {
    if (this.state.hasDecimal === false) {
      this.setState({ inputNumbers: [...this.state.inputNumbers, num]});
      }
  }
  // checks to see if decimal in number. returns TRUE if decimal present
  checkDecimal = (num) => {
    // run this is input is a decimal
    // if number has no decimal enter decimal and change state to "hasDecimal"
    if (num === "." && this.state.hasDecimal === false) {
      this.enterDecimal(num);
      this.setState({hasDecimal: true})
    }
  }

  //==================== Check Number Functions ==============================>
  checkNumber = (num) => {
    // stores length of inputNumbers array
    var inputNumLength = this.state.inputNumbers.length;
    // created index of last input
    var index = inputNumLength -1;
    // index value of last input value
    var lastInput = this.state.inputNumbers[index] 
    var beforeLast = this.state.inputNumbers[index - 1]

    // makes sure "*", "/", "-", "+", "." are legal inputs for calculator,
    // adds to inputNumbers array if input === GOOD, rejects if === BAD
    switch (num) {
      case '*':
        this.resetDecimal();
        if(lastInput === "*" || lastInput === "/" || lastInput === "-" || lastInput === "+") {
        }else {
          this.setState({ inputNumbers: [...this.state.inputNumbers, num]})
        }
        break;

      case '/':
        this.resetDecimal();
        if(lastInput === "*" || lastInput === "/" || lastInput === "-" || lastInput === "+") {
        }else {
          this.setState({ inputNumbers: [...this.state.inputNumbers, num]})
        }
        break;

      case '+':
        this.resetDecimal();
        if(lastInput === "*" || lastInput === "/" || lastInput === "-" || lastInput === "+") { 
        }else {
          this.setState({ inputNumbers: [...this.state.inputNumbers, num]})
        }
        break;

      case '-':
        this.resetDecimal();
        if(lastInput === "-") {          
        }else {
          this.setState({ inputNumbers: [...this.state.inputNumbers, num]})
        }
        break;

      case 0:
        if(num === 0 && this.state.inputNumbers[0] === 0 && inputNumLength === 1) {
          return false;
        }else {
          this.setState({ inputNumbers: [...this.state.inputNumbers, num]});
        }
        break;

      default:
        console.log("Switch Default Action, Input = " + num);
        this.setState({ inputNumbers: [...this.state.inputNumbers, num]});
    }
  }

  //==================== Clear Functions ==================================>
  clearOperator = () => {
    this.setState({opSign: ""});
  }
  clearInputNumbers = () => {
    this.setState({ inputNumbers: []});
  }
  clearNumList = () => {
    this.setState({ numList: []});
  }
  clearCalculation = () => {
    this.setState({calculation: ""});
  }
  clearCalculationList = () => {
    this.setState({calculationList: []});
  }
  clearScreen = () => {
    this.clearNumList();
    this.clearInputNumbers()
    this.clearOperator();
    this.clearCalculation();
    this.clearCalculationList();
  }

  //==================== Main Input Function ==================================>
  enterNumber = (input) => {
    //passes input to check functions to see if input is valid.
    this.checkNumber(input); //checkNumber() ==> Line 82 <==
    this.checkDecimal(input);
  }
  
  //=============================================================================== NEEEDS WORK!!!!!
  ///////////////////////////   ===>     NEEDS WORK
  calculate = () => {
    var inputNumLength = this.state.inputNumbers.length;  // stores length of inputNumbers array
    var index = inputNumLength -1;                        // created index of last input
    var lastInput = this.state.inputNumbers[index];       // index value of last input value
    var beforeLast = this.state.inputNumbers[index - 1]   // index value before last input
    var firstInput = this.state.inputNumbers[0];          // index value of first input 

    // if last input is not a number... DO NOTHING
    if(lastInput === "*" || lastInput === "/" || lastInput === "-" || lastInput === "+") {
      alert("enter a number after the operator!!")

    // else if first input is not a number do this...
    }else if(firstInput === "*" || firstInput === "/" || firstInput === "+") {
      // if number has been calculated previously...use operator on that number.
      if(this.state.calculation != "") {
        var inputArray = this.state.inputNumbers;
        inputArray.shift()
        var calculatedInput = eval(inputArray.join(""));
        var savedCalculation = eval(this.state.calculation);

        switch (firstInput) {
          case '*':
            var calculationOutput = calculatedInput * savedCalculation;
            this.setState((state, props) => ({
              calculation: calculationOutput,
              }))
            break;
    
          case '/':
            var calculationOutput = savedCalculation / calculatedInput;
            this.setState((state, props) => ({
              calculation: calculationOutput,
              }))
            break;
    
          case '+':
            var calculationOutput = savedCalculation + calculatedInput;
            this.setState((state, props) => ({
              calculation: calculationOutput,
              }))
            break;
    
          case '-':
            var calculationOutput = savedCalculation - calculatedInput;
            this.setState((state, props) => ({
              calculation: calculationOutput,
              }))
            break;
          default:
            console.log("WIERD ERROR");
        }
      }
      // else if any number after first calculation do this..
    } else if(this.state.calculation.length < 1) {
      alert("TEST LINE 230")
      var calculatedInput = eval(this.state.inputNumbers.join(""))
      this.setState({calculation: calculatedInput}) //[...this.state.calculation, calculatedInput] 

    } else {
      var calculatedInput = eval(this.state.inputNumbers.join(""));
      var savedCalculation = eval(this.state.calculation);
      var calculationOutput = calculatedInput + savedCalculation

      // === ==> CONSOLE LOGS <== ===
      console.log("savedCalculation = " + savedCalculation)
      console.log("calculatedInput = " + calculatedInput)
      console.log("calculationOutput = "+ calculationOutput)

      this.setState((state, props) => ({
      calculation: calculationOutput,
      }))
    }
  }

  //================= Main Equal Function =====================================>
  getCalculation = () => {
    if(this.state.inputNumbers.length > 0) { 
    this.calculate();          // ==> Line 180 <== 
    this.clearOperator();      // ==> Line 148 <==
    this.clearInputNumbers();  // ==> Line 151 <==
    this.resetDecimal();       // ==> Line 65  <==
    }
  }

  
  render() {
    console.log(eval(-108 * -1))
    console.log("calculation " + this.state.calculation)
    console.log("inputNumbers = " + this.state.inputNumbers);
    console.log("numList = " + this.state.numList);
    console.log("=================================");
    
    return (
      <div >
        <h1>Calculator App</h1>
        <div id="calculator">

          {/* Display */}
          <div id="calc-displays">
            <div id="arithmetic-display">
              {this.state.calculation}
            </div>
            <div id="display"> 
              {this.state.inputNumbers}
            </div>
          </div>

            <div id="key-pad">
              <div id="num-container">
                <div id="num-row-4">
                  <div id="seven" className="button" onClick={() => {this.enterNumber(7)}}> 7 </div>
                  <div id="eight" className="button" onClick={() => {this.enterNumber(8)}}> 8 </div>
                  <div id="nine" className="button"  onClick={() => {this.enterNumber(9)}}> 9 </div>
                </div>

                <div id="num-row-3">
                  <div id="four" className="button"  onClick={() => {this.enterNumber(4)}}> 4 </div>
                  <div id="five" className="button"  onClick={() => {this.enterNumber(5)}}> 5 </div>
                  <div id="six" className="button"   onClick={() => {this.enterNumber(6)}}> 6 </div>
                </div>

                <div id="num-row-2">
                  <div id="one" className="button"   onClick={() => {this.enterNumber(1)}}> 1 </div>
                  <div id="two" className="button"   onClick={() => {this.enterNumber(2)}}> 2 </div>
                  <div id="three" className="button" onClick={() => {this.enterNumber(3)}}> 3 </div>
                </div>

                <div id="num-row-1">
                  {/* Numbers */}
                  <div id="zero" className="button"  onClick={() => {this.enterNumber(0)}}> 0 </div>
                </div>

                <div id="num-row-0">
                  {/* Clear */}
                  <div id="clear" className="button" onClick={() => {this.clearScreen()}}> AC </div>
                  {/* Equals */}
                  <div id="equals" className="button" onClick={() => {this.getCalculation()}}> = </div>
                </div>
              </div>

              <div id="calculation-operators">
                {/* Arithmetic Operators */}
                <div id="add" className="button"      onClick={() => {this.enterNumber("+")}}> + </div>
                <div id="subtract" className="button" onClick={() => {this.enterNumber("-")}}> - </div>
                <div id="multiply" className="button" onClick={() => {this.enterNumber("*")}}> × </div>
                <div id="divide" className="button"   onClick={() => {this.enterNumber("/")}}> ÷ </div>
                {/* Decimal */}
                <div id="decimal" className="button"  onClick={() => {this.enterNumber(".")}}> . </div>
              </div>
            </div>
        </div>
        
{/* // User Story #7: At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display. */}
        

{/* // User Story #8: As I input numbers, I should be able to see my input in the element with the id of display. */}

{/* // User Story #9: In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display. */}

{/* // User Story #10: When inputting numbers, my calculator should not allow a number to begin with multiple zeros. */}

{/* // User Story #11: When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted. */}

{/* // User Story #12: I should be able to perform any operation (+, -, *, /) on numbers containing decimal points. */}

{/* // User Story #13: If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 * (-5)). */}

{/* // User Story #14: Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation. */}

{/* // User Story #15: My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places). */}

{/* // Note On Calculator Logic: It should be noted that there are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug. */}
        
      </div>
    );
  }
}       

root.render(
  <div>
    <ReactApp />
  </div>
);
