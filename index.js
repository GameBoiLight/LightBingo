(function(){

var spaces = [
"Gravy Glimpse",
"Biscuit Glimpse",
"Roasted about podcast",
"Twitch Prime Commercial",
"Incest is mentioned",
"Zzay is late",
"ZZAYOOM",
"Feather Cyberbullies Zzay",
"Scarebits used",
"Donation occurs",
"Zzay gets raided",
"Someone buys merch",
"Momphod makes an appearance",
"Cumsock is mentioned",
"Followed by a troll account",
"Someone gets banned for real",
"Tier 2 Sub",
"Tier 3 Sub",
"Someone Backseats",
"Follow Goal Met",
"Sub Goal Met",
"Accidental Mute",
"Partner in Chat",
"Quote is added",
"Gifted subs",
"Zzay dies from Fall Damage",
"Light color change"
];

var winner = false;


$('td').not("#freeSpace").click(function(){
  if(winner === true){
    return;
  }
  $(this).toggleClass('selected');
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
    alert("Bingo Mother fucker");
    winner = true;
  }
})

$('#clear').click(function(){
  $('td').not("#freeSpace").removeClass('selected');
  winner = false;
})

$('#newCard').click(function(){
  $('td').not("#freeSpace").removeClass('selected');
  randomizeSquares();
  winner = false;
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
