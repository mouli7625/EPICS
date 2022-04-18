
function quantity(){
  var val=0;
     val=parseInt(document.getElementById("count").value);
     if(val>5 ||val==0){
       x='Not allowed'
      document.getElementById("place").innerHTML=x;
     }else{
      document.getElementById("place").innerHTML=val;
     }
  }

  /// price=parseInt(document.getElementById("price").value);
  ///title=document.getElementById("head");///