Coding Test:

Please define a new JavaScript object called ‘Map’ that can be instantiated with ‘new’, using its constructor. The constructor takes one parameter - this list of cities and their latitudes and longitudes:

“Nashville, TN”, 36.17, -86.78
“New York, NY”, 40.71, -74.00
“Atlanta, GA”, 33.75, -84.39
“Denver, CO”, 39.74, -104.98
“Seattle, WA”, 47.61, -122.33
“Los Angeles, CA”, 34.05, -118.24
“Memphis, TN”, 35.15, -90.05

This ‘Map’ object should have the following methods:

1) Return the name of the northernmost, easternmost, southernmost or westernmost city from the list, as requested by the caller.

2) Pass longitude and latitude as parameters, and return the name of the city that is closest to that location.

3) Return a single string containing just the state abbreviations from the list of cities, each separated by a space. The method should eliminate duplicate states. The result string should not have leading or trailing spaces.

# Выполнение

Создан объект Map, объявленный через конструктор new. Принимает один параметр, состоящий из строки с названиями городос, штатом, долготой и широтой. Строка распарсена на отдельный части (город, штат, долгота, широта). Три метода 1) getCountry("northernmost", "easternmost", "southernmost" или "westernmost") 2) getCity(широта, долгота) 3) getStringSingle(). 
[Скриншот работы](https://drive.google.com/open?id=1zXYMa_RreO-uHEn6LbKkOrCjtXQErjef)
