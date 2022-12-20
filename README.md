# 💰 Salary Discount Calculator

# 📄 Brief

Create a web page that does basic discount calculations for a given salary in the Dominican Republic. The calculations need to consider AFP, health insurance (SFS), and taxes. Do some research on the Internet or any other source to know the different percentages used.

## 1. Applicable deductions

- Health insurance (3.04%)
- Pension fund manager (2.87%)

**Fixed percentages, easy to calculate***

[Source →](https://www.toptrabajos.com/blog/do/descuentos-de-nomina-sfs-afp-isr/)

## 2. Taxes

- Income tax or ISR (depends on salary)

**A bit more tricky, had to figure out how to calculate it***

After doing a bit of research, found out that the rates for 2022 are as follows:

| Annual scale | Rate |
| --- | --- |
| ≤ DOP$416,220.00 | Spared |
| From DOP$416,220.01 to DOP$624,329.00  | 15% of (salary - DOP$416,220.01) |
| From DOP$624,329.01 to DOP$867,123.00 | DOP$31,216.00 + 20% of (salary - DOP$624,329.01) |
| ≥ DOP$867,123.01  | DOP$79,776.00 + 25% of (salary - DOP$867,123.01) |

[Source →](https://dgii.gov.do/cicloContribuyente/obligacionesTributarias/principalesImpuestos/Paginas/impuestoSobreRenta.aspx)

## 3. Approach

Since it is a basic calculator, a simple form in HTML & CSS will be more than enough for the task at hand. The deductions will be computed using vanilla JavaScript.

## 4. Wireframes

### Low-fidelity

![lowfi-wireframe.jpg](https://butiblee.sirv.com/Images/lowfi-wireframe.jpg)

### High-fidelity

![Hi-fi wireframe.jpg](https://butiblee.sirv.com/Images/Hi-fi_wireframe.jpg)

I did not include wireframes for mobile devices since there aren’t notable differences other than the change to vertical flow.*
