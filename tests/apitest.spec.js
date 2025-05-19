// Import the test runner and assertion functions from Playwright
const { test, expect } = require('@playwright/test');
// Import Axios for making HTTP requests
const axios = require('axios');

// Grouping our test inside a test suite called "API Test"
test.describe('API Test', () => {

  // Individual test case to validate the API response against the given criteria
  test('Validate API acceptance criteria for Carbon credits', async () => {

    // Define the URL to be tested
    const url = 'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false';

     // Send a GET request to the API endpoint
    const response = await axios.get(url);
     // Assert that the HTTP status code is 200 (OK)
    expect(response.status).toBe(200);

// Extract the actual data from the API response
    const data = response.data;

    // Check that the Name field in the response is exactly "Carbon credits"
    expect(data.Name).toBe("Carbon credits");

      // Check that the CanRelist flag is true
    expect(data.CanRelist).toBe(true);

    // Find the promotion object where Name equals "Gallery"
    const galleryPromo = data.Promotions.find(p => p.Name === "Gallery");

    // Ensure that the "Gallery" promotion exists
    expect(galleryPromo).toBeDefined();

    // Ensure that its Description contains the expected text
    expect(galleryPromo.Description).toContain("Good position in category");
  });
});
