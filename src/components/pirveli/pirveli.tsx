import 'react';
import './Pirveli.css';  

const Pirveli = () => {
  return (
    <div className="centered-div">
      <img src="/image.jpg" alt="Description" className="my-image" />
      <h1 className="header">Equilibrium #3429</h1>
      <p className='paragraph'>Our Equilibrium collection promotes balance and calm.</p>
      <div className='ucnauri'>
        <h1 className="split-text">
          <div className="left-text-container">
            <img src="/favicon.png" alt="faviqoni" className="icon" />
            <span className="left-text">0.041 ETH</span>
          </div>
          <div className="right-text-container">
            <img src="/favicon.png" alt="faviqoni" className="icon" />
            <span className="right-text">3 days left</span>
          </div>
        </h1>
        <hr className="divider" />
      </div>
      <div>
        <img src="/avatar.png" alt="avatari" className='avatari'/>
        <h1 className='ucnauri2'>
          <span className='span1'>Creation of</span>
          <span className='span2'>Jules Wyvern</span>
        </h1>
      </div>

    </div>
  );
}

export default Pirveli;
