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

      case ".": 
        this.checkDecimal(num); // ==> Line 65  ==> enterDecimal() Line 69
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
  // These function clear state to initial satte when initialized
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
    this.checkNumber(input); //checkNumber() ==> Line 84 <==
    
  }

  //==================== Calculate Function ===================================>
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
    } else if(firstInput === "*" || firstInput === "/" || firstInput === "+") {
      // if number has been calculated previously...use operator on that number.
      if(this.state.calculation != "") {
        var inputArray = this.state.inputNumbers;           // stores inputNumbers state into variable 
        inputArray.shift()                                  // removes the operator from the value
        var calculatedInput = eval(inputArray.join(""));    // calculates value and stores in new variable
        var savedCalculation = eval(this.state.calculation);// stores calculation state into variable

        // takes the last calculation and calculates a new value based on the
        // operator and values selected.
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

    // else if any positive number after first calculation do this..
    } else if(this.state.calculation.length < 1) {
      var calculatedInput = eval(this.state.inputNumbers.join(""))
      this.setState({calculation: calculatedInput}) 

    // else if number is negative do this...
    } else if(firstInput == "-") {
      var inputArray = this.state.inputNumbers;           // stores inputNumbers state into variable 
      inputArray.shift()                                  // removes the operator from the value
      var calculatedInput = eval(inputArray.join(""));    // calculates value and stores in new variable
      var savedCalculation = eval(this.state.calculation);// stores calculation state into variable

      var calculationOutput = savedCalculation - calculatedInput;
      this.setState((state, props) => ({
        calculation: calculationOutput,
        }))
      
    // else start a new number if no beginning operator    
    } else {
      var calculatedInput = eval(this.state.inputNumbers.join(""));

      // === ==> CONSOLE LOGS for troubleshooting and debugging <== ===
      console.log("savedCalculation = " + savedCalculation)
      console.log("calculatedInput = " + calculatedInput)
      console.log("calculationOutput = "+ calculationOutput)

      this.setState((state, props) => ({
      calculation: calculatedInput,
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
    // Console logs for troubleshooting and debugging
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
      </div>
    );
  }
}       

root.render(
  <div>
    <ReactApp />
  </div>
);
