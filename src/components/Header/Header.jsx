import Navigation from "../Navigation/Navigation";
import s from './Header.module.css';

const Header = () => {
    return (
      <div>
       <header className={s.header}>
         <Navigation />
       </header>
      </div>
    );
};
   
export default Header;