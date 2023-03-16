// Array of words for button 1
var words1 = ["Dark Knight", "Paladin", "Gunbreaker", "Warrior"];

// Array of words for button 2
var words2 = ["White Mage", "Sage", "Scholar", "Astrologian"]

// Array of words for button 3
var words3 = ["Bard", "Black Mage", "Dancer", "Dragoon", "Machinist", "Monk", "Ninja", "Red Mage", "Samurai", "Summoner"];

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
  var randomIndex = Math.floor(Math.random() * words1.length);
  listItem1.textContent = words1[randomIndex];
});

Healer.addEventListener("click", function() {
  var randomIndex = Math.floor(Math.random() * words2.length);
  listItem2.textContent = words2[randomIndex];
});

DPS.addEventListener("click", function() {
  var randomIndex = Math.floor(Math.random() * words3.length);
  listItem3.textContent = words3[randomIndex];
});