angular.module("testApp")
    .filter("capitalize", function() {
        return function(item) {
            var separators = [' ', '-'];
            var splitName = item.split(new RegExp(separators.join('|')));
            var itemFinal = "";
            for (var ii = 0; ii < splitName.length; ii++) {
                var itemLowerCase = splitName[ii].substring(1).toLowerCase();
                var itemFirstLetterUpper = splitName[ii].charAt(0).toUpperCase();
                itemFinal += itemFirstLetterUpper + itemLowerCase + " ";
            }
            return itemFinal;
        };
    })
    .filter("ellipse", function(){
      return function(item, bool, value){
        if(item.length > value && bool === true){
          item = item.substring(0, value) + "...";
        }
        return item;
      }
    });
