/* 
    random js 
*/

function selectChange(){
    //var dd = document.getElementById("eq");
    //var rr = $("select[name='eq']").selected.val();
    
    
    //var e = document.getElementById("eq");
    //var strUser = e.options[e.selectedIndex].value;
    var e = document.getElementById("selectop");
    var strUser = e.options[e.selectedIndex].value;
    
    document.getElementById("showTest").innerHTML = "Show：" + strUser;
}