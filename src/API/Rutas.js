import axios from 'axios'
export const getRutas=()=>{
   axios.get('')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });


}