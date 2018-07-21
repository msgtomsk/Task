function loadjson(){
    var xmlhttp = new XMLHttpRequest();
    var data;
    xmlhttp.open("GET","/json/content.json",true);
    xmlhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            data = JSON.parse(this.responseText);
           
            var total ='';
            var i;
            var content;

            // first part
        content=' <div class="first_div">\
        <div class="recruitment">\
            <div class = "wipro">\
                <img class="circle" src="images/notification.png">\
                <p class="para">Wipro 2017_Recruitment</p>\
                <div class = "menu_icon">\
                    <img class = "report" src="images/graph-blue.svg" />\
                    <img class = "report menu" src= "images/menu-blue.svg">\
                </div>\
            </div>\
            <div class ="wipro">\
                <img class = "walk" src = "/images/walkin-grey.svg"/>\
                <p class = "walk_in">Walk-in</p>\
                <img class= "walk" src = "/images/num-user.svg"/>\
                <span  class = "walk_in">7000</span>\
                <img class= "walk" src = "/images/group-grey.svg"/>\
                <span  class = "walk_in">08</span>\
            </div>\
            <div class = "candidate_details">\
                <div class="candidates">\
                    <p class="logged_in">Logged-in</p>\
                    <p class="logged_in">Candidates</p>\
                    <p class= "candidates_count">{logged}</p>\
                </div>\
                <div class="candidates">\
                    <p class="logged_in">Completed</p>\
                    <p class="logged_in">Candidates</p>\
                    <p class= "candidates_count">{completed}</p>\
                </div>\
                <div class="candidates">\
                    <p class="logged_in">Live</p>\
                    <p class="logged_in">Groups</p>\
                    <p class= "candidates_count">{groups}</p>\
                </div>\
            </div>\
            <p class = "status" style = "color:{color4}">{status}</p>\
            <div class = "status_bar">\
                <p class="status0 {color}"></p>\
                <p class="status0 {color1}"></p>\
                <p class="status0 {color2}"></p>\
            </div>\
        </div>\
    </div>'

       
            for(i = 0 ; i<data[1].length; i++){
                if(data[1][i].color == "status1"){
                    total += content.replace("{logged}",data[1][i].logged).replace("{status}",data[1][i].status)
                    .replace("{completed}",data[1][i].completed).replace("{groups}",data[1][i].groups)
                    .replace("{color}","status1").replace("{color}","status1").replace("{color}","status1")
                    .replace("{color4}","#13be9e");
                }else if(data[1][i].color == "status2"){
                    total += content.replace("{logged}",data[1][i].logged).replace("{status}",data[1][i].status)
                    .replace("{completed}",data[1][i].completed).replace("{groups}",data[1][i].groups)
                    .replace("{color}","status2").replace("{color1}","status2").replace("{color2}","status4")
                    .replace("{color4}","#ff9f4c");
                }else{
                    total += content.replace("{logged}",data[1][i].logged).replace("{status}",data[1][i].status)
                    .replace("{completed}",data[1][i].completed).replace("{groups}",data[1][i].groups)
                    .replace("{color}","status3").replace("{color1}","status4").replace("{color2}","status4")
                    .replace("{color4}","");
                }
            }
            document.getElementById("middle_div").innerHTML=total;

        // Second part
        var content1;
        var total1="";
        content1 = '  <div class="senior">\
        <div class="innerpadding">\
            <div class = "wipro">\
                <p class="head_para">{title}</p>\
                <div class = "menu_icon1">\
                    <img class = "report" src="images/graph-blue.svg" />\
                    <figure class= "popup" onclick="myFunction(myPopup{ids})"><img class = "report"  src= "images/menu-blue.svg">\
                    <span class="popuptext" id="myPopup{ids}">View Details<br><br>Email Assessment Link<br><br>Preview Assessment</span></figure>\
                </div>\
            </div>\
            <div class ="wipro">\
                <img class = "walk margin_style" src = ""/>\
                <p class = "walk_in walkin_padding"></p>\
            </div>\
            <div class = "candidate_details">\
                    <div class="candidates_appeared">\
                        <p class="appeared_count">Candidates Appeared</p>\
                        <p class="count_date">{count}/300</p>\
                        </div>\
                    <div class="last_active">\
                        <p class="appeared_count">Last Active</p>\
                        <p class="count_date">{date}</p>\
                        </div>\
                </div>\
                <p class="appeared_count">Performance</p>\
                <p class = "status_style" style = "color:{color4}">{status}</p>\
                <div class = "status_bar1">\
                    <span class="status0 {color} status11"></span>\
                    <span class="status0 {color1} status11"></span>\
                    <span class="status0 {color2} status11"></span>\
                </div>\
             </div>\
    </div>';
        
    for(var i = 0 ; i < data[0].length; i++){
        console.log(data[0].length);
        if(data[0][i].color == "status1"){
            total1 += content1.replace("{title}",data[0][i].title).replace("{count}",data[0][i].count).
            replace("{date}",data[0][i].date).replace("{color4}","#13be9e").replace("{ids}",i).replace("{ids}",i)
            .replace("{status}",data[0][i].status).replace("{color}",data[0][i].color).
            replace("{color1}",data[0][i].color).replace("{color2}",data[0][i].color);
        }else if(data[0][i].color == "status2"){
            total1 += content1.replace("{title}",data[0][i].title).replace("{count}",data[0][i].count).
            replace("{date}",data[0][i].date).replace("{color4}","#ff9f4c").replace("{ids}",i).replace("{ids}",i)
            .replace("{status}",data[0][i].status).replace("{color}",data[0][i].color).
            replace("{color1}",data[0][i].color).replace("{color2}","status4");
        }else{
            total1 += content1.replace("{title}",data[0][i].title).replace("{count}",data[0][i].count).
            replace("{date}",data[0][i].date).replace("{color4}","").replace("{ids}",i).replace("{ids}",i)
            .replace("{status}",data[0][i].status).replace("{color}",data[0][i].color).
            replace("{color1}","status4").replace("{color2}","status4");
        }
    }
    document.getElementById("bodycontent").innerHTML = total1;
    console.log(total1);
    }
}
    xmlhttp.send();
}

var count=0;
function removeheight(){ 
    if(count == 0){
        document.getElementById('bodycontent').style.cssText = 'overflow : visible; height:auto';
        document.getElementById('right_arrow1').style.cssText = 'top: -24%;';
        document.getElementById('left_arrow1').style.cssText = 'top: -24%;';
        count = 1;
    }else{
        document.getElementById('bodycontent').style.cssText = 'overflow : hidden; height:27em';
        count = 0;
    }
}

var tog=0;
function myFunction(ids) {
    console.log("inside");
    if(tog != 0 && tog != document.getElementById(ids.id)){
        tog.classList.toggle("show");
    }
    var popup = document.getElementById(ids.id);
    popup.classList.toggle("show");
    if(tog === popup){
        tog = 0
    }else{
        tog = popup;

    }
}

window.onscroll = function() {myHeader()};
var header = document.getElementById("navbar");
var sticky = header.offsetTop;
            
function myHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

