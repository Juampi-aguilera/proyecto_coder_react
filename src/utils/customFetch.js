export const customFetch = (time,data)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true){
                resolve(data)
            }else{
                reject(console.log("error"))
            }
        }, time);
    })
}