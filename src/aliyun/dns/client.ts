// This file is auto-generated, don't edit it
/**
 * Author: 东南dnf
 * Powered by Aliyun Darabonba Language :)
 */
import Console from '@alicloud/tea-console';
import Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Env from '@alicloud/darabonba-env';
import DNS, * as $DNS from '@alicloud/alidns20150109';
import * as $tea from '@alicloud/tea-typescript';

export default class Client {

    /**
     * Init 初始化客户端
     * @param accessKeyId
     * @param accessKeySecret
     * @param regionId
     * @return Client
     * @throws Exception
     */
    static Init(accessKeyId: string, accessKeySecret: string, regionId: string): DNS {
        let config = new $OpenApi.Config({});
        // 传AccessKey ID入config
        config.accessKeyId = accessKeyId;
        // 传AccessKey Secret入config
        config.accessKeySecret = accessKeySecret;
        config.regionId = regionId;
        return new DNS(config);
    }

    /**
     * DescribeDomains  查询账户下域名
     * @param client      客户端
     * @throws Exception
     */
    static async DescribeDomains(client: DNS): Promise<void> {
        let req = new $DNS.DescribeDomainsRequest({});
        Console.log("查询域名列表(json)↓");
        try {
            let resp = await client.describeDomains(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * AddDomain  阿里云云解析添加域名
     * @param client      客户端
     * @param domainName  域名名称
     * @throws Exception
     */
    static async AddDomain(client: DNS, domainName: string): Promise<void> {
        let req = new $DNS.AddDomainRequest({});
        req.domainName = domainName;
        Console.log(`云解析添加域名(${domainName})的结果(json)↓`);
        try {
            let resp = await client.addDomain(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * DescribeDomainRecords 查询域名解析记录
     * @param client          客户端
     * @param domainName      域名名称
     * @throws Exception
     */
    static async DescribeDomainRecords(client: DNS, domainName: string): Promise<void> {
        let req = new $DNS.DescribeDomainRecordsRequest({});
        req.domainName = domainName;
        Console.log(`查询域名(${domainName})的解析记录(json)↓`);
        try {
            let resp = await client.describeDomainRecords(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * DescribeRecordLogs  查询域名解析记录日志
     * @param client         客户端
     * @param domainName     域名名称
     * @throws Exception
     */
    static async DescribeRecordLogs(client: DNS, domainName: string): Promise<void> {
        let req = new $DNS.DescribeRecordLogsRequest({});
        req.domainName = domainName;
        Console.log(`查询域名(${domainName})的解析记录日志(json)↓`);
        try {
            let resp = await client.describeRecordLogs(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * DescribeDomainRecordByRecordId 查询域名解析记录信息
     * @param client         客户端
     * @param recordId
     * @throws Exception
     */
    static async DescribeDomainRecordByRecordId(client: DNS, recordId: string): Promise<void> {
        let req = new $DNS.DescribeDomainRecordInfoRequest({});
        req.recordId = recordId;
        Console.log(`查询RecordId:${recordId}的域名解析记录信息(json)↓`);
        try {
            let resp = await client.describeDomainRecordInfo(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * DescribeDomainInfo  查询域名信息
     * @param client         客户端
     * @param domainName     域名名称
     * @throws Exception
     */
    static async DescribeDomainInfo(client: DNS, domainName: string): Promise<void> {
        let req = new $DNS.DescribeDomainInfoRequest({});
        req.domainName = domainName;
        Console.log(`查询域名:${domainName}的信息(json)↓`);
        try {
            let resp = await client.describeDomainInfo(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * AddDomainRecord  添加域名解析记录
     * @param client            客户端
     * @param domainName        域名名称
     * @param RR                主机记录
     * @param recordType              记录类型(A/NS/MX/TXT/CNAME/SRV/AAAA/CAA/REDIRECT_URL/FORWARD_URL)
     * @param Value
     * @throws Exception
     */
    static async AddDomainRecord(client: DNS, domainName: string, RR: string, recordType: string, Value: string): Promise<void> {
        let req = new $DNS.AddDomainRecordRequest({});
        req.domainName = domainName;
        req.RR = RR;
        req.type = recordType;
        req.value = Value;
        try {
            let resp = await client.addDomainRecord(req);
            Console.log(`添加域名解析记录的结果(json)↓`);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * UpdateDomainRecord  更新域名解析记录
     * @param client          客户端
     * @param recordId        解析记录ID
     * @param RR              主机记录
     * @param recordType            记录类型(A/NS/MX/TXT/CNAME/SRV/AAAA/CAA/REDIRECT_URL/FORWARD_URL)
     * @param Value
     * @throws Exception
     */
    static async UpdateDomainRecord(client: DNS, recordId: string, RR: string, recordType: string, Value: string): Promise<void> {
        let req = new $DNS.UpdateDomainRecordRequest({});
        req.recordId = recordId;
        req.RR = RR;
        req.type = recordType;
        req.value = Value;
        Console.log(`更新域名解析记录的结果(json)↓`);
        try {
            let resp = await client.updateDomainRecord(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * SetDomainRecordStatus  设置域名解析状态
     * @param client      客户端
     * @param recordId    解析记录ID
     * @param status      解析状态(ENABLE/DISABLE)
     * @throws Exception
     */
    static async SetDomainRecordStatus(client: DNS, recordId: string, status: string): Promise<void> {
        let req = new $DNS.SetDomainRecordStatusRequest({});
        req.recordId = recordId;
        req.status = status;
        Console.log(`设置域名解析状态的结果(json)↓`);
        try {
            let resp = await client.setDomainRecordStatus(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * DeleteDomainRecord  删除域名解析记录
     * @param client         客户端
     * @param recordId       解析记录ID
     * @throws Exception
     */
    static async DeleteDomainRecord(client: DNS, recordId: string): Promise<void> {
        let req = new $DNS.DeleteDomainRecordRequest({});
        req.recordId = recordId;
        Console.log(`删除域名解析记录的结果(json)↓`);
        try {
            let resp = await client.deleteDomainRecord(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * DescribeDomainGroups  查询域名组
     * @param client 客户端
     * @throws Exception
     */
    static async DescribeDomainGroups(client: DNS): Promise<void> {
        let req = new $DNS.DescribeDomainGroupsRequest({});
        Console.log(`查询域名组(json)↓`);
        try {
            let resp = await client.describeDomainGroups(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * AddDomainGroup  添加域名组
     * @param client      客户端
     * @param groupName   域名组名
     * @throws Exception
     */
    static async AddDomainGroup(client: DNS, groupName: string): Promise<void> {
        let req = new $DNS.AddDomainGroupRequest({});
        req.groupName = groupName;
        Console.log(`添加域名组的结果(json)↓`);
        try {
            let resp = await client.addDomainGroup(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * UpdateDomainGroup  更新域名组名称
     * @param client         客户端
     * @param groupId        解析组ID
     * @param groupName      新域名组名称
     * @throws Exception
     */
    static async UpdateDomainGroup(client: DNS, groupId: string, groupName: string): Promise<void> {
        let req = new $DNS.UpdateDomainGroupRequest({});
        req.groupId = groupId;
        req.groupName = groupName;
        Console.log(`更新域名组的结果(json)↓`);
        try {
            let resp = await client.updateDomainGroup(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    /**
     * DeleteDomainGroup  删除域名组
     * @param client      客户端
     * @param groupId     域名组ID
     * @throws Exception
     */
    static async DeleteDomainGroup(client: DNS, groupId: string): Promise<void> {
        let req = new $DNS.DeleteDomainGroupRequest({});
        req.groupId = groupId;
        Console.log(`删除域名组的结果(json)↓`);
        try {
            let resp = await client.deleteDomainGroup(req);
            Console.log(Util.toJSONString($tea.toMap(resp)));
        } catch (error) {
            Console.log(error.message);
        }
    }

    static async getClient(regionId = 'cn-hangzhou') {
        return Client.Init(Env.getEnv("ACCESS_KEY_ID"), Env.getEnv("ACCESS_KEY_SECRET"), regionId);
    }

    static async main(args: string[]): Promise<void> {
        let regionId = args[7];
        let domainName = args[0];
        let RR = args[1];
        let recordType = args[2];
        let value = args[3];
        let recordId = args[4];
        let groupName = args[5];
        let groupId = args[6];
        // 0.初始化客户端
        let client = Client.Init(Env.getEnv("ACCESS_KEY_ID"), Env.getEnv("ACCESS_KEY_SECRET"), regionId);
        // 1.查询账户下域名
        await Client.DescribeDomains(client);
        // 2.阿里云云解析添加域名
        await Client.AddDomain(client, domainName);
        // 3.查询域名解析记录
        await Client.DescribeDomainRecords(client, domainName);
        // 4.查询域名记录日志
        await Client.DescribeRecordLogs(client, domainName);
        // 5.通过RecordId查询域名解析记录
        await Client.DescribeDomainRecordByRecordId(client, recordId);
        // 6.查询域名信息
        await Client.DescribeDomainInfo(client, domainName);
        // 7.添加域名解析记录
        await Client.AddDomainRecord(client, domainName, RR, recordType, value);
        // 8.更新域名解析记录
        await Client.UpdateDomainRecord(client, recordId, RR, recordType, value);
        // 9.设置域名解析状态
        await Client.SetDomainRecordStatus(client, recordId, "ENABLE");
        // 10.删除域名解析记录
        await Client.DeleteDomainRecord(client, recordId);
        // 11.查询域名组
        await Client.DescribeDomainGroups(client);
        // 12.添加域名组
        await Client.AddDomainGroup(client, groupName);
        // 13.更新域名组名称
        await Client.UpdateDomainGroup(client, groupId, groupName);
        // 14.删除域名组
        await Client.DeleteDomainGroup(client, groupId);
    }

}

// Client.main(process.argv.slice(2));