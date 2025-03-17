import { ButtonBack } from "../../shared/ButtonBack"


export const Form01 = () => {
  return (
    <div className="container d-flex flex-column  mt-5">
      <ButtonBack/>
      <div className="d-flex justify-content-center">
        <form className="d-flex align-items-start flex-column gap-2">
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' name='username'></input>

          <label htmlFor='email'>E-Mail</label>
          <input type='text' id='email' name='email'></input>

          <label htmlFor='channel'>Channel</label>
          <input type='text' id='channel' name='channel'></input>


          <button type="submit" className="btn btn-primary my-2">Submit</button>
        </form>
      </div>
    </div>
  )
}
