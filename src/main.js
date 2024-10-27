"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncTasks_1 = require("./asyncTasks");
const asyncTasks_2 = require("./asyncTasks");
const asyncTasks_3 = require("./asyncTasks");
const asyncTasks_4 = require("./asyncTasks");
//Задание 1
console.log('Задание 1:');
console.log("Starting sequential tasks...");
(0, asyncTasks_1.executeTasksSequentially)().then(() => {
    console.log("All tasks completed sequentially");
});
console.log('');
//Задание 2
console.log('Задание 2:');
const stringArray = ['hello', 'world', 'typescript'];
console.log("Processing strings in parallel...");
(0, asyncTasks_2.processStringsInParallel)(stringArray).then(() => {
    console.log("All strings processed in parallel");
});
console.log('');
//Задание 3
console.log('Задание 3:');
console.log("Running parallel tasks with error handling...");
(0, asyncTasks_3.runParallelWithErrorHandling)().then(() => {
    console.log("Parallel tasks completed with error handling");
});
console.log('');
//Задание 4
console.log('Задание 4:');
const numberArray = [1000, 2000, 1500];
console.log("Running tasks with dynamic delays...");
(0, asyncTasks_4.runDynamicDelays)(numberArray).then(() => {
    console.log("All dynamic delay tasks completed");
});
