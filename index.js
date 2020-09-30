// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
document.write("'" + name.toUpperCase() + "' ");

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...

// var sentence2 = ['good', 'afternoon,','mr', 'mike.'];
var sentence2 = sentence.split(" ");
for (var x = 0; x < sentence2.length; x++){
  sentence2[x] = sentence2[x][0].toUpperCase() + sentence2[x].slice(1);
}
document.write(" | ");
document.write(sentence2.join(" "));

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...

document.write(" | ");
document.write("output: " + money.substring(3,5));
