function validation(values){
    let error={}
    const email_pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(values.name===""){
        error.name="Enter Name"
    }
    else{
        error.name=""
    }
    
    
    if(values.email===""){
        error.email="Enter Email"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email format is invalid"
    }else{
        error.email=""
    }
    
    if(values.password===""){
        error.password="Enter Password"
    }
    else if(!password_pattern.test(values.password)){
        error.password="Password must contain uppercase, lowercase, and number"
    }else{
        error.password=""
    }
    return error;
    }
    export default validation;