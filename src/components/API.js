import React, { useState, useEffect } from "react";

function API({ setUsers }) {
  useEffect(() => {
    // Fetch data from the API endpoint
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error)); //mentioned error please note
  }, [setUsers]);
}

export default API;
