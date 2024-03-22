export const checkValidata = (email, password,name) => {
    let isEmailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    let isPasswordValid = /(?=.*[!#$%&?^*@~() "])(?=.{8,})/.test(password)
    let isNameValid = /^[a-zA-Z\s]*$/.test(name.trim());

    if(!isEmailvalid) return "Email Id is not valid"
    if(!isPasswordValid) return "Password is not valid"
    if (name.trim().length === 0) return "Name cannot be empty";


    return null


}