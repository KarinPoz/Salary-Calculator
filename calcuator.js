/*

total cost                              TOTAL          total
social tax                              33%            social
unemployment insurance (employer)       0.8%           employer
gross salary                            GROSS          gross
funded pension II                       2%             pension
Unemployment insurance (employee)       1.6%           employee
Income tax                              20%            income
net salary/wage                         NET            net

*/

// first  mistake was here - JS was working in console but not visible in Results Table at all.
// SOLUtION: i had used .value to define value of "total"(Gross in Table), but after using .innerText it started working

function calculate() {
var gross = document.getElementById("amount").value;
console.log('gross', document.getElementById("total"));

var total = document.getElementById("total");
total.innerText = gross;

var employer = document.getElementById("employer");
employer.innerText = gross * 0.8/100;

var social = document.getElementById("social");
social.innerText = gross * 33/100;

// second  mistake was here - added numbers in a row "33081000" and not calculations "1338" . SOLUtION: i used strings so needed to add + in front 
var total1 = document.getElementById("total1");
total1.innerText = +total.innerText + +social.innerText + +employer.innerText;

var pension = document.getElementById("pension");
pension.innerText = gross * 2/100;

var employee = document.getElementById("employee");
employee.innerText = gross * 1.6/100;

var income = document.getElementById("income");
income.innerText = +total1.innerText * 14.41/100;

var net = document.getElementById("net");
net.innerText = gross - +pension.innerText - +employee.innerText - +income.innerText;

var total2 = document.getElementById("total2");
total2.innerText = +total1.innerText * 12;
}