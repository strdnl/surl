var endpoint = "https://www.jsonstore.io/3f372cbb892d082a509f9484d4ea8f7426b30954d1a6cb2255e0a19402bbf419";
                    
function makeep(str){
  str += "VAUltKvulatrelesdfr1";
var hex = '';s=str.length-1;
    for(var i=0;hex.length<63;i++) {t=i%s;
        hex += ''+str.charCodeAt(t).toString(16);
    }
 endpoint = "https://www.jsonstore.io/" + hex;
  
}


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
   var longurl = encrypt(longurl)
    send_request(longurl);
}

var hashh = window.location.hash.substr(1)

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

    
