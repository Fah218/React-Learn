import './App.css'
import { useForm } from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div>
        <label>First Name:</label>
        <input
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
            required: "First name is required",
            minLength: { value: 3, message: "Min length at least 3" },
            maxLength: { value: 6, message: "Max length at most 6" },
          })}
        />
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
      </div>

      <br />

      <div>
        <label>Middle Name:</label>
        <input {...register("middleName")} />
      </div>

      <br />

      <div>
        <label>Last Name:</label>
        <input
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName", {
            required: "Last name is required",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Only alphabets allowed",
            },
          })}
        />
        {errors.lastName && (
          <p className="error-msg">{errors.lastName.message}</p>
        )}
      </div>

      <br />

      <input
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting..." : "Submit"}
      />
    </form>
  );
}

export default App;
