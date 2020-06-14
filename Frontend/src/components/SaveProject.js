import axios from 'axios';


    
function SaveProject(loopers, username, projectname) {

        const runningLoopers = loopers;
         
        let userID = username;
        let projectName = projectname;
        let backendUrl = `http://localhost:5000`;

        let getGlobalState = () => {
            let loopers = [];
            for (let looper of Array.from(runningLoopers.values())) {
                loopers.push(looper.getLooper());
            }
            return {
                loopers: loopers
            }
        }
        
        axios

            // Anfang POST
            .post(`${backendUrl}/projects/user/${userID}/project/${projectName}`, getGlobalState())
            .then(res => {
                console.log(`successful: ${res.statusText}`);
                alert("Saved successfully");
            }) 
            // Ende Post

            .catch(err => {
                if (err.response) {
                    console.log(`error: ${err.response.data}`);
                    alert(err.response.data);
                } else {
                    console.log(err.message);
                }
            })

    
   
 }


export default SaveProject;
