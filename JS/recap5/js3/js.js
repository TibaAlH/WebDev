async function errorHandling(){
    try{
            const response= await fetch("https://reqres.in/api/unknown/23");
            const data= await response.json();
            console.log(data)
    }
    catch (error) {
        console.log(error);
    }
}
errorHandling();