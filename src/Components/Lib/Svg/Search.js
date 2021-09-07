function Search() {
    return(
        <svg 
        className="right-sidebar__search-icon"
        width="24" 
        height="24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <mask id="a" 
        style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><path fill="#C4C4C4" d="M0 0h24v24H0z"/></mask><g mask="url(#a)"><path d="M21.53 20.47l-3.66-3.66A8.98 8.98 0 0020 11a9 9 0 10-9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66a.746.746 0 001.06 0 .747.747 0 00.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" 
        fill="#5C6C79"/>
        </g>
        </svg>  
    );
}

export default Search;