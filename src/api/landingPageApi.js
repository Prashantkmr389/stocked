import { axiosInstance } from "../config/apiconfig";

// Register user @post

const registerUser = async (data) => {
    try {
        // console.log(data)
        const res = await axiosInstance.post('/register', data)
        console.log(res)
        return res.data
    } catch (err) {
        console.log(err)

        if (err?.response?.status) {
            return { status: err.response.status, message: '', err }
        }
        return { message: 'Something went wrong!', err }
    }
}

export  {registerUser}