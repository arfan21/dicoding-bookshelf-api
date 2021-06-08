/* eslint-disable operator-linebreak */
/* eslint-disable no-restricted-syntax */
// https://stackoverflow.com/questions/286141/remove-blank-attributes-from-an-object-in-javascript

const cleanObj = (obj) => {
    for (const propName in obj) {
        if (
            obj[propName] === null ||
            obj[propName] === undefined ||
            obj[propName] === ''
        ) {
            // eslint-disable-next-line no-param-reassign
            delete obj[propName];
        }
    }
    return obj;
};

module.exports = cleanObj;
