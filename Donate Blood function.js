donateblood= (donor, receiver) => {                 
    if (donor == "A+") {                                
        if (receiver == "AB+" || receiver == "A+"){     
            console.log("These two blood types are compatible.");
        } else {
            console.log("You cannot donate to this blood type.");
        }
    } else if (donor == "A-"){
        if (receiver == "AB+" || receiver == "AB-" || receiver == "A+" || receiver == "A-"){
            console.log("These two blood types are compatible.");
        } else {
            console.log("You cannot donate to this blood type.");
        }
    } else if (donor == "B+"){
        if (receiver == "AB+" || receiver == "B+"){
            console.log("These two blood types are compatible.");
        } else {
            console.log("You cannot donate to this blood type.");
        }
    } else if (donor == "B-"){
        if (receiver == "AB+" || receiver == "AB-" || receiver == "B+" || receiver == "B-"){
            console.log("These two blood types are compatible.");
        } else {
            console.log("You cannot donate to this blood type.");
        }
    } else if (donor == "AB+"){
        if (receiver == "AB+"){
            console.log("These two blood types are compatible.");
        } else {
            console.log("You cannot donate to this blood type.");
        }
    } else if (donor == "AB-"){
        if (receiver == "AB+" || receiver == "AB-"){
            console.log("These two blood types are compatible.");
        } else {
            console.log("You cannot donate to this blood type.");
        }
    } else if (donor == "O+"){
        if (receiver == "A+" || receiver == "B+" || receiver == "AB+" || receiver == "O+"){
            console.log("These two blood types are compatible.");
        } else {
            console.log("You cannot donate to this blood type.");
        }
    } else if (donor == "O-"){
        if (receiver == "A+" || receiver == "A-" || receiver == "B+" || receiver == "B-" || receiver == "AB+" || receiver == "AB-" || receiver == "O+" || receiver == "O-"){
            console.log("These two blood types are compatible.");
        } else {
            console.log("You cannot donate to this blood type.");
        }
    } else {
        console.log("Blood Type entered is invalid.")
    }
}
        
donateblood("O+", "A+") 
donateblood("A-", "B-") 
donateblood("A-", "AB+")