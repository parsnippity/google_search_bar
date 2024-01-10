import {useRef} from 'react'

const GoogleSearchBar = () => {
    const searchValue = useRef(null)
    const searchButton = useRef(null)
    //when anything is typed in the input, update the url the button will send the user to
    function updateURL() {
        let holder = searchValue.current.value.split(" ");
        holder = holder.join("+");
        searchButton.current.href = `https://www.google.com/search?q=${holder}`;
    }
    //when a key is pressed in the input element, check if it was the enter key, and if so, simulate a click on the button to activate the search
    function checkSearch(e) {
        if(e.code === "Enter") {
            searchButton.current.click();
        }
    }
    return (
        <div>
            <input type="text" id="search" ref={searchValue} onChange={updateURL} onKeyDown={checkSearch} placeholder="Search Google"></input>
            <a ref={searchButton} href='https://www.google.com/search?q=' target='_blank' rel="noreferrer"><button type="button" id="searchBtn">Search</button></a>
        </div>
    )
}

export default GoogleSearchBar;