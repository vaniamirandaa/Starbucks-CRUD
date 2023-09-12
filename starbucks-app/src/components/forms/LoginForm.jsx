import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserAsync } from '../../store/actions/actionCreator';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line react/prop-types
export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((formState) => ({
      ...formState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(fetchUserAsync(formState));
    navigate('/menus');

    console.log('Email:', formState.email);
    console.log('Password:', formState.password);
  };

  return (
    <>
    <section>

        <div className="form-container bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto mt-8">
          <form className="login-form">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium text-left">
              Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="login-email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium text-left">
              Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="login-password"
                name="password"
                value={formState.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
                className="w-full border rounded-lg px-3 py-2"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
              >
                Login
              </button>
            </div>
          </form>
        </div>
    </section>
    </>
  );
}
