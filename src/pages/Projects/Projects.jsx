import React from 'react';
import project1 from '../../images/WeatherApp.jpg';
import './Projects.css';

const Projects = () => {
  return (
    <div className='container-fluid'>
        <div className="container my-5">
      <div className='fs-2 text-center my-5'>Projects</div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Frontend</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Backend</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
            <div className='row'>
              <div className="col-lg-4 ">
                <div className='project-card' data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src={project1} alt="weather" className='img-fluid' />
                  
                  <div className='project-name'>
                    Weather app
                  </div>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-6" id="exampleModalLabel">WeatherWiz: Your Ultimate Weather Companion</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      

                      <p>Stay ahead of the weather with WeatherWiz, the app that brings accurate, real-time forecasts right to your fingertips. Whether you're planning a weekend getaway, a daily commute, or simply want to know if you need an umbrella, WeatherWiz has you covered.</p>

                      <p className='fs-5'>Features:</p>

                      <ul>
                        <li>
                          Real-Time Updates: Get up-to-the-minute weather conditions and alerts for your location or any city worldwide.
                        
                        </li>
                        <li>
                          Interactive Radar: Track storm systems and precipitation with our easy-to-use radar feature.
                        </li>
                        <li>
                          Customizable Notifications: Set alerts for severe weather warnings, temperature changes, or daily summaries.
                        </li>
                        <li>
                          Detailed Forecasts: Access hourly, daily, and extended forecasts to plan your day with confidence.
                        </li>
                        <li>
                          Elegant Design: Enjoy a sleek, intuitive interface that makes checking the weather a breeze.
                        </li>
                      </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
            <div className='row'>
              <div className="col-lg-4">
                <img src={project1} alt="weather" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects