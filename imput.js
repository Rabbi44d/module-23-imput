// *** একটা এরের ভিতর অনেক এরে বাসাতে পারি ***video--23.5-1***

const student = {
    name: 'Md Rabbi Hossen',
    id: 210,
    movies:[{ name: 'ismat sogkor', year: 2016}, {name: 'himmot', year:2012}],
    address: 'Bangladesh',
    
    act: function(){
        console.log('akting to aliorjun')
    },
    cat:{
        name:{
            bisoy: 'bangla',
            nambar: 123,
            name: 'Rakib',
        }
    }
}

console.log(student.act);
student.act();

// *****************************************

// ** একটা এরের ভিতর অবজেত দিতে পারি****//

const products =[
    {name:'phone', price:120000},
    {name: 'leptop', price: 50000},
]

products[0];
products[1];

// // *************
const Rabbi ={
    '0':20,
    '1':50,
    '3':60,
}
// **************

function add(nam1, nam2){
    console.log(nam1, nam2);
    console.log(arguments[4])
}
add(12, 20, 30, 60, 50, 40)

// ----------------------------------------------------------------------------------------------------;

// একটা বড় এরের ভিতর যদি কোন বিষয় পাওয়া যায় তার হিসাব ***video--23.5-2***

const Rayhan =[
    {id:1, name: 'I phone', price: 200000},
    {id:2, name: 'walton phone', price : 15000},
    {id:2, name: 'vivo phone', price: 25000},
    {id:4, name: '1+ phone', price:50000}

];

function TotalArray(Rayhan, chek){
    const mej =[];
    for(const Rabbi of Rayhan){
        if(Rabbi.name.toLowerCase().includes(chek.toLowerCase())){
            mej.push(Rabbi);
        }
    }
    return mej;
}
const result =TotalArray(Rayhan, 'Phone');
console.log(result)