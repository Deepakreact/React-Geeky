// In ReactJS,
//  Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain

// As a reference, if the frontend and backend are at two different domains, we need CORS there. 

const response = await fetch("https://api.request.com/api_resource", {
    method: "GET",
    mode: "cors",
    headers: {
        Authorization: `Bearer: ${token}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
});

console.log(response.json());