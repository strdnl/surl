var endpoint = "https://www.jsonstore.io/3f372cbb892d082a509f9484d4ea8f7426b30954d1a6cb2255e0a19402bbf419";

  
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
