const { test, expect } = require('@playwright/test');
const axios = require('axios');

test.describe('API Test', () => {
  test('Validate API acceptance criteria for Carbon credits', async () => {
    const url = 'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false';
    const response = await axios.get(url);
    expect(response.status).toBe(200);

    const data = response.data;
    expect(data.Name).toBe("Carbon credits");
    expect(data.CanRelist).toBe(true);

    const galleryPromo = data.Promotions.find(p => p.Name === "Gallery");
    expect(galleryPromo).toBeDefined();
    expect(galleryPromo.Description).toContain("Good position in category");
  });
});
