function createPasswordManager() {
    
    let password = "";

    return {
        setPassword: function(newPassword) {
            password = newPassword;
            console.log("Password set successfully!");
        },
        validatePassword: function(input) {
            return input === password;
        },
        resetPassword: function(newPassword) {
            password = newPassword;
            console.log("Password reset successfully!");
        }
    };
}


const manager = createPasswordManager();
manager.setPassword("secret123");

console.log(manager.validatePassword("wrong")); 
console.log(manager.validatePassword("secret123")); 

manager.resetPassword("newpass456");
console.log(manager.validatePassword("newpass456")); 


console.log(manager.password); 
