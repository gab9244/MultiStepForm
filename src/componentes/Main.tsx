import { Info } from "./Info";
import { Plain } from "./Plain";
import { PickAddOns } from "./PickAddOns";
import { FinishingUp } from "./FinishingUp";
import { ThankYou } from "./ThankYou";
export const Main = () => {
  function OnDisplay() {
    const InfoSection = document.querySelector(".InfoSection");
    const SelectPlan = document.querySelector(".SelectPlan");
    const pickadds = document.querySelector(".pickadds");
    const Finishing = document.querySelector(".Finishing");

    const stepOneBtn = document.querySelector(".buttonOne");
    const stepTwoBtn = document.querySelector(".buttonTwo");
    const stepThreeBtn = document.querySelector(".buttonThree");
    const stepFourBtn = document.querySelector(".buttonFour");

    if (InfoSection?.classList.contains("OnDisplay")) {
      stepOneBtn?.classList.add("Actived");
      stepTwoBtn?.classList.remove("Actived");
      stepThreeBtn?.classList.remove("Actived");
      stepFourBtn?.classList.remove("Actived");
    }
    if (SelectPlan?.classList.contains("OnDisplay")) {
      stepOneBtn?.classList.remove("Actived");
      stepTwoBtn?.classList.add("Actived");
      stepThreeBtn?.classList.remove("Actived");
      stepFourBtn?.classList.remove("Actived");
    }

    if (pickadds?.classList.contains("OnDisplay")) {
      stepOneBtn?.classList.remove("Actived");
      stepTwoBtn?.classList.remove("Actived");
      stepThreeBtn?.classList.add("Actived");
      stepFourBtn?.classList.remove("Actived");
    }
    if (Finishing?.classList.contains("OnDisplay")) {
      stepOneBtn?.classList.remove("Actived");
      stepTwoBtn?.classList.remove("Actived");
      stepThreeBtn?.classList.remove("Actived");
      stepFourBtn?.classList.add("Actived");
    }
  }

  const SelectPage = () => {
    const InfoSection = document.querySelector(".InfoSection");
    const SelectPlan = document.querySelector(".SelectPlan");
    const pickadds = document.querySelector(".pickadds");
    const Finishing = document.querySelector(".Finishing");

    const stepOneBtn = document.querySelector(".buttonOne");
    const stepTwoBtn = document.querySelector(".buttonTwo");
    const stepThreeBtn = document.querySelector(".buttonThree");
    const stepFourBtn = document.querySelector(".buttonFour");

    stepOneBtn?.addEventListener("click", () => {
      InfoSection?.classList.remove("OffDisplay");
      SelectPlan?.classList.add("OffDisplay");
      pickadds?.classList.add("OffDisplay");
      Finishing?.classList.add("OffDisplay");
      stepOneBtn?.classList.add("Actived");
      stepTwoBtn?.classList.remove("Actived");
      stepThreeBtn?.classList.remove("Actived");
      stepFourBtn?.classList.remove("Actived");
    });

    stepTwoBtn?.addEventListener("click", () => {
      InfoSection?.classList.add("OffDisplay");
      SelectPlan?.classList.remove("OffDisplay");
      pickadds?.classList.add("OffDisplay");
      Finishing?.classList.add("OffDisplay");

      stepOneBtn?.classList.remove("Actived");
      stepTwoBtn?.classList.add("Actived");
      stepThreeBtn?.classList.remove("Actived");
      stepFourBtn?.classList.remove("Actived");
    });

    stepThreeBtn?.addEventListener("click", () => {
      InfoSection?.classList.add("OffDisplay");
      SelectPlan?.classList.add("OffDisplay");
      pickadds?.classList.remove("OffDisplay");
      Finishing?.classList.add("OffDisplay");

      stepOneBtn?.classList.remove("Actived");
      stepTwoBtn?.classList.remove("Actived");
      stepThreeBtn?.classList.add("Actived");
      stepFourBtn?.classList.remove("Actived");
    });

    stepFourBtn?.addEventListener("click", () => {
      InfoSection?.classList.add("OffDisplay");
      SelectPlan?.classList.add("OffDisplay");
      pickadds?.classList.add("OffDisplay");
      Finishing?.classList.remove("OffDisplay");

      stepOneBtn?.classList.remove("Actived");
      stepTwoBtn?.classList.remove("Actived");
      stepThreeBtn?.classList.remove("Actived");
      stepFourBtn?.classList.add("Actived");
    });
  };

  
  OnDisplay();

  return (
    <main>
      <div className="sidebar">
        <img 
          src="/bg-sidebar-desktop.svg"
          alt="A site bar"
          className="sidebar  deleteOnSize"
        />
        <div className="steps">
          <div className="step">
            {" "}
            <button className="buttons buttonOne  Actived" onClick={SelectPage}>
              1
            </button>{" "}
            <div className="stepText">
              <div className="stepStage"><span className="deleteOnSize">Step 1</span> </div><span className="deleteOnSize">Your info</span>
            </div>
          </div>
          <div className="step">
            {" "}
            <button className="buttons  buttonTwo" onClick={SelectPage}>
              2
            </button>{" "}
            <div className="stepText">
              <div className="stepStage"><span  className="deleteOnSize">Step 2 </span></div><span className="deleteOnSize">Select plan</span>
            </div>
          </div>
          <div className="step">
            {" "}
            <button className="buttons buttonThree" onClick={SelectPage}>
              3
            </button>{" "}
            <div className="stepText">
              <div className="stepStage"><span className="deleteOnSize">Step 3</span></div> <span className="deleteOnSize"> Add-ons</span>
            </div>
          </div>
          <div className="step">
            {" "}
            <button className="buttons buttonFour" onClick={SelectPage}>
              4
            </button>{" "}
            <div className="stepText">
              <div className="stepStage"><span className="deleteOnSize">Step 4</span></div> <span className="deleteOnSize">Summary</span>
            </div>
          </div>
        </div>
      </div>
      <Info />
      <Plain />
      <PickAddOns />
      <FinishingUp />
      <ThankYou />
    </main>
  );
};
