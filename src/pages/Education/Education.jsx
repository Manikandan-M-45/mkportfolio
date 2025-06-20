import React from 'react';
// import './Education.css'; // Import custom CSS file if using custom classes

const Education = () => {
  // Set the progress values
  const progressValue = 80;
  const progressValue2 = 69;
  const progressValue3 = 91;

  return (
    <div className='container-fluid bg-dark text-white'>
      <div className='container p-lg-2 my-lg-5'>
        <div className='fs-2 text-center my-5'>Education</div>
        <div className='row mb-lg-3'>
          <div className="col-6">
            <div className='fs-5 text-center'>
              B.E Mechanical
            </div>
          </div>
          <div className="col-6">
            <div
              className='progress mt-lg-2'
              role='progressbar'
              aria-label='Animated striped example'
              aria-valuenow={progressValue}
              aria-valuemin='0'
              aria-valuemax='100'
              style={{ width: '50%', height: '10px' }} // Set the height here
            >
              <div
                className='progress-bar progress-bar-striped progress-bar-animated'
                style={{ width: `${progressValue}%`, height: '100%' }} // Set the height here
              >
                {progressValue}%
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-lg-3'>
          <div className="col-6">
            <div className='fs-5 text-center'>
              12th HSC (CS)
            </div>
          </div>
          <div className="col-6">
            <div
              className='progress mt-lg-2'
              role='progressbar'
              aria-label='Animated striped example'
              aria-valuenow={progressValue2}
              aria-valuemin='0'
              aria-valuemax='100'
              style={{ width: '50%', height: '10px' }} // Set the height here
            >
              <div
                className='progress-bar progress-bar-striped progress-bar-animated'
                style={{ width: `${progressValue2}%`, height: '100%' }} // Set the height here
              >
                {progressValue2}%
              </div>
            </div>
          </div>
        </div>
        <div className='row mb-lg-3'>
          <div className="col-6">
            <div className='fs-5 text-center'>
              10th SSLC
            </div>
          </div>
          <div className="col-6">
            <div
              className='progress mt-lg-2'
              role='progressbar'
              aria-label='Animated striped example'
              aria-valuenow={progressValue3}
              aria-valuemin='0'
              aria-valuemax='100'
              style={{ width: '50%', height: '10px' }} // Set the height here
            >
              <div
                className='progress-bar progress-bar-striped progress-bar-animated'
                style={{ width: `${progressValue3}%`, height: '100%' }} // Set the height here
              >
                {progressValue3}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
