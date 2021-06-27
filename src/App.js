import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faCoffee, faMinusCircle, faPlusCircle, faPowerOff } from '@fortawesome/free-solid-svg-icons'

function App() {
  const fm = [
    {
      name: 'putin FM',
      number: '66,6'
    },
    {
      name: 'Dribble FM',
      number: '101,2'
    },
    {
      name: 'Doge FM',
      number: '99,4'
    },
    {
      name: 'Ballads FM',
      number: '87,1'
    },
    {
      name: 'Maximum FM',
      number: '142,2'
    }
  ]
  return (
    <div className="row">
      <div className="col-md-6">
        <div style={{borderRadius:'10px'}} className='card-layout'>
          <div className='card-head d-flex justify-content-between'>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span className='text-center'>STATIONS</span>
            <FontAwesomeIcon icon={faPowerOff} />
          </div>
          <div className='card-body '>
            {fm.map(ch =>
              <div className='card-body-text d-flex justify-content-between'>
                <p>{ch.name}</p>
                <p>{ch.number}</p>
              </div>)}
          </div>
          <div style={{height:'100px'}} className='card-footer'>

          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div style={{borderRadius:'10px'}} className='card-layout'>
          <div className='card-head d-flex justify-content-between'>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span className='text-center'>STATIONS</span>
            <FontAwesomeIcon icon={faPowerOff} />
          </div>
          <div className='card-body '>
            <div className='card-body-text d-flex justify-content-between'>
              <p>Putin FM</p>
              <p>66,6</p>
            </div>
            <div className='card-middle d-flex justify-content-between align-items-center'>
              <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faPlusCircle} />
              <img src="https://i.ibb.co/P5G2Kxy/sss-removebg-preview.png" />
              <FontAwesomeIcon style={{ fontSize: '20px' }} icon={faMinusCircle} />
            </div>
            <div className='card-body-text d-flex justify-content-between'>
              <p>Dribble FM</p>
              <p>101,2</p>
            </div>
            <div className='card-body-text d-flex justify-content-between'>
              <p>Doge FM</p>
              <p>99,4</p>
            </div>
          </div>
          <div className='card-footer text-center'>
            <p><small style={{ color: '#edad61' }}>CURRENTLY PLAYING</small></p>
            <p style={{ color: 'lightgrey' }}>Dribbled FM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
