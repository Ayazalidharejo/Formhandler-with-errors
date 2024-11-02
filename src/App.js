import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  useState } from 'react';


function App() {
const [FirstName, setFirstName] =useState ('')
const [SecondName, setSecondName] =useState ('')
const [Email, setEmail] =useState ('')
const [password, setpassword] =useState ('')
const [conformpassword, setconformpassword] =useState ('')




const [FirstNameerror, setFirstNameerror]=useState(false)
const [SecondNameerror, setSecondNameerror]=useState(false)
const [EmailError, setEmailError]=useState(false)
const [passwordError, setpasswordError]=useState(false)
const [conformpasswordError, setconformpasswordError]=useState(false)
const [machpassword,setMachpassword]=useState (false)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(FirstName , Email ,password ,conformpassword, SecondName);

    

if (FirstName === "") {
  setFirstNameerror (true)
}
if (SecondName === "") {
  setSecondNameerror (true)
}
if (Email === "") {
  setEmailError (true)
}
if (password === "") {
  setpasswordError (true)
}
if (conformpassword === "") {
  setconformpasswordError (true)
}
if (password !== conformpassword) {
  setMachpassword(false);
  alert('Passwords do not match');
} else {
  setMachpassword(true);
  alert('Passwords match');
}

  };

 
//   useEffect(() => {
//     if (FirstName !== "") {
//      setFirstNameerror (false)
//  } 
//     if (SecondName !== "") {
//       setSecondNameerror (false)
//  } 
//     if (Email !== "") {
//       setEmailError (false)
//  } 
   


//    }, [FirstName]);
   
       
  return (
   
     <form onSubmit={handleSubmit} className='container d-flex justify-content-center flex-column w-25 bg-body-secondary mt-5 py-5'>


<input value={FirstName} onChange={(e)=> setFirstName (e.target.value)}  className='py-2' type='text' placeholder="First Name" />
{FirstNameerror && <p className='text-danger'>
  FirstName is requied</p>}
 <br/>
<input value={SecondName} onChange={(e)=> setSecondName (e.target.value)} className='my-2 py-2' type='text'placeholder='Swnond Name' />
{SecondNameerror && <p className='text-danger'>
  SecondName is requied</p>}
<br/>
<input value={Email}  onChange={(e)=> setEmail (e.target.value)}  className='py-2' type='email' placeholder=" Email" />
{EmailError &&<p className='text-danger'>
  Email is requied</p>}
<br/>
<input value={password} onChange={(e)=> setpassword (e.target.value)} className='my-2 py-2' type='password' placeholder="password" />
{passwordError && <p className='text-danger'>
  Password is requied</p>}

  { machpassword && <span className='text-danger'> password in incorrect</span>}
 <br/>
<input value={conformpassword} onChange={(e)=> setconformpassword (e.target.value)} className='py-2' type='password' placeholder="Conform password" /> 
{ conformpasswordError &&<p className='text-danger'>
  conformpassword is requied</p>}
  {machpassword && <span className='text-danger'> password in incorrect</span>}
<br/>
    
  <button  className='bg-primary text-white border-0 py-2'>  Register </button>
  


     </form> 
      
   
  );
}

export default App;
