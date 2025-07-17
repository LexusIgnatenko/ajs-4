//  test(description, work) 
 //"description" - это описание что будет сделано
 //"work" - какая-то функция, которая должна будет выполнена и где производится непосредственно сама проверка

//  const { calculateTotal } = require("../calculate.js");

//  test("basic test", () => {
//      const result = 4;
//      expect(result).toBe(4);
//  });
 
//  test("calculateTotal sum", () => {
//      const list = [
//          {
//              id: 456,
//              name: "Война и мир",
//              count: 3,
//              price: 400
//          },
//          {
//              id: 77,
//              name: "JavaScript",
//              count: 1,
//              price: 1300  
//          }
//      ];
 
//      const result = calculateTotal(list);
//      expect(result).toBe(2500);
//  });
 
 
 // Jest: import/export
 
 
 import { calculateTotal } from "../calculate.js";
 
 test("basic test", () => {
     const result = 4;
     expect(result).toBe(4);
 });
 
test("calculateTotal sum without discount", () => {
     const list = [
         {
             id: 456,
             name: "Война и мир",
             count: 3,
             price: 400
         },
         {
             id: 77,
             name: "JavaScript",
             count: 1,
             price: 1300
         }
     ];
 
     const result = calculateTotal(list);
     expect(result).toBe(2500);
 });

test("calculateTotal sum with discount", () => {
    const list = [
        {
            id: 456,
            name: "Война и мир",
            count: 3,
            price: 400
        },
        {
            id: 77,
            name: "JavaScript",
            count: 1,
            price: 1300
        }
    ];

    const result = calculateTotal(list, true);
    expect(result).toBe(1250);
});