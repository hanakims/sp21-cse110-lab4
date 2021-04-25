1. The bug was that it was storing num1 and num2 as strings instead of numbers, so when the '+' operation was used, it performed concatenation instead of addition.
2. I would fix it by replacing line 9 with `let result = parseInt(num1) + parseInt(num2)`
3. citylots.json
4. part2.js
5. citylots.json is 11.7 MB
6. 2.05 sec
7. Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36
8. Apache
9. Tue, 26 Jan 2021 22:14:13 GMT
10. application/json
11. fetchData