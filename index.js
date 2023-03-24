(function(){

var spaces = [
"Opponent uses Ash Blossom",
"Opponent uses Maxx C",
"Light Misplays",
"Mirror Match",
"Light Loses",
"Opponent Loses to Time Limit",
"Duel goes to turn 10",
"Opponent Takes Control of Light's Monster",
"Opponent Called By's Ra's Disciple",
"Light gets Kaiju'd",
"Opponent plays Eldlich Control",
"Opponent Summons Zeus",
"Opponent Summons Accesscode Talker",
"Opponent Activates Skill Drain",
"Opponent Summons Nibiru",
"Opponent forgets to read",
"Light gets Decked Out",
"Opponent Summons Destroyer Phoenix Enforcer",
"Branded Fusion gets Negated",
"Aluber gets Negated",
"Opponent uses Effect Veiler",
"Opponent plays Mathmech",
"Opponent plays Spright",
"Normal Summon Aleister",
"MOMMY MILKERS",
"Opponent plays Sky Strikers",
"Opponent activates Super Poly",
"Opponent Sets 1 and passes",
"OTK",
"Opponent plays Swordsoul",
"Light loses to Magic Cylinder",
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
