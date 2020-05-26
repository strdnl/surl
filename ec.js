var endpoint = "https://jsonbox.io/box_c99dcc786bfaf0399069";

  
  function send_request(url) {
    this.url = url;
    
    $.ajax({
     
        'url': endpoint,
        'type': 'POST',
        'data': "hello",
        'dataType': 'json',
        'contentType': 'application/json; charset=utf-8'
})
}
