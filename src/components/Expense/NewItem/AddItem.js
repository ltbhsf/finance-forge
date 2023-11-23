import { useState } from "react";
import style from './AddItem.module.css';

const AddItem = (props)=>{
    const [cover, setCover] = useState(true); 
    const coverHandler = ()=>{
        setCover(false); 
    }; 

    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [money, setMoney] = useState('');

    const dateHandler =(e)=>{
        setDate(e.target.value);
    }; 

    const titleHandler = (e)=>{
        setTitle(e.target.value);
    }; 

    const moneyHandler = (e)=>{
        setMoney(e.target.value);
    }; 

    const submitHandler = (e)=>{
        e.preventDefault(); 

        if (date=='' | title=='' | money==''){
            return
        }
        props.onAddedItem({
            key: new Date().toLocaleTimeString(),
            date: date, 
            title: title, 
            money: money,
        }); 

        setDate('');
        setTitle('');
        setMoney('');
        
    }; 

    const cancelHandler = ()=>{
        setCover(true);
    }; 


    return (
        <div className={style.box}>
            {cover && <div className={style.cover} onClick={coverHandler}>+</div>}
            {!cover && (
                <form className={style.content} onSubmit={submitHandler}>
                    <input type="date" value={date} onChange={dateHandler}></input>
                    <input placeholder="교통비" type="text" value={title} onChange={titleHandler}></input>
                    <input placeholder="1300" type="number" value={money} onChange={moneyHandler}></input>
                    <div className={style['button-wrapper']}>
                        <button type="submit">추가 하기</button>
                        <button onClick={cancelHandler}>취소</button>
                    </div>
                    
                </form>
            )}
            
        </div>
    ); 
}; 

export default AddItem; 