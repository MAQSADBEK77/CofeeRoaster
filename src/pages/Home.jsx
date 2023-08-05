import React from "react";
import "./home.scss";
import Steps from "../assets/components/steps";
import CreateButton from "../assets/components/CreateButton";
import d_child_img from "../assets/images/child.svg";
import d_child_img2 from "../assets/images/d_child_img2.svg";
import d_child_img3 from "../assets/images/d_child_img3.png";
import d_child_img4 from "../assets/images/d_child_img4.png";
function Home() {
  return (
    <div className="home">
      <div className="cofee-top-block">
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <CreateButton />
      </div>
      <div className="collection">
        <a href="#" className="d-child">
          <img src={d_child_img} alt="" />
          <div>
            <h2>Gran Espresso</h2>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience.
            </p>
          </div>
        </a>
        <a href="#" className="d-child">
          <img src={d_child_img2} alt="" />
          <div>
            <h2>Planalto</h2>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts.
            </p>
          </div>
        </a>
        <a href="#" className="d-child">
          <img src={d_child_img3} alt="" />
          <div>
            <h2>Piccollo</h2>
            <p>
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry.
            </p>
          </div>
        </a>
        <a href="#" className="d-child">
          <img src={d_child_img4} alt="" />
          <div>
            <h2>Danche</h2>
            <p>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes.
            </p>
          </div>
        </a>
      </div>
      <div className="why">
        <div className="why-text">
          <h3>Why choose us?</h3>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="why-f">
          <a href="#" className="why-ch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="71"
              height="72"
              viewBox="0 0 71 72"
              fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M58.0481 13.1037C65.3077 20.4657 69.8383 29.7448 70.8057 39.2263C71.7952 48.8834 68.9819 57.6044 62.8937 63.774C57.5999 69.1425 50.4112 72 42.3706 72C41.1592 72 39.93 71.9325 38.6831 71.802C29.3334 70.821 20.1834 66.2265 12.9238 58.8644C-2.19016 43.5373 -4.36451 20.8122 8.07807 8.19415C20.5118 -4.42828 42.9297 -2.21877 58.0481 13.1037ZM32.5284 40.0363C38.3592 41.6563 43.7285 43.1728 48.6806 47.0069C52.5639 50.0144 55.3299 53.8364 58.1269 57.7013C59.4146 59.4806 60.7088 61.2689 62.1216 62.9911C60.4887 48.6585 53.3843 36.3464 39.0248 32.1209C38.8009 32.0552 38.5778 31.9897 38.3553 31.9245C32.077 30.0836 26.3438 28.4026 21.1197 24.0479C17.76 21.2453 15.2865 17.7667 12.799 14.2682C11.5279 12.4806 10.2532 10.6878 8.85462 8.97729C10.5586 23.5347 17.8493 35.9548 32.5284 40.0363Z"
                fill="#FDD6BA"
              />
            </svg>
            <div>
              <h4>Best quality</h4>
              <p>
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </a>
          <a href="#" className="why-ch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M36 23.9808C36.0994 23.9935 36.2001 24 36.3016 24C36.8763 24 37.4424 23.9931 38 23.9796V34.5V39H65.9556H66.7111C69.6124 39 72 36.63 72 33.75V26.25C72 23.37 69.6124 21 66.7111 21H54.5796C63.0488 17.7084 67 12.3266 67 8.06725C67 4.34664 64.0499 0.00296699 55.7306 0C44.9929 0 38.9117 7.61477 35.9997 14.5904C33.0874 7.6144 27.007 0 16.2725 0C7.95319 0 5 4.34421 5 8.06528C5 12.3253 8.95154 17.708 17.4214 21H5.28889C2.38756 21 0 23.37 0 26.25V33.75C0 36.63 2.38756 39 5.28889 39H6.04444H34V34.5V23.9796C34.5576 23.9931 35.1237 24 35.6984 24C35.7999 24 35.9006 23.9935 36 23.9808ZM39.1749 19.4842C40.5594 14.5561 44.7344 4.45346 55.7306 4.45346C58.9539 4.45346 62.3952 5.39993 62.3952 8.06429C62.3952 9.85338 60.8388 12.6572 56.4704 15.1643C53.3208 16.9712 47.8503 19.0926 39.1749 19.4842ZM34 44H6V66.8421C6 69.6716 8.39135 72 11.2973 72H34V44ZM66 66.8421V44H38V72H60.7027C63.6087 72 66 69.6716 66 66.8421ZM16.2725 4.45104C13.0491 4.45104 9.60477 5.40059 9.60477 8.06528C9.60477 11.8546 16.4597 18.7596 32.822 19.4866C31.4406 14.5549 27.2656 4.45104 16.2725 4.45104Z"
                fill="#FDD6BA"
              />
            </svg>
            <div>
              <h4>Exclusive benefits</h4>
              <p>
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </a>
          <a href="#" className="why-ch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="50"
              viewBox="0 0 72 50"
              fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.84615 0H9V4.16667H4.84615V0ZM0 19.4444H4.15385V23.6111H0V19.4444ZM16.4335 4.22917H13.1274V0H48.4615V35.3969C46.2975 37.2612 44.8997 39.9956 44.8101 43.0556H27.05C26.8847 37.409 22.263 32.8656 16.6017 32.8656C10.9403 32.8656 6.31864 37.4088 6.15331 43.0556H0V29.1199H11.7695C13.2731 29.1199 14.4964 27.8915 14.4964 26.3814C14.4964 24.8712 13.2731 23.6425 11.7695 23.6425H8.34462V19.4135H26.2659C27.7695 19.4135 28.9928 18.1848 28.9928 16.6746C28.9928 15.1644 27.7695 13.9358 26.2659 13.9358H0V9.70674H16.6017C18.1053 9.70674 19.3284 8.47821 19.3284 6.96802C19.3284 5.50901 17.9756 4.22917 16.4335 4.22917ZM49.1538 43.75C49.1538 40.3038 51.949 37.5 55.3846 37.5C58.8202 37.5 61.6154 40.3038 61.6154 43.75C61.6154 47.1962 58.8202 50 55.3846 50C51.949 50 49.1538 47.1962 49.1538 43.75ZM53.2844 45.8567H57.4849V41.6433H53.2844V45.8567ZM52.6154 4.86111H61.0622L70.6154 19.4444H52.6154V4.86111ZM52.6154 23.6111V33.1754C53.4514 32.9628 54.3266 32.8493 55.2283 32.8493C60.9476 32.8493 65.6166 37.3999 65.7837 43.0556H72V23.6111H52.6154ZM16.6154 37.5C13.1798 37.5 10.3846 40.3038 10.3846 43.75C10.3846 47.1962 13.1798 50 16.6154 50C20.051 50 22.8462 47.1962 22.8462 43.75C22.8462 40.3038 20.051 37.5 16.6154 37.5ZM18.7156 45.8567H14.5151V41.6433H18.7156V45.8567Z"
                fill="#FDD6BA"
              />
            </svg>
            <div>
              <h4>Free shipping</h4>
              <p>
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className="howw">How it works</div>
      <Steps />
      <div className="butt">
        <CreateButton />
      </div>
    </div>
  );
}

export default Home;
