const wbBuild = require('workbox-build');

wbBuild.generateSW({
    navigationFallBack: 'index.html',
    globDirectory: './dist',
    globPatterns: [
        'index.html',
        '**.js',
        '**.css',
        'assets/ifsp.svg',
        'assets/logo-cpqd.svg',
        'assets/unicamp.svg',
        'assets/venturus.svg'
    ],
    swDest: 'dist/service-worker.js',
    templatedUrls: {
        '?utm_source=pwa': ['index.html']
    }
}).then(() => console.log('service worker generated'));
