import Env from "@alicloud/darabonba-env";
import Client from "./client";
import os from "os";


require('dotenv').config({path: '.env.production'});

const args = process.argv.slice(2);

const regionId = "cn-hangzhou";
const client = Client.Init(
    Env.getEnv("ACCESS_KEY_ID"),
    Env.getEnv("ACCESS_KEY_SECRET"),
    regionId
);

function getIPAdress() {
    const interfaces = os.networkInterfaces();

    for (const devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

const remoteIp = getIPAdress();

let domainName = args[0];
let RR = args[1];
let recordType = args[2];
let recordId = args[3];

const handleRequest = async () => {
    try {
        // let result = await Client.DescribeDomainRecords(client, domainName);
        let result = await Client.UpdateDomainRecord(client, recordId, RR, recordType, remoteIp);
        console.log(result);
    } catch (e) {
        console.log('e', e)

    }

};
handleRequest();

//node dist\aliyun\dns\lan.js "xxx.com" "www" "A" "89000000000000000000"