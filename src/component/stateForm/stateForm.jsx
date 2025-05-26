import { useState } from "react";

const StateForm = () => {
    const [email, setEmail] = useState('airin@gmail.com')
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')
   
    const handleSubmit = e => {
        e.preventDefault();
        if( password.length < 6){
            setError('pass 6')
        }
        else{
            setError('')
        }
    }

     const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const handlePass = e => {
        setPassword(e.target.value)
    }
    return (
        <div>
             <form  onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name"/>
            <br />
            <input
             onChange={handleEmail}
            type="email" name="email" value={email} />
            <br />
            <input
            onChange={handlePass}
            type="password" name="password" placeholder="pass" required/>
            <br />
            <input type="submit" value="Submit" />
            {
                error && <p>{error}</p>
            }
            </form>
        </div>
    );
};

export default StateForm;