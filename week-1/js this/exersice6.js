const coffeeShop = {
    beans: 40,
    money:100, //1 money =3 beans
    buyBeans: function(numBeans){
      if(this.money*3>numBeans)
      {
        this.beans+=numBeans
        this.money=this.money-(numBeans/3)
      }
    },
    buyDrink: function(drinkType){
    this.money=this.money+this.drinkRequirements[drinkType]["price"]
    },
    drinkRequirements: {
      latte: {beanRequirement: 10, price: 5},
      americano: {beanRequirement: 10, price: 5},
      doubleShot: {beanRequirement: 10, price: 5},
      frenchPress: {beanRequirement: 10, price: 5},
    },
  
    makeDrink: function (drinkType) {
        if (drinkType in this.drinkRequirements)
        {
           
            if(this.beans>= this.drinkRequirements[drinkType]['beanRequirement'])
            {
                this.beans-=this.drinkRequirements[drinkType]['beanRequirement']
                this.buyDrink(drinkType)
            }
            else alert('Sorry, we’re all out of beans!')
        }
        else alert('Sorry, we don’t make')
      // TODO: Finish this method
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
  