import './steps.scss'
import CreateButton from './CreateButton';
function Steps() {
  return (
    <div className="steps">
      <div className="steps-border"></div>
      <div className="steps-d">
              <div className="steps-ch">
                  <div className="round okay"></div>
          <h4>01</h4>
          <h5>Pick your coffee</h5>
          <p>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>
        <div className="steps-ch">
<div className="round"></div>
          <h4>02</h4>
          <h5>Choose the frequency</h5>
          <p>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>
        <div className="steps-ch">
                  <div className="round"></div>
          <h4>03</h4>
          <h5>Receive and enjoy!</h5>
          <p>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Steps