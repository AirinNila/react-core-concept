
const RefForm = () => {

    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div>
             <form  onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <br />
            <input type="email" name="email" />
            <br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;