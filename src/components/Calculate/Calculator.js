import style from './Calculator.module.css';

import { useState } from "react";

const Calculator = (props)=>{
    const YkCalculate = (depositAmount, depositPeriod, annualInterestRate, interestTaxation)=>{
        const principalSum = depositAmount * depositPeriod; 
        const preTaxInterest = depositAmount * annualInterestRate / 100;
        const tax = preTaxInterest *interestTaxation /100; 
        const received = principalSum + preTaxInterest - tax; 


        
        const result = {
            'principal-sum' : Math.round(principalSum),
            'pre-tax-interest' : Math.round(preTaxInterest),
            'tax' : Math.round(tax),
            'received': Math.round(received),
        }
        
        
        
        props.onCalculated(result);
    }; 

    const JkCalculate = (monthlySavings, duration, annualInterestRate, taxation)=>{

        const principalSum = monthlySavings * duration; 
        const preTaxInterest = monthlySavings * (annualInterestRate/100) * ((duration*(+duration+1))/2) * (1/12);
        const tax = preTaxInterest * taxation / 100; 
        const received = principalSum + preTaxInterest - tax; 

        const result = {
            'principal-sum' : Math.round(principalSum), 
            'pre-tax-interest' : Math.round(preTaxInterest),
            'tax': Math.round(tax),
            'received': Math.round(received),
        }; 
        if (taxation == 15.4 | taxation == 0){
            setIsPrefer(false);
        }

        props.onCalculated(result);
    };

    const [isPrefer, setIsPrefer] = useState(false);
    const [termA, setTermA] = useState(''); 
    const [termB, setTermB] = useState(''); 
    const [termC, setTermC] = useState(''); 
    const [termD, setTermD] = useState(15.4); 


    const calculateHandler = (e)=>{
        e.preventDefault();
        if (props.terms.termA == '월 적립액'){
            JkCalculate(termA, termB, termC, termD); 
        }else{
            YkCalculate(termA, termB, termC, termD); 
        }
    }; 

    const termAHandler = (termA) =>{
        setTermA(termA); 
    }; 
    const termBHandler = (termB) =>{
        setTermB(termB); 
    }; 

    const termCHandler = (termC) =>{
        setTermC(termC); 
    }; 

    const termDHandler = (termD) =>{
        setTermD(termD); 

        if (termD == 15.4 | termD == 0){
            setIsPrefer(false);
        }
    }; 

    const preferTaxationHandler = ()=>{
        setIsPrefer(true);
    }; 

    const resetHandler=()=>{
        setTermA('');
        setTermB('');
        setTermC('');
        setTermD(15.4);
        setIsPrefer(false);
        props.onCalculated({}); 
    };

    return (
        <form onSubmit={calculateHandler}>
            <div className={style['norm-input']}>
                <div>
                    <label>{props.terms.termA}</label>
                    <input type="number" value={termA} onChange={(e)=>termAHandler(e.target.value)}></input>
                </div> 

                <div>
                    <label>{props.terms.termB}</label>
                    <input type="number" value={termB} onChange={(e)=>termBHandler(e.target.value)}></input>
                    
                </div> 


                <div>
                    <label>{props.terms.termC}</label>
                    <input type="number" value={termC} onChange={(e)=>termCHandler(e.target.value)}></input>
                        
                    
                    
                </div> 
            </div>
                
            <hr />

                <div className={style.tax}>
                    <label>{props.terms.termD}</label>
                    <div className={style['tax-choices']}>
                        <div className={`${termD==15.4 && style.clicked}`}  onClick={()=>termDHandler(15.4)}>과세(15.4%)</div>
                        <div className={`${termD==0 && style.clicked}`} onClick={()=>termDHandler(0)}>비과세</div>
                        {!isPrefer && <div onClick={()=>preferTaxationHandler()}>우대 세율</div>}
                        {isPrefer && (
                        <div>
                            <label>우대 세율</label>
                        <input type='number' onChange={(e)=>termDHandler(e.target.value)}></input>
                        </div>
                        )}
                    </div>
                </div> 

                <hr />
                
                <div className={style['button-box']}>
                    <button type='submit'>계산</button>
                    <button onClick={resetHandler}>초기화</button>
                </div>
                
        </form>
    );
    
}; 

export default Calculator; 