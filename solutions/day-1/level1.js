  // Declare an empty array
  let emptyArray = [];
  
  // Declare an array with more than 5 elements
  let arrayWithElements = [1, 2, 3, 4, 5, 6, 7, 8];
  
  // Find the length of your array
  let arrayLength = arrayWithElements.length;
  
  // Get the first item, the middle item, and the last item of the array
  let firstItem = arrayWithElements[0];
  let middleItem = arrayWithElements[Math.floor(arrayLength / 2)];
  let lastItem = arrayWithElements[arrayLength - 1];
  
  // Declare an array called mixedDataTypes
  let mixedDataTypes = [1, "apple", true, { key: "value" }, null, undefined, 'banana'];
  
  // Find the length of the mixedDataTypes array
  let mixedDataTypesLength = mixedDataTypes.length;
  
  // Declare an array variable named itCompanies
  let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
  
  // Print the array using console.log()
  console.log(itCompanies);
  
  // Print the number of companies in the array
  let numberOfCompanies = itCompanies.length;
  console.log("Number of companies:", numberOfCompanies);
  
  // Print the first company, middle, and last company
  let firstCompany = itCompanies[0];
  let middleCompany = itCompanies[Math.floor(numberOfCompanies / 2)];
  let lastCompany = itCompanies[numberOfCompanies - 1];
  console.log("First Company:", firstCompany);
  console.log("Middle Company:", middleCompany);
  console.log("Last Company:", lastCompany);
  
  // Print out each company
  itCompanies.forEach(function (company) {
    console.log(company);
  });
  
  // Change each company name to uppercase one by one and print them out
  itCompanies = itCompanies.map(function (company) {
    return company.toUpperCase();
  });
  console.log(itCompanies);
  
  // Print the array like a sentence
  let companySentence = itCompanies.join(", ") + " are big IT companies.";
  console.log(companySentence);
  
  // Check if a certain company exists in the itCompanies array
  function checkCompany(companyName) {
    if (itCompanies.includes(companyName)) {
      return companyName;
    } else {
      return "Company is not found";
    }
  }
  console.log(checkCompany("Microsoft")); // Example check
  
  // Filter out companies with more than one 'o' without the filter method
  let filteredCompanies = [];
  for (let i = 0; i < itCompanies.length; i++) {
    if ((itCompanies[i].match(/o/gi) || []).length <= 1) {
      filteredCompanies.push(itCompanies[i]);
    }
  }
  console.log(filteredCompanies);
  
  // Sort the array using the sort() method
  itCompanies.sort();
  console.log(itCompanies);
  
  // Reverse the array using the reverse() method
  itCompanies.reverse();
  console.log(itCompanies);
  
  // Slice out the first 3 companies from the array
  let firstThreeCompanies = itCompanies.slice(0, 3);
  console.log(firstThreeCompanies);
  
  // Slice out the last 3 companies from the array
  let lastThreeCompanies = itCompanies.slice(-3);
  console.log(lastThreeCompanies);
  
  // Slice out the middle IT company or companies from the array
  let middleIndex = Math.floor(numberOfCompanies / 2);
  let middleCompanies = itCompanies.slice(middleIndex, middleIndex + (numberOfCompanies % 2));
  console.log(middleCompanies);
  
  // Remove the first IT company from the array
  itCompanies.shift();
  console.log(itCompanies);
  
  // Remove the middle IT company or companies from the array
  itCompanies.splice(middleIndex, numberOfCompanies % 2);
  console.log(itCompanies);
  
  // Remove the last IT company from the array
  itCompanies.pop();
  console.log(itCompanies);
  
  // Remove all IT companies
  itCompanies = [];
  console.log(itCompanies);
  