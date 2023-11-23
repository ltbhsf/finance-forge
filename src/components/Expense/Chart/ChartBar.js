import style from './ChartBar.module.css'; 

const ChartBar = (props)=>{
    
    
    return(
        <div className={style.bar}>
            <div className={style.bar__fill} style={{height: `${props.data}%`}}></div>
        </div>
    ); 
}; 

export default ChartBar; 