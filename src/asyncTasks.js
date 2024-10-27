"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeTasksSequentially = executeTasksSequentially;
exports.processStringsInParallel = processStringsInParallel;
exports.runParallelWithErrorHandling = runParallelWithErrorHandling;
exports.runDynamicDelays = runDynamicDelays;
//Задание 1
function taskOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task One Completed");
        }, 1000);
    });
}
function taskTwo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task Two Completed");
        }, 2000);
    });
}
function taskThree() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task Three Completed");
        }, 1500);
    });
}
function executeTasksSequentially() {
    return __awaiter(this, void 0, void 0, function* () {
        const result1 = yield taskOne();
        console.log(result1);
        const result2 = yield taskTwo();
        console.log(result2);
        const result3 = yield taskThree();
        console.log(result3);
    });
}
//Задание 2
function processString(str) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(str.toUpperCase());
            }, 1000);
        });
    });
}
function processStringsInParallel(strings) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = strings.map((str) => processString(str));
        const results = yield Promise.all(promises);
        console.log(results);
    });
}
//Задание 3
function errorTask() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((_, reject) => {
            setTimeout(() => {
                reject("Task failed with an error");
            }, 1500);
        });
    });
}
function runParallelWithErrorHandling() {
    return __awaiter(this, void 0, void 0, function* () {
        const promise1 = taskOne();
        const promise2 = taskTwo();
        const promise3 = errorTask();
        try {
            const results = yield Promise.all([promise1, promise2, promise3]);
            console.log(results);
        }
        catch (error) {
            console.error("Error caught:", error);
        }
    });
}
//Задание 4
function delayedPromise(number) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(number);
            }, number);
        });
    });
}
function runDynamicDelays(numbers) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = numbers.map((num) => delayedPromise(num));
        const results = yield Promise.all(promises);
        console.log("Results after dynamic delays:", results);
    });
}
