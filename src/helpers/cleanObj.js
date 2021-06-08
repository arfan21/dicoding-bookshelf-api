// https://stackoverflow.com/questions/286141/remove-blank-attributes-from-an-object-in-javascript

const cleanObj = (obj) => {
    const newObj = { ...obj };
    Object.keys(newObj).forEach((propName) => {
        if (
            newObj[propName] === null
            || newObj[propName] === undefined
            || newObj[propName] === ''
            || (newObj[propName]
                && Object.keys(newObj[propName]).length === 0
                && obj[propName].constructor === Object)
        ) {
            delete newObj[propName];
        }
    });
    return newObj;
};

module.exports = cleanObj;
