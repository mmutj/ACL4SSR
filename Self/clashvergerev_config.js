const customRules = [
    // 在此添加自定义代理规则。
    // 例如：
    //"DOMAIN-SUFFIX,gstatic.com,节点选择",
    "DOMAIN-SUFFIX,mega.nz,🚀 节点选择",
    "DOMAIN-SUFFIX,pincong.rocks,🚀 节点选择",
    "DOMAIN-SUFFIX,ssl.gstatic.com,🚀 节点选择",
    // "DOMAIN-SUFFIX,yunfeipt.flowus.cn,🚀 节点选择"
    // ""
    // "DOMAIN-SUFFIX,u.rcaa.cc,🚀 节点选择",
];

// 国内DNS服务器
const domesticNameservers = [
    "https://dns.alidns.com/dns-query", // 阿里云公共DNS
    "https://doh.pub/dns-query", // 腾讯DNSPod
    // "https://doh.360.cn/dns-query" // 360安全DNS
];
// 国外DNS服务器
const foreignNameservers = [
    "https://1.1.1.1/dns-query", // Cloudflare(主)
    // "https://1.0.0.1/dns-query", // Cloudflare(备)
    "https://208.67.222.222/dns-query", // OpenDNS(主)
    // "https://208.67.220.220/dns-query", // OpenDNS(备)
    // "https://194.242.2.2/dns-query", // Mullvad(主)
    // "https://194.242.2.3/dns-query" // Mullvad(备)
];



// DNS配置
const dnsConfig = {
    "enable": true,
    "listen": "0.0.0.0:1053",
    "ipv6": true,
    "use-system-hosts": false,
    "cache-algorithm": "arc",
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": [
        // 本地主机/设备
        "+.lan",
        "+.local",
        // Windows网络出现小地球图标
        "+.msftconnecttest.com",
        "+.msftncsi.com",
        // QQ快速登录检测失败
        "localhost.ptlogin2.qq.com",
        "localhost.sec.qq.com",
        // 微信快速登录检测失败
        "localhost.work.weixin.qq.com",
        // flowus.cn
        // "*.flowus.cn",
    ],
    "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
    "nameserver": [...domesticNameservers, ...foreignNameservers],
    "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
    "nameserver-policy": {
        "geosite:private,cn,geolocation-cn": domesticNameservers,
        "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers
}
};

const snifferConfig = {
    "enable": true,
    "force-dns-mapping": true,
    "parse-pure-ip": true,
    "override-destination": true,
    "sniff": {
        "TLS": {
            "ports": [443, 8443],
        },
        "HTTP": {
            "ports": [80, "8080-8880"],
            "override-destination": true,
        },
        "QUIC": {
            "ports": [443, 8443]
        },
    }
};

// geo url
const geoxurl = {
    "geoip": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geoip.dat",
    "geosite": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat",
    "mmdb": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/country.mmdb",
    "asn": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/GeoLite2-ASN.mmdb",
}

  // 规则集通用配置
const ruleProviderCommon = {
    "type": "http",
    // "format": "yaml",
    "interval": 86400
};

const rules = [
    // 自定义规则
    ...customRules,
    // 规则集
    "RULE-SET,security,🎓 网络安全",
    "RULE-SET,ChinaCompanyIp,🎯 全球直连",
    // "RULE-SET,btDownload,🎯 全球直连",
    "RULE-SET,ChinaDirect,🎯 全球直连",
    "RULE-SET,OpenAI,💬 Ai平台",
    "RULE-SET,Claude,💬 Ai平台",
    "RULE-SET,Gemini,💬 Ai平台",
    "RULE-SET,Copilot,💬 Ai平台",
    // "RULE-SET,Perplexity,💬 Ai平台",
    "RULE-SET,otherai,💬 Ai平台",
    "RULE-SET,AllAI,💬 Ai平台",
    "RULE-SET,proxylist,🚀 节点选择",
    "RULE-SET,SteamCN,🎯 全球直连",
    "RULE-SET,LocalAreaNetwork,🎯 全球直连",
    // "RULE-SET,ChinaDirect,🎯 全球直连",
    "RULE-SET,UnBan,🎯 全球直连",
    "RULE-SET,ChinaDomain,🎯 全球直连",
    "RULE-SET,GoogleCN,🎯 全球直连",
    "GEOIP,CN,🎯 全球直连",
    // "RULE-SET,ipdirect,全局直连,no-resolve",
    // "RULE-SET,ipprivate,全局直连,no-resolve",
    "RULE-SET,Telegram,📲 电报信息,no-resolve",
    // "RULE-SET,direct,全局直连",
    // "RULE-SET,private,全局直连",
    "RULE-SET,google,Ⓜ️ 微软服务",
    "RULE-SET,Apple,🍎 苹果服务",
    "RULE-SET,bing,Ⓜ️ 微软服务",
    "RULE-SET,github,Ⓜ️ 微软服务",
    "RULE-SET,onedrive,Ⓜ️ 微软服务",
    "RULE-SET,Microsoft,Ⓜ️ 微软服务",
    // "RULE-SET,ai,💬 Ai平台",
    "RULE-SET,youtube,🌍 国外媒体",
    "RULE-SET,ProxyMedia,🌍 国外媒体",
    // "RULE-SET,netflix_ip,Netflix",
    // "RULE-SET,netflix_site,Netflix",
    // "RULE-SET,tiktok,TikTok",
    // "RULE-SET,adobe,Adobe",
    "RULE-SET,pornhub,🚀 节点选择",
    // "RULE-SET,spotify,Spotify",
    // "RULE-SET,games,游戏服务",
    // "RULE-SET,speedtest,网速测试",
    // "RULE-SET,bilibili,Bilibili",
    // "RULE-SET,proxy,节点选择",
    // "RULE-SET,gfw,节点选择",
    // "RULE-SET,tld-not-cn,节点选择",
    "RULE-SET,BanAD,🛑 全球拦截",
    "RULE-SET,BanProgramAD,🍃 应用净化",
    "RULE-SET,ProxyLite,🚀 节点选择",
    // "RULE-SET,ProxyGFWlis,🚀 国外流量",

    "RULE-SET,ProxyGFWlist,🚀 国外流量",
    
    // 未匹配的规则    
    "MATCH,🐟 漏网之鱼",
];

const ruleProviders = {
    security: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com/mmutj/ACL4SSR/master/Self/Providers/security.yaml",
        path: "./ruleset/security.yaml",
    },
    proxylist: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com/mmutj/ACL4SSR/master/Self/Providers/ProxyList.yaml",
        "path": "./ruleset/proxylist.yaml",
    },
    ChinaDirect: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com/mmutj/ACL4SSR/master/Self/Providers/ChinaDirect.yaml",
        "path": "./ruleset/ChinaDirect.yaml",
    },
    ChinaDomain: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/ChinaDomain.yaml",
        "path": "./ruleset/ChinaDomain.yaml"
    },
    ChinaCompanyIp: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/ChinaCompanyIp.yaml",
        "path": "./ruleset/ChinaCompanyIp.yaml"
    },
    Microsoft: {
        // 检查一个多小时居然没发现这条规则没有 ...ruleProviderCommon，最后添加的
        ...ruleProviderCommon,
        behavior: "classical",
        // 这条 url 写错排查了一个小时，报错始终是 key 'type' missing，不知所以然只好将规则拆分出来排查，同时还检查到了一些规则没添加到代理中
        // url: "https://graw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/Microsoft.yaml",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/Microsoft.yaml",
        "path": "./ruleset/Microsoft.yaml"
    },
    Apple: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/Apple.yaml",
        "path": "./ruleset/Apple.yaml"
    },
    Telegram: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/Telegram.yaml",
        "path": "./ruleset/Telegram.yaml"
    },
    ProxyMedia: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/ProxyMedia.yaml",
        "path": "./ruleset/ProxyMedia.yaml"
    },
    LocalAreaNetwork: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/LocalAreaNetwork.yaml",
        "path": "./ruleset/LocalAreaNetwork.yaml"
    },
    UnBan: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/UnBan.yaml",
        "path": "./ruleset/UnBan.yaml"
    },
    GoogleCN: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/GoogleCN.yaml",
        "path": "./ruleset/GoogleCN.yaml"
    },
    SteamCN: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/SteamCN.yaml",
        "path": "./ruleset/SteamCN.yaml"
    },
    BanAD: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/BanAD.yaml",
        "path": "./ruleset/BanAD.yaml"
    },
    BanProgramAD: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/BanProgramAD.yaml",
        path: "./ruleset/BanProgramAD.yaml"
    },
    ProxyLite: {
        ...ruleProviderCommon,
        behavior: "classical",
        url: "https://raw.githubusercontent.com//ACL4SSR/ACL4SSR/master/Clash/Providers/ProxyLite.yaml",
        "path": "./ruleset/ProxyLite.yaml"
    },
    google: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/google.mrs",
        format: "mrs",
        path: "./ruleset/google.mrs",
    },
    // microsoft: {
    //     ...ruleProviderCommon, 
    //     behavior: "domain",
    //     url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/microsoft.mrs",
    //     path: "./ruleset/microsoft.mrs",
    // },
    // apple: {
    //     ...ruleProviderCommon,
    //     behavior: "domain",
    //     url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/apple.mrs",
    //     path: "./ruleset/apple.mrs",
    // },
    bing: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/bing.mrs",
        "format": "mrs",
        path: "./ruleset/bing.mrs",
    },
    github: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/github.mrs",
        "format": "mrs",
        path: "./ruleset/github.mrs",
    },
    onedrive: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/onedrive.mrs",
        "format": "mrs",
        path: "./ruleset/onedrive.mrs",
    },
    youtube: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/youtube.mrs",
        "format": "mrs",
        path: "./ruleset/youtube.mrs",
    },
    pornhub: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/pornhub.mrs",
        "format": "mrs",
        path: "./ruleset/pornhub.mrs",
    },
    "OpenAI": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml",
        "path": "./ruleset/blackmatrix7/openai.yaml"
    },
    "Claude": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Claude/Claude.yaml",
        "path": "./ruleset/blackmatrix7/claude.yaml"
    },
    "Gemini": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Gemini/Gemini.yaml",
        "path": "./ruleset/blackmatrix7/Gemini.yaml"
    },
    "Copilot": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Copilot/Copilot.yaml",
        "path": "./ruleset/blackmatrix7/Copilot.yaml"
    },
    "otherai": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/mmutj/ACL4SSR/master/Self/Providers/otherai.yaml",
        "path": "./ruleset/AllAI.yaml"
    },
    "AllAI": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/AI.yaml",
        "path": "./ruleset/AllAI.yaml"
    },
    "btDownload": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/Ruleset/Download.yaml",
        "path": "./ruleset/btDownload.yaml"
    },
    "ProxyGFWlist": {
        ...ruleProviderCommon,
        "behavior": "classical",
        "url": "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/Providers/ProxyGFWlist.yaml",
        "path": "./ruleset/ProxyGFWlist.yaml"
    },
}

// 默认测试网址

const test_url = "http://www.google.com/generate_204";
// 测试网址检测间隔
const test_interval = 240;
// 测试网址的间隔差值，超过这个差值就会切换节点，越小切换越频繁
const test_tolerance = 80;

// 代理组通用配置
const groupBaseOption = {
    // "interval": 300,
    // "timeout": 3000,
    "url": test_url,
    "lazy": true,
    "hidden": false,
    "disable-udp": false,
};

const proxyGroups = [
    {
        ...groupBaseOption,
        "name": "🚀 节点选择",
        "type": "select",
        proxies: ["♻️ 自动选择", "DIRECT"],
        "include-all": true,
        // "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png",
    },
    {
        ...groupBaseOption,
        name: "🎓 网络安全",
        "type": "select",
        proxies: ["♻️ 自动选择", "🚀 节点选择", "✈️ 手动选择", "🛩️ 手动选择备用"],
        "include-all": true,
        filter: "(?i)港|hk|hongkong|hong kong|新加坡|🇸🇬|SG|狮城|Singapore|台湾|🇹🇼|tw|taiwan|tai wan"
        // "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png",
    },
    {
        ...groupBaseOption,
        name: "✈️ 手动选择",
        "type": "select",
        proxies: ["♻️ 自动选择"],
        "include-all": true,
        // "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png",
    },
    {
        ...groupBaseOption,
        name: "🛩️ 手动选择备用",
        "type": "select",
        proxies: ["♻️ 自动选择"],
        "include-all": true,
        // "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png",
    },
    {
        ...groupBaseOption,
        name: "💬 Ai平台",
        "type": "select",
        proxies: ["♻️ 自动选择"],
        // proxies: ["延迟选优", "手动选择"], 
        "include-all": true,
    },
    {
        ...groupBaseOption,
        name: "♻️ 自动选择",
        "type": "url-test",
        "include-all": true,
        url: 'http://www.gstatic.com/generate_204', 
        interval: 300,
        timeout: 3000,
        "exclude-filter": "流量|Traffic|过期|时间|Expire|套餐|到期|有效",
        // "icon": "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png",
    },
    {
        ...groupBaseOption,
        name: "📲 电报信息",
        "type": "select",
        proxies: ["♻️ 自动选择", "🚀 节点选择", "✈️ 手动选择", "🛩️ 手动选择备用"], 
        // "include-all": true,
    },
    {
        ...groupBaseOption,
        name: "Ⓜ️ 微软服务",
        "type": "select",
        proxies: ["♻️ 自动选择", "🚀 节点选择", "✈️ 手动选择", "🛩️ 手动选择备用"], 
        // "include-all": true,
    },
    {
        ...groupBaseOption,
        name: "🌍 国外媒体",
        "type": "select",
        proxies: ["♻️ 自动选择", "🚀 节点选择", "✈️ 手动选择", "🛩️ 手动选择备用"], 
        // "include-all": true,
    },
    {
        ...groupBaseOption,
        name: "🍎 苹果服务",
        "type": "select",
        proxies: ["♻️ 自动选择", "🚀 节点选择", "✈️ 手动选择", "🛩️ 手动选择备用", "🎯 全球直连"], 
        // "include-all": true,
    },
    {
        ...groupBaseOption,
        name: "🎯 全球直连",
        "type": "select",
        proxies: ["DIRECT", "♻️ 自动选择", "🚀 节点选择", "🛩️ 手动选择备用"], 
        // "include-all": true,
    },
    {
        ...groupBaseOption,
        name: "🚀 国外流量",
        "type": "select",
        proxies: ["♻️ 自动选择", "🚀 节点选择", "✈️ 手动选择", "🛩️ 手动选择备用", "🎯 全球直连"], 
        "include-all": true,
    },
    {
        ...groupBaseOption,
        name: "🛑 全球拦截",
        "type": "select",
        proxies: ["REJECT", "🚀 节点选择", "✈️ 手动选择", "🛩️ 手动选择备用", "🎯 全球直连"], 
        // "include-all": true,
    },
    {
        ...groupBaseOption,
        name: "🍃 应用净化",
        "type": "select",
        proxies: ["REJECT", "🚀 节点选择", "✈️ 手动选择", "🛩️ 手动选择备用", "🎯 全球直连"], 
        // "include-all": true,
    },
    {
        ...groupBaseOption,
        name: "🐟 漏网之鱼",
        "type": "select",
        proxies: ["♻️ 自动选择", "🚀 节点选择", "✈️ 手动选择", "🛩️ 手动选择备用", "🎯 全球直连"], 
        "include-all": true,
    },
  ]

// 主函数
function main(config) {
    const proxyCount = config?.proxies?.length ?? 0;
    const proxyProviderCount =
        typeof config?.["proxy-providers"] === "object"
            ? Object.keys(config["proxy-providers"]).length
            : 0;
    if (proxyCount === 0 && proxyProviderCount === 0) {
        throw new Error("配置文件中未找到任何代理");
    }

    // 配置
    config["profile"] = {
        "store-selected": true,
        "store-fake-ip": true,
    };
    // Geo设置
    // [多订阅合并 - Clash Verge Rev Docs](https://www.clashverge.dev/guide/config.html?h=geo)
    config["geodata-loader"] = "standard";
    config["geodata-mode"] = true;
    config["geo-auto-update"] = true;
    // cofnig["geo-update-interval"] = 24;
    config["geox-url"] = geoxurl;
    // config["geosite-matcher"] = "mph";
    // 全局客户端指纹
    config["global-client-fingerprint"] = "chrome";
    config["global-ua"] = "chrome";
    // 统一延迟
    config["unified-delay"] = true;
    // TCP 并发
    config["tcp-concurrent"] = true;
    // 域名服务
    config["foreign_nameservers"] = foreignNameservers;
    config["domestic_nameservers"] = domesticNameservers;
    // DNS配置
    config["dns"] = dnsConfig;
    // 域名嗅探
    config["sniffer"] = snifferConfig;
    // 规则
    config["rule-providers"] = ruleProviders;
    config["rules"] = rules;
    // 代理组
    config["proxy-groups"] = proxyGroups;
    // 地区分组
    // addRegions(config);
    // 返回修改后的配置
    return config;
}
