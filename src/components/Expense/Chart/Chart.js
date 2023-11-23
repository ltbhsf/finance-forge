import style from './Chart.module.css';
import ChartBar from './ChartBar';

const Chart = (props)=>{

    let barDatas = [
        {key: '1', value: 0}, 
        {key: '2', value: 0}, 
        {key: '3', value: 0}, 
        {key: '4', value: 0}, 
        {key: '5', value: 0}, 
        {key: '6', value: 0}, 
        {key: '7', value: 0}, 
        {key: '8', value: 0}, 
        {key: '9', value: 0}, 
        {key: '10', value: 0}, 
        {key: '11', value: 0}, 
        {key: '12', value: 0}, 
    ]; 

    props.itemList.forEach(element => {
        const month = new Date(element.date).getMonth(); 
        barDatas[month].value += +element.money; 
    });

    const values = barDatas.map(item => item.value); 
    const maxValue = Math.max(...values);
    console.log(maxValue);

    

    return (
        <div className={style.chart}>
            {barDatas.map((dp)=>(
                <div key={dp.key} className={style['bar-wrapper']}>
                    
                    <ChartBar data={(dp.value/maxValue)*100}/>
                    <div className={style.key}>{dp.key}월</div>
                    
                </div>
            ))}
        </div>
    ); 
}; 


export default Chart; 