import React, {useState} from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";
import toast from "react-hot-toast";

const Register = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[phone, setPhone] = useState("");
    const[address, setAddress] = useState("");
    const[answer, setAnswer] = useState("");
    const navigate =  useNavigate();

    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/register",{name, email, password, phone, address,answer});
            if(res && res.data.success){
                toast.success(res.data && res.data.message);
                navigate("/login");
            }else{
                toast.error(res.data.message);

            }
        } catch (error){
            console.log(error)
            toast.error('Something Went Wrong');
        }
    };
    return (
        <Layout title={"Register Now!"}>
            <div className="form-container">
                <h1>Register Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input 
                        type="text" 
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                        className="form-control" 
                        id="exampleInputName" 
                        placeholder= "Enter Your Name"
                        required
                        />
                        </div>

                        <div className="mb-3">
                        <input 
                        type="email" 
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail" 
                        placeholder= "Enter Your Email"
                        required
                        />
                        </div>

                    <div className="mb-3">
                        <input 
                        type="password" 
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        className="form-control" 
                        id="exampleInputPassword" 
                        placeholder= "Enter Your Password"
                        required
                        />
                    </div>
                    <div className="mb-3">
                        
                        <input 
                        type="text" 
                        value = {phone}
                         onChange = {(e) => setPhone(e.target.value)}
                        className="form-control" 
                        id="exampleInputPhone" 
                        placeholder= "Enter Your Phone Number"
                        required
                        />
                        </div>
                        <div className="mb-3">
                       
                        <input 
                        type="text" 
                        value = {address}
                        onChange = {(e) => setAddress(e.target.value)}
                        className="form-control" 
                        id="exampleInputAddress" 
                        placeholder= "Enter Your Address"
                        required
                        />
                        </div>

                        <div className="mb-3">
                       <input 
                       type="text" 
                       value = {answer}
                       onChange = {(e) => setAnswer(e.target.value)}
                       className="form-control" 
                       id="exampleInputAnswer" 
                       placeholder= "Enter hint for your password"
                       required
                       />
                       </div>
                    
                    <button type="submit" className="btn btn-primary">REGISTER</button>
                </form>

            </div>

        </Layout>
    )
}

export default Register