async function post(){
    const response= await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name: "Tiba",
            job: "student"
        })
    });
    const data= await response.json();

    console.log(data);
}
post();