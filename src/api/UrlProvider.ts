/*
 * Copyright (c) 2022. Revo Digital
 * ---
 * Author: gabriele
 * File: UrlProvider.ts
 * Project: react-url-managing
 * Committed last: 2022/7/21 @ 154
 * ---
 * Description:
 */

/**
 * Represents a generic provider
 */
export interface Provider {
  init(): void;
}

const urlFallback = require('../config/url-fallback.json');

/**
 Provider to allow access to configuration urls
 */
export class UrlProvider implements Provider {
  private _defaultDomainUrl: string;
  private _defaultApUrl: string;
  private _overrideDomainUrl?: string;
  private _overrideApUrl?: string;

  constructor() {
    this._defaultApUrl = '';
    this._defaultDomainUrl = '';

    // Init variables
    this.init();
  }

  init() {
    // @ts-ignore
    this._defaultApUrl = process.env.REACT_APP_AP_API_URL;
    // @ts-ignore
    this._defaultDomainUrl = process.env.REACT_APP_API_URL;

    if (!this._defaultDomainUrl || !this._defaultApUrl) {
      console.error(
        'ERROR: Unable to load default domain url or ap url. Fallback urls will be used');
      // Caricamento url fallback
      this._defaultApUrl = urlFallback.ap;
      this._defaultDomainUrl = urlFallback.domain;
    }

    console.info(`Successfully loaded urls: ${ this._defaultDomainUrl }`);
  }

  /**
   * Returns the url to use for reaching the domain server.
   * If there is an override set, it will return the override value
   */
  getDomainUrl(): string {
    return this._overrideDomainUrl || this._defaultDomainUrl;
  }

  /**
   * Sets an override value for the domain url
   * @param value
   */
  overrideDomainUrl(value: string) {
    this._overrideDomainUrl = value;
  }

  /**
   * Returns the url of the server for auth providing
   */
  getApUrl(): string {
    return this._overrideApUrl || this._defaultApUrl;
  }

  /**
   * Sets an override for the url of the auth provider
   * @param value
   */
  overrideApUrl(value: string) {
    this._overrideApUrl = value;
  }
}