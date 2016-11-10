angular.module("carsApp")
    .filter("unique", function() {
        return function(item, value) {
            var itemArray = [];
            var anne = [];
            for (var ii = 0; ii < item.length; ii++) {
                if (!anne.includes(item[ii].value)) {
                    itemArray.push(item[ii]);
                    anne.push(item[ii].value);
                }
            }
            console.log(itemArray);
            return itemArray;
        }
    })
