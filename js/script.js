// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"

let inputBox = document.getElementById("kilometers")
function kilometer() {
  inputBox.setAttribute("placeholder", "Kilometers")
  document.getElementById("units").innerHTML = "Kilometers: "
}
function meter() {
  inputBox.setAttribute("placeholder", "Meters")
  document.getElementById("units").innerHTML = "Meters: "
}

function convertk() {

  let kilometers = document.getElementById("").value;
  
  // Perform calculation using the formula for kilometers to meters
  let meters = kilometers * 1000;
  resultContainer.textContent = "Result: " + kilometers + "km is equal to " + meters + "m.";
  }


function convertm() {

  let meters = document.getElementById("").value;
  // Perform calculation using the formula for meters to feet
  let feet = meters * 3.28084
  resultContainer.textContent = "Result: " + meters + "m is equal to " + feet + "ft.";
  }




