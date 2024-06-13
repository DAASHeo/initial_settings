// airbnb 규칙 추가
module.exports = {
  root: true,
  env: { browser: true, node: true, es6: true },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  // 어떤 ecma 버전으로 parsing 할 것인지
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: 'detect' },
    // import 구문에서 alias(별칭)를 사용하기 위한 설정
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@page', './src/page'],
          ['@assets', './src/assets'],
          ['@utils', './src/utils'],
          ['@store', './src/store'],
          ['@api', './src/api'],
          ['@hooks', './src/hooks'],
          ['@constants', './src/constants'],
          ['@route', './src/route'],
          ['@enums', './src/enums'],
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.json', '.svg'],
      },
    },
  },
  //리액트와 관련된 룰을 정의한 패키지
  plugins: ['react', 'prettier'],
  //ESLint가 특정 파일이나 디렉토리를 무시하도록 설정
  ignorePatterns: [
    '.eslintrc.cjs', // ESLint 설정 파일 무시
    'public', // public 디렉토리 무시 (주로 정적 파일들이 위치)
    'dist', // 배포용 빌드 파일 디렉토리 무시
    '.prettierrc', // Prettier 설정 파일 무시
    '*.html', // HTML 파일 무시
    'jsconfig.json', // jsconfig.json 파일 무시 (JavaScript 프로젝트 구성 파일)
  ],
  // 패키지 안에 있는 이러한 룰 사용
  // off, warn, error 3가지 상태로 정의해서 사용 가능
  rules: {
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    // import 문에서 확장자가 .svg?react인 파일을 무시
    'import/no-unresolved': ['error', { ignore: ['\\.svg\\?react$'] }],
    // 변수 이름이 '_'로 시작하는 경우 사용하지 않는 변수에 대한 경고 무시
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // Prettier 규칙을 에러로 설정하고, 자동 줄바꿈 설정
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    // React를 import하지 않아도 JSX 문법 사용 가능
    'react/react-in-jsx-scope': 'off',
    // PropTypes 타입 검사 규칙 비활성화
    'react/prop-types': 'off',
    // 콘솔 로깅 허용
    'no-console': 'off',
    // JSX에서 props spreading 허용
    'react/jsx-props-no-spreading': 'off',
    // 함수형 컴포넌트는 화살표 함수로 정의해야 함
    'react/function-component-definition': [2, { namedComponents: ['arrow-function'] }],
  },
};
