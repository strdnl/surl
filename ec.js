var endpoint  
  
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
