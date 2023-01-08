#problemsDescription

1. Write a function convertor(dollars) for converting US dollars (USD) to bulgarian lev (BGN). 
   Use a fixed exchange rate between the dollar and the pound: 1 USD = 1.79549 BGN.
2. Write a function radiansToDegrees(radians) that reads an angle in radians (a floating-point number) and converts it to degrees.
   Use the formula: degree = radian * 180 / π. The number π in JavaScript programs is available through Math.PI.
3. Write a function depositCalculator(depositedAmount, term, rate) that calculates what amount you will receive at the end of the deposit period at a certain interest rate. 
   Use the following formula: amount = deposited amount + term of the deposit * ((deposited amount * annual interest rate) / 12)
4. There are a certain number of books on John's list of required literature for the summer vacation. Because John prefers to play with friends outside, 
   your task is to help him calculate how many hours a day he has to spend reading the necessary literature.  
   Input Data: Write a function calculate(currentPages, pagesPerHour, days) which 3 arguments:
 	 Number of pages in the current book - an integer in the range [1…1000]
	 Pages he reads in 1 hour – an integer in the range [1…1000]
   The number of days for which he must read the book – an integer in the range [1…1000]
   Output Data: Print on the console the number of hours that John has to spend reading each day.
5. The school year has already started and the head of 10th grade - Annie has to buy a certain number of packets of pens, packets of markers, and a board cleaner. 
  She is a regular customer of a bookstore, so there is a discount for her, which is a percentage of the total amount. Write a function calculate(penPackets, markerPackets, boardCleanerLiters, discountPercentage) that calculates how much money Annie will have to raise to pay the bill, keeping in mind the following price list:
  • Packets of pens - 5.80 USD. 
  • Packets of markers - 7.20 USD. 
  • Board cleaner - 1.20 USD (per liter).
  Input data: The function receives 4 arguments:
  •	Number of pen packets - an integer in the range [0...100]
  •	Number of marker packets - an integer in the range [0...100]
  •	Liters of board cleaner - an integer in the range [0…50]
  •	Discount percentage- an integer in the range [0...100]
  Output data: Print on the console how much money Annie will need to pay her bill.
6. Robert wants to repaint the living room and has hired craftsmen for this purpose. 
   Write a function calculate(nylon, paint, thinner) that calculates the cost of repairs, given the following prices:
   • Protective nylon - 1.50 USD per square meter
   • Paint - 14.50 USD per liter
   • Paint thinner - 5.00 USD per liter
   Just in case, to the necessary materials, Robert wants to add another 10% of the amount of paint and 2 square meters of nylon, and of course 0.40 USD for bags. 
   The amount paid to the craftsmen for 1 hour of work is equal to 30% of the sum of all costs for materials.
   Input data: The function receives 4 arguments:
   Required amount of nylon (in square meters) – an integer in the range [1... 100]
   Required amount of paint (in liters) - an integer in the range [1…100]
   Quantity of paint thinner (in liters) - an integer in the range [1…30]
   Output data: Print on the console how much money Annie will need to pay her bill.
7. A restaurant opens its doors and offers several menus at preferential prices:
   • Chicken menu – 10.35 USD. 
   • Fish menu – 12.40 USD. 
   • Vegetarian menu – 8.15 USD.
   Input data: The function receives 1 argument:
   • Annual basketball practice fee - an integer in the range [0… 9999]
   Output data: Print on the console what costs Jessie will have if she starts playing basketball.
8. Jessie decides she wants to play basketball, but she needs equipment to practice. Write a function calculate(annualFee) that calculates what costs Jessie will have if she starts practicing, knowing how much the basketball practice fee is for one year. Equipment needed:
   • Basketball sneakers - their price is 40% less than the fee for one year
   • Basketball suit - the price is 20% cheaper than the sneakers 
   • Basketball - its price is 1/4 the price of a basketball team 
   • Basketball accessories – their price is 1/5 of the price of the basketball
   Input data: The function receives 1 argument:
   • Annual basketball practice fee - an integer in the range [0… 9999]
   Output data: Print on the console what costs Jessie will have if she starts playing basketball.
9. For his birthday, Leonardo received an aquarium in the shape of a parallelepiped. At first, we read from the console on separate lines its dimensions - length, width, and height in centimeters. We have to calculate how many liters of water the aquarium will hold, knowing that a certain percentage of its capacity is taken up by sand, plants, a heater, and a pump. 
   One liter of water equals one cubic decimeter / 1l=1dm3/. 
   Write a function calculate(length, width, height, percentage) that calculates the liters of water needed to fill the aquarium.
   Input data: The function receives 4 arguments:
   Length in cm – an integer in the range [10 … 500]
	 Width in cm – an integer in the range [10 … 300]
   Height in cm – an integer in the range [10… 200]
   Percentage  – a floating-point in the range [0.000 … 100.000]
   Output data: Print one number on the console: the liters of water the aquarium will collect.











