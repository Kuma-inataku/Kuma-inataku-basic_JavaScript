/**
 * 問題：
 * クロージャーの問題で作成した以下のcalcFactoryを即時関数
 * で書き直してみてください。
 */
let calc = (function(val){
    return {
        plus: function(target) {
            const newVal = val + target;
            console.log(`${val} + ${target} = ${newVal}`);
            val = newVal;
        },
        minus: function(target) {
            const newVal = val - target;
            console.log(`${val} - ${target} = ${newVal}`);
            val = newVal;
        },
        multiply: function(target) {
            const newVal = val * target;
            console.log(`${val} x ${target} = ${newVal}`);
            val = newVal;
        },
        divide: function(target) {
            const newVal = val / target;
            console.log(`${val} / ${target} = ${newVal}`);
            val = newVal;
        },
    }
})(10);

calc.plus(5);
calc.minus(5);
calc.multiply(5);
calc.divide(5);

// function calcFactory(val) {
//     return {
//         plus: function(target) {
//             const newVal = val + target;
//             console.log(`${val} + ${target} = ${newVal}`);
//             val = newVal;
//         },
//         minus: function(target) {
//             const newVal = val - target;
//             console.log(`${val} - ${target} = ${newVal}`);
//             val = newVal;
//         },
//         multiply: function(target) {
//             const newVal = val * target;
//             console.log(`${val} x ${target} = ${newVal}`);
//             val = newVal;
//         },
//         divide: function(target) {
//             const newVal = val / target;
//             console.log(`${val} / ${target} = ${newVal}`);
//             val = newVal;
//         },
//     }
// }
// const calc = calcFactory(10);
// calc.plus(5);
// calc.minus(3);
// calc.multiply(3);
// calc.divide(2);