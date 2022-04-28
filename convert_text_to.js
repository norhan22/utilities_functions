////////////////////////////////
// Convert Text to HyperLink
///////////////////////////////
function textToHyperlink (text) {
    text = text.split(' ')
    text = text.map(w => {
        if (w.includes('http')) w = `<a href="${w}" target="_blank">${w}</a>`
        return w
    })
    return text.join(' ')
}