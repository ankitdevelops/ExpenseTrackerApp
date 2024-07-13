import axios from 'axios';
import {BASE_URL} from '../constant';

export async function loginUser(email, password) {
  const url = `${BASE_URL}/api/v1/account/user/login`;
  let data = JSON.stringify({
    email: email,
    password: password,
  });

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
