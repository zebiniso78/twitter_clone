function ReactionComment() {
    return(      
        <svg 
        className="comment"
        width="24" 
        height="24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <mask id="a" 
        style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><path 
        fill="#C4C4C4" d="M0 0h24v24H0z"/></mask><g mask="url(#a)"><path d="M13.95 2.01L9.802 2H9.8C5.426 2 2 5.427 2 9.802c0 4.098 3.186 7.206 7.465 7.37V21a.85.85 0 00.12.403.744.744 0 001.034.229c.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788v.001zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643v-3.187a.75.75 0 00-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176h-.001z" fill="#536471"/></g></svg>
    );
}

export default ReactionComment;