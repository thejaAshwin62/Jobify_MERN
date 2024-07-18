import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
       <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span>App
          </h1>
          <p>
            Job tracking is part of the project management processes within
            field service operations. It’s what you follow to keep an eye on the
            pipeline of jobs and their statuses. This allows your entire team to
            identify potential obstacles and delays and ensures jobs are
            completed within SLAs and budgets.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="job Odin" className="img main-img" />
      </div>
    </Wrapper>
  );
}


export default Landing