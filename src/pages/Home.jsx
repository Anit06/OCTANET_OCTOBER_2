import React from 'react'
import '../css/Home.css'

import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const Home = () => {
  const navigate = useNavigate();

  return (
      <section className='container-fluid text-center' id='Home'>
        <div className='Home1'>
          <h2>Welcome</h2>
          <p>Create Your Task</p>
          <Button onClick={() => navigate("/create")} className='Next'>
            Next
          </Button>
        </div>
      </section>
  )
}

export default Home