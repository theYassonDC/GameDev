const coordsX = document.querySelector('#mouse-coords');
const coordsY = document.querySelector('#mouse-coords2');

document.addEventListener("mousemove", (event)=>{
    coordsX.innerHTML = `<b>X:</b> ${event.screenX}`;
    coordsY.innerHTML = `<b>Y:</b> ${event.screenY}`;
})


