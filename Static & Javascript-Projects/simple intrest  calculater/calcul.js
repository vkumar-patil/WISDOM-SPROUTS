function calculateIntrest() {
  ShowResult = document.getElementById("ShowResult");
  // yearWiseIntarest= document.getElementById('yearWiseIntarest');
  principalAmount = Number(document.getElementById("principalAmount").value);
  AnnualIntrestRate = Number(
    document.getElementById("AnnualIntrestRate").value
  );
  LoanTermYears = Number(document.getElementById("LoanTermYears").value);
  const TotalsimpleIntrstRate =
    principalAmount * AnnualIntrestRate * LoanTermYears;
  ShowResult.innerHTML = TotalsimpleIntrstRate;
  // for(i=1;i<=LoanTermYears;i++){
  //     SimpleIntrestPerYear=principalAmount*AnnualIntrestRate*i/100;
  //     list=document.createElement('li');
  //     list.innerHTML=`${i} year Intrest is ${SimpleIntrestPerYear}`;
  //     yearWiseIntarest.appendChild(list);
  //}
}
