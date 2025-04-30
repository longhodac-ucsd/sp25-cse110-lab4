1. 20
2. 20
3. You should not use var because it has a function scope which leads to unexpected behavior. It doesn't matter where you declare your var in the function, it would just move to the top when you call the function.
4. 20
5. Error. Becaue let is only visible inside a code block and the second call to the result variable is outside of the block the variable is declared. 
6. error. Because the program tried to modify a const variable
7. error. Const variables are code block scope

