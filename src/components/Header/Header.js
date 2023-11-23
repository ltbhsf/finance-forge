import style from './Header.module.css';


const Header = (props)=>{
    const locationHandler = (view)=>{
        props.onLocationClicked(view);
    };
    
    return (
        <header> 
            <div className={style.title}>
                <h1 onClick={()=>locationHandler('menu')}>finance-forge</h1>
            </div>
        </header>
    );
}; 

export default Header;