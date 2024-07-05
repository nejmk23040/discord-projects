const { Client } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const tokens = [
    'توكنك'
];

const serverId = 'ايدي السيرفر';

const messageContent = 'سبامك';

const intervalTime = 1000; 

const updateInterval = 60000; 

const retryDelay = 2000; 

const clients = [];

const sendMessage = async (channel, content) => {
    try {
        await channel.send(content);
    } catch (error) {
        if (error.code === 50013) {
            console.error(`Lack of permissions in channel: ${channel.id}`);
        } else if (error.code === 50001) {
            console.error(`Missing access to channel: ${channel.id}`);
        } else if (error.code === 50035) {
            console.error(`Invalid form body in request to channel: ${channel.id}`);
        } else if (error.code === 429) {
            console.error('Rate limited. Waiting and retrying...');
            setTimeout(() => sendMessage(channel, content), error.retry_after * 1000);
        } else {
            console.error('Error occurred:', error);
            setTimeout(() => sendMessage(channel, content), retryDelay);
        }
    }
};

const updateChannels = (client) => {
    const server = client.guilds.cache.get(serverId);
    if (!server) {
        console.error(`Cannot find server with ID: ${serverId}`);
        return [];
    }

    return server.channels.cache.filter(channel => channel.type === 'GUILD_TEXT');
};

const startSendingMessages = (client) => {
    let channels = updateChannels(client);

    setInterval(() => {
        channels.forEach(channel => sendMessage(channel, messageContent));
    }, intervalTime);

    setInterval(() => {
        channels = updateChannels(client);
    }, updateInterval);

    client.on('channelCreate', channel => {
        if (channel.guild.id === serverId && channel.type === 'GUILD_TEXT') {
            channels = updateChannels(client);
        }
    });
};

tokens.forEach(token => {
    const client = new Client({ checkUpdate: false });
    clients.push(client);

    client.once('ready', () => {
        startSendingMessages(client);
    });

    const loginWithRetry = (token, delay) => {
        client.login(token).catch(error => {
            console.error('Login failed, retrying...', error);
            setTimeout(() => loginWithRetry(token, delay), delay);
        });
    };

    loginWithRetry(token, retryDelay);
}); 

app.get('/', (req, res) => {
    res.send(`<body><center><h1>كسمك يا علاوي</h1></center></body>`);
});

app.get('/webview', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
        <html>
            <head>
                <title>ام علاوي</title>
            </head>
            <body style="margin: 0; padding: 0;">
                <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
            </body>
        </html>
    `);
});

server.listen(8080, () => {
    console.log("im ready to nik ksm 3lawi!!");
});
