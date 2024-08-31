import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <form onSubmit={submitHandler} className="bg-white shadow-lg p-8 rounded-md w-96">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Puru"
          value={formData.firstName}
          onChange={changeHandler}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mt-4">
          Last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="0222"
          value={formData.lastName}
          onChange={changeHandler}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="puru1428@duck.com"
          value={formData.email}
          onChange={changeHandler}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mt-4">
          Country
        </label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mt-4">
          Street Address
        </label>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="10/5"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mt-4">
          City
        </label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          value={formData.city}
          onChange={changeHandler}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mt-4">
          State / Province
        </label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Bihar"
          value={formData.state}
          onChange={changeHandler}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mt-4">
          Postal Code
        </label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="022222"
          value={formData.postalCode}
          onChange={changeHandler}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />

        <fieldset className="mt-6">
          <legend className="text-base font-medium text-gray-900">By Email</legend>

          <div className="mt-4 space-y-4">
            <div className="flex items-start">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                checked={formData.comments}
                onChange={changeHandler}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <div className="ml-3 text-sm">
                <label htmlFor="comments" className="font-medium text-gray-700">
                  Comments
                </label>
                <p className="text-gray-500">Get notified when someone posts a comment on a posting.</p>
              </div>
            </div>

            <div className="flex items-start">
              <input
                id="candidates"
                name="candidates"
                type="checkbox"
                checked={formData.candidates}
                onChange={changeHandler}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <div className="ml-3 text-sm">
                <label htmlFor="candidates" className="font-medium text-gray-700">
                  Candidates
                </label>
                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div className="flex items-start">
              <input
                id="offers"
                name="offers"
                type="checkbox"
                checked={formData.offers}
                onChange={changeHandler}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <div className="ml-3 text-sm">
                <label htmlFor="offers" className="font-medium text-gray-700">
                  Offers
                </label>
                <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="mt-6">
          <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
          <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>

          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="pushEverything"
                name="pushNotifications"
                value="Everything"
                onChange={changeHandler}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label htmlFor="pushEverything" className="ml-3 block text-sm font-medium text-gray-700">
                Everything
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="pushEmail"
                name="pushNotifications"
                value="Same as email"
                onChange={changeHandler}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label htmlFor="pushEmail" className="ml-3 block text-sm font-medium text-gray-700">
                Same as email
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="pushNothing"
                name="pushNotifications"
                value="No Push Notifications"
                onChange={changeHandler}
                className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <label htmlFor="pushNothing" className="ml-3 block text-sm font-medium text-gray-700">
                No Push Notifications
              </label>
            </div>
          </div>
        </fieldset>

        <button className="mt-6 w-full bg-indigo-600 text-white font-bold rounded py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
