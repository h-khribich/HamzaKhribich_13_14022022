export const apiCall = async (userdata) => {
  let response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  });

  let data = await response.json();
  console.log(data);
};
