import { shopifyApp } from '@shopify/shopify-app-express';
import { PostgreSQLSessionStorage } from '@shopify/shopify-app-session-storage-postgresql';
import express from 'express';

const app = express();

const shopify = shopifyApp({
  api: {
    apiKey: process.env.SHOPIFY_API_KEY,
    apiSecretKey: process.env.SHOPIFY_API_SECRET,
    scopes: ['read_orders', 'write_orders', 'read_shipping'],
    hostName: process.env.HOST
  },
  auth: {
    path: '/api/auth',
    callbackPath: '/api/auth/callback'
  },
  sessionStorage: new PostgreSQLSessionStorage(process.env.DATABASE_URL)
}); 