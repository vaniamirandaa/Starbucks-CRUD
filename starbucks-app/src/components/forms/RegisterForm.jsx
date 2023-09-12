import { useState } from "react";
// import sendRequest from "../../useHandler";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/actions/actionCreator";

export default function RegisterForm() {
  // const { request } = sendRequest();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(registerUser(formData))
    setFormData({
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
  });
  };

  return (
    <>
 <section className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-4 text-center">Register Admins</h2>
            <label htmlFor="username" className="block mb-2 font-medium text-left">
              Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              required
              className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-300"
            />
            <label htmlFor="email" className="block mb-2 font-medium text-left">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
              className="w-full border rounded-lg px-4 py-2 mb-4"
            />
            <label htmlFor="password" className="block mb-2 font-medium text-left">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
              className="w-full border rounded-lg px-4 py-2 mb-4"
            />

          <label htmlFor="phone" className="block mb-2 font-medium text-left">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder="Phone Number"
            onChange={handleInputChange}
            className="w-full border rounded-lg px-4 py-2 mb-4"
          />
          <label htmlFor="address" className="block mb-2 font-medium text-left">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Address"
            className="w-full border rounded-lg px-4 py-2 mb-4"
          ></textarea>
          <button
            type="submit"
            className="w-400 bg-green-900 font-bold text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Register
          </button>
        </form>
      </div>
    </section>
    </>
  );
}
