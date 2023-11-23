import style from './ExpenseItem.module.css';

const ExpenseItem = (props)=>{
    return (
        <div className={style.item}>
            <div className={style.date}>{props.date}</div>

            <div className={style.box}>
                <div className={style.title}>{props.title}</div>
                <div className={style.money}>{props.money} ₩</div>
            </div>
        </div>
    ); 
}; 

export default ExpenseItem; 