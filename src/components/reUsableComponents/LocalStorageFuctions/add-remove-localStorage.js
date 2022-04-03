
// generating step 1 and step 2 of LocalStorage-Handling 
const getSpecificlocalStorageAsObj = (storageName) => {
    let localStorageName = localStorage.getItem(storageName);
    let localStorageAsObj = {};

    if (localStorageName) {
        localStorageAsObj = JSON.parse(localStorageName);
    } else {
        localStorageAsObj = {};
    }
    return localStorageAsObj;
}

const setLocalStorageEmpty = (storageName,localStorageAsObj) => {
    
    let stringifiedLocalStorageAsObj = JSON.stringify(localStorageAsObj)
    localStorage.setItem(storageName, stringifiedLocalStorageAsObj)
    
}







// let dataBase = {};
const addtoDataBase = (item,storageName) => {

    //adding items to local storage---------------

    // calling step 1 and step 2 of LocalStorage-Handling 
    let localStorageAsObj = getSpecificlocalStorageAsObj(storageName);


    // aplying step 3 of LocalStorage-Handling     
    if (item in localStorageAsObj) {
        localStorageAsObj[item] += 1;
    } else {
        localStorageAsObj[item] = 1;
    }


    // aplying step 4 of LocalStorage-Handling
    let stringifiedLocalStorageAsObj = JSON.stringify(localStorageAsObj)
    localStorage.setItem(storageName, stringifiedLocalStorageAsObj)



    // adding items to database object------------

    // dataBase = localStorageAsObj;

};

const removeFromDataBase1By1 = (item,storageName) => {

    //adding items to local storage---------------

    // calling step 1 and step 2 of LocalStorage-Handling 
    let localStorageAsObj = getSpecificlocalStorageAsObj(storageName);


    // aplying step 3 of LocalStorage-Handling     
    if (item in localStorageAsObj) {
        localStorageAsObj[item] -= 1;
        if (localStorageAsObj[item] === 0) {
            delete localStorageAsObj[item]
        }
    }


    // aplying step 4 of LocalStorage-Handling
    let stringifiedLocalStorageAsObj = JSON.stringify(localStorageAsObj)
    localStorage.setItem(storageName, stringifiedLocalStorageAsObj)



    // adding items to database object------------

    // dataBase = localStorageAsObj;

};

const deleteStorageFromDataBase = (item,storageName) => {

    //adding items to local storage---------------

    // calling step 1 and step 2 of LocalStorage-Handling 
    let localStorageAsObj = getSpecificlocalStorageAsObj(storageName);


    // aplying step 3 of LocalStorage-Handling     
    if (item in localStorageAsObj) {
        delete localStorageAsObj[item]
    }


    // aplying step 4 of LocalStorage-Handling
    let stringifiedLocalStorageAsObj = JSON.stringify(localStorageAsObj)
    localStorage.setItem(storageName, stringifiedLocalStorageAsObj)



    // adding items to database object------------

    // dataBase = localStorageAsObj;

};

export {
    getSpecificlocalStorageAsObj,
    setLocalStorageEmpty,
    addtoDataBase,
    removeFromDataBase1By1,
    deleteStorageFromDataBase
}