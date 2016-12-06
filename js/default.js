$(function(){
  
})
//============================================= DEFAULT CONFIGURATION ===========================

function up_note(message){
  $("#up_note").html(message).fadeIn('slow').delay(3000).fadeOut('slow');
}


function close_modal(){
  $("#close_modal").click();
}

function pre_blocker(action){

  switch(action){
    case "on":
      $(".pre_blocker").show();
    break;
    
    case "off":
      $(".pre_blocker").hide();
    break;
  }

}

function addStylePath(path){        
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = getBaseURL()+path;
    link.media = 'all';
    document.getElementsByTagName('head')[0].appendChild(link); 
}

function addScriptPath(path){

    var scr=document.createElement('script');
    scr.type = 'text/javascript';
    scr.src = getBaseURL()+path;
    document.getElementsByTagName('head')[0].appendChild(scr);  
}

function getBaseURL() {
    var origin = window.location.origin+'/';
    var pathArray = window.location.pathname.split( '/' );
    var base_url = '';
    base_url = origin+pathArray[1];

    return base_url+'/';
}

function getURIstring(){
    var pathArray = window.location.pathname.split( '/' ),
        uri = '';
    pathArray.splice(0,2);
    if( pathArray.length > 0 ){
        uri = pathArray.join('/');
    }
    return uri;
}

function getFolder( pathname ){
    switch( pathname ){
        case 'base': id = 1; break;
        case 'sub': id = 3; break;
        default: id = 2; break;
    }

    // check if error
    var error = ( (id == 2 && pathname != 'main') && pathname == '' ) ? true:false;
    if( error )
        return false;
    // end check error

    var origin = window.location.origin+'/';
    var pathArray = window.location.pathname.split( '/' );
    
    return pathArray[id];
}



function decimalonly(e, decimal) {
var key;
var keychar;

if (window.event) {
   key = window.event.keyCode;
}
else if (e) {
   key = e.which;
}
else {
   return true;
}
keychar = String.fromCharCode(key);

if ((key==null) || (key==0) || (key==8) ||  (key==9) || (key==13) || (key==27) ) {
   return true;
}
else if ((("0123456789").indexOf(keychar) > -1)) {
   return true;
}
else if (decimal && (keychar == ".")) { 
  return true;
}
else
   return false;
}






function letra(e, decimal) {

var key;
var keychar;

if (window.event) {
   key = window.event.keyCode;
}
else if (e) {
   key = e.which;
}
else {
   return true;
}
keychar = String.fromCharCode(key);

if ((key==null) || (key==0) || (key==8) ||  (key==9) || (key==13) || (key==27) ) {
   return true;
}
else if ((("ABCDEFGHIJKLMNÑOPQRSTUVWXYZ abcdefghijklmnñopqrstuvwxyz").indexOf(keychar) > -1)) {
   return true;
}
else if (decimal && (keychar == ".")) { 
  return true;
}
else
   return false;
}




 


