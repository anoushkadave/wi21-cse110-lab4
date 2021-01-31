# DevTools - Debugging
- Screenshot of list of breakpoints including the breakpoint at the initialization of the local variable result in calculateSum() is in part3-breakpoints.png
- Screenshot of initial watch list including num1, num2, and result is in part3-watchlist-initial.png
- Screenshot of watch list after program is run is in part3-watchlist-updated.png
- JavaScript is reading num1 and num2 in as strings with document.getElementById in lines 3 and 4. When num1 and num2 are passed into calculateSum(), JavaScript sums them together. Since num1 and num2 are strings, JavaScript concatenates them. Thus, result is a string with num1 concatenated with num2. This is not a number or the sum. To fix this, num1 and num2 must be converted to numbers as shown in part3-debug-fix.png. Then, result will have the appropriate number value which represents the sum of num1 and num2 in their number form.

# DevTools - Network Tab
1. citylots.json
2. part2.js:2
3. 11.7 MB
4. 1.16 s
5. Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData