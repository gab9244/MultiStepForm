export const FinishingUp = () => {
  const ChangePlain = () => {
    const stepTwoBtn = document.querySelector(".buttonTwo");
    const stepFourBtn = document.querySelector(".buttonFour");
    const SelectPlan = document.querySelector(".SelectPlan");
    const Finishing = document.querySelector(".Finishing");
    const ChangePlain = document.querySelector(".ChangePlain");
    ChangePlain?.addEventListener("click", () => {
      stepTwoBtn?.classList.add("Actived");
      stepFourBtn?.classList.remove("Actived");
      SelectPlan?.classList.remove("OffDisplay");
      Finishing?.classList.add("OffDisplay");
    });
  };

  const Confirm = ()=>{
    const ThankYoursection = document.querySelector(".ThankYoursection")
    const buttons = document.querySelectorAll(".buttons")
    const Finishing = document.querySelector(".Finishing");
    ThankYoursection?.classList.remove("OffDisplay")
    Finishing?.classList.add("OffDisplay");

    buttons.forEach((button) =>{
      button.setAttribute("disabled", "true")
    })



  }


  const movementF = () => {
    const BackStep = document.querySelector(".backF");
    const pickadds = document.querySelector(".pickadds");
    const Finishing = document.querySelector(".Finishing");
    const stepThreeBtn = document.querySelector(".buttonThree");
    const stepFourBtn = document.querySelector(".buttonFour");
    BackStep?.addEventListener("click", () => {
      Finishing?.classList.add("OffDisplay");
      pickadds?.classList.remove("OffDisplay");

      stepFourBtn?.classList.remove("Actived");
      stepThreeBtn?.classList.add("Actived");
    });
  };

  return (
    <section className="Finishing OffDisplay">
      <div className="finishingS">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before comfirming</p>
      </div>
      <div className="Sum">
        <div className="underLine">
          <div className="boldTD">
            Arcade(Monthly)
            <button className="ChangePlain" onClick={ChangePlain}>
              change
            </button>
          </div>
          <p className="ArcadeMo">$9/mo</p>
        </div>

        <div className="sumItems  Online OffDisplay">
          <div>Online service</div>
          <div className="OnlineYear">+$1/mo</div>
        </div>
        <div className="sumItems storageL OffDisplay">
          <div>Larger storage</div>
          <div className="StorageYear">+$2/mo</div>
        </div>
        <div className="sumItems  ProfileS OffDisplay">
          <div>Customizable Profile service</div>
          <div className="ProfileYear">+$2/mo</div>
        </div>
        <div className="TotalTable">
          <div>Total (per month)</div>
          <div className="TotalSum">$12</div>
        </div>
      </div>
      <div className="MoveBtns">
        <button className="BackStep backF" onClick={movementF}>
          Go Back
        </button>
        <button className="NextStep Confirm" onClick={Confirm}>Confirm</button>
      </div>
    </section>
  );
};
