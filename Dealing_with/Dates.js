///////////////////////
// Time 12 Format
//////////////////////
function changeTime12Formate (time) {
    const hh = time.split(':')[0],
        hh_num = Number(hh) - 12 || 12,
        hh_num_str = `${hh_num}`,
        mm = time.split(':')[1]

    if (parseInt(hh) >= 12) return `${hh_num_str.length < 2 ? `0${hh_num}` : hh_num}:${mm} PM`
    else return `${hh}:${mm} AM`
}