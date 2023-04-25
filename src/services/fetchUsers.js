import axios from 'axios';

const BASE_URL = 'https://6422a6a277e7062b3e1ede9f.mockapi.io'

export const fetchUsers = async () => {
    const response = await axios.get(`${BASE_URL}/user/`)
    return await response.data;
}

export const updateUser = async (userId, updatedFollowers) => {
    const response = await axios.patch(`${BASE_URL}/user/${userId}`, { followers: updatedFollowers });
    return await response.data;
}
// export const updateUser = async (userId, updatedFollowers) => {
//     const response = await axios({
//         method: 'patch',
//         url: `${BASE_URL}/user/${userId}`,
//         data: {
//           followers: updatedFollowers,
//         }
//       })
//     return await response.data;
// }
