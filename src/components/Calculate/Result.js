import style from './Result.module.css'; 



const Result = (props)=>{
    let cl = `${style.result}`; 
    if (props.last){
        cl +=` ${style['last-box']}`
    }
    
    console.log(cl);
    return (
        <div className={cl}>
            <div>{props.label}</div>
            <div className={style.won}>
                <div className={style.data}>{props.data} 원</div>
            </div>
        </div>
    ); 
}; 


export default Result; 