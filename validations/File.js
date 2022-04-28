//////////////////////////////////////////////
/**
 * File Validation Main functions
 * Check File Validation
 * @param file =>  e.target.file[0]
 * @param {Number} maxSizeInMB => EX 2
 * @param {Array} acceptFileEx  => EX ['xlsx', 'csv', 'xls', 'png']
 * @param {Array} acceptFileTypes ['application/pdf', 'image/']
 */
////////////////////////////////////////////////
function   fileValidation (file, maxSizeInMB, acceptFileEx, acceptFileTypes) {
    const
        // Size In MB
        // maxSizeInByes = maxSizeInMB * (1048576),

        // File Data
        fileName = file.name,
        fileSize = (file.size / 1024 / 1024),
        fileType = file.type,
        fileEx = fileName.split('.')[fileName.split('.').length - 1],

        // Check Validation
        is_fileType_valid = acceptFileTypes.some(el => fileType.includes(el)),
        is_fileEx_valid = acceptFileEx.some(el => fileEx.includes(el)),
        is_fileSize_valid = (fileSize < maxSizeInMB)


    return new Promise((resolve, reject) => {
        if (is_fileEx_valid && is_fileType_valid && is_fileSize_valid) resolve(true)
        else {
            const
                getDocExText = [... new Set(acceptFileEx)].join(' , ').toUpperCase().replace('.', ''),
                err = {
                    message: `${$t('basic.accept_only')} ${getDocExText} ${$t('basic.and')} (${$t('basic.max_size')} ${maxSizeInMB}MB)`
                }
            console.log('getDocExText', getDocExText)
            errMsg(err)
            reject(false)
        }
    })
}
/////////////////////////////////////
// Check Text && Image file 2MB Size
////////////////////////////////////
function  checkTextImage2MBFileValid (file) {
    const
        acceptFileEx = ['xlsx', 'csv', 'xls', 'png', 'jpg', 'jpeg', 'pdf', 'doc', 'docx'],
        acceptFileTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/pdf', 'image/']

    return fileValidation(file, 2, acceptFileEx, acceptFileTypes)
}
/////////////////////////
// Check Image
/////////////////////////
function checkImageValid (file, maxSize) {
    const
        acceptFileEx = ['png', 'jpg', 'jpeg'],
        acceptFileTypes = ['image/']

    return fileValidation(file, maxSize, acceptFileEx, acceptFileTypes)
}

//////////////////////////////////
// Check  Text file ( word,pdf)
//////////////////////////////////
function checkTextFileValid (file, maxSize) {
    const
        acceptFileEx = ['pdf', 'doc', 'docx'],
        acceptFileTypes = ['application/msword', 'application/pdf']

    return fileValidation(file, maxSize, acceptFileEx, acceptFileTypes)
}
// with 2MB Size by default
function checkText2MBFileValid (file) {
    const
        acceptFileEx = ['pdf', 'doc', 'docx'],
        acceptFileTypes = ['application/msword', 'application/pdf']

    return fileValidation(file, 2, acceptFileEx, acceptFileTypes)
}