const continents = [
    {
        "_id": 1,
        "name": "Africa"
    },
    {
        "_id": 2,
        "name": "Euroupe"
    },
    {
        "_id": 3,
        "name": "Asia"
    },
    {
        "_id": 4,
        "name": "North America"
    },
    {
        "_id": 5,
        "name": "Africa"
    },
    {
        "_id": 6,
        "name": "Australia"
    },
    {
        "_id": 7,
        "name": "Antarctica"
    },
]

const price = [ // 값 바꿔야하긴함
    {
        "_id": 0,
        "name": "Any", //아무 값이나 다 될 수 있도록 설정
        "array": []
    },
    {
        "_id": 1,
        "name": "$0 to $199",
        "array": [0, 199]
    },
    {
        "_id": 2,
        "name": "$200 to $249",
        "array": [200, 249]
    },
    {
        "_id": 3,
        "name": "$250 to $279",
        "array": [250, 279]
    },
    {
        "_id": 4,
        "name": "$280 to $299",
        "array": [280, 299]
    },
    {
        "_id": 5,
        "name": "$More than $300",
        "array": [300, 150000]
    },
]

export {
    continents,
    price
}