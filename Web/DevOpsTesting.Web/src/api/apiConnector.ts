import axios from "axios";
import { UserDto } from "../models/userDto";
import { API_BASE_URL } from "../config";

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const apiConnector = {


  getUsers: async (): Promise<UserDto[]> => {
    try {

        const response = await fetch(API_BASE_URL + "/User")
        const users = response.json();
    //     const response: AxiosResponse<GetAllUsersResponse> = await axios.get(
    //         API_BASE_URL + "/User");

    //         const users = response.data.userDtos.map((user) => ({ ...user, }));
    // //console.log(usersResponse);
    return users;
    } catch (error) {
        console.log("error fetching users", error)
        throw error
        
    }
    
  },

  createUser: async (user: UserDto): Promise<void> => {
    await axios.post<number>(API_BASE_URL + "/User", user);
  },

  editUser: async (user: UserDto): Promise<void> => {
    await axios.put<number>(API_BASE_URL +`/user/`, user);
    
    // await fetch(API_BASE_URL + "/User", { 
    //     method: "PUT",
    //     body: JSON.stringify({user}),
    //     headers: {
    //         "Content-Type": "application/json",
    //       }
    // });
    console.log("Edit user call complete")
  },

  deleteUser: async (userID: number): Promise<void> => {
    await axios.delete<number>(API_BASE_URL + "/User/" + userID);
  },

  getUserById: async (userID: string): Promise<UserDto | undefined> => {
    const response = await fetch(API_BASE_URL + "/User/" + userID)
    return response.json();
  },
};

export default apiConnector;
