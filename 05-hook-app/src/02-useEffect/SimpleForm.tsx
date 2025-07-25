import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'tonderjar',
        email: 'diego@computron.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        // console.log('useEffect called!');
    }, []);

    useEffect(() => {
        // console.log('formState changed!');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed!');
    }, [email]);
    

  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input 
            type="text" 
            className="form-control" 
            placeholder="Username" 
            name="username"
            value = {username}
            onChange={onInputChange}
        />

        {
            (username === "tonderjar2") && <Message />
        }

        <input 
            type="email" 
            className="form-control mt-2" 
            placeholder="diego@computron.com" 
            name="email"
            value = {email}
            onChange={onInputChange}
        />

    </>
  )
}
