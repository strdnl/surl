var endpoint = "https://www.jsonstore.io/3f372cbb892d082a509f9484d4ea8f7426b30954d1a6cb2255e0a19402bbf419";
var storename = [];
var endstore = "";

function bodymov(){
 // looping through your array : 
for (let i=0;i<storename.length;i++) {
     // appending your elements to the body :
    endstore += "," + (storename[i]);
} 
 document.getElementById("output").innerHTML = endstore;
}
                    
function makeep(str){
var ep = digestMessage(str);
 endpoint = "https://www.jsonstore.io/" + ep;
  }

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}

const digestHex = await digestMessage(text);
console.log(digestHex);


function encrypt(url){
var codex = CryptoJS.AES.encrypt(url, window.location.hash.substr(1)).toString();
    return codex;
}

function geturl(){
    var url = document.getElementById("urlinput").value;
    var protocol_ok = url.startsWith("http://") || url.startsWith("https://") || url.startsWith("ftp://") || url.startsWith("data:");
    if(!protocol_ok){
        var newurl = "https://"+url;
       return newurl;
        
        }else{
            return url;
        }
}

function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}



function genhash(){
  window.location.hash = document.getElementById("name").value;
  
    if (window.location.hash == ""){
        window.location.hash = getrandom();
    }
}

function send_request(url) {
    this.url = url;
    
    $.ajax({
     
        'url': endpoint,
        'type': 'POST',
        'data': JSON.stringify(this.url),
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
}

function shorturl(){
    var longurl = geturl();
    genhash();
  makeep(window.location.hash.substr(1));
   var longurl = encrypt(longurl)
    send_request(longurl);
  storename.push(window.location.hash.substr(1),endpoint)
bodymov();
}

var hashh = window.location.hash.substr(1);

if (window.location.hash != "") {
  makeep(hashh);
    $.getJSON(endpoint, function (data) {
        data = data["result"];
        var decrypted = CryptoJS.AES.decrypt(data, window.location.hash.substr(1));

        if (decrypted != null) {
            var deccc = decrypted.toString(CryptoJS.enc.Utf8);
          document.getElementById("downll").href=deccc;
          send_request("COMPLETE");
        //  document.write("<a href=" + deccc + " download>Click</a>");
        //  downloadFile(deccc);
        //  window.location.href = deccc;
          //<a href="/images/myw3schoolsimage.jpg" download>
          
        }

    });
}

    
