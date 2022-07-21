/*
 * Copyright (c) 2022-2022. Revo Digital
 * ---
 * Author: gabriele
 * File: UrlProviderInstanceManager.ts
 * Project: react-url-managing
 * Committed last: 2022/7/21 @ 154
 * ---
 * Description:
 */

import { UrlProvider } from './UrlProvider';

/**
 * The url provider singleton instance manager. It simply provides only 1 instance for all the
 * application.
 */
export class UrlProviderInstanceManager {
  private static _instance?: UrlProvider;

  static getInstance(): UrlProvider {
    if (!UrlProviderInstanceManager._instance)
      UrlProviderInstanceManager._instance = new UrlProvider();

    return UrlProviderInstanceManager._instance;
  }
}

// Create an instance and assign it to a unique ad simple variable
export const urlProvider = UrlProviderInstanceManager.getInstance();