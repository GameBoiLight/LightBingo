(function(){

var spaces = [
"Archimedes or Clyde show up",
"Giselle shows up",
"Light throws at the last second",
"Hype train",
"Talk about Food",
"Joe gets mad at Light",
"BLAP BLAP",
"Light talks about a dumb Apple customer",
"Light sings a song, chat warns him about DMCA",
"Talking about food again",
"ftftftftftftft",
"Joe hates other Joes",
"Light has a plan that doesn't work out",
"Light pretends to stop streaming",
"Gifted sub to a funny name",
"Someone gets banned for real",
"Tier 2 Sub",
"Tier 3 Sub",
"Someone Backseats",
"Hypest Train Alert",
"Parrot Party Package",
"Brain Power",
"Raided",
"Quote is added",
"Subs are gifted",
"Light dies in a hilarious way that is 100% his fault",
"Light makes a pass at Zzayphod"
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
