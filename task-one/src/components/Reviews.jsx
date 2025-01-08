import React from "react";
import venueCard from "../assets/venue-card.png";

const Reviews = () => {
  const reviews = [
    {
      VenueName: "Owned By Pavillion",
      profileImage: venueCard,
      joinedDate: "On WeddingBazaar since 2022",
      message:
        "Any special occasion is incomplete without a perfect venue and the joy of finding the perfect venue doubles the celebrations. We understand the market well, and that's why our main idea is our customizable plans which help to fit all types of budgets. You can choose whether you want a pre-booked wedding where everything is organised by you, rent or own the perfect function hall which can host all kinds of functions from daytime functions to grand dinners and round the year celebrations without any hindrance. The opulence and grandeur of our brand name imply that any customised services that we offer are exclusive of price. We Pavilion Banquet Hall from Bhubaneswar have a magnificent and spacious area that is just the perfect choice for accommodating all your guests on your special day. We have a strict code for maintaining cleanliness and hygiene and so you can rely on us for the safety of your guests. You can customize everything from location to theme and detailed logistic support by getting exclusive benefits. If you are planning group bookings, there are many more benefits which our different solutions bring in by significantly minimising costs. So hurry, and book our services through Mandap.com for the best prices and the best services in town.",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="font-bold text-2xl m-4">Add your ratings and reviews</h2>
      <div className="mt-4 mb-4 flex items-center ml-4">
        <div className="flex space-x-1">
          <svg
            class="w-6 h-6 text-yellow-400 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.944a1 1 0 00.95.69h4.139c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.944c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.176 0l-3.357 2.44c-.784.57-1.839-.197-1.539-1.118l1.286-3.944a1 1 0 00-.364-1.118L2.958 9.37c-.783-.57-.381-1.81.588-1.81h4.139a1 1 0 00.95-.69l1.286-3.944z"
            ></path>
          </svg>
          <svg
            class="w-6 h-6 text-yellow-400 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.944a1 1 0 00.95.69h4.139c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.944c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.176 0l-3.357 2.44c-.784.57-1.839-.197-1.539-1.118l1.286-3.944a1 1 0 00-.364-1.118L2.958 9.37c-.783-.57-.381-1.81.588-1.81h4.139a1 1 0 00.95-.69l1.286-3.944z"
            ></path>
          </svg>
          <svg
            class="w-6 h-6 text-yellow-400 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.944a1 1 0 00.95.69h4.139c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.944c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.176 0l-3.357 2.44c-.784.57-1.839-.197-1.539-1.118l1.286-3.944a1 1 0 00-.364-1.118L2.958 9.37c-.783-.57-.381-1.81.588-1.81h4.139a1 1 0 00.95-.69l1.286-3.944z"
            ></path>
          </svg>
          <svg
            class="w-6 h-6 text-yellow-400 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.944a1 1 0 00.95.69h4.139c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.944c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.176 0l-3.357 2.44c-.784.57-1.839-.197-1.539-1.118l1.286-3.944a1 1 0 00-.364-1.118L2.958 9.37c-.783-.57-.381-1.81.588-1.81h4.139a1 1 0 00.95-.69l1.286-3.944z"
            ></path>
          </svg>
          <svg
            class="w-6 h-6 text-yellow-400 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.944a1 1 0 00.95.69h4.139c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.944c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.176 0l-3.357 2.44c-.784.57-1.839-.197-1.539-1.118l1.286-3.944a1 1 0 00-.364-1.118L2.958 9.37c-.783-.57-.381-1.81.588-1.81h4.139a1 1 0 00.95-.69l1.286-3.944z"
            ></path>
          </svg>
        </div>
      </div>
      <hr></hr>
      <div className="my-8" >
        <h2 className="font-bold text-2xl m-4">About Venue</h2>
        <div className="mt-4 mb-4 ml-4 flex items-center">
          <div className="flex space-x-1">
            {reviews.map((review, index) => (
              <div key={index} className="flex items-start space-x-4 mb-4 ">
                <img
                  src={review.profileImage}
                  alt="profile"
                  className="w-11 h-11 rounded-full border"
                />
                <div>
                  <div className="font-bold">{review.VenueName}</div>
                  <div className="text-gray-500 text-sm">
                    {review.joinedDate}
                  </div>
                  <div className="mt-2 mr-64">{review.message}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
