// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
var new_name = name.toUpperCase();
console.log(new_name);

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var array = sentence.split(" ");
for(var i=0; i<array.length; i++){
    var firstChar = array[i].charAt(0);
    array[i] = array[i].replace(firstChar, firstChar.toUpperCase());
}
sentence = array.join(" ");
console.log(sentence);

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
var patten = new RegExp("[^0-9]");
money = money.replace(patten,"");
console.log(money);