var arr =[
    {
        dp:"../../assets/profile/p1.jpg" ,
        img:"../../assets/profile/p1.jpg"
    },
    {
        dp:"../../assets/profile/p2.jpg" ,
        img:"../../assets/profile/p2.jpg"
    },
    {
        dp:"../../assets/profile/p3.jpg" ,
        img:"../../assets/profile/p3.jpg"
    },
    {
        dp:"../../assets/profile/p4.jpg" ,
        img:"../../assets/profile/p4.jpg"
    },
    {
        dp:"../../assets/profile/p5.jpg" ,
        img:"../../assets/profile/p5.jpg"
    },
]

var clutter="";

var grow = 0;

arr.forEach(function(elem,idx){
console.log(elem);

clutter += `<div id="story">
                    <img id=${idx} src=${elem.dp} alt="profilePic">
                </div>`
});

console.log(clutter);

document.querySelector("#storiyan").innerHTML = clutter;

document.querySelector("#storiyan").addEventListener("click", function(dets){

   console.log("You clicked on a story");

    console.log(dets.target.id);

    console.log(arr[dets.target.id].img);
 
    document.querySelector("#full_scr").style.display = "initial";

    document.querySelector("#full_scr").style.backgroundImage = `url("${arr[dets.target.id].img}")`;

    setTimeout(function(){
        document.querySelector("#full_scr").style.display = "none";
    },3000)

    if(grow<100){
        setInterval(function(){

            document.querySelector("#growth").style.width=`${grow++}%`;
    
            grow++;
    
        },30)
    }else{
        grow = 0;
    }

   
})

