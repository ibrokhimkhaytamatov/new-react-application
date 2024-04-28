import React, { useRef } from 'react'
import './home.css'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate()
  const location = () => {
    navigate('/mutaxasislar')
  }

  return (
    <>
      <div className="bg-info">
        <div className="container">
          <div className=" d-flex align-items-center justify-content-between  my-5 gap-5">
            <div className="img">
              <img style={{ borderRadius: 50 }} src={'people2.jpg'} alt="" />
            </div>
            <div className="title">
              <h1 className='text-center text-light mt-5 align-item-center'>
                Muammolaringizga yechimni shu yerdan toping. Biz sizning muammolaringizga  <b>online</b>  yechim beramiz
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container '>

        <h1 className='my-5 text-center'>Bizning mutaxasislar</h1>
        <div className="d-flex justify-content-between my-5">
          <div onClick={location} style={{ borderRadius: '20px' }} className="shadow col-md-5">
            <h2 className='text-center'>IT mutaxasislari</h2>
            <p style={{ fontSize: '18px' }} className='text-center'>Sizning IT bo'yicha muammolaringizga yechim beradi</p>
            <img className='mb-3' style={{ width: '100%', height: '296px', borderRadius: '20px' }} src="people3.jpg" alt="" />
          </div>
          <div onClick={location} style={{ borderRadius: '20px' }} className="shadow col-md-5">
            <h2 className='text-center'>Boshqa mutaxasislar</h2>
            <p style={{ fontSize: '18px' }} className='text-center'>Sizning boshqa muammolaringizga yechim beradi</p>
            <img className='mb-3' style={{ width: '100%', borderRadius: '20px' }} src="maths.jpg" alt="" />
          </div>
        </div>

        <div className="description d-flex mt-4 justify-content-between">
          <div class="card" style={{ width: 350 }}>
            <img src="https://picsum.photos/300/300" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div class="card" style={{ width: 350 }} >
            <img src="https://picsum.photos/300/300" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card" style={{ width: 350 }} >
            <img src="https://picsum.photos/300/300" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <button style={{ width: 100 }} className='btn btn-success mt-4 '>More</button>
      </div>
    </>

  )
}

export default Home

