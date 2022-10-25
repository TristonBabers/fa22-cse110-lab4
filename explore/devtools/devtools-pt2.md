1. The bug was that the two numbers were being added as strings instead of number values.
2. I fixed the bug by first converting both num1 and num2 into number variables using the Number() function like so:
    result = Number(num1) + Number(num2)