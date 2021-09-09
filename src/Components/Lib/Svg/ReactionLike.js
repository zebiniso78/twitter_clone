function ReactionLike() {
    return(
        <svg 
        className="like"
        width="24" 
        height="24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <mask id="a" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><path fill="#C4C4C4" d="M0 0h24v24H0z"/></mask><g mask="url(#a)"><path d="M12.05 21.914h-.014C9.453 21.866 2 15.132 2 8.754 2 5.69 4.525 3 7.403 3c2.29 0 3.83 1.58 4.646 2.73C12.863 4.582 14.403 3 16.694 3c2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157h-.011v.002zM7.404 4.501c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965h-.001z" fill="#536471"/></g></svg>
       
    );
}

export default ReactionLike;