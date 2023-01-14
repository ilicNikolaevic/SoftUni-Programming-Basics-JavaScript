function password(input){
    let userPass = input[0];
    if(userPass === 's3cr3t!P@ssw0rd'){
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}

password(["s3cr3t!P@ssw0r"])