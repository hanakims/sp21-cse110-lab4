## Part 1a
1. values added: 20
2. final result: 20
3. values added: 20
4. error, the variable result is only defined in the first if block so it cannot be accessed from outside that block on line 13
5. error, we cannot change the value of result in line 7 since it is a const
6. error, the variable result is only defined in the first if block so it cannot be accessed from outside that block on line 13

## Part 1b
1. line 12 will print the number 3 becuase var i is defined as a var, which can be accessed from any block of code. We reach line 12 after we finish going through the for loop, and since the length of prices is 3, var i will increment from 0 until it is not less than 3. Therefore, once we leave the for loop and reach line 12, var i = 3.
2. line 13 will print out the number 150 because it prints out the last value that discountedPrice held in the for loop. This happened when we were calculating the discountedPrice for the last element in the prices array, which is 300, and 300*(1-0.5) = 150.
3. line 14 will print out the number 150 because it prints out the last value that finalPrice held in the for loop. FinalPrice is discountedPrice rounded to the cent, but since 150 rounded is still 150, the output is still 150.
4. this function returns an array of all the discounted prices because each time we go through the for loop, we push the newly calculated price to the discounted array which we return.
5. error, the variable i is only accessible in the for loop block it was declared in.
6. error, the variable discountedPrice is only accessible in the for loop block it was declared in.
7. line 14 will print out the number 150 because it prints out the last value that finalPrice held in the for loop. Since we declared discountedPrice in the same block that we are accessing it, we do not get an error.
8. this function returns an array of all the discounted prices rounded to the cent because each time we go through the for loop, we push the newly calculated price to the discounted array which we return. Since we declared the array in the same block that we are accessing it, we do not get an error.
9. error, the variable i is only accessible in the for loop block it was declared in.
10. line 12 will print out the number 3 because the variable length is declared in the same block it is assigned, and we do not change the value since it is a const.
11. this function returns an array all the discounted prices, not rounded to the cent. Since we declared the array in the same block that we are accessing it, we do not get an error.
12. A) student.name 
    
    B) student["Grad Year"] 
    
    C) student.greeting() 
    
    D) student["Favorite Teacher"].name 
    
    E) student.courseLoad[0]
13. A) '32': the integer maps to a string and the two strings concatenate
    
    B) 1: the string is mapped an integer 
    
    C) 3: null is cast to 0 
    
    D) '3null': null is mapped to a string and the two strings concatenate 
    
    E) 4: true is mapped to 1 
    
    F) 0: false and null are mapped to 0s 
    
    G) '3undefined': undefined is mapped to a string and the two strings concatenate
    
    H) NaN: it cannot map undefined to a number, and the '-' operation needs numbers

14. A) true: '2' maps to a number
    
    B) false: the first character of '2' larger than the first character of '12' 
    
    C) true: '2' maps to a number
    
    D) false: the two sides of the comparison have different types
    
    E) false: true is mapped to a 1 
    
    F) true: Boolean(2) becomes true, which is equal to true
15. '==' can cast the values to check if they become equal while '===' checks even for type equivalency without casting.
16. see js file
17. The function returns the array [2, 4, 6] because it creates a new array with the values of what doSomething returns when called on each value of the parameter array. Since doSomething returns double the value of the number it is passed as a parameter, the new array will be filled with each number of the original array doubled.
18. see js file
19. 1
    
    4

    3
    
    2