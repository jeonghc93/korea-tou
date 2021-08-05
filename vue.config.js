module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/korea-tou'
        : '/',
    outputDir: 'docs'
}