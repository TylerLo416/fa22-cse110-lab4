1. Line 12 output: `3`. The reason for this is because var i is a global variable, and therefore can be accessed. There are 3 variables inside the discounted array being looped through, therefore i increments 3 times and equals 3.
2. Line 13 outputs `150`. Because discounted Price is a global variable, it retains its information after the for loop. The last input into the for loop is the last variable in the array, which is 300. discountedPrice = 300 * (1-.5) = 150.
3. Line 14 outputs `150`. Because finalPrice is a global variable, it retains its information after the for loop. The last input into the for loop is the last variable in discountedPrice, which is 150. discountedPrice = 150 * 100 / 100 = 150.
4. This function returns the variable discounted, which is `[50, 100, 150]`
5. There is an error because the variable i only exists in the for loop. The console.log() calling i at line 12 can't access the i variable because it isn't in the same scope.
6. There is an error because the variable discountedPrice only exists in the for loop. The console.log() calling discountedPrice at line 13 can't access the discountedPrice variable because it isn't in the same scope.
7. Line 14 outputs `150`. Because finalPrice is in global scope, it retains its information after the for loop. The last input into the for loop is the last variable in discountedPrice, which is 150. discountedPrice = 150 * 100 / 100 = 150.
8. This function returns the variable discounted, which is `[50, 100, 150]`
9. There is an error because the for loop attempts to update i which isn't allowed because i is constant and won't allow updates.
10. Line 12 output: `3`. The reason for this is because var length is a global variable, and therefore can be accessed. There are 3 variables inside the discounted array being looped through, therefore calling length of prices is equal to 3.
11. discounted outputs `50,100,150`. Discounted is a constant, but it's a pointer/reference to an array that is mutable. Therefore, all variables get added to discounted and are output.
12. 
 - A. student.name
 - B. student["Grad Year"]
 - C. student.greeting()
 - D. student["Favorite Teacher"].name
 - E. student.courseLoad[0]
13. 
- A. 32 (integers map to their exact string representation)
- B. 1 (subtraction always outputs a nuber in javascript)
- C. 3 (when adding a number to null, the null is treated as number 0)
- D. 3null (when adding a string and a null, null is converted to a string, so '3'+'null'=3null)
- E. 4 (true evaluates to 1 when doing addition)
- F. 0 (false evaluates to 0 in addition and null is treated as 0 during addition)
- G. 3undefined (undefined evaluates to a string when added to a string )
- H. NaN (subtraction always tries to subtract numbers, undefined is not a number)
14. 
- A. true. JS evaluates off unicode, unicode of 2 > 1
- B. false. the unicode of 2 < unicode of 12
C. true. js == does type conversion for you, so it converts '2' to 2 == 2
D. false. === does type checking, string does not equal number
E. false. true evaluates to 1 which does not equal 2
F. true. Any value that is not a value representing false when passed through the Boolean() function evaluates to true. true===true
15. The == operator does type conversion, whereas the === operator does type checking and doesn't accept different types. Also see above.

17. Results is `2,4,6`. For each variable in the parameter array, the function calls the function doSomething, which multiplies that variable by 2. Therefore, each variable in the array gets multiplied by 2 and is output.

19. The output is:
1
4
2
2
This is because all code in a shared scope runs immediately and does not wait for the setTimeout except for the lines that setTimeout effects.