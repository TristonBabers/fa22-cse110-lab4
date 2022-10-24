1. Line 12 prints 3, because the length of the prices array is given in the function call [100, 200, 300] on line 19 has 3 elements in it, thus the loop variable i runs 3 times.
2. Line 13 prints 150, because the function multiplies the prices by the amount discounted, which is 50% in this case, and since the last price to be discounted is 300, the discountedPrice is 300/2 which equals 150.
3. Line 14 prints 150, which is the finalPrice. This is because the finalPrice is the same as the discountedPrice, except rounded to a number with only 3 significant figures, which happens to still be 150.
4. The function returns the array [50, 100, 150], which is the array of all the original prices [100, 200, 300], but reduced by the discount of 0.5.
5. The function returns the error "ReferenceError: i is not defined", since i is declared using let instead of var, it is undefined beyond the scope of the for loop.
6. The function returns the error "ReferenceError: discountedPrice is not defined", because discountedPrice was declared using "let" within the for loop block.
7. Line 14 prints 150, because finalPrice is declared outside of the for loop.
8. The function returns the same array [50, 100, 150], because the discounted variable is declared within the main function block and then returned.
9. The function returns the error "ReferenceError: i is not defined", since i is declared using let instead of var, it is undefined beyond the scope of the for loop.
10. Line 12 returns a the value 3, as that is the length of the price array.
11. The function returns the same array [50, 100, 150].
12. A. student.name
    B. student["Grad Year"]
    C. student.greeting();
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. A. 32
    B. 1
    C. 3
    D. 3null
    E. 4
    F. 0
    G. 3undefined
    H. NaN
14. A. true
    B. false
    C. true
    D. false
    E. false
    F. true
15. The == operator operates under the usual javascript rules where every variable can be converted, so '2' == 2. Whilst, the === operator is a strict comparison like in Java and C, so if the type you are comparing is '2' === 2, it will be false because they are different types.
16. The function output: 21 45 5 2.
17. The function will return the array [2,4,6], I walked through this function and looked at the fact that a new array was created using each of the old array values, but first passing them through the callback function which multiplies them by 2, so I know that it doubles the original array. I also built it and checked the return, which helps.
19. The function output: 1 4 3 2.