# Fasttrak Network

_**A really fast way to NFT-mint your audio files using FFMPEG, Express, and ether._**

<img width="915" alt="Screen Shot 2022-06-08 at 12 18 10 AM" src="https://user-images.githubusercontent.com/12818719/172531162-0a1ead4d-19ed-4213-9e0b-323165a0e03f.png">

👉 Mint NFTs for audio files (MP3 tested) via FFMPEG MD5s on a eth-based network

👉 Simple Express-based API

👉 Hardhat based dapp

## Getting Started

### Install pre-requisites

- `brew install nvm`
- `brew isntall ffmpeg`

### Run it

1. Setup node env `nvm use`
2. Install deps `npm install`
3. Compile the solidity contracts `npm run compile`
4. Start the express server `npm start`

cURL to mint:
```bash
curl --location --request POST 'http://127.0.0.1:8000/api/v1/mint' \
--header 'Content-Type: application/json' \
--data-raw '{
  "filePath": "/some/file.mp3"
}'
```

