// Array of words for button 1
var tank_names = ["Dark Knight", "Paladin", "Gunbreaker", "Warrior"];

// Array of words for button 2
var healer_name = ["White Mage", "Sage", "Scholar", "Astrologian"]

// Array of words for button 3
var dps_names = ["Bard", "Black Mage", "Dancer", "Dragoon", "Machinist", "Monk", "Ninja", "Red Mage", "Samurai", "Summoner"];

// Select the button elements
var Tank = document.getElementById("Tank");
var Healer = document.getElementById("Healer");
var DPS = document.getElementById("DPS");

// Select the list items
var listItem1 = document.getElementsByTagName("li")[0];
var listItem2 = document.getElementsByTagName("li")[1];
var listItem3 = document.getElementsByTagName("li")[2];

// Add event listeners to the buttons
Tank.addEventListener("click", function() {
  var randomIndex = Math.floor(Math.random() * tank_names.length);
  listItem1.textContent = tank_names[randomIndex];
});

Healer.addEventListener("click", function() {
  var randomIndex = Math.floor(Math.random() * healer_name.length);
  listItem2.textContent = healer_name[randomIndex];
});

DPS.addEventListener("click", function() {
  var randomIndex = Math.floor(Math.random() * dps_names.length);
  listItem3.textContent = dps_names[randomIndex];
});