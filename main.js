fetch(`https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true`)
.then(res=>res.json( ))
.then((data)=>{console.log(data)})

 