import jwt_decode from 'jwt-decode'
import { client } from '../client';

export const responseGoogle = async (response, navigate) => {
  /* var base64Url = response.credential.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join('')); */

  const decoded = jwt_decode(response.credential)
  
  const { name, picture, sub } = decoded
  localStorage.setItem("user", JSON.stringify(decoded))
  const user = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture,
  };
  client.createIfNotExists(user)
  .then(()=>{
    navigate("/", {replace:true})
  })
};