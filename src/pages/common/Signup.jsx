import {useState} from 'react'

function Signup() {
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })

    const validDateForm = ()=>{
        const errorsCopy = {}
        if(!formData.firstName.trim()){
            errorsCopy.firstName= 'First Name is required'
        }
        if (!formData.lastName.trim()) {
            errorsCopy.lastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
            errorsCopy.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errorsCopy.email = 'Invalid email address';
        }
        if (!formData.password.trim()) {
            errorsCopy.password = 'Password is required';
        } else if (formData.password.length < 6) {
            errorsCopy.password = 'Password must be at least 6 characters';
        }

        if (formData.password !== formData.confirmPassword) {
            errorsCopy.confirmPassword = 'Passwords do not match';
        }
        setErrors(errorsCopy)
        return Object.keys(errorsCopy).length === 0;


    }


    const [errors, setErrors] = useState({})

    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(validDateForm()){
            console.log(formData)
            setFormData({
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                confirmPassword:'',
            })
        }
        

    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-md px-8 py-10"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <div className="mb-6">
          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {formData.firstName && (
            <span className="text-xs text-red-500 mt-2">
              {errors.firstName}
            </span>
          )}
        </div>
        <div className="form-group mb-6">
          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {formData.firstName && (
            <span className="text-xs text-red-500 mt-2">{errors.lastName}</span>
          )}
        </div>
        <div className="form-group mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-xs text-red-500 mt-2">{errors.email}</span>
          )}
        </div>
        <div className="form-group mb-6">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {formData.firstName && (
            <span className="text-xs text-red-500 mt-2">{errors.password}</span>
          )}
        </div>
        <div className="form-group mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {formData.firstName && (
            <span className="text-xs text-red-500 mt-2">
              {errors.confirmPassword}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-70 focus:outline-none "
        >
          Sing Up
        </button>
      </form>
      <button
      className="w-1/2 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-70 focus:outline-none"
       type="submit">Google SignUp</button>
    </div>
  );
}

export default Signup