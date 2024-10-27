import { log } from "console";
import exp from "constants";
import { promises } from "fs";
import { resolve } from "path";



//Задание 1
function taskOne(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task One Completed")
        }, 1000)
    })
}

function taskTwo(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task Two Completed")
        }, 2000)
    })
}
function taskThree(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task Three Completed")
        }, 1500)
    })
}

export async function executeTasksSequentially() {
    const result1 = await taskOne();
    console.log(result1);

    const result2 = await taskTwo();
    console.log(result2);

    const result3 = await taskThree();
    console.log(result3);
}

//Задание 2
async function processString(str: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(str.toUpperCase());
        }, 1000);
    });
}

export async function processStringsInParallel(strings: string[]) {
    const promises = strings.map((str) => processString(str));
    const results = await Promise.all(promises);
    console.log(results);
}

//Задание 3
async function errorTask(): Promise<string> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Task failed with an error");
        }, 1500);
    });
}

export async function runParallelWithErrorHandling() {
    const promise1 = taskOne();
    const promise2 = taskTwo();
    const promise3 = errorTask();

    try {
        const results = await Promise.all([promise1, promise2, promise3]);
        console.log(results);
    } catch (error) {
        console.error("Error caught:", error);
    }
}

//Задание 4
async function delayedPromise(number: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(number);
        }, number);
    });
}

export async function runDynamicDelays(numbers: number[]) {
    const promises = numbers.map((num) => delayedPromise(num));
    const results = await Promise.all(promises);
    console.log("Results after dynamic delays:", results);
}
