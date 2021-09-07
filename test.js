<div>
<h1 className='heading' ref={elHeading}>
 Heading meding
</h1>

<button
 onClick={() => {
  elHeading.current.classList.add('heading--active');
 }}>
 Click
</button>

<input
 ref={elInput}
 type='text'
 onChange={() => {
   if(elInput.current.value === 'hack') {
     elInput.current.classList.add('bg-red');
   }
   else if(elInput.current.value === 'done') {
     elInput.current.disabled = true;
   }

 else {
   elInput.current.classList.remove('bg-red');
   elInput.current.disabled = false;
 }
  console.log(elInput.current.value.trim());
 }}
/>
</div>