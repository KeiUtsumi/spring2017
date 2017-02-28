console.log("はい");

var main = document.getElementsByClassName("main");
main[0].insertAdjacentHTML('afterbegin', '<p>Learning JavaScript</p>');

var Cat = function(name) {
    this.name = name
    /*this.run = function() {//いちいち生成させるのが良くないので
        console.log(this.name + "が走る");
    };*/
};
Cat.prototype.run = function() {//ここで定義
    console.log(this.name + "が走る");
};

var tama = new Cat('タマ');
tama.run();
console.log(tama.name);

