import React from 'react'

const Array = () => {
    function map(array, callback) {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            result.push(callback(array[i], i, array));
        }
        return result;
    }

    const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);

    return (
        <div>
            {mappedArray.map((item, idx) => (
                <div key={idx}>{item}</div>
            ))}
        </div>
    )
}

export default Array