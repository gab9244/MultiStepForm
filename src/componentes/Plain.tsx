import { useState } from "react";

export const Plain = () => {
  const onSubmited = () => {
    const NextStep = document.querySelector(".PlainBtn");
    const stepTwoBtn = document.querySelector(".buttonTwo");
    const stepThreeBtn = document.querySelector(".buttonThree");

    const SelectPlan = document.querySelector(".SelectPlan");
    const pickadds = document.querySelector(".pickadds");
    NextStep?.addEventListener("click", (e) => {
      e.preventDefault();

      pickadds?.classList.remove("OffDisplay");
      SelectPlan?.classList.add("OffDisplay");
      stepThreeBtn?.classList.add("Actived");
      stepTwoBtn?.classList.remove("Actived");
    });
  };

  const [isChecked, setIsChecked] = useState(false);

  const [ArcadeValues, setArcadeValues] = useState("");



  const ArcadeMo = document.querySelector(".ArcadeMo");
  const proMo = document.querySelector(".proMo");
  const arcade = document.querySelector(".arcade");
  const pro = document.querySelector(".pro");
  const advanced = document.querySelector(".advanced");

  const ArcadeOptionValue = document.querySelector(".ArcadeOptionValue");
  const AdvancedOptionValue = document.querySelector(".AdvancedOptionValue");
  const ProOptionValue = document.querySelector(".ProOptionValue");

  const OnlineValue = document.querySelector(".OnlineValue");
  const StorageValues = document.querySelector(".StorageValues");
  const ProfileValues = document.querySelector(".ProfileValues");

  const OnlineYear = document.querySelector(".OnlineYear");
  const StorageYear = document.querySelector(".StorageYear");
  const ProfileYear = document.querySelector(".ProfileYear");

  const textContentOfArcade = ArcadeOptionValue?.textContent;
  const textContentOfAdvanced = AdvancedOptionValue?.textContent;
  const textContentOfPro = ProOptionValue?.textContent;

  const arcadeFunction = () => {
    if (
      !arcade?.classList.contains("choiced") &&
      !pro?.classList.contains("choiced") &&
      !advanced?.classList.contains("choiced")
    ) {
      arcade?.classList.add("choiced");

      setArcadeValues(`${textContentOfArcade}`);
     
    } else {
      arcade?.classList.remove("choiced");
      
    }
  };

  const proFunction = () => {
    if (
      !pro?.classList.contains("choiced") &&
      !arcade?.classList.contains("choiced") &&
      !advanced?.classList.contains("choiced")
    ) {
      pro?.classList.add("choiced");
      setArcadeValues(`${textContentOfPro}`);

      
    } else {
      pro?.classList.remove("choiced");
      
    }
  };

  const advancedFunction = () => {
    if (
      !advanced?.classList.contains("choiced") &&
      !pro?.classList.contains("choiced") &&
      !arcade?.classList.contains("choiced")
    ) {
      advanced?.classList.add("choiced");

      setArcadeValues(`${textContentOfAdvanced}`);
      
    } else {
      advanced?.classList.remove("choiced");
      
    }
  };

  const checkHandler = () => {
    const Monthly = document.querySelector(".Monthly");
    const Yearly = document.querySelector(".Yearly");
    if (isChecked == false) {
      Monthly?.classList.remove("Chosen");
      Yearly?.classList.add("Chosen");
      if (ArcadeOptionValue) ArcadeOptionValue.textContent = `$108/y`;
      if (AdvancedOptionValue) AdvancedOptionValue.textContent = "$180/y";
      if (ProOptionValue) ProOptionValue.textContent = "$136/y";

      if (OnlineValue) OnlineValue.textContent = "+$12/y";
      if (StorageValues) StorageValues.textContent = "+$24/y";
      if (ProfileValues) ProfileValues.textContent = "+$24/y";

      if (OnlineYear) OnlineYear.textContent = "+$12/y";
      if (StorageYear) StorageYear.textContent = "+$24/y";
      if (ProfileYear) ProfileYear.textContent = "+$24/y";

      
    }
    if (isChecked == true) {
      Monthly?.classList.add("Chosen");
      Yearly?.classList.remove("Chosen");
      if (ArcadeOptionValue) ArcadeOptionValue.textContent = `+$9/mo`;
      if (AdvancedOptionValue) AdvancedOptionValue.textContent = "$+12/mo";
      if (ProOptionValue) ProOptionValue.textContent = "+$15/mo";

      if (OnlineValue) OnlineValue.textContent = "+$1/mo";
      if (StorageValues) StorageValues.textContent = "+$2/mo";
      if (ProfileValues) ProfileValues.textContent = "+$2/mo";

      if (OnlineYear) OnlineYear.textContent = "+$1/mo";
      if (StorageYear) StorageYear.textContent = "+$2/mo";
      if (ProfileYear) ProfileYear.textContent = "+$2/mo";
    }
    setIsChecked(!isChecked);
  };

  if (ArcadeMo) ArcadeMo.textContent = ArcadeValues;
  if (proMo) proMo.textContent = ArcadeValues;

  

  function movement() {
    const BackStep = document.querySelector(".BackStep");
    const InfoSection = document.querySelector(".InfoSection");
    const SelectPlan = document.querySelector(".SelectPlan");
    const stepOneBtn = document.querySelector(".buttonOne");
    const stepTwoBtn = document.querySelector(".buttonTwo");
    BackStep?.addEventListener("click", () => {
      InfoSection?.classList.remove("OffDisplay");
      SelectPlan?.classList.add("OffDisplay");

      stepTwoBtn?.classList.remove("Actived");
      stepOneBtn?.classList.add("Actived");
    });
  }

  return (
    <section className="SelectPlan OffDisplay">
      <h1>Select your plan</h1>
      <p className="SelectPlanP">
        You have the option of monthly or yearly billing.
      </p>
      <div className="Options">
        <div className="Option arcade" onClick={arcadeFunction}>
          <img src="/MultiStepForm/icon-arcade.svg" alt="" />
          <div>
            <p className="OptionTitle">Arcade</p>
            <p className="OptionValue  ArcadeOptionValue">+$9/mo</p>
          </div>
        </div>
        <div className="Option advanced" onClick={advancedFunction}>
          <img src="/MultiStepForm/icon-advanced.svg" alt="" />
          <div>
            <p className="OptionTitle">Advanced</p>
            <p className="OptionValue  AdvancedOptionValue">+$12/mo</p>
          </div>
        </div>
        <div className="Option pro" onClick={proFunction}>
          <img src="/MultiStepForm/icon-pro.svg" alt="" />
          <div>
            <p className="OptionTitle">Pro</p>
            <p className="OptionValue  ProOptionValue">+$15/mo</p>
          </div>
        </div>
      </div>
      <div className="ChoicingPlan">
        <span className="Monthly">Monthly</span>
        <label className="switch">
          <input
            type="checkbox"
            id="choiceBtn"
            checked={isChecked}
            onChange={checkHandler}
          />
          <span className="slider round"></span>
        </label>
        <span className="Yearly">Yearly</span>
      </div>
      <div className="MoveBtns">
        <button className="BackStep" onClick={movement}>
          Go Back
        </button>
        <button className="NextStep PlainBtn" onClick={onSubmited}>
          Next Step
        </button>
      </div>
    </section>
  );
};
