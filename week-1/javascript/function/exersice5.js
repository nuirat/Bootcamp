const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name) 
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}
function increaseByNameLength(money, name) {return 1200+money
}
function makeRegal(name) {return "His Royal Highness,"+name}
turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"