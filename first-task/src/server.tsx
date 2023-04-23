import express from 'express';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { renderTemplate } from 'template';
import { configureStore, createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BASE_URL } from 'utils/constants';
import { BrowserRouter } from 'react-router-dom';

const app = express();

app.use(express.static('dist'));

app.get('*', async (req, res) => {
  const data = await fetch(`${BASE_URL}`).then((res) => {}); // не понимаю как правильно данные описать/получить
  const store = createStore((state) => state, data); //тут пишут вроде лучше конфигурстор, но я хз

  const content = renderToString(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content,
      data: JSON.stringify(data),
    })
  );
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
