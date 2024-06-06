import { SignupProps } from "../pages/Signup";
import { httpClient } from "./http";

export const signup = async(userData: SignupProps) => {
    const response = await httpClient.post('/users/joiin', userData);
    return response.data;
}