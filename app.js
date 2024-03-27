let count = 0;
let value = document.querySelector("#value");
let btn = document.querySelectorAll(".btn");
// console.log(btn);
btn.forEach(function (item) {
  //    console.log(item);
  item.addEventListener("click", function (e) {
    // console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if(count > 0){
        value.style.color = "green";
    }
    if(count < 0){
        value.style.color = "red";
    }
    if(count === 0){
        value.style.color = '#222';
    }
    value.textContent = count;
  });
});
