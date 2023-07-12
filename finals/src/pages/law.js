import React from 'react';
import law from './law.png'
function Law() {
  return (
    <div className='law-container' id='law'>
      <div className='law'>
        <div className='law-contents'>
          <p className='policies'>Laws and Policies </p>
          <p className='article'>
            Articles 2 and 23 states that there can be no distinction or discrimination on the basis of gender, including the right to equal pay for work.
          </p>
        </div>
        <div className='pic'>
          <img src={law} className='pic' alt="Law illustration" />
        </div>
      </div>

      <p>
        <button class="article2 fw-bold" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Article 2</button>
        <button class="article23 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Article 23</button>
      </p>
      <div class="row">
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card-law card-body">
              Everyone is entitled to all the rights and freedoms set forth in this Declaration, without distinction of any kind, such as race, colour, sex, language, religion, political or other opinion, national or social origin, property, birth or other status. Furthermore, no distinction shall be made on the basis of the political, jurisdictional or international status of the country or territory to which a person belongs, whether it be independent, trust, non-self-governing or under any other limitation of sovereignty.
            </div>
          </div>
        </div>
        <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card-law card-body">
              Everyone has the right to work, to free choice of employment, to just and favorable conditions of work and to protection against unemployment. <br/>
              <p style={{paddingLeft: '20px'}}>
              1. Everyone, without any discrimination, has the right to equal pay for equal work.<br/>
              2. Everyone who works has the right to just and favorable remuneration ensuring for himself and his family an existence worthy of human dignity, and supplemented, if necessary, by other means of social protection.<br/> 
              3. Everyone has the right to form and to join trade unions for the protection of his interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Law;
