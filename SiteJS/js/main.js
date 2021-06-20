let stream_button = document.getElementById("stream");
let percentage_div = document.getElementById("percentage");
let percentage = 60;
let bar = document.getElementById("loading-bar-2");

function main(){


  stream_button.addEventListener('click',function (){
    if(percentage<100)
      percentage++;
    percentage_div.innerHTML = percentage + "%";

    switch (percentage){
      case(70):
        bar.style.width = "210px";
        break;
      case(80):
        bar.style.width = "240px";
        break;

      case(90):
        bar.style.width = "270px";
        break;

      case(100):
        bar.style.width = "300px";
        bar.style.borderRadius = "2rem";
        break;
    }

  });


}


main();
