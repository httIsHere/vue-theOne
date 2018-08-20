let monthWord = (m) => {
    const mWords = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    if(m){
        return mWords[parseInt(m)]
    } else {
        let m = (new Date()).getMonth + 1
        return mWords[parseInt(m)]
    }
}

export default { monthWord }