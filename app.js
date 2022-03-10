let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];


function domGenerator(first, second, third){
    for(let a=0; a<first.length; a++){
        for(let b=0; b<second.length; b++){
            for(let c=0; c<third.length; c++){
                console.log(first[a] + second[b] + third[c] + ".com");
            }
        }
    }
}

//let domName = console.log(first[a] + second[b] + third[c] + ".com");
//console.log(domGenerator(pronoun, adj, noun));
domGenerator(pronoun, adj, noun);