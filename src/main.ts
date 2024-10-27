import { executeTasksSequentially } from "./asyncTasks";
import { processStringsInParallel } from "./asyncTasks";
import { runParallelWithErrorHandling } from "./asyncTasks";
import { runDynamicDelays } from "./asyncTasks";


//Задание 1
console.log('Задание 1:');
console.log("Starting sequential tasks...");
executeTasksSequentially().then(() => {
    console.log("All tasks completed sequentially");
});
console.log('');


//Задание 2
console.log('Задание 2:');
const stringArray = ['hello', 'world', 'typescript'];

console.log("Processing strings in parallel...");
processStringsInParallel(stringArray).then(() => {
    console.log("All strings processed in parallel");
    
})
console.log('');

//Задание 3
console.log('Задание 3:');
console.log("Running parallel tasks with error handling...");
runParallelWithErrorHandling().then(() => {
    console.log("Parallel tasks completed with error handling");
});
console.log('');

//Задание 4
console.log('Задание 4:');
const numberArray = [1000, 2000, 1500];

console.log("Running tasks with dynamic delays...");
runDynamicDelays(numberArray).then(() => {
    console.log("All dynamic delay tasks completed");
});
