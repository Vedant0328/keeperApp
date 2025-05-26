import { MdHighlight } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <h1>
          <MdHighlight size={30} /> Keeper
        </h1>
        <div className='flex'>
          <Link to={'/'}>
            <p>Home</p>
          </Link>
          <Link to={'/about'}>  
            <p>About</p>
          </Link>
          <Link to={'/services'}>
            <p>Services</p>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
