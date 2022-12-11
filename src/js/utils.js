const DEDUCTIONS = {
   AFP: (monthlyIncome) => monthlyIncome * 0.0287,
   SFS: (monthlyIncome) => monthlyIncome * 0.0304,
   ISR: (monthlyIncome) => {
      const annualIncome = monthlyIncome * 12;

      let taxValue = 0;

      if (annualIncome >= 416220.01 && annualIncome <= 624329)
         taxValue = 0.15 * (annualIncome - 416220.01);

      if (annualIncome >= 624329.01 && annualIncome <= 867123)
         taxValue = 31216 + 0.2 * (annualIncome - 624329.01);

      if (annualIncome >= 867123.01)
         taxValue = 79776 + 0.25 * (annualIncome - 867123.01);

      return taxValue / 12;
   },
};

function $(selector) {
   return document.querySelector(selector);
}

function formatValue(value) {
   const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
   });

   return `DOP${formatter.format(value.toFixed(2))}`;
}
