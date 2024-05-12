import React from 'react'

export default function About(props) {
  return (
    <div className='container my-4'>
     {props.Aboutactive}
      <div className="accordion" id="accordionExample">
  <div className="card">
    <div className={`card-header bg-${props.mode}`} id="headingOne">
      <h2 className="mb-0">
        <button className={`btn btn-link btn-block text-left text-${props.mode === 'light'?'dark':'light'}`} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Creator
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
    <div className={`card-body bg-${props.mode}`}>
      <strong><code>Dhruv Roy / GitHub: coder-dkr</code></strong>
      </div>
    </div>
  </div>
  <div className="card">
    <div className={`card-header bg-${props.mode}`} id="headingTwo">
      <h2 className="mb-0">
        <button className={`btn btn-link btn-block text-left collapsed text-${props.mode === 'light'?'dark':'light'}`} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       About Text Manipulator
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className={`card-body bg-${props.mode}`}>
      <strong> <code>Text Manipulator is an amazing web application using which you can - count the number of words and characters in your text, modify your distorted text to remove extra spaces, convert uppercase to lowercase and vice-versa..then copying it to your clipboard to use it however you like !!</code></strong>
      </div>
    </div>
  </div>
  <div className="card">
    <div className={`card-header bg-${props.mode}`} id="headingThree">
      <h2 className="mb-0">
        <button className={`btn btn-link btn-block text-left collapsed text-${props.mode === 'light'?'dark':'light'}`} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         Tech stack
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
    <div className={`card-body bg-${props.mode}`}>
       <strong><code>Build using React build and BootStrap components</code></strong>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
