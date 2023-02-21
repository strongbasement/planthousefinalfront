const url='https://script.google.com/macros/s/AKfycbxzOijidhuWS_srPKEiPEMYVWUCbaaQNWetsRfxr4KeJ1jeKl53xMm3D-leC9g-otnHZQ/exec';
const myform=document.querySelector('#myform');
const myname=document.querySelector('#name');
const mymail=document.querySelector('#email');
const mymessage=document.querySelector('#message');
myform.addEventListener('submit',submitter);

myname.value='prabhu R';
mymail.value='helloprabhuhere@gmail.com';
mymessage.value='hi iam good';
function submitter(e)
{
    
    
    e.preventDefault();
    let messages='';
    if(myname.value.length<5)
    {
        messages+='<br>name should not be less than 5 characters';
        myname.style.borderColor='red';
        setTimeout(() => {
            myname.style.borderColor='black';
            
         }, 5000);

    }
    if(mymail.value.length<5)
    {
        messages+='<br>email should not be less than 5 characters';
        mymail.style.borderColor='red';
        setTimeout(() => {
            mymail.style.borderColor='black';
            
         }, 5000);
    }
    if(messages)
    {
        const div=document.createElement('div')
        div.innerHTML=messages;
        div.style.color='red';
        myform.append(div);
        setTimeout(() => {
           div.remove(); 
           
        }, 5000);
    }
    else
    {
        const  myobj={
            names:myname.value,
            mails:mymail.value,
            message:mymessage.value
        };
        senderpost(myobj);
        console.log('submitted');
    }
}
function senderpost(data)
{
    console.log(data);
    fetch(url,{
        method:'POST',
        body:JSON.stringify(data)
    })
   
    .then(res=>res.json())
    .then(json=>{
        console.log(json); 
    })
}

/*function sender(data)
{
    url1=url+'?id=100';
    fetch(url1)
    .then(res=>res.json())
    .then(json=>{
        console.log(json); 
    })
}*/