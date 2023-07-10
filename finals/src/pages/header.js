
import './App.css';
import header1 from './Header.png';

function Header() {
  return (
    <div className="Header mt-5 mb-5">
      <header>
        <div className='row row-width justify-content-evenly'>
          <div className='col-5 mt-5'>
              <h1 className='sus-dev mt-5'>Sustainable Development</h1>
              <h1 className='goal5 mt-4'>Goal 5: Gender Equality</h1>
              <p className='header-desc'>Goal 5 of the 17 Sustainable Development Goals, established by the United Nations in 2015, focuses on achieving gender equality and acknowledges that development should encompass social, economic, and environmental sustainability.</p>
              <a type='button' href='https://sdgs.un.org/goals/goal5' className='learnMore mt-3 mb-5'>Learn More</a>
          </div>
            <div className='col-4 mt-5'>
              <img className='header-png' src={header1}/>
          </div>
        </div>
        
      </header>
    </div>
  );
}

export default Header;
