$(document).ready(function () {

        var img= $("#slide div");
        var cnt=0;
        var max=img.length-1;
        setInterval(next ,3000);
        
        function next(){
            if(img.is(":animated")) return false;
            $(img[cnt]).animate({"left":"-100%"}).siblings().css({"left":"100%"});
            cnt++;
            if(cnt>max) cnt=0;
            $(img[cnt]).animate({"left":0});
            }

});