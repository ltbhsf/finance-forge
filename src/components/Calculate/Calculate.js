import { useState } from 'react';
import style from './Calculate.module.css';
import Result from './Result';
import Calculator from './Calculator';


const Calculate = ()=>{
    const JkTerms = {
        termA: '월 적립액(원)', 
        termB: '적금 기간(개월)', 
        termC: '연 이자율(%)', 
        termD: '이자 과세(%)'
    };

    const YkTerms = {
        termA: '예치 금액(원)', 
        termB: '예금 기간(개월)', 
        termC: '예금 이자(%)', 
        termD: '이자 과세(%)'
    };

    const [slider, setSlider] = useState(1); 
    const [result, setResult] = useState({
        'principal-sum' : 0,
        'pre-tax-interest' : 0,
        'tax' : 0,
        'received': 0,
    })

    const sliderHandler = (e)=>{
        setSlider(e.target.value);
    };

    const resultHandler = (result)=>{
        setResult(result);
    };

    return (
        <div className={style['box-wrapper']}>
            <div className={style.box1}>
                <div className={style['range-wrapper']}>
                    <div className={style['k-label']}>
                        <div>적금</div>
                        <div>예금</div>
                    </div>
                    <input type='range' min='1' max='2' step='1' list='values' value={slider} onChange={sliderHandler}></input>
                </div>

                <hr />
                    {slider==1 && (
                        <Calculator onCalculated={resultHandler} terms={JkTerms}/>
                    )}

                    {slider==2 && (
                        <Calculator onCalculated={resultHandler} terms={YkTerms}/>
                    )}
            </div>

            <div className={style.box2}>
                <Result label='원금 합계' data={result['principal-sum']}/>
                <Result label='세전 이자' data={result['pre-tax-interest']}/>
                <Result label='이자 과세' data={result['tax']}/>
                <Result last={true} label='세후 수령액' data={result['received']} />
                
            </div>


            
        </div>
    );
}; 


export default Calculate; 