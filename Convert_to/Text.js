////////////////////////////////
// Convert_to Text to HyperLink
///////////////////////////////
function textToHyperlink (text) {
    text = text.split(' ')
    text = text.map(w => {
        if (w.includes('http')) w = `<a href="${w}" target="_blank">${w}</a>`
        return w
    })
    return text.join(' ')
}
/////////////////////////////
// Text formatter
/////////////////////////////
function text_formatter (v) {
    try {
        if (!v) return ''
        else {
            const firstLetter = v.split('').filter(Boolean)[0]
            return v
                .replace(/[_-]/g, ' ')
                .replace(firstLetter, firstLetter.toUpperCase())
        }
    } catch (err) {
        console.group('text_formatter filter')
        console.log('text', v)
        console.log('err', err)
        console.groupEnd()
    }
}