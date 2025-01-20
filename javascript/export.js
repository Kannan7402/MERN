//  named export 
// Exporting individual values
export const myVariable = 'Hello, World!';
export function myFunction() {
    console.log('This is a function');
}
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
// multiply with default export
const multiply = (a, b) => a * b;
export default multiply;
