import React from "react";
import "./suscribe.scss";
import Steps from "../assets/components/Steps";
import Quiz from "../assets/components/quiz";
function Suscribe() {
  return (
    <div className="suscribe">
      <div className="create-cofee">
        <h1>Create a plan</h1>
        <p>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </div>
      <div className="shags">
        <Steps />
      </div>
      <Quiz />
    </div>
  );
}

export default Suscribe;
