import { useForm } from "react-hook-form";
import "./UserForm.css";
const UserForm = ({ onClose, onSend, initialData }) => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: initialData, 
    });

const onSubmit = (data) => {
    if (initialData) onSend({ id: initialData.id, ...data });
    else onSend(data);
}

  return (
    <form className="user-form" onSubmit = {handleSubmit(onSubmit)}>
            <h2 className="user-form_title">{initialData ? "Edit User" : "New user"}</h2>
            <button type="button"className="user-form_close-btn" onClick ={() => onClose()}>
              X
            </button>
     <div className="user-form_inputs">
            <div className="user-form_input-container">
            <label htmlFor="nameId" className="user-form_label">
              First Name
              </label>
              <input type="text" placeholder= "First name" id="nameId" 
              {...register("first_name")}/>
            </div>
         
          <div className="user-form_input-container">
            <label htmlFor="lastnameid" className="user-form_label">
              Last Name
              </label>
              <input type="text" placeholder= "Last name" id="lastNameId"
              {...register("last_name")} />
            </div>
            <div className="user-form_input-container">
            <label htmlFor="emailId" className="user-form_label">
              Email
              </label>
              <input type="email" placeholder= "example@mail.com" id="emailId" 
               {...register("email")}/>
            </div>
            <div className="user-form_input-container">
            <label htmlFor="passwordId" className="user-form_label">
              Password
              </label>
              <input type="password" placeholder= "xxxxxx" id="passwordId"
              {...register("password")} />
            </div>
            <div className="user-form_input-container">
            <label htmlFor="birthdayId" className="user-form_label">
              Birthday
              </label>
              <input type="date" id="birthdayId"
              {...register("birthday")} />
            </div>
      
            <button type="submit" className="user-form_submit">
                {initialData ? "Save changes" : "Add new user"}
                </button>
       </div>       
              </form>  
        
  )
  
}
 
export default UserForm;