import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 

import './Skills.css';
 

const Skills = () => {
  return (
    <div className='container-fluid bg-dark text-white'>
      <div className="container border-top border-5">
        <div className='fs-2 text-center my-5 letter-spacing'>Technologies I Work</div>
        <div className="row text-center fs-1 skills-scroll">
          <div className="col-3 d-flex align-items-center gap-2">
            <div className='icon html' >
              <FontAwesomeIcon icon={faHtml5} />
            </div>

            <div className='fs-4'>
              Html
            </div>
          </div>
          <div className="col-3 d-flex align-items-center gap-2">
            <div className='icon css'>
              <FontAwesomeIcon icon={faCss3Alt} />
            </div>
            <div className='fs-4'>
              Css
            </div>
          </div>
          <div className="col-3 d-flex align-items-center gap-2">
            <div className='icon js'>
              <FontAwesomeIcon icon={faSquareJs} />
            </div>
            <div className='fs-4'>
              Javascript
            </div>
          </div>
          <div className="col-3 d-flex align-items-center gap-2">
            <div className='icon react'>
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className='fs-4'>
              ReactJs
            </div>
          </div>
        </div>
        <div className="row text-center justify-content-center align-items-center mt-5 fs-1">
          <div className="col-3 d-flex align-items-center gap-2">
            <div className='icon node'>
              <FontAwesomeIcon icon={faNode} />
            </div>
          </div>
          <div className="col-3 d-flex align-items-center gap-2">
            <div className='icon mongodb'>
              <FontAwesomeIcon icon={faDatabase} />
            </div>
            <div className='fs-4'>
              MongoDb
            </div>
          </div>
          <div className="col-3 d-flex align-items-center gap-2">            
            <div className='fs-4'>
              ExpressJs
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills