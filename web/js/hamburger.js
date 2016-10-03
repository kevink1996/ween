/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var mainmenu = document.querySelector('#menuu');
var hamburger = document.querySelector('#menu');

hamburger.addEventListener('click', function (e) {
  mainmenu.classList.toggle('open');
  e.stopPropagation();
  e.preventDefault();
});