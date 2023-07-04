
import './App.css';
import header1 from './Header.png';

function Header() {
  return (
    <div className="App">
      <header className="Header">
        <div>
            <h1 className='sus-dev'>Sustainable Development</h1>
            <h1 className='goal5'>Goal 5: Gender Equality</h1>
            <p className='header-desc'>Goal 5 of the 17 Sustainable Development Goals, established by the United Nations in 2015, focuses on achieving gender equality and acknowledges that development should encompass social, economic, and environmental sustainability.</p>
        </div>
        <div>
            <img className='header-png' src={header1}/>
        </div>
      </header>
    </div>
  );
}

export default Header;
