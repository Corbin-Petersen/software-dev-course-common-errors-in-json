// ============================================
// 🔍 CORRECTED JSON File 
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", 
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;

// ============================================
// 👍 SOLUTION NOTES - Correction log
// ============================================

/*
- LINE 50: added comma to end of line - REQUIRED
- LINE 54: put key in quotes - REQUIRED
- LINE 60: changed undefined to null - "undefined" is invalid JSON syntax
- LINE 61: added ".com" to end of email address (though not technically a syntax error) - keeps errors from happening on the front end
- LINE 67: removed trailing comma inside the array - JSON doesn't allow them
- (used codebeautify.org to validate json)
*/
