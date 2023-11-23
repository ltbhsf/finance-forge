import Chart from "./Chart/Chart";
import Expenses from "./Expenses";
import style from './Expense.module.css'; 
import { useState } from "react";



const Expense = ()=>{
    const [itemList, setItemList] = useState([]);

    const listUpdateHandler = (item)=>{
        setItemList(itemList=>(
            [item, ...itemList]
        )); 
    }; 
    return (
        <div className={style.wrapper}>
            <Chart itemList={itemList}/>
            <Expenses itemList={itemList} onExpensesUpdated={listUpdateHandler}/>
        </div>
    );
};

export default Expense; 