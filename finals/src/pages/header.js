
import './App.css';
import header1 from './Header.png';

function Header() {
  return (
    <div className="Header mt-5">
      <header>
        <div className=''>
          <div className='row row-width justify-content-evenly'>
            <div className='col'>
                <h1 className='sus-dev'>Sustainable Development</h1>
                <h1 className='goal5'>Goal 5: Gender Equality</h1>
                <p className='header-desc mt-4'>Goal 5 of the 17 Sustainable Development Goals, established by the United Nations in 2015, focuses on achieving gender equality and acknowledges that development should encompass social, economic, and environmental sustainability.</p>
            </div>
              <div className='col'>
                <img className='header-png' src={header1}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
