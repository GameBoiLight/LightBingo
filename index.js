(function(){

var spaces = [
"Dark Souls: Invaded",
"SMO: Both Jumprope Moons",
"RCT2: 1000 Guests",
"Balatro: $100 Dollars",
"Peak: Eat Purple Bananas",
"Dark Souls: Kill 5 NPC",
"SMO: Nipple Mario",
"RCT2: Pizza Stall",
"Balatro: Royal Flush",
"Peak: Pass out via Cold",
"Dark Souls: Consume Moss",
"SMO: 3 Golden Turnip Moons",
"RCT2: 5 Different Coasters",
"Balatro: 4 Double Tags",
"Peak: Make it to 2nd Checkpoint without Backpack",
"Dark Souls: Walk from Firelink to Andre, no heals, no damage",
"SMO: 5 Captain Toad Moons",
"RCT2: Hire one of Each Profession",
"Balatro: Hold Foil, Holo & Poly Jokers together",
"Peak: CAPYBARA",
"Dark Souls: Defeat Havel",
"SMO: Make Bullet Bills Kiss",
"RCT2: Spiral Slide",
"Balatro: Beat Boss Blind No Joker",
"Peak: Bee Sting",
];

var gameOver = false;
var blackout = false;


$('td').not("#freeSpace").click(function(){
  if(gameOver === true){
    return;
  }
  $(this).toggleClass('selected');
  if(blackout === false){
    if(
      //horizontal win
      ($('td').eq(0).hasClass('selected') && $('td').eq(1).hasClass('selected') && $('td').eq(2).hasClass('selected') && $('td').eq(3).hasClass('selected') && $('td').eq(4).hasClass('selected')) ||
      ($('td').eq(5).hasClass('selected') && $('td').eq(6).hasClass('selected') && $('td').eq(7).hasClass('selected') && $('td').eq(8).hasClass('selected') && $('td').eq(9).hasClass('selected')) ||
      ($('td').eq(10).hasClass('selected') && $('td').eq(11).hasClass('selected') && $('td').eq(12).hasClass('selected') && $('td').eq(13).hasClass('selected') && $('td').eq(14).hasClass('selected')) ||
      ($('td').eq(15).hasClass('selected') && $('td').eq(16).hasClass('selected') && $('td').eq(17).hasClass('selected') && $('td').eq(18).hasClass('selected') && $('td').eq(19).hasClass('selected')) ||
      ($('td').eq(20).hasClass('selected') && $('td').eq(21).hasClass('selected') && $('td').eq(22).hasClass('selected') && $('td').eq(23).hasClass('selected') && $('td').eq(24).hasClass('selected')) ||
      //vertical win
      ($('td').eq(0).hasClass('selected') && $('td').eq(5).hasClass('selected') && $('td').eq(10).hasClass('selected') && $('td').eq(15).hasClass('selected') && $('td').eq(20).hasClass('selected')) ||
      ($('td').eq(1).hasClass('selected') && $('td').eq(6).hasClass('selected') && $('td').eq(11).hasClass('selected') && $('td').eq(16).hasClass('selected') && $('td').eq(21).hasClass('selected')) ||
      ($('td').eq(2).hasClass('selected') && $('td').eq(7).hasClass('selected') && $('td').eq(12).hasClass('selected') && $('td').eq(17).hasClass('selected') && $('td').eq(22).hasClass('selected')) ||
      ($('td').eq(3).hasClass('selected') && $('td').eq(8).hasClass('selected') && $('td').eq(13).hasClass('selected') && $('td').eq(18).hasClass('selected') && $('td').eq(23).hasClass('selected')) ||
      ($('td').eq(4).hasClass('selected') && $('td').eq(9).hasClass('selected') && $('td').eq(14).hasClass('selected') && $('td').eq(19).hasClass('selected') && $('td').eq(24).hasClass('selected')) ||
      //horizontal win
      ($('td').eq(0).hasClass('selected') && $('td').eq(6).hasClass('selected') && $('td').eq(12).hasClass('selected') && $('td').eq(18).hasClass('selected') && $('td').eq(24).hasClass('selected')) ||
      ($('td').eq(4).hasClass('selected') && $('td').eq(8).hasClass('selected') && $('td').eq(12).hasClass('selected') && $('td').eq(16).hasClass('selected') && $('td').eq(20).hasClass('selected'))

    ){
      $('#winModal').modal('show');
    }
  } else {
    if($('td.selected').length === $('td').length){
      $('#ultimateWinModal').modal('show');
    }
  }
})

$('#clear').click(function(){
  $('td').not("#freeSpace").removeClass('selected');
  gameOver = false;
})

$('.newCard').click(function(){
  $('td').not("#freeSpace").removeClass('selected');
  randomizeSquares();
  gameOver = false;
  blackout = false;
  $('#gameMode').text("5 in a row");
})

$('.gameOver').click(function(){
  gameOver = true;
})

$('#blackoutButton').click(function (){
  blackout = true;
  $('#winModal').modal('toggle');
  $('#gameMode').text("Blackout");
})

function randomizeSquares (){
  var uniqueArray = spaces.slice(0);
  $('td').not("#freeSpace").each(function(){
    var rand = Math.floor(Math.random() * uniqueArray.length);
    $(this).text(uniqueArray[rand]);
    uniqueArray.splice(rand, 1);
  })
}

randomizeSquares();

})();
