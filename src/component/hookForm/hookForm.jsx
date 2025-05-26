
import useInputState from '../../hook/useInputState';

const HookForm = () => {
    // const [name, handleNameChnge] = useInputState('hello')
    const emailState = useInputState('nila@gmail.com')

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div>
             <form  onSubmit={handleSubmit}>
            {/* <input type="text" name="name"  value={name} onChange={handleNameChnge}/> */}
            <br />
            <input {...emailState} type="email" name="email" />
            <br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;