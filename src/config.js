module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://dunder_mifflin@localchost/noteful',
  TEST_DATABASE_URL: process.env.TETS_DATABASE_URL || 'postgresql://dunder_mifflin@localchost/noteful-test',
  API_TOKEN: process.env.API_TOKEN || '904e94ed-bcb7-451a-a8f9-50c15675973d',
};