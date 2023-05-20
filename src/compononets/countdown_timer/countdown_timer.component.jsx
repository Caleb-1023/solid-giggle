import Countdown, { zeroPad } from "react-countdown"
import './countdown_timer.style.scss'

const renderer = ({ days, hours, minutes, seconds }) => {
    
    // Render a countdown
    return (
        <div className="counter-container">
            <div className="counter">
                <div className="count-container">
                    <h1 className="count">{zeroPad(days)}</h1>
                    <p className="description">days</p>
                </div>
                <span className="colon">:</span>
                <div className="count-container">
                    <h1 className="count">{zeroPad(hours)}</h1>
                    <p className="description">hours</p>
                </div>
                <span className="colon">:</span>
                <div className="count-container">
                    <h1 className="count">{zeroPad(minutes)}</h1>
                    <p className="description">minutes</p>
                </div>
                <span className="colon">:</span>
                <div className="count-container">
                    <h1 className="count">{zeroPad(seconds)}</h1>
                    <p className="description">seconds</p>
                </div>
            </div>
        </div>
    );
  };

const CountdownTimer = () => {
  return (
    <div className="countdown_timer">
        <h1>Coming Soon</h1>
        <Countdown date={'2023-07-29T09:00:00'} renderer={renderer} />
    </div>
  )
}

export default CountdownTimer