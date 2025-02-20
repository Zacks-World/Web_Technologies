---
# JavaScript Project: Utility Functions

This project contains an HTML file (`main.html`) and a JavaScript file (`main.js`) that implement several utility functions for performing common calculations and operations. These functions were developed as part of a tutorial (TD) on the basics of JavaScript, following the guidelines of the École Normale Supérieure de l'Enseignement Technique de Mohammedia.

---

## Context of the Tutorial

### Objectives of the Tutorial
The goal of this tutorial is to help you experiment with the basic constructs of the JavaScript language, including:
- Simple types.
- Variable declarations.
- Control statements.
- Iterations.

These concepts are syntactically very close to those used in the C language.

---

## Functions in `main.js`

### 1. `degreC(TempInput)`
This function converts a given temperature from Fahrenheit to Celsius.

**Objective of the Tutorial:**
- Use the formula `tempC = (5/9) * (tempF - 32)` to convert a temperature.

**Parameters:**
- `TempInput`: The temperature in Fahrenheit (entered by the user via `prompt`).

**Return:**
- A string indicating the equivalent temperature in degrees Celsius.

**Example Code:**
```javascript
function degreC(TempInput) {
    var TempCelsius = (parseFloat(TempInput) - 32) * 5 / 9;
    return "This temperature is equivalent to " + TempCelsius + " degrees Celsius";
}
console.log(degreC(prompt("Enter a temperature: ")));
```

---

### 2. `hjms(Input)`
This function converts a given duration in seconds into days, hours, minutes, and seconds.

**Objective of the Tutorial:**
- Convert a duration in seconds into days, hours, minutes, and seconds.
- Improve the display to avoid showing zero values and use singular forms when necessary.

**Parameters:**
- `Input`: The duration in seconds (entered by the user via `prompt`).

**Return:**
- A string indicating the equivalent duration in days, hours, minutes, and seconds.

**Example Code:**
```javascript
function hjms(Input) {
    let Days = parseInt(Input / (24 * 3600));
    let RestDays = Input % (24 * 3600);

    let hours = parseInt(RestDays / 3600);
    let RestHours = RestDays % 3600;

    let mins = parseInt(RestHours / 60);
    let seconds = RestHours % 60;

    let Chaine = "This duration is equivalent to ";
    if (Days != 0) {
        Chaine += Days + (Days === 1 ? " day " : " days ");
    }
    if (hours != 0) {
        Chaine += hours + (hours === 1 ? " hour " : " hours ");
    }
    if (mins != 0) {
        Chaine += mins + (mins === 1 ? " minute " : " minutes ");
    }
    if (seconds != 0) {
        Chaine += seconds + (seconds === 1 ? " second " : " seconds ");
    }
    return Chaine;
}
console.log(hjms(prompt("Enter a duration in seconds: ")));
```

---

### 3. `troisNombres(N1, N2, N3)`
This function takes three numbers as input and displays them in ascending order.

**Objective of the Tutorial:**
- Sort three numbers in ascending order.

**Parameters:**
- `N1`, `N2`, `N3`: The three numbers to sort (entered by the user via `prompt`).

**Return:**
- Displays the numbers in ascending order in the console.

**Example Code:**
```javascript
function troisNombres(N1, N2, N3) {
    Numbers = new Array(N1, N2, N3);
    Numbers.sort((a, b) => a - b);
    console.log("Numbers in ascending order: " + Numbers);
}
N1 = prompt("Enter the 1st number: ");
N2 = prompt("Enter the 2nd number: ");
N3 = prompt("Enter the 3rd number: ");
troisNombres(N1, N2, N3);
```

---

### 4. `triangle1(taille)` and `triangle2(taille)`
These functions generate triangular patterns using stars (`*`).

**Objective of the Tutorial:**
- Display a triangular pattern using `while` and `for` loops.

**Parameters:**
- `taille`: The size of the pattern (entered by the user via `prompt`).

**Return:**
- Displays the triangular pattern in the console.

**Example Code:**
```javascript
function triangle1(taille) {
    var c = '*';
    while (c.length <= taille) {
        console.log(c);
        c += '*';
    }
}
let taille1 = parseInt(prompt("Enter the size of the triangle1 pattern:"));
triangle1(taille1);

function triangle2(taille) {
    for (let i = 0; i < taille; i++) {
        let espaces = " ".repeat(taille - i - 1);
        let etoiles = "*".repeat(2 * i + 1);
        console.log(espaces + etoiles);
    }
}
let taille = parseInt(prompt("Enter the size of the triangle2 pattern:"));
triangle2(taille);
```

---

### 5. `Premier(N)`
This function checks if a given number is prime.

**Objective of the Tutorial:**
- Test if a number is prime.

**Parameters:**
- `N`: The number to check (entered by the user via `prompt`).

**Return:**
- A string indicating whether the number is prime or not.

**Example Code:**
```javascript
function Premier(N) {
    for (let i = 2; i <= parseInt(N / 2); i++) {
        if (N % i === 0) {
            return N + " is not a prime number, it is divisible by " + i;
        }
    }
    return N + " is a prime number";
}
console.log(Premier(parseInt(prompt("Enter a number: "))));
```

---

### 6. `Fibo1(n)` and `Fibo2(n)`
These functions implement the Fibonacci sequence.

**Objective of the Tutorial:**
- Calculate the `n`-th term of the Fibonacci sequence.
- Find the first term of the sequence greater than a given value.

**Parameters:**
- `n`: The number of terms to calculate or the limit for `Fibo2`.

**Return:**
- `Fibo1`: Displays the `n`-th term of the Fibonacci sequence.
- `Fibo2`: Displays the term of the Fibonacci sequence closest to `n` and its rank.

**Example Code:**
```javascript
function Fibo1(n) {
    U = 0;
    V = 1;
    for (let i = 2; i <= n; i++) {
        V = V + U;
        U = V - U;
    }
    console.log(V);
}
Fibo1(parseInt(prompt("Enter a number for Fibo1: ")));

function Fibo2(n) {
    U = 0;
    V = 1;
    Rang = 1;
    while (V <= n) {
        V = V + U;
        U = V - U;
        Rang += 1;
    }
    console.log(V, Rang);
}
Fibo2(parseInt(prompt("Enter a number for Fibo2: ")));
```

---

### 7. `raca1(A)`
This function calculates the square root of a number using Newton's method.

**Objective of the Tutorial:**
- Calculate an approximate value of the square root of a positive real number.

**Parameters:**
- `A`: The number for which to calculate the square root (entered by the user via `prompt`).

**Return:**
- The square root of the number.

**Example Code:**
```javascript
function raca1(A) {
    if (100 < A || A < 0) {
        return A + " is not between 0 and 100 ";
    }
    U = A / 2;
    while (Math.abs(U ** 2 - A) > 10 ** -5) {
        U = (U + A / U) * 1 / 2;
    }
    return U;
}
console.log(raca1(parseFloat(prompt("Enter a number between 0 and 100: "))));
```

---

## How to Run the Project

1. Open the `main.html` file in a web browser.
2. The functions will be executed in order, and the results will be displayed in the browser's console.
3. You can interact with the functions by entering values via the `prompt` dialogs.

---

## File Structure

- `main.html`: The main HTML file that loads the JavaScript script.
- `main.js`: The JavaScript file containing all the functions.

---

## Author

This project was created by Zakaria El Guazzar.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

### Explanation of Additions:
- **Context of the Tutorial**: A section was added to explain the objectives of the tutorial and the context in which the functions were developed.
- **Objective of the Tutorial for Each Function**: Each function is now accompanied by an explanation of its objective within the tutorial.
- **Execution Examples**: Examples of execution from the tutorial were included to illustrate the expected results.

This `README.md` file is now complete and provides all the necessary information to understand and use the project.
