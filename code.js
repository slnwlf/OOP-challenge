var daisy;
var rose;
var lily;
var chrysanthenum;

$(document).ready(function() {

    console.log("Javascript is active!");

    function Flower(color, petals, smellsPretty) {
        this.color = color;
        this.petals = petals;
        this.stem = "long";
        this.smellsPretty = smellsPretty;
        this.sniff = function() {
            console.log("Sniff Sniff Sniff!");
        };
        // Demonstrates use of arguments with methods
        this.smellsGood = function(answer) {
            if (true) {
                return 'This flower smells amazing!';
            } else {
                return 'What a noxious weed!';
            }
        };
        // Demonstrates use of local object variables
        this.describe = function(answer) {
            alert("This flower is " + this.color + ".");
        };
        /// Demonstrates object to object interaction
        this.compare = function(otherFlower) {
            console.log("HEYYYYYY", this);
            return ("My " + this.color + " flower is much prettier than your " +
                otherFlower.color + " flower :P");
        };
        this.render = function() {
            $('body').append("<p>My pretty flower is " + this.color +
                " and has " + this.petals + " pristine petals.");
        };
        this.crosspollinate = function(otherFlower) {

            var hybridColor = this.color + " " + otherFlower.color;
            var hybridPetal = (this.petals + otherFlower.petals)/2;

            var hybridSmell = function (flower, oFlower) {
                if (flower.smellsPretty === true && oFlower.smellsPretty === true) {
                    return true;
                } else {
                    return false;
                }
            };
       
            var smellResult = hybridSmell(this, otherFlower);

            var hybridFlower = new Flower(hybridColor, hybridPetal, smellResult);
            return hybridFlower; 
    };
}
// end of flower

chrysanthenum = new Flower("pink", 65, false);
rose = new Flower("red", 32, true);
lily = new Flower("yellow", 6, true);
daisy = new Flower("white", 10, false);
    // daisy.render();
});


  //          $('body').append()("My  + this.color + " flower is much prettier than your " +
   //             otherFlower.color + " flower :P");

      //       return ("") (mix of both parents colors);

       //     Petal count = (flower.petal + newFlower.petal)/2);

// Create a method called crossPollinate
// The method will have another Flower object as a parameter.
// Return a new Flower. Make the Flower's color a mix of both 'parent' colors. (i.e. red, yellow = "red-yellow") We don't care about the color wheel.
// Make the new petal count an average between the two parents' petal counts.
// The smellPretty gene is recessive unfortunately. This means that a flower will smell pretty IF and only IF both flowers smell pretty.

