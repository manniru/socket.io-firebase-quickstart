import React from 'react';

import 'styles/main.scss';
import { login } from 'app/helpers/firebase';

// login()

export default class Main extends React.Component {
  render() {
    return (
      <div className="index">
        <button
          className="button"
          style={{ display: 'block', margin: '30px auto' }}
        >
          Hello world!
        </button>
      </div>
    );
  }
}
