const wordFrequency =(string) => {
    var words = string.replace(/[.]/g, '').split(/\s/);
    var frequencyMap = {};
    words.forEach(function(word) {
        if (!frequencyMap[word]) {
            frequencyMap[word] = 0;
        }
        frequencyMap[word] += 1;
    });

    return frequencyMap;
}

module.exports = wordFrequency