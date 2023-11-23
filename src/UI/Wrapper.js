import './Wrapper.css';

const Wrapper = (props)=>{
    const classes = 'card ' + props.className; 
    return (
        <div className={classes}>{props.children}</div>
    );
}; 

export default Wrapper; 