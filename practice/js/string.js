let str1 = 'kannan';
let str2 = str1.split('').reverse().join('');
// console.log(str2);
// console.log(str1.length);
// console.log(str1.concat(str2));
// console.log(str1.charAt(1));
// console.log(str1.at(0));

// remove all white spaces in a string

let str3 = '    k  a n  an    ';
const len = str3.length;
console.log(len);
// let str4=''
// let count =0;
// for(let i=0; i<len;i++)
// {
//     if(str3.at(i)==' ')
//     {
//         count = count+1;
//     }
//     else {
//         str4 += str3[i];
//     }
// }
// console.log(str4);

str3 = str3.replaceAll(' ','');
console.log(str3);

let str5 = 'www.google.com';
// console.log(str5.includes('google'));
// console.log(str5.startsWith('www'));
// console.log(str5.endsWith('com'));

str5 = str5.replace('www','http')
console.log(str5);
 
// let str = 'hello world'
// let len = str.length;
// str = str.replace(str[0],str[0].toUpperCase());
// console.log(str)
// for(let i=0;i<len;i++)
// {
//    if(str[i] == ' ')
//    {
//      str[i+1] = str[i+1].toUpperCase();
//    }
// }
// console.log(str)
