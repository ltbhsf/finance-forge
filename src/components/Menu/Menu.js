import style from './Menu.module.css';
import Wrapper from '../../UI/Wrapper';
const Menu = (props)=>{
    const menuHandler = (menu)=>{
        props.onMenuClicked(menu);
    };

    return (
        <div className={style.menu}>
            <Wrapper className={style.box}>
                <div  onClick={()=>menuHandler('expense')}>expense management</div>
            </Wrapper>
            
            <Wrapper className={style.box}>
                <div onClick={()=>menuHandler('calculate')}>interest calculator</div>
            </Wrapper>
        </div>

    );
}; 

export default Menu; 