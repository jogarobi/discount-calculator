$("#calculate-discounts-btn").addEventListener("click", () => {
   const salaryInputIsEmpty = !$("#salary-input").value;

   if (salaryInputIsEmpty) {
      $("#results").style.visibility = "hidden";
      $("#salary-input-group").classList.add("required-error");
      return;
   }

   $("#results").style.visibility = "visible";

   // Send user to bottom of page to see results
   window.scrollTo(0, document.body.scrollHeight);

   let grossIncome =
      parseFloat($("#salary-input").value) +
      parseFloat(
         $("#bonus-input").value.length > 0 ? $("#bonus-input").value : 0
      ) +
      parseFloat(
         $("#overtime-input").value.length > 0 ? $("#overtime-input").value : 0
      );

   let preDeductionGrossIncome = grossIncome;

   const AFPDeduction = DEDUCTIONS.AFP(grossIncome);
   const SFSDeduction = DEDUCTIONS.SFS(grossIncome);

   // Deduct AFP and SFS before ISR
   grossIncome = grossIncome - (AFPDeduction + SFSDeduction);

   const ISRDeduction = DEDUCTIONS.ISR(grossIncome);
   const netIncome = grossIncome - ISRDeduction;

   // Show discounts and net income with format DOP$0.00
   $("#sfs-value").innerText = formatValue(SFSDeduction);
   $("#afp-value").innerText = formatValue(AFPDeduction);
   $("#isr-value").innerText =
      ISRDeduction === 0 ? "Exempt" : formatValue(ISRDeduction);
   $("#net-income-value").innerText = formatValue(netIncome);

   // Percentage of gross income taken up by net income
   const grossIncomePercentage = (
      (netIncome * 100) /
      preDeductionGrossIncome
   ).toFixed(2);

   $(
      "#gross-percentage-value"
   ).innerText = `${grossIncomePercentage}% of gross income`;
});

// Remove error message when user starts typing in again
$("#salary-input").addEventListener("keyup", () =>
   $("#salary-input-group").classList.remove("required-error")
);
