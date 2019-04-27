theme.$inject = ["$mdThemingProvider"];
export default function theme($mdThemingProvider) {
    $mdThemingProvider.definePalette('mcgpalette0', {
        '50': 'e8f6f2',
        '100': 'c5e9e0',
        '200': '9fdacb',
        '300': '79cbb6',
        '400': '5cc0a6',
        '500': '3fb596',
        '600': '39ae8e',
        '700': '31a583',
        '800': '299d79',
        '900': '1b8d68',
        'A100': 'c6ffeb',
        'A200': '93ffd9',
        'A400': '60ffc7',
        'A700': '47ffbe',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': [
            '50',
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            'A100',
            'A200',
            'A400',
            'A700'
        ],
        'contrastLightColors': [
            '700',
            '800',
            '900'
        ]
    });
    $mdThemingProvider.theme('default')
        .primaryPalette('mcgpalette0').accentPalette('indigo');
};