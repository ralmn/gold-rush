# Gold Rush

## Development

You'll need [Node.js](https://nodejs.org/).

```
npm install typescript -g
npm install watchify -g
```

### Client

```
cd client/
tsc
watchify index.js -o ../public/index.js
```

### Server
    
```
cd server/
tsc
node .
```
