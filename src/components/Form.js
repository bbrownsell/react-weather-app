const Form = ({ input, setInput, handleSearch }) => {

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <label className="city-label">Search For a City</label>
                <input className="search-city" type="text" value={input} onChange={handleInput}/>
                <button type="submit">Search</button>
            </form>
        </>
      );
}
 
export default Form;