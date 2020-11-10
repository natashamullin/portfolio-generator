const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);



const printProfileData = proflieDataArr => {
    for (let i = 0; i < proflieDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('===============');

    profileDataArr.forEach(profileItem => console.log(profileItem));
};



