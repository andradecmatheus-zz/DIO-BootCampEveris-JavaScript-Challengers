function showResult(r){
  if (r == 'Isento') 
    return console.log(r);
  else 
    return console.log('R$ ' + r);
}


let calc = gets();
calc = parseFloat(calc);

if (calc<=2000){
  result = 'Isento';
} else if (calc<=3000) {
  secondRange = (calc - 2000)*0.08;
  result = parseFloat(segundaFaixa).toFixed(2);
} else if (calc<=4500) {
    aux1 = calc - 2000;
    aux2 = calc - 3000;
    aux2 = aux2>=0 ? aux2 : 0;
    secondRange = ((calc - 2000)-aux2)* 0.08;
    thirdRange = (calc - 3000) * 0.18;
    result = parseFloat(secondRange+thirdRange).toFixed(2);
} else {
    aux1 = calc - 2000;
    aux2 = calc - 3000;
    aux3 = calc - 4500;
    aux2 = aux2>=0 ? aux2 : 0;
    aux3 = aux3>=0 ? aux3 : 0;
    secondRange = ((calc - 2000)-aux2)* 0.08;
    thirdRange = ((calc - 3000)-aux3) * 0.18;
    fourthRange =  (calc-4500) * 0.28;
    result = parseFloat(secondRange+thirdRange+fourthRange).toFixed(2);
}

showResult(result);
