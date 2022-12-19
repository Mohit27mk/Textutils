import React from 'react'

 
export default function About (props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    //  })
  
     let myStyle={
      color:props.mode==='dark'?'white':'#121212',
      backgroundColor:props.mode==='dark'?'#121212':'white'
     }
   
     
  return (
    <div className='container' style= { myStyle }>
        <h1 className='my-2'>About Us</h1>
        <div className="accordion" id="accordionExample"  style= { myStyle }>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button  style= { myStyle } className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong> Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style= { myStyle }>
        It is easy to change your text as you want.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button  style= { myStyle } className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style= { myStyle }>
       It is free to use in any browser.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button  style= { myStyle } className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong>  Browser Friendly</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"  style= { myStyle }>
       It works in any browser like chrome ,firefox etc
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
