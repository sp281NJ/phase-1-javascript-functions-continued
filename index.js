// code your solution here
function saturdayFun(statment = "roller-skate"){
return(`This Saturday, I want to ${statment}!`) ;
}
saturdayFun();
saturdayFun("bathe my dog");


const mondayWork = function (statement2 = "go to the office" ){
    return(`This Monday, I will ${statement2}.`)
}
mondayWork();
mondayWork("work from home");



function wrapAdjective(adj){
    const result = function reesult (desc = " a hard worker"){
        let emphatic = `You are ${adj}${desc}${adj}!`;
    return emphatic;
 }
    return result;
}
wrapAdjective('*')();
wrapAdjective('||')("a dedicated programmer");




