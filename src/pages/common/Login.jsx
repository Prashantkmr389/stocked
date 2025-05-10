import { useState } from 'react';
import { Text } from '../../components/reusables/AllTexts';
function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let isValid = true;
    const errorsCopy = { ...errors };

    if (!formData.username) {
      errorsCopy.username = "Please enter your phone number or email.";
      isValid = false;
    } else {
      // Add validation for email format or phone number format (e.g., regular expressions)
      errorsCopy.username = "";
    }

    if (!formData.password) {
      errorsCopy.password = "Please enter your password.";
      isValid = false;
    } else {
      // Add validation for password strength (optional)
      errorsCopy.password = "";
    }

    setErrors(errorsCopy);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      // Implement logic to handle successful login (e.g., API call)
      setFormData({ username: "", password: "" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className= "w-full max-w-sm bg-white rounded-lg shadow-md p-8"
      >
        <Text type = "h3" className={"text-center"} >Hello
        </Text>
        <div className="form-group mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Phone or Email:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your phone number or email"
            required
            aria-label="Username or email input"
            className="px-3 py-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm w-full block sm:text-sm"
          />
          {errors.username && (
            <span className="error-message text-red-500 text-sm">
              {errors.username}
            </span>
          )}
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            required
            aria-label="Password input"
            className="px-3 py-4 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm w-full block sm:text-sm"
          />
          {errors.password && (
            <span className="error-message text-red-500 text-sm">
              {errors.password}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="loginBtn w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
        >
          Login
        </button>
      </form>
      <button
        type="submit"
        className="googleSignBtn mt-4 w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
      >
        Google Sign in
      </button>
    </div>
  );
}

export default Login;
