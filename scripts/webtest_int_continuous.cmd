REM - continuous integration webtest with webpack-dev-server
REM webtest_int_continuous.cmd
start chrome ^
  http://localhost:8081/basic-nodejs-package-webtest-int.html
yarn run webpack-dev-server --config webpack.config.webtest.int.js
