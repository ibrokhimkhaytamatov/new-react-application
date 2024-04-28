import React from 'react'
import '../home/home.css'

const users = [
  {
    name: 'Leyla',
    job: 'Frontend react developer',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzfywYVLuWzZ2_-yxOweRqI3d7K36k3kcOA&s',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quos illum qui necessitatibus quibusdam sit nisi amet dolore, doloremque corporis expedita ad facere porro culpa voluptatibus mollitia nostrum sed reprehenderit'
  },
  {
    name: 'Valijon',
    job: 'Frontend react developer',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOM1R4q0PNfgOd8SZaH2ViFV1jolBS1AKYg&s',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quos illum qui necessitatibus quibusdam sit nisi amet dolore, doloremque corporis expedita ad facere porro culpa voluptatibus mollitia nostrum sed reprehenderit'
  },
  {
    name: 'Burhon',
    job: 'Grafik dizayner',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3xVghQWbZKTQtglhq1lFk1wlhGQjZQItpew&s',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quos illum qui necessitatibus quibusdam sit nisi amet dolore, doloremque corporis expedita ad facere porro culpa voluptatibus mollitia nostrum sed reprehenderit'
  },
  {
    name: 'Nodir',
    job: 'Backend Phyton developer',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBPGsV2orCxzkp1eS0gis3JZt5kHjsAxiOw&s',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quos illum qui necessitatibus quibusdam sit nisi amet dolore, doloremque corporis expedita ad facere porro culpa voluptatibus mollitia nostrum sed reprehenderit'
  }, {
    name: 'Akmal',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjveeFjZ0b31NepJxoGkyYmXCGJslp8EL1hQ&s',
    job: 'Frontend nextjs developer',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quos illum qui necessitatibus quibusdam sit nisi amet dolore, doloremque corporis expedita ad facere porro culpa voluptatibus mollitia nostrum sed reprehenderit'
  }, {
    name: 'Qosim',
    job: 'Backend c++',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRpHPrcM-_K1kjC4Z-V6iVVH4H7C3g37ouRg&s',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quos illum qui necessitatibus quibusdam sit nisi amet dolore, doloremque corporis expedita ad facere porro culpa voluptatibus mollitia nostrum sed reprehenderit'
  }
]

const Mutaxasislar = () => {
  return (
    <div className=''>
      <div className="container mt-5">
        <div className="d-flex gap-5">
          <input className='p-2' type="text" placeholder='Search' />
          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
          <select name="" id="">
            <option value="Backend">Backend</option>
            <option value="frontend">Frontend</option>
            <option value="dizayn">Dizayn</option>
            <option value="matematika">Matematika</option>
            <option value="fizika">Fizika</option>
          </select>
        </div>
        <div className="">
          <h1>Bizning mutaxasislar</h1>
          <div className="row ">
          {
            users.map((i, key) => {
              return (
                  <div className=" col-md-4 justify-content-between">
                    <div style={{height:'500px'}} className="card mt-2">
                      <img style={{height:'350px'}} src={i.img} alt="" />
                    <h3 className='p-2'>{i.name}</h3>
                    <h4 className='p-2'>{i.job}</h4>
                    <p className='p-2'>{i.description}</p>
                    </div>
                    
                  </div>
                  
              )
              
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mutaxasislar
