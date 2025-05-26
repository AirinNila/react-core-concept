
const TableForm = () => {
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log('submited')
        console.log(e.target.name.value)
        console.log(e.target.email.value)
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

export default TableForm;