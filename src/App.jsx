import { useState } from 'react' 
import './App.css' 
 
 
function CalcDisplay({dispValue}) { 
  return ( 
    <div className='Display'>  
    {dispValue} 
    </div> 
  ); 
} 
 
 
function CalcButton({ buttonLabel, onClick }) { 
  return ( 
    <button className='Button' onClick={onClick}> 
    {buttonLabel} 
    </button> 
  ); 
} 
 
function App() { 
  const [disp, setDisp] = useState('0'); 
  const [operand1, setOperand1] = useState(null); 
  const [operand2, setOperand2] = useState(null); 
  const [operation, setOperation] = useState(null); 
 
   const buttonClickHandler = (e) => { 
    e.preventDefault(); 
    const value = e.target.innerHTML; 
    setDisp(value); 
  } 
 
  const equalButtonClickHandler = (e) => { 
    e.preventDefault(); 

    if (operand1 !== null && operand2 !== null && operation !== null) {
      const num1 = Number(operand1);
      const num2 = Number(operand2);
      let result;

      if (operation === '+') {
        result = num1 + num2;
      } else if (operation === '-') {
        result = num1 - num2;
      } else if (operation === '×') {
        result = num1 * num2;
      } else if (operation === '÷') {
        result = num2 === 0 ? 'Error' : num1 / num2;
      }

      setDisp(result);
      setOperand1(result);
      setOperand2(null);
      setOperation(null);
    }
  } 
 
  const operationClickHandler = (e) => { 
    e.preventDefault(); 
    const value = e.target.innerHTML; 
    setOperation(value); 
    setDisp(value); 
  } 
 
     const nullbuttonClickHandler = (e) => { 
    e.preventDefault(); 
    const value = e.target.innerHTML; 
    console.log(value + "|" + operand1 + "|" + operand2 + "|" + operation); 
    if(operation === null) { 
 if(operand1 === null) { 
      setDisp(value); 
      setOperand1(value); 
    } else { 
      setDisp(operand1 + value); 
      setOperand1(operand1 +value); 
    } 
  } else { 
    if(operand2 === null) { 
      setDisp(value); 
      setOperand2(value); 
    } else { 
      setDisp(operand2 + value); 
      setOperand2(operand2 +value); 
    } 
  } 
} 

  
  const clearButtonClickHandler = (e) => {
    e.preventDefault();
    setDisp('0');
    setOperand1(null);
    setOperand2(null);
    setOperation(null);
  }

 
  const surnameButtonClickHandler = (e) => {
    e.preventDefault();
    setDisp('Mary Antonette Galatierra');
  }

  return ( 
    <div className='App'> 
      <div className='Header'>Calculator of Mary Antonette Galatierra - BSIT 3A</div>  
      <div className='Calculator'> 
        <CalcDisplay dispValue={disp} /> 
          <div className='Keypad'> 
            <CalcButton buttonLabel={7} onClick={nullbuttonClickHandler} /> 
            <CalcButton buttonLabel={8} onClick={nullbuttonClickHandler} /> 
            <CalcButton buttonLabel={9} onClick={nullbuttonClickHandler} /> 
            <CalcButton buttonLabel={'÷'} onClick={operationClickHandler} /> 
            <CalcButton buttonLabel={4} onClick={nullbuttonClickHandler} /> 
            <CalcButton buttonLabel={5} onClick={nullbuttonClickHandler} /> 
            <CalcButton buttonLabel={6} onClick={nullbuttonClickHandler} /> 
            <CalcButton buttonLabel={'×'} onClick={operationClickHandler} /> 
            <CalcButton buttonLabel={1} onClick={nullbuttonClickHandler} /> 
            <CalcButton buttonLabel={2} onClick={nullbuttonClickHandler} /> 
            <CalcButton buttonLabel={3} onClick={nullbuttonClickHandler} /> 
            <CalcButton buttonLabel={'-'} onClick={operationClickHandler} /> 
            <CalcButton buttonLabel={'C'} onClick={clearButtonClickHandler} /> 
            <CalcButton buttonLabel={0} onClick={nullbuttonClickHandler} /> 
            <CalcButton buttonLabel={'='} onClick={equalButtonClickHandler} /> 
            <CalcButton buttonLabel={'+'} onClick={operationClickHandler} /> 

            <CalcButton buttonLabel={'Galatierra'} onClick={surnameButtonClickHandler} />

          </div> 
      </div> 
       
    </div> 
  ) 
} 
 
export default App