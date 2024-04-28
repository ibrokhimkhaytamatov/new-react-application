import React from 'react'

const Footer = () => {
  return (
    <div style={{height:300}} className='footer bg-black text-light '>
      <div className="container my-5 border-bottom">
      <div className="row mt-5">
        <div className="col-md-6">

        <div style={{height:65}} className="d-flex align-items-center gap-4">
          <i class="fa-solid fa-phone"></i>
          <a className='text-light' href="tel">+998991234567</a>
        </div>
        <div style={{height:65}} className="phone d-flex align-items-center gap-4">
        <i class="fa-solid fa-envelope"></i>
          <h3 className='m-0'>soffaid@gmail.com</h3>
        </div>
        <div style={{height:65}} className="d-flex gap-4 align-items-center">
        <i class="fa-brands fa-telegram"></i>
          <h4>Telegram</h4>
        </div>
        </div>
        <div className="col-md-6">
          <h3>Soffaid.uz</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptates qui iusto consequuntur aspernatur amet natus eum delectus laborum. Perferendis sed autem veritatis expedita nihil officiis debitis quibusdam sint error?
          </p>
          <span>@2024 <b>Soffaid.uz</b> Zamon bilan hamnafas</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
