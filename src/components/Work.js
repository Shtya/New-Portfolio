import React from 'react';
import Works from '../Data';
import "../work.css"

const Work =  () => {

  return (
    <section className="Portfolio mb-8" id="work">
    <h2 className='compon'> Portfolio</h2>

    <div className="container mx-auto gap-y-4">
      {
        Works.map((e , idx) => {
          return (
            <div className="cover " key={idx}>
              <div className="box">
                <img src={e.img} alt="" />
                  <a className="link"  href={e.visit} target="_blank" ><i className="fa-solid fa-link"></i></a>
                  <a className="githup" target="_blank" href={e.github}><i className="fa-brands fa-github"></i> </a>
              </div>
              <h3>{e.title}</h3>
            </div>
          )
        })
      }
      </div>
  </section>
  )
}

export default Work;
