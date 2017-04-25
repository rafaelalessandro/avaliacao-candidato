exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*.e2e.js'],
    capabilities: {
        browserName: 'chrome'
    }
}


