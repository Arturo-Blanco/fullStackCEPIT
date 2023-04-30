export const getPhotos = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=7');
        const data = await response.json();
        return data
    } catch(error) {
        console.log("Error:", error)
    }
}