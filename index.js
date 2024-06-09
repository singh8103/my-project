const countValue =document.querySelector('#counter')
const increament = () => {
let value = parseInt(countValue.innerText);
value=value+1;
countValue.innerText=value; 
};
const decreament = () =>{
let value = parseInt(countValue.innerText);
value=value-1;
countValue.innerText=value;
};