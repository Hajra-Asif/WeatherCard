var weathers = ["Winter", "Cloudy", "Sunny", "Rainy"];
var userinput = prompt(`Search about your fav weather? \n
Winter\nCloudy\nSunny\nRainy\n`);
var flag = false;


// ------------------- winter ---------------
for (var i = 0; i < weathers.length; i++) {
  if (userinput === "winter") {
    flag = true;
    
document.write(`
     <div class="card mx-auto mt-5 animate__animated animate__fadeInDown" style="width: 28rem; box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;">
        <img src="./assetes/card11.avif" class="card-img-top" alt="...">
        <div class="card-body bg-tertiatry ">
          <h5 class="card-title text-uppercase  display-6">Winter</h5>
          <p class="card-text ">Light rain during the day. Don't forget your umbrella.</p>
          <p class="card-text  text-uppercase fs-1">8°C</p>
          <img src="./assetes/btn.png" alt="" class="img-fluid" style="min-width: 16rem; max-width: 18rem;">
        </div>
      </div>
    `);
    break;
  }


  // ------------------- cloudy ---------------

  if (userinput === "cloudy") {
    flag = true;

    document.write(`
            <div class="card mx-auto mt-5 animate__animated animate__fadeInDown" style="width: 28rem; box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;">
        <img src="./assetes/card2.jpg" class="card-img-top" alt="...">
        <div class="card-body bg-tertiatry ">
          <h5 class="card-title text-uppercase  display-6">cloudy</h5>
          <p class="card-text ">Light rain during the day. Don't forget your umbrella.</p>
          <p class="card-text  text-uppercase fs-1">22°C</p>
          <img src="./assetes/btn.png" alt="" class="img-fluid" style="min-width: 16rem; max-width: 18rem;">
        </div>
      </div>
        `)
    break;
  }

  // ------------------- sunny ---------------

  if (userinput === "sunny") {
    flag = true;
    document.write(`
        <div class="card mx-auto mt-5 animate__animated animate__fadeInDown" style="width: 28rem; box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;">
        <img src="./assetes/card3.jpg" class="card-img-top" alt="...">
        <div class="card-body bg-tertiatry ">
          <h5 class="card-title text-uppercase  display-6">sunny</h5>
          <p class="card-text ">Light rain during the day. Don't forget your umbrella.</p>
          <p class="card-text  text-uppercase fs-1">34°C</p>
          <img src="./assetes/btn.png" alt="" class="img-fluid" style="min-width: 16rem; max-width: 18rem;">
        </div>
      </div>
        `)
    break;
  }
  if (userinput === "rainy") {
    flag = true;

           
  // ------------------- Rainy ---------------


    document.write(`
       <div class="card mx-auto mt-5 animate__animated animate__fadeInDown" style="width: 28rem; box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;">
        <img src="./assetes/card4.avif" class="card-img-top" alt="...">
        <div class="card-body bg-tertiatry ">
          <h5 class="card-title text-uppercase  display-6">rainy</h5>
          <p class="card-text ">Light rain during the day. Don't forget your umbrella.</p>
          <p class="card-text  text-uppercase fs-1">16°C</p>
          <img src="./assetes/btn.png" alt="" class="img-fluid" style="min-width: 16rem; max-width: 18rem;">
        </div>
      </div>
        `)
    break;
}
}

if(flag === false){
  document.write(`
   <center><h1 class="display-6 text-light text-capitalize mt-5">You need to provide valid <br> answer in order to proceed </h1>
    <img src="./assetes/invalid.png" class="w-25 mt-5" alt=""></center>
    `)
}
