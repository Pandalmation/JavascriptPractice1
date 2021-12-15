var donateblood= (donor, receiver, result) => {                 
    if (donor == "A+") {                                
        if (receiver == "AB+" || receiver == "A+"){     
            return result = true
        } else {
            return result = false;
        }
    } else if (donor == "A-"){
        if (receiver == "AB+" || receiver == "AB-" || receiver == "A+" || receiver == "A-"){
            return result = true;
        } else {
            return result = false;
        }
    } else if (donor == "B+"){
        if (receiver == "AB+" || receiver == "B+"){
            return result = true;
        } else {
            return result = false;
        }
    } else if (donor == "B-"){
        if (receiver == "AB+" || receiver == "AB-" || receiver == "B+" || receiver == "B-"){
            return result = true;
        } else {
            return result = false;
        }
    } else if (donor == "AB+"){
        if (receiver == "AB+"){
            return result = true;
        } else {
            return result = false;
        }
    } else if (donor == "AB-"){
        if (receiver == "AB+" || receiver == "AB-"){
            return result = true;
        } else {
            return result = false;
        }
    } else if (donor == "O+"){
        if (receiver == "A+" || receiver == "B+" || receiver == "AB+" || receiver == "O+"){
            return result = true;
        } else {
            return result = false;
        }
    } else if (donor == "O-"){
        if (receiver == "A+" || receiver == "A-" || receiver == "B+" || receiver == "B-" || receiver == "AB+" || receiver == "AB-" || receiver == "O+" || receiver == "O-"){
            return result = true;
        } else {
            return result = false;
        }
    }
}

console.log(donateblood("O+", "A+"));
console.log(donateblood("A-", "B-"));
console.log(donateblood("A-", "AB+"));
