const moduleAlias = require('module-alias/register');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// 라우터 정의
// ex) const indexRouter = require('/routes/index.js');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/static', express.static(path.join(__dirname, 'static')));

// 라우터 할당
// ex) app.use('/', indexRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(`${app.get('port')}번 포트에서 대기`);
});
