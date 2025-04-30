1. It will print out 2 since var is the line is in the same function as var i and there's 3 elements inside prices so the index would go up to 2.
2. It will print out 150 since discountedPrice get reassigned everytime the loop runs. The last index is 2 so it will print out the element at index 2 in the prices array which is 300, the discountedPrice calculation would be: 300 * (1 - 0.5) = 150
3. It will print out 150 for the same reason in 2 but this time the program is trying to round the number if it's a decimal but since it turns just to be 150 it didn't change.
4. This function return an array of discounted price([50, 100, 150]) after all the calculations. Discounted was declared as an array "var discounted = [];" and then it was pushed inside a for loop: discounted.push(finalPrice);
5. Error. Because i is a let variable declared inside a code block and line 12 is outside of the code block.
6. Error. outside of scope
7. it will print out 150. Since finalPrice is in the same scope as line 14
8. The function will return an array of discounted price: [50, 100, 150] it won't cause can error since discounted is in the same scope.
9. Error. Outside of scope
10. It will print out 3. Since lenght is in the same scope and didn't get modify you won't get an error.
11. It will return the array: [50, 100, 150]. While a const array cannot be reassigned, its elements can still be modified.
12. .
    1.  a) student.name
    2.  b) student.major['Grad Year']
    3.  c) student.greeting()
    4.  d) student['Favorite Teacher']
    5.  e) student.courseLoad[0]
13. a) '3' + 2 = 32 : + 2 converted to string 
    b) '3' - 2 = 1 : - forces numeric conversion '3' -> 3
    c)  3 + null = 3  null = 0
    d) '3' + null = '3null' : null->"null"
    e)  true + 3 = 4 : true = 1
    f)  false + null = 0 : false = 0 and null = 0
    g) '3' + undefined = '3undefined' : undefined -> "undefined"
    h) '3' - undefined = NaN : undefined -> NaN
14.
    a) '2' > 1 : true ('2' to number so 2 > 1 is true)
    b) '2' < '12' : false (both are strings to based on lexicographic: '2' > '1')
    c) 2 == '2' : true ('2' to numeric )
    d) 2 === '2' : false (two different types)
    e) true == 2 : false (true -> 1 so 1==2 is false)
    f) true === Boolean(2) : true (boolean(2) == true)
15. === checks the equality without type conversion unlike ==
16. in part2-question16.js
17. Result: [2, 4, 6]. The function takes in an array: [1,2,3] and a callback function called doSomething which multiply the parameter "num" with 2. in the modifyArray function, the array 'newArr' get push the element from 'array' that got put into 'doSomething' and turn into a new element. 1*2 = 2, 2*2 = 4, 3*2 = 6 and 'modifyArray' return that new array.
18. in part2-question18.js
19. 1 4 3 2
    
