const helperFecthApi = ()=>{
    const get = (url,options)=>{
        const abortController = new AbortController();
        const {signal} = abortController;
        const defaultOptions = {
            accept:'application/json',
            signal
        };
        options = {...defaultOptions,...options};
        setTimeout(()=>{
            abortController.abort();
        },3000);
        return fetch(url,options).then(value =>{
            return value.json();
        });
    }
    return get;
}
