import React from 'react';

const amenities = [
  "2 AC Rooms",
  "50 Parking",
];

const otherInformation = [
  "Property type - Banquet Hall, Mini hall",
  "Price type - Cost Per Plate",
  "Decoration - Outside decorators not allowed",
  "Valet parking - No",
  "Allowed cuisine - Both"
];

const AdditionalDetails = () => {
  const amenitiesList = []
  amenities.forEach((item, index) => {
    amenitiesList.push(
      <li key={index} className='flex items-center'>
        <svg
          className="w-6 h-6 text-blue-500 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        {item}
      </li>
    )
  })


  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Amenities</h2>
      <ul className="list-none space-y-2">
        {amenitiesList}
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-4">Other Information</h2>
      <ul className="list-none space-y-2">
        {otherInformation.map((item, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-6 h-6 text-blue-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalDetails;
