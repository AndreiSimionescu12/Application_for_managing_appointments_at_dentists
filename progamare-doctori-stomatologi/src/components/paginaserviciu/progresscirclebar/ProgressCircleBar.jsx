import { display } from '@mui/system';
import React from 'react'
import "./ProgressCircleBar.css";

export const ProgressCircleBar = () => {
  return (
    <div className='corp-progress'>
    <div class="container-progress">
      <div class="row">
          <div class="col-md-3 col-sm-6" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <div class="progress blue">
                  <span class="progress-left">
                      <span class="progress-bar"></span>
                  </span>
                  <span class="progress-right">
                      <span class="progress-bar"></span>
                  </span>
                  <div class="progress-value">
                    100%
                  </div>
              </div>
              <div className='caracteristica'>Satisfactie</div>
          </div>
          <div class="col-md-3 col-sm-6" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <div class="progress blue">
                  <span class="progress-left">
                      <span class="progress-bar"></span>
                  </span>
                  <span class="progress-right">
                      <span class="progress-bar"></span>
                  </span>
                  <div class="progress-value">100%</div>
              </div>
              <div className='caracteristica'>Calitate</div>
          </div>
          <div class="col-md-3 col-sm-6" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <div class="progress blue">
                  <span class="progress-left">
                      <span class="progress-bar"></span>
                  </span>
                  <span class="progress-right">
                      <span class="progress-bar"></span>
                  </span>
                  <div class="progress-value">100%</div>
              </div>
              <div className='caracteristica'>Garantie</div>
          </div>
      </div>
  </div>
  </div>
  )
}


