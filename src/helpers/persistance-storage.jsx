export const setItem = (key, data) => {
    try {
        localStorage.setItem(key,data)
    } catch (error) {
        console.log("error seving data");
    }
}

export const getItem = (key) => {
    try {
        localStorage.getItem(key)
    } catch (error) {
        console.log('error getting data');
    }
}

export const removeItem = (key) => {
    try {
        localStorage.removeItem(key)
    } catch (error) {
        console.log('error remove data');
    }
}