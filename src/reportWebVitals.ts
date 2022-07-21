/*
 * Copyright (c) 2022. Revo Digital
 * ---
 * Author: gabriele
 * File: reportWebVitals.ts
 * Project: react-url-managing
 * Committed last: 2022/7/21 @ 1450
 * ---
 * Description:
 */

import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
