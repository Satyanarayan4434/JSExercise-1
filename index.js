//1st problem
    // function sum (num1,num2){
    //     let result = num1 + num2;
    //     console.log(`Sum of `+num1+` and `+num2+` is `+result);
    // }
    // sum(2,2);
//2nd problem
    // function strLength(str){
    //     let strLength = str.length;
    //     console.log(strLength);
    // };
    // strLength("Satya");
//3rd problem
    // function mathOparation(num1,num2){
    //     let sum = num1+num2;
    //     console.log(sum);
    //     let difference = num1-num2;
    //     console.log(difference);
    //     let product = num1*num2;
    //     console.log(product);
    //     let quotient = num1/num2;
    //     console.log(quotient);
    // };
    // mathOparation(10,5);
//4th problem
    // function largeNumber(num1,num2){
    //     if(num1>num2){
    //         console.log(`Greater number is `+num1);
    //     }
    //     else if(num1<num2){
    //         console.log(`Greater number is `+num2);
    //     }
    //     else{
    //         console.log("Error!");
    //     }
    // };
    // largeNumber(5,3);
//5th problem
    // function reverseStr(str){
    //     let newString = "";
    //     for(let i = str.length-1; i>=0; i--){
    //         newString = newString + str[i];
    //     }
    //     console.log(newString);
    // }
    // reverseStr("Hello");

            //or

    // function reverseStr(str){
    //     let splitStr = str.split("");
    //     let reverseStr = splitStr.reverse();
    //     let joinStr = reverseStr.join("");
    //     console.log(joinStr);

    // }
    // reverseStr("satya");
//6th problem
    // function checkNumber(num){
    //     if(num>0){
    //         console.log(num+` is a Positive number`);
    //     }
    //     else if(num<0){
    //         console.log(num+`is a Negative Number`);
    //     }
    //     else if(num==0){
    //         console.log(num+` is eual to zero`);
    //     }
    //     else{
    //         console.log(`Input is not a number`);
    //     }
    // };
    // checkNumber(2)
//7th problem
    // function multiplicationTable(num){
    //     for(let i=1; i<=10; i++){
    //         let result = num*i;
    //         console.log(result);
    //     }
    // }
    // multiplicationTable(2);
//8th problem
    // function sumOfNum(num){
    //     let sum = 0;
    //     for( let i = 1; i<=num; i++){
    //         sum += i;
    //     }
    //     console.log(sum);
    // }
    // sumOfNum(100);
//9th problem
    // function vowelCheck(str){
    //     let splitstr = str.split("");
    //  
    //     let sum = 0;
    //     for(let i = 1; i<=splitstr.length; i++){
    //         if(splitstr[i] == 'a' || splitstr[i] == 'e' || splitstr[i] == 'i' || splitstr[i] == 'o' || splitstr[i] == 'u'){
    //            sum++;
    //         }     
    //     };
    //     console.log(sum);
    // };
    // vowelCheck("satyanarayan");

        //or// using includes method
    // function vowelCheck(str){
    //     const vowel = ["a","e","i","o","u"];
    //     let sum=0;
    //     for(let i=1; i<=str.length; i++){
    //         if(vowel.includes(str[i])){
    //             sum++;
    //         }
    //     }
    //     return sum;
    // }
    // console.log(vowelCheck("satyanarayan"));
//10th problem
    // let arr1 = [1,3,5,6,9];
    // let arr2 = [2,1,5,6,3];

    // function arrayShorting(arr1,arr2){
    //     let commonElements =[];
    //     for(let i=0; i<=arr1.length; i++){
    //         if(arr2.includes(arr1[i])){
    //             if(!commonElements.includes(arr1[i])){
    //                 commonElements.push(arr1[i]);
    //             }
    //         }
    //     }
    //     commonElements.sort((a,b)=>a-b);
    //     return commonElements;
    // }
    // console.log(arrayShorting(arr1,arr2));
    