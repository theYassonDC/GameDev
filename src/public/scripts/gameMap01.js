"use strict"
import { controls } from '../configs/cfs.js'
const caja = document.querySelector('.cube');
const view_coordsY = document.getElementById('value-coords_02');
const view_coordsX = document.getElementById('value-coords_01');

// botones
const button_1 = document.querySelector('#btn_izquierda');
const button_2 = document.querySelector('#btn_derecha');
const button_3 = document.querySelector('#btn_arriba');
const button_reset = document.querySelector('#btn_none');
const button_4 = document.querySelector('#btn_abajo');

// Events botones
let speed = controls.speed;
let speedNegative = controls.speedN
const interactions = (btn, speed, dim, coords) =>{
    document.addEventListener("click", (event) => {
        if (event.srcElement === btn){
            caja.style.transform = `rotate${dim}(${controls.speed++}deg)`;
            caja.style.transition = `all 1.2s`;
            let valueY = speed++;
            coords.innerHTML = `<b>${dim}:</b> ${valueY}deg`;
        }
    });
}
const interactionsNegative = (btn, Nspeed, dim, coords) =>{
    document.addEventListener("click", (event) => {
        if(event.srcElement === btn){
            caja.style.transform = `rotate${dim}(-${Nspeed++}deg)`;
            caja.style.transition = `all 2.2s`;
            coords.innerHTML = `<b>${dim}:</b> -${Nspeed}deg`;
        };
    });
}
// Buttons interactions 
interactions(button_1, speed, "Y", view_coordsY);
interactions(button_4, speed, "X", view_coordsX)
interactionsNegative(button_2, speedNegative, "Y", view_coordsY);
interactionsNegative(button_3, speedNegative, "X", view_coordsX);
document.addEventListener("click", (event) => {
    if (event.srcElement === button_reset) {
        caja.style.transform = `rotateY(${controls.speed = 0}deg)`;
        view_coordsY.innerHTML = `<b>Y:</b> 0deg`;
        view_coordsX.innerHTML = `<b>X:</b> 0deg`;
    };
});

// Events keyboards
document.addEventListener("keypress",(event)=>{
    if(event.key === "e"){
        caja.style.marginLeft = `${controls.speed++}px`
        caja.style.transition = `all 0.5s`
    }
    if(event.key === "q"){
        caja.style.marginRight = `${controls.speedN++}px`
        caja.style.transition = `all 0.5s`
    }
    if(event.code === "Space"){
        caja.style.marginTop = `${controls.jump}px`
        setTimeout(()=>{
            caja.style.transition = `all 0.2s`
            caja.style.marginTop = `0px`
        }, 300)
    }
});
document.addEventListener("keypress", (event) => {
    if (event.key === `a`) {
        caja.style.transform = `rotateY(${controls.speed++}deg)`;
        caja.style.transition = `all 1.2s`;
        view_coordsY.innerHTML = `<b>Y:</b> ${controls.speed++}deg`;
    }
    if (event.key === `d`) {
        caja.style.transform = `rotateY(-${controls.speedN++}deg)`;
        caja.style.transition = `all 1.2s`;
        view_coordsY.innerHTML = `<b>Y:</b> -${controls.speedN++}deg`;
    }
    if (event.key === `s`) {
        caja.style.transform = `rotateX(${controls.speed++}deg)`;
        caja.style.transition = `all 1.2s`;
        view_coordsX.innerHTML = `<b>X:</b> ${controls.speed++}deg`;
    }
    if (event.key === `w`) {
        caja.style.transform = `rotateX(-${controls.speedN++}deg)`;
        caja.style.transition = `all 1.2s`;
        view_coordsX.innerHTML = `<b>X:</b> -${controls.speedN++}deg`;
    }
})