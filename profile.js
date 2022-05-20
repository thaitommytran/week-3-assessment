let colorBtn = document.getElementById("color");
let placeBtn = document.getElementById("place");
let ritualBtn = document.getElementById("ritual");

const alertColor = (event) => {
    event.preventDefault();

    alert("Thai's favorite color is black, but he also rotates between green, white, and blue, depending on the mood. (~_~)")
}

const alertPlace = (event) => {
    event.preventDefault();

    alert("Thai's favorite place is home, because home is where the heart is. <3")
}

const alertRitual = (event) => {
    event.preventDefault();

    alert("Thai's favorite ritual going home to visit family for the sole reason of bugging his younger brothers, because that's just what older brothers do. ¯\\_(ツ)_/¯")
}

colorBtn.addEventListener("click", alertColor);

placeBtn.addEventListener("click", alertPlace);

ritualBtn.addEventListener("click", alertRitual);