import React from 'react';
import law from './law.png'
function Law() {
  return (
    <div id='law'>
      <div className='law'>
        <p className='article'>
          <div className='policies'>Laws and Policies </div>
          Articles 2 and 23 state that there can be no distinction or discrimination on the basis of gender, including the right to equal pay for work.
        </p>
        <div className='pic'>
          <img src={law} className='pic' alt="Law illustration" />
        </div>
      </div>
      <div className="card-group">
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h1 className="card-title">Article 2</h1>
            <p className="card-text">
              Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status. Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h1 className="card-title">Article 23</h1>
            <p className="card-text">
              Everyone has the right to work, to free choice of employment, to just and favorable conditions of work and to protection against unemployment. Everyone, without any discrimination, has the right to equal pay for equal work. Everyone who works has the right to just and favorable remuneration ensuring for himself and his family an existence worthy of human dignity, and supplemented, if necessary, by other means of social protection. Everyone has the right to form and to join trade unions for the protection of his interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Law;
