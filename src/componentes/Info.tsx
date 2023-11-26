import { useForm, FormProvider } from "react-hook-form";


export const Info = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const NextStep = document.querySelector(".NextStep");
    const stepOneBtn = document.querySelector(".buttonOne");
    const stepTwoBtn = document.querySelector(".buttonTwo");
    const InfoSection = document.querySelector(".InfoSection");
    const SelectPlan = document.querySelector(".SelectPlan");

    NextStep?.addEventListener("click", (e) => {
      e.preventDefault();

      SelectPlan?.classList.remove("OffDisplay");
      InfoSection?.classList.add("OffDisplay");
      stepTwoBtn?.classList.add("Actived");
      stepOneBtn?.classList.remove("Actived");
    });
    console.log(data);
  });

  return (
    <section className="InfoSection ">
      <header>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </header>
      <FormProvider {...methods}>
        <form
          action="#"
          method="GET"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="NameInput">
            <p>Name</p>
            <input
              id="NameInput"
              type="text"
              placeholder="e.g. Stephen King"
              {...register("name", {
                required: true,
                pattern: /[A-Z][a-z]{2}/,
              })}
            />
            {errors.name && <p className="invalid">Please add a valid name</p>}
          </label>
          <label htmlFor="Email">
            <p>Email Address</p>
            <input
              id="Email"
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              
              {...register("email", {
                required: true,
                pattern:
                // eslint-disable-next-line no-useless-escape
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && (
              <p className="invalid">
                Please add a valid Email address. Like: stephenking@gmail.com
              </p>
            )}
          </label>

          <label htmlFor="PhoneNumber">
            <p>Phone Number</p>
            <input
              type="number"
              id="PhoneNumber"
              placeholder="e.g. +1 234 567 890"
              {...register("phoneNumber", { required: true, minLength: 11 })}
            />
            {errors.phoneNumber && (
              <p className="invalid">Please add a valid phone number</p>
            )}
          </label>
          <button type="submit" className="NextStep first" onClick={onSubmit}>
            Next Step
          </button>
        </form>
      </FormProvider>
    </section>
  );
};
