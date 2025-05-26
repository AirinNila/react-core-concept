import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nameRef.current.value)
    }

    useEffect(() => {
        nameRef.current.focus()
    },[])
    return (
        <div>
             <form  onSubmit={handleSubmit}>
            <input type="text" ref={nameRef} name="name" />
            <br />
            <input type="email" name="email" defaultValue={'nila@gamil.com'} />
            <br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;