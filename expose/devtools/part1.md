1. line 9 prints "values added: 20"
2. line 13 prints "final result: 20"
3. & 4. The code returns the error "ReferenceError: result is not defined".  
    The reason an error is returned is because we declared result using "let" instead of "var", thus the result variable is only defined within if(add), so it is inaccacessable and undefined beyond that scope.
5. & 6. The code returns the error "TypeError: Assignment to constant variable".  
    The reason this error happened is because we tried to redefine result to be the sum of num1 + num2, but result was set as a constant variable, meaning it cannot have its value altered.