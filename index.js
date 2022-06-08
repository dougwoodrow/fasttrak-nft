const express = require("express")
const app = express()
const port = 8000
const hre = require("hardhat");
const {exec} = require("child_process");

app.use(express.json());

const cmd = async (command) => {
    return new Promise(async (resolve, reject) => {
        const process = await exec(command);
        let result = {}
        process.stdout.on("data", data => {
            result = data.split("MD5=")[1]
        })
        // process.stderr.on("data", reject)
        process.on("exit", () => resolve(result))
    })
}

app.post("/api/v1/mint", async (req, res) => {
    const body = req.body
    const Musicd = await hre.ethers.getContractFactory("Musicd");
    try {
        const checksum = await cmd(`ffmpeg -i \"${body.filePath}\" -map 0:a -codec copy -hide_banner -loglevel warning -f md5 -`)
        const block = await Musicd.deploy(checksum);
        await block.deployed();
        res.json({id: block.address})
    } catch (e) {
        console.error(e)
    }
})

app.listen(port, () => {
    console.log(`Fasttrak Network listening on port ${port}`)
})