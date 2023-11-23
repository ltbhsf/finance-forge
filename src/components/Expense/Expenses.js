import style from './Expenses.module.css';
import ExpenseItem from './ExpenseItem';
import AddItem from './NewItem/AddItem';
import { useState } from 'react';

const Expenses = (props)=>{
    const addedItemHandler = (item)=>{
        props.onExpensesUpdated(item); 
    }; 

    return(
        <div className={style.expenses}>
            <AddItem onAddedItem={addedItemHandler}/>
            
            {props.itemList.map(item => (
                <ExpenseItem key={item.key} date={item.date} title={item.title} money={item.money}/>
            ))}
            
            
        </div>
    );
}; 


export default Expenses; 