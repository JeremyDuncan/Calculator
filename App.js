// Build a JavaScript Calculator
// Objective: Build an app that is functionally similar to this: https://codepen.io/freeCodeCamp/full/wgGVVX.

// Fulfill the below user stories and get all of the tests to pass. Use whichever libraries or APIs you need. Give it your own personal style.


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
      calculation: "",
      hasDecimal: false,

      currentVal: '0',
      prevVal: '0',
      formula: '',
      currentSign: 'pos',
      lastClicked: ''
    }
  }

  // functions
  //==================== Check Decimal Functions ==============================>
  enterDecimal = (num) => {
    if (this.state.hasDecimal === false) {
      this.setState({ inputNumbers: [...this.state.inputNumbers, num]});
      }
  }

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

    // run this is input is not a decimal
    if(num != "."){
      // Returns false and prevents two 0's from being entered at begining of number.
      if(num === 0 && this.state.inputNumbers[0] === 0 && inputNumLength === 1) {
        return false;
      } else {
          this.setState({ inputNumbers: [...this.state.inputNumbers, num]});
      }
    }
  }

  //==================== Main Input Function ==================================>

  enterNumber = (num) => {
    //passes input to check functions to see if input is valid.
    this.checkNumber(num);
    this.checkDecimal(num);

  }
  
  clearScreen = () => {
    this.setState({ inputNumbers: []});
  }



  // Work in Progress ===================================>



  getCalculation = () => {
    const addition = this.state.inputNumbers.indexOf("+");
    const subtraction = this.state.inputNumbers.indexOf("-");
    const division = this.state.inputNumbers.indexOf("/");
    const multiply = this.state.inputNumbers.indexOf("*");

    var number = 0;
    var add = false;
    var subtract = false;
    var divide = false;
    // var multiply = false;

    for(var i = 0; i < this.state.inputNumbers.length; i++){
      
    }
    this.setState({calculation: addition})
  }
  
  render() {
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
                  <div id="seven" onClick={() => {this.enterNumber(7)}}> 7 </div>
                  <div id="eight" onClick={() => {this.enterNumber(8)}}> 8 </div>
                  <div id="nine"  onClick={() => {this.enterNumber(9)}}> 9 </div>
                </div>

                <div id="num-row-3">
                  <div id="four"  onClick={() => {this.enterNumber(4)}}> 4 </div>
                  <div id="five"  onClick={() => {this.enterNumber(5)}}> 5 </div>
                  <div id="six"   onClick={() => {this.enterNumber(6)}}> 6 </div>
                </div>

                <div id="num-row-2">
                  <div id="one"   onClick={() => {this.enterNumber(1)}}> 1 </div>
                  <div id="two"   onClick={() => {this.enterNumber(2)}}> 2 </div>
                  <div id="three" onClick={() => {this.enterNumber(3)}}> 3 </div>
                </div>

                <div id="num-row-1">
                  {/* Numbers */}
                  <div id="zero"  onClick={() => {this.enterNumber(0)}}> 0 </div>
                </div>

                <div id="num-row-0">
                  {/* Clear */}
                  <div id="clear"    onClick={() => {this.clearScreen()}}> AC </div>
                  {/* Equals */}
                  <div id="equals" onClick={() => {this.getCalculation()}}> = </div>
                </div>
              </div>

              <div id="calculation-operators">
                {/* Arithmetic Operators */}
                <div id="add"      onClick={() => {this.enterNumber("+")}}> + </div>
                <div id="subtract" onClick={() => {this.enterNumber("-")}}> - </div>
                <div id="multiply" onClick={() => {this.enterNumber("*")}}> X </div>
                <div id="divide"   onClick={() => {this.enterNumber("/")}}> / </div>
                {/* Decimal */}
                <div id="decimal"  onClick={() => {this.enterNumber(".")}}> . </div>
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


// class Text extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.text}
//       </div>
//     );
//   }
// }

// class Author extends React.Component {
//   render() {
//     return (
//       <h3>-{this.props.author}</h3>
//     );
//   }
// }

root.render(
  <div>
    <ReactApp />
  </div>
);
