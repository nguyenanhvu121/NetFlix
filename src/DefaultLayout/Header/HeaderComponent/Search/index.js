import React, {useState, useRef} from "react";
import search from '../Image/search.png'
import close from '../Image/close.png'
import ListSearch from "../ListSearch";
function Search() {
  const[serchValue, setSearchValue] = useState('');
  const[iSearch, setISearch] = useState('');
  const inputRef = useRef();       
  const listFilmRef = useRef();  
  const valueSearch = (value) =>{    
    if(!!value){
      listFilmRef.current.classList.remove("none");
    }else{
      listFilmRef.current.classList.add("none")
    }
  }  
  return (
    <div style={{position: "relative"}}>
      <div className="search">
        <img
          onClick={(event) => {
            setISearch("a");
          }}
          style={{ width: "20px" }}
          src={search}
          alt=""
        />
        {!!iSearch && (
          <div className="searchText flex">
            <img style={{ width: "20px" }} src={search} alt="" />
            <input
              onBlur={() => {
                !!!serchValue && setISearch("");
              }}
              autoFocus
              ref={inputRef}
              onChange={(event) => {
                setSearchValue(event.target.value);
                valueSearch(event.target.value);
              }}              
              type="text"
              placeholder="Tìm kiếm"
              spellCheck = {false}
            />
            {!!serchValue && (
              <img
                onClick={() => {
                  setSearchValue("");
                  inputRef.current.value = "";
                  inputRef.current.focus();
                  listFilmRef.current.classList.add("none");
                }}
                style={{ width: "20px" }}
                src={close}
                alt=""
              />
            )}
          </div>
        )}
      </div>
      <div ref={listFilmRef} className="none search-block">
          <ListSearch value = {serchValue}/>
      </div>      
    </div>
  );
}

export default Search;
