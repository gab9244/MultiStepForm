import { useState } from "react";

export const PickAddOns = () => {

  const [isOnlineSChecked, setisOnlineSChecked] = useState(false);
  const [isStorageChecked, setisStorageSChecked] = useState(false);
  const [isCustomPSChecked, setisCustomPSChecked] = useState(false);

  // eslint-disable-next-line prefer-const
  let [changeValue, setChangeValue] = useState(0)

  const Yearly = document.querySelector(".Yearly");
  

 const OnlineSCheckHandler =()=>{
  const Online = document.querySelector(".Online")
      if(isOnlineSChecked == false){
        Online?.classList.remove('OffDisplay')
        setisOnlineSChecked(true)
        setChangeValue(changeValue+=1)
      }
    
      
      else {
        Online?.classList.add('OffDisplay')
        setisOnlineSChecked(false)
        setChangeValue(changeValue-=1)
      }
  }

 const StorageCheckHandler = ()=>{
  const storageL = document.querySelector(".storageL")
      if(isStorageChecked == false){
        setisStorageSChecked(true)
        storageL?.classList.remove('OffDisplay')
        setChangeValue(changeValue+=2)
      }
    
      else {
        storageL?.classList.add('OffDisplay')
        setisStorageSChecked(false)
        setChangeValue(changeValue-=2)
      }
 }

 const CustomPCheckHandler = ()=>{
  const ProfileS = document.querySelector(".ProfileS")
  
  if(isCustomPSChecked == false){
    ProfileS?.classList.remove('OffDisplay')
    setisCustomPSChecked(true)
    setChangeValue(changeValue+=2)

  }
  
  else {
    ProfileS?.classList.add('OffDisplay')
    setisCustomPSChecked(false)
    setChangeValue(changeValue-=2)
  } 
}
const SumResult = ()=>{
  const TotalSum = document.querySelector(".TotalSum")
  const arcade = document.querySelector(".arcade");
  const pro = document.querySelector(".pro");
  const advanced = document.querySelector(".advanced");


  if(arcade?.classList.contains("choiced")){
    if(TotalSum) TotalSum.textContent = `$ ${changeValue+9}`
  }
  if(pro?.classList.contains("choiced")){
    if(TotalSum) TotalSum.textContent = `$ ${changeValue+15}`
  }
  if(advanced?.classList.contains("choiced")){
    if(TotalSum) TotalSum.textContent = `$ ${changeValue+12}`
  }


  if(arcade?.classList.contains("choiced") && Yearly?.classList.contains("Chosen")){
    if(TotalSum) TotalSum.textContent = `$ ${12*changeValue+108}`
  }
  if(pro?.classList.contains("choiced")  && Yearly?.classList.contains("Chosen")){
    if(TotalSum) TotalSum.textContent = `$ ${12*changeValue+136}`
  }
  if(advanced?.classList.contains("choiced") && Yearly?.classList.contains("Chosen")){
    if(TotalSum) TotalSum.textContent = `$ ${12*  changeValue+180}`
  }
  
    
  
}


  const onSubmits = () => {
    SumResult()
    const NextStep = document.querySelector(".PBtn");
    const stepFourBtn = document.querySelector('.buttonFour')
    const stepThreeBtn = document.querySelector(".buttonThree");

    const Finishing = document.querySelector(".Finishing");
    const pickadds = document.querySelector(".pickadds");
    NextStep?.addEventListener("click", (e) => {
      e.preventDefault();

      pickadds?.classList.add("OffDisplay");
      Finishing?.classList.remove("OffDisplay");
      stepThreeBtn?.classList.remove("Actived");
      stepFourBtn?.classList.add("Actived");

    
    });
  };
  
  function movementP() {
    const BackStep = document.querySelector(".backBtn");
    const pickadds = document.querySelector('.pickadds')
    const SelectPlan = document.querySelector(".SelectPlan");
    
    const stepThreeBtn = document.querySelector(".buttonThree");
    const stepTwoBtn = document.querySelector(".buttonTwo");
    BackStep?.addEventListener("click", () => {
      SelectPlan?.classList.remove("OffDisplay");
      pickadds?.classList.add("OffDisplay");

      stepTwoBtn?.classList.add("Actived");
      stepThreeBtn?.classList.remove("Actived");
    });
  }



  return (
    <section className="pickadds OffDisplay">
      <div className="pickHeader">
        <h1>Pick add-ons</h1>
        <p className="SelectPlanP">
          Add-ons help enhance your gaming experiece.
        </p>
      </div>

      <div>
        <div className="add-ons">
          <input type="checkbox" name="checkbox" id="checkbox" className="OnlineS" checked = {isOnlineSChecked} onChange={OnlineSCheckHandler}/>
          <div className="content">
            <h3>Online service</h3>
            <p>Access to multiplayer games</p>
          </div>
          <p className="price OnlineValue">+$1/mo</p>
        </div>
        <div className="add-ons">
          <input type="checkbox" name="checkbox" id="checkbox" className="Storage" checked = {isStorageChecked}onChange={StorageCheckHandler}/>
          <div className="content">
            <h3>Larger storage</h3>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p className="price bigger StorageValues">+$2/mo</p>
        </div>
        <div className="add-ons">
          <input type="checkbox" name="checkbox" id="checkbox" className="CustomP" checked = {isCustomPSChecked} onChange={CustomPCheckHandler}/>
          <div className="content">
            <h3>Customizable Profile</h3>
            <p>Custom theme on your profile</p>
          </div>
          <p className="price ProfileValues">+$2/mo</p>
        </div>
      </div>
      <div className="MoveBtns">
        <button className="BackStep backBtn" onClick={movementP}>Go Back</button>
        <button className="NextStep PBtn" onClick={onSubmits}>
          Next Step
        </button>
      </div>
    </section>
  );
};
