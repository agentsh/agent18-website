const config = {
    baseUrl: 'http://127.0.0.1:8001',
};

if (process.env.NODE_ENV === 'prod') {
    config.baseUrl = 'http://api.agent.sh';
}

export default config;
