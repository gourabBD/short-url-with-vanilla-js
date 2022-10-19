document.getElementById('short-btn').addEventListener('click',function(){
    const shortInput=document.getElementById('short').value;
    document.getElementById('short').value=''
    
  
const obj = {};
const urlShortener = (longURL = '') => {
   let shortURL = "short.ly/" + longURL.replace(/[^a-z]/g,'').slice(-4);
   if(!obj[shortURL]){
      obj[shortURL] = longURL;
   };
   return shortURL;
   }
   const urlRedirector = (shortURL = '') => {
   return obj[shortURL];
};
const short = urlShortener(shortInput);
const original = urlRedirector(short);
document.getElementById('short-url').innerText=short;
document.getElementById('short-url').href=original;

})

document.getElementById('btn-long').addEventListener('click',()=>{
    const short=document.getElementById('short-url').innerText;
    const longInput=document.getElementById('long').value;
    document.getElementById('long').value='';
    const shortHref=document.getElementById('short-url').href
    
    if(longInput==short){
        document.getElementById('long-url').innerText=shortHref
        
    }
    else{
        document.getElementById('long-url').innerText='The short URL is not valid'
    }
})

function myFunction(id) {
    // Get the text field
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
  }