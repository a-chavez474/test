const firstFunction = (req, res, next) => {
    res.json('First person');
};

const secondFunction = (req, res, next) => {
    res.json('Second person');
};

module,exports = { firstFunction, secondFunction };