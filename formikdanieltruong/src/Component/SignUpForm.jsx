import { useEffect, useState } from "react";
import { useFormik } from "formik";
import "./signup.css";
const SignUpForm  = () => {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [password,setPassword] = useState("");
    const [confirmedPassword,setConfirmedPassword] = useState("");

    const formik = useFormik ({
        initialValues:{
            email: "",
            name: "",
            phone: "",
            password: "",
            confirmedPassword: ""

        },
        onSubmit: values => {
            console.log(values);
        }
    })
   

    return (
       <section>
        <form className="infoform" onSubmit={formik.handleSubmit}>
            <label> Your name</label>
            <input 
             type="text"
             id="name" 
             name="name" 
             value={formik.values.name}
            // onChange={(e) => setName(e.target.value)} //onChange khi nhập gì vào input thì nó sẽ bỏ những gì mình nhập vào name state
             onChange={formik.handleChange}
             placeholder="Enter your name">
             </input>

             <label> Email address</label>
            <input 
             type="email"
             id="email" 
             name="email" 
             value={formik.values.email}
             onChange={formik.handleChange}
             placeholder="Enter your email">
             </input>

             <label> Password</label>
            <input 
             type="text"
             id="password" 
             name="password" 
             value={formik.values.password}
             onChange={formik.handleChange}
             placeholder="Enter your password">
             </input>

             <label> Confirm Password</label>
            <input 
             type="text"
             id="confirmedPassword" 
             name="confirmedPassword" 
             value={formik.values.confirmedPassword}
             onChange={formik.handleChange}
             placeholder="Enter your password">
             </input>

             <label> Phone number</label>
            <input 
             type="text"
             id="phone" 
             name="phone" 
             value={formik.values.phone}
             onChange={formik.handleChange}
             placeholder="Enter your phone number">
             </input>
            
            <button type="submit">Continue</button>
        </form>
       </section>
    );
}
export default SignUpForm;