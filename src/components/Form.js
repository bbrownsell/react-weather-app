const Form = ({ input, setInput, handleSearch }) => {

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <label className="city-label">Search For a City</label>
                <input className="search-city" type="text" value={input} onChange={handleInput}/>
                <button type="submit">Search</button>
            </form>
        </div>
      );
}
 
export default Form;