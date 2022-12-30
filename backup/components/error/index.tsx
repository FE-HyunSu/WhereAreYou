import React from 'react';
import { ErrorBoxUI } from './style';

const ErrorBox = () => {
  return (
    <>
      <ErrorBoxUI>
        <div>
          <p>
            <strong>ERROR</strong>
            잠시 후에 다시 시도해 주세요.
          </p>
        </div>
      </ErrorBoxUI>
    </>
  );
};
export default ErrorBox;
