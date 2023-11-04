

export const Info = () => {
  return (
    <section>
        <header>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
        </header>
        
        <form action="#" >
            <label htmlFor="NameInput">
                <p>Name</p>
                <input id="NameInput"  type="text" placeholder="e.g. Stephen King" required pattern="[A-Z][a-b]+"/>
            </label>
            <label htmlFor="Email">
                <p>Email Address</p>
                <input  id="Email" type="text" placeholder="e.g. stephenking@lorem.com"  required pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'/>
            </label>
            <label htmlFor="PhoneNumber">
                <p>Phone Number</p>
                <input type="number"  id="PhoneNumber" placeholder="e.g. +1 234 567 890" required/>
            </label>

            <button className="NextStep">Next Step</button>
        </form>

    </section>
  )
}






