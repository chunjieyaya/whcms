/**
 * 顶部大图部分
 * imgUrl: 背景图连接
 */
export let header = {
    imgUrl: `/dataCenter/header.jpg`
}


/**
 * 数据中心主要数据
 */
export let datacenters = {
    hugeText: '我们的数据中心',
    data: [
        {
            name: '香港MeGa Two数据中心',
            id: 1,
            introduce: 'JimCloud香港一期机房位于沙田，拥有低延迟及优质网关，可高速连接内地及世界各地。香港是大陆的出海网关，辐射亚太地区和东南亚地区，香港的IDC基础设施完善，电力供应稳定，以及具备高安全性的数据隐私保护措施。',
            pictureUrl: `/dataCenter/megatwo-photo-1.jpg`,
            videoUrl: `/dataCenter/megatwo-photo-1.mp4`,
            videoTimeLong: '00:02:23',
            details: {
                title: '设施详情',
                des: '新界沙田火炭黃竹洋街 8-12 號',
                phone: '+852 2208 8338',
                list: [
                    {
                        icon: `/dataCenter/far-fa-building.svg`,
                        text: '175311平方英尺 整体空间',
                    },
                    {
                        icon: `/dataCenter/arcoDesign-common.svg`,
                        text: '93498平方英尺 托管空间',
                    },
                    {
                        icon: `/dataCenter/antOutline-thunderbolt.svg`,
                        text: '15兆瓦 总功率',
                    },
                    {
                        icon: `/dataCenter/iconPark-multi-function-knife.svg`,
                        text: '4 产品',
                    },
                    {
                        icon: `/dataCenter/riLine-flight-takeoff-line.svg`,
                        text: '41.64英里 到最近机场',
                    }
                ]
            },
            standard: {
                hugeText: '我们的机房标准',
                data: [
                    {
                        imgUrl: `/dataCenter/standard1.svg`,
                        firstRowText: 'ISP合作指南',
                        secondRowText: '全球网络ISP合作商超过30余家'
                    },
                    {
                        imgUrl: `/dataCenter/standard2.svg`,
                        firstRowText: '电力可用率',
                        secondRowText: '机房电力可用率：99.99%'
                    },
                    {
                        imgUrl: `/dataCenter/standard3.svg`,
                        firstRowText: 'TA级标准',
                        secondRowText: '国际TA级标准IA-942的T3+等级'
                    },
                    {
                        imgUrl: `/dataCenter/standard4.svg`,
                        firstRowText: '专线互联',
                        secondRowText: '实现全球专线连接网络'
                    }
                ]
            },
            facility: {
                hugeText: '数据中心的设施',
                data: [
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '设施', // 标题
                        list: [
                            {
                                key: '建筑',
                                value: 'IT&T / 工业大厦改建数据中心'
                            },
                            {
                                key: '数据中心面积（GFA）',
                                value: '约429,000平方呎'
                            },
                            {
                                key: '层高',
                                value: '5 m (4.7 m 净空)'
                            },
                            {
                                key: '楼面承重',
                                value: '10-12 帕'
                            },
                            {
                                key: '尺寸',
                                value: '42U、45U、48U、52U机架IT&T / 工业大厦改建数据中心'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '力量', // 标题
                        list: [
                            {
                                key: 'UPS',
                                value: 'N+1 / 2N UPS 配置需要 15 分钟 备用电池'
                            },
                            {
                                key: '电源连接',
                                value: '双电源/UPS 电源到机架'
                            },
                            {
                                key: '电压',
                                value: '220 V / 单相 50 Hz'
                            },
                            {
                                key: '电源供应',
                                value: '每个机架平均 3 kVA 高功率区 高达 9 kVA'
                            },
                            {
                                key: '发电机组',
                                value: '2N设计'
                            },
                            {
                                key: '备用柴油',
                                value: '多个油箱容量 85,000 升'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '冷却', // 标题
                        list: [
                            {
                                key: '机房空调',
                                value: 'N+1 CRAC 设计冷热通道前流/下流系统设计'
                            },
                            {
                                key: '冷水机组',
                                value: '通过双馈独立冷水机立管的双分配路径冷'
                            },
                            {
                                key: '温度',
                                value: '温度22 +/- 2 摄氏度'
                            },
                            {
                                key: '湿度',
                                value: '50 +/- 10%'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '安全', // 标题
                        list: [
                            {
                                key: '监控监控',
                                value: '24 小时监控 CCTV 数字录像'
                            },
                            {
                                key: '楼宇保安',
                                value: '24小时入口保安控制出入'
                            },
                            {
                                key: '访问控制',
                                value: '访问控制系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '火灾和漏水检测', // 标题
                        list: [
                            {
                                key: '灭火',
                                value: '基于气体的 FM-200 / Novec 1230 灭火系统 /'
                            },
                            {
                                key: '漏水检测',
                                value: '远距离式水质检测系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '连通性', // 标题
                        list: [
                            {
                                key: '网络',
                                value: '用于电信电缆接入的双馈楼引入'
                            },
                            {
                                key: '数据线接入',
                                value: 'Cat 5E、Cat 6、SM/MM 光纤、DS3、E1、同轴'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: '香港CTG数据中心',
            id: 2,
            introduce: 'CTG 香港沙田电信数据中心，是中国电信国际 China Telecom Global（CTG）于 2016 年开放的国际 T3+ 标准数据中心。数据中心位于香港新界沙田火炭黄竹洋街 8 号新鸿基物流中心大厦，亦称“中国电信新鸿基数据中心”。恒创科技自发展初期即与 CTG 数据中心达成紧密的长期合作，逐年扩容机柜组、服务器硬件、网络设备及 CN2 带宽资源。',
            pictureUrl: `/dataCenter/xgctg.webp`,
            videoUrl: `/dataCenter/xgctg.mp4`,
            videoTimeLong: '00:04:19',
            details: {
                title: '设施详情',
                des: '新界沙田火炭黃竹洋街8号鸿基物流中心大厦',
                phone: '+852  6789 8689',
                list: [
                    {
                        icon: `/dataCenter/far-fa-building.svg`,
                        text: '386751平方英尺 整体空间',
                    },
                    {
                        icon: `/dataCenter/arcoDesign-common.svg`,
                        text: '386751平方英尺 托管空间',
                    },
                    {
                        icon: `/dataCenter/antOutline-thunderbolt.svg`,
                        text: '15兆瓦 总功率',
                    },
                    {
                        icon: `/dataCenter/iconPark-multi-function-knife.svg`,
                        text: '5 产品',
                    },
                    {
                        icon: `/dataCenter/riLine-flight-takeoff-line.svg`,
                        text: '23.68英里 到最近机场',
                    }
                ]
            },
            standard: {
                hugeText: '我们的机房标准',
                data: [
                    {
                        imgUrl: `/dataCenter/standard1.svg`,
                        firstRowText: 'ISP合作指南',
                        secondRowText: '全球网络ISP合作商超过30余家'
                    },
                    {
                        imgUrl: `/dataCenter/standard2.svg`,
                        firstRowText: '电力可用率',
                        secondRowText: '机房电力可用率：99.99%'
                    },
                    {
                        imgUrl: `/dataCenter/standard3.svg`,
                        firstRowText: 'TA级标准',
                        secondRowText: '国际TA级标准IA-942的T3+等级'
                    },
                    {
                        imgUrl: `/dataCenter/standard4.svg`,
                        firstRowText: '专线互联',
                        secondRowText: '实现全球专线连接网络'
                    }
                ]
            },
            facility: {
                hugeText: '数据中心的设施',
                data: [
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '设施', // 标题
                        list: [
                            {
                                key: '建筑',
                                value: 'IT&T / 工业大厦改建数据中心'
                            },
                            {
                                key: '数据中心面积（GFA）',
                                value: '约429,000平方呎'
                            },
                            {
                                key: '层高',
                                value: '5 m (4.7 m 净空)'
                            },
                            {
                                key: '楼面承重',
                                value: '10-12 帕'
                            },
                            {
                                key: '尺寸',
                                value: '42U、45U、48U、52U机架IT&T / 工业大厦改建数据中心'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '力量', // 标题
                        list: [
                            {
                                key: 'UPS',
                                value: 'N+1 / 2N UPS 配置需要 15 分钟 备用电池'
                            },
                            {
                                key: '电源连接',
                                value: '双电源/UPS 电源到机架'
                            },
                            {
                                key: '电压',
                                value: '220 V / 单相 50 Hz'
                            },
                            {
                                key: '电源供应',
                                value: '每个机架平均 3 kVA 高功率区 高达 9 kVA'
                            },
                            {
                                key: '发电机组',
                                value: '2N设计'
                            },
                            {
                                key: '备用柴油',
                                value: '多个油箱容量 85,000 升'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '冷却', // 标题
                        list: [
                            {
                                key: '机房空调',
                                value: 'N+1 CRAC 设计冷热通道前流/下流系统设计'
                            },
                            {
                                key: '冷水机组',
                                value: '通过双馈独立冷水机立管的双分配路径冷'
                            },
                            {
                                key: '温度',
                                value: '温度22 +/- 2 摄氏度'
                            },
                            {
                                key: '湿度',
                                value: '50 +/- 10%'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '安全', // 标题
                        list: [
                            {
                                key: '监控监控',
                                value: '24 小时监控 CCTV 数字录像'
                            },
                            {
                                key: '楼宇保安',
                                value: '24小时入口保安控制出入'
                            },
                            {
                                key: '访问控制',
                                value: '访问控制系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '火灾和漏水检测', // 标题
                        list: [
                            {
                                key: '灭火',
                                value: '基于气体的 FM-200 / Novec 1230 灭火系统 /'
                            },
                            {
                                key: '漏水检测',
                                value: '远距离式水质检测系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '连通性', // 标题
                        list: [
                            {
                                key: '网络',
                                value: '用于电信电缆接入的双馈楼引入'
                            },
                            {
                                key: '数据线接入',
                                value: 'Cat 5E、Cat 6、SM/MM 光纤、DS3、E1、同轴'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: '香港BDX数据中心',
            id: 3,
            introduce: 'JimCloud香港二期机房位于青衣，拥有低延迟及优质网关，可高速连接内地及世界各地。香港是大陆的出海网关，辐射亚太地区和东南亚地区，香港的IDC基础设施完善，电力供应稳定，以及具备高安全性的数据隐私保护措施。',
            pictureUrl: `/dataCenter/aboutBDx.jpg`,
            videoUrl: `/dataCenter/aboutBDx.mp4`,
            videoTimeLong: '00:01:50',
            details: {
                title: '设施详情',
                des: '香港青衣',
                phone: '+852 833-544-2200',
                list: [
                    {
                        icon: `/dataCenter/far-fa-building.svg`,
                        text: '322578 平方英尺 整体空间',
                    },
                    {
                        icon: `/dataCenter/arcoDesign-common.svg`,
                        text: '87509 平方英尺 托管空间',
                    },
                    {
                        icon: `/dataCenter/antOutline-thunderbolt.svg`,
                        text: '13.5兆瓦 总功率',
                    },
                    {
                        icon: `/dataCenter/iconPark-multi-function-knife.svg`,
                        text: '1500产品',
                    },
                    {
                        icon: `/dataCenter/riLine-flight-takeoff-line.svg`,
                        text: '11.8英里 到最近机场',
                    }
                ]
            },
            standard: {
                hugeText: '我们的机房标准',
                data: [
                    {
                        imgUrl: `/dataCenter/standard1.svg`,
                        firstRowText: 'ISP合作指南',
                        secondRowText: '全球网络ISP合作商超过30余家'
                    },
                    {
                        imgUrl: `/dataCenter/standard2.svg`,
                        firstRowText: '电力可用率',
                        secondRowText: '机房电力可用率：99.99%'
                    },
                    {
                        imgUrl: `/dataCenter/standard3.svg`,
                        firstRowText: 'TA级标准',
                        secondRowText: '国际TA级标准IA-942的T3+等级'
                    },
                    {
                        imgUrl: `/dataCenter/standard4.svg`,
                        firstRowText: '专线互联',
                        secondRowText: '实现全球专线连接网络'
                    }
                ]
            },
            facility: {
                hugeText: '数据中心的设施',
                data: [
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '设施', // 标题
                        list: [
                            {
                                key: '建筑',
                                value: 'IT&T / 工业大厦改建数据中心'
                            },
                            {
                                key: '数据中心面积（GFA）',
                                value: '约429,000平方呎'
                            },
                            {
                                key: '层高',
                                value: '5 m (4.7 m 净空)'
                            },
                            {
                                key: '楼面承重',
                                value: '10-12 帕'
                            },
                            {
                                key: '尺寸',
                                value: '42U、45U、48U、52U机架IT&T / 工业大厦改建数据中心'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '力量', // 标题
                        list: [
                            {
                                key: 'UPS',
                                value: 'N+1 / 2N UPS 配置需要 15 分钟 备用电池'
                            },
                            {
                                key: '电源连接',
                                value: '双电源/UPS 电源到机架'
                            },
                            {
                                key: '电压',
                                value: '220 V / 单相 50 Hz'
                            },
                            {
                                key: '电源供应',
                                value: '每个机架平均 3 kVA 高功率区 高达 9 kVA'
                            },
                            {
                                key: '发电机组',
                                value: '2N设计'
                            },
                            {
                                key: '备用柴油',
                                value: '多个油箱容量 85,000 升'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '冷却', // 标题
                        list: [
                            {
                                key: '机房空调',
                                value: 'N+1 CRAC 设计冷热通道前流/下流系统设计'
                            },
                            {
                                key: '冷水机组',
                                value: '通过双馈独立冷水机立管的双分配路径冷'
                            },
                            {
                                key: '温度',
                                value: '温度22 +/- 2 摄氏度'
                            },
                            {
                                key: '湿度',
                                value: '50 +/- 10%'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '安全', // 标题
                        list: [
                            {
                                key: '监控监控',
                                value: '24 小时监控 CCTV 数字录像'
                            },
                            {
                                key: '楼宇保安',
                                value: '24小时入口保安控制出入'
                            },
                            {
                                key: '访问控制',
                                value: '访问控制系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '火灾和漏水检测', // 标题
                        list: [
                            {
                                key: '灭火',
                                value: '基于气体的 FM-200 / Novec 1230 灭火系统 /'
                            },
                            {
                                key: '漏水检测',
                                value: '远距离式水质检测系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '连通性', // 标题
                        list: [
                            {
                                key: '网络',
                                value: '用于电信电缆接入的双馈楼引入'
                            },
                            {
                                key: '数据线接入',
                                value: 'Cat 5E、Cat 6、SM/MM 光纤、DS3、E1、同轴'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: '美国圣何塞SV1数据中心',
            id: 4,
            introduce: 'JimCloud美国机房位于圣何塞，圣何塞被誉为“硅谷之心”，世界知名大型高科技公司均云集于此。圣何塞位于美国西海岸加利福尼亚州，是中美海底光缆主要登陆站之一，到中国大陆网络延迟最低。全球顶级线路运营商接入机房，网络覆盖整个北美、部分欧洲、亚洲地区。美国机房发展建设早，基础设施完善，是海外服务器最热门的选择。',
            pictureUrl: `/dataCenter/shsSV1.jpg`,
            videoUrl: `/dataCenter/shsSV1.mp4`,
            videoTimeLong: '00:01:38',
            details: {
                title: '设施详情',
                des: '9 Great Oaks Boulevard，圣何塞，加利福尼亚州，美国',
                phone: '+1833-544-2200',
                list: [
                    {
                        icon: `/dataCenter/far-fa-building.svg`,
                        text: '133500平方英尺 整体空间',
                    },
                    {
                        icon: `/dataCenter/arcoDesign-common.svg`,
                        text: '82851平方英尺 托管空间',
                    },
                    {
                        icon: `/dataCenter/antOutline-thunderbolt.svg`,
                        text: '4兆瓦 总功率',
                    },
                    {
                        icon: `/dataCenter/iconPark-multi-function-knife.svg`,
                        text: '0 产品',
                    },
                    {
                        icon: `/dataCenter/riLine-flight-takeoff-line.svg`,
                        text: '41.64英里 到最近机场',
                    }
                ]
            },
            standard: {
                hugeText: '我们的机房标准',
                data: [
                    {
                        imgUrl: `/dataCenter/standard1.svg`,
                        firstRowText: 'ISP合作指南',
                        secondRowText: '全球网络ISP合作商超过30余家'
                    },
                    {
                        imgUrl: `/dataCenter/standard2.svg`,
                        firstRowText: '电力可用率',
                        secondRowText: '机房电力可用率：99.99%'
                    },
                    {
                        imgUrl: `/dataCenter/standard3.svg`,
                        firstRowText: 'TA级标准',
                        secondRowText: '国际TA级标准IA-942的T3+等级'
                    },
                    {
                        imgUrl: `/dataCenter/standard4.svg`,
                        firstRowText: '专线互联',
                        secondRowText: '实现全球专线连接网络'
                    }
                ]
            },
            facility: {
                hugeText: '数据中心的设施',
                data: [
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '设施', // 标题
                        list: [
                            {
                                key: '建筑',
                                value: 'IT&T / 工业大厦改建数据中心'
                            },
                            {
                                key: '数据中心面积（GFA）',
                                value: '约429,000平方呎'
                            },
                            {
                                key: '层高',
                                value: '5 m (4.7 m 净空)'
                            },
                            {
                                key: '楼面承重',
                                value: '10-12 帕'
                            },
                            {
                                key: '尺寸',
                                value: '42U、45U、48U、52U机架IT&T / 工业大厦改建数据中心'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '力量', // 标题
                        list: [
                            {
                                key: 'UPS',
                                value: 'N+1 / 2N UPS 配置需要 15 分钟 备用电池'
                            },
                            {
                                key: '电源连接',
                                value: '双电源/UPS 电源到机架'
                            },
                            {
                                key: '电压',
                                value: '220 V / 单相 50 Hz'
                            },
                            {
                                key: '电源供应',
                                value: '每个机架平均 3 kVA 高功率区 高达 9 kVA'
                            },
                            {
                                key: '发电机组',
                                value: '2N设计'
                            },
                            {
                                key: '备用柴油',
                                value: '多个油箱容量 85,000 升'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '冷却', // 标题
                        list: [
                            {
                                key: '机房空调',
                                value: 'N+1 CRAC 设计冷热通道前流/下流系统设计'
                            },
                            {
                                key: '冷水机组',
                                value: '通过双馈独立冷水机立管的双分配路径冷'
                            },
                            {
                                key: '温度',
                                value: '温度22 +/- 2 摄氏度'
                            },
                            {
                                key: '湿度',
                                value: '50 +/- 10%'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '安全', // 标题
                        list: [
                            {
                                key: '监控监控',
                                value: '24 小时监控 CCTV 数字录像'
                            },
                            {
                                key: '楼宇保安',
                                value: '24小时入口保安控制出入'
                            },
                            {
                                key: '访问控制',
                                value: '访问控制系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '火灾和漏水检测', // 标题
                        list: [
                            {
                                key: '灭火',
                                value: '基于气体的 FM-200 / Novec 1230 灭火系统 /'
                            },
                            {
                                key: '漏水检测',
                                value: '远距离式水质检测系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '连通性', // 标题
                        list: [
                            {
                                key: '网络',
                                value: '用于电信电缆接入的双馈楼引入'
                            },
                            {
                                key: '数据线接入',
                                value: 'Cat 5E、Cat 6、SM/MM 光纤、DS3、E1、同轴'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: '美国圣何塞SF03数据中心',
            id: 5,
            introduce: 'JimCloud美国机房位于圣何塞，圣何塞被誉为“硅谷之心”，世界知名大型高科技公司均云集于此。圣何塞位于美国西海岸加利福尼亚州，是中美海底光缆主要登陆站之一，到中国大陆网络延迟最低。全球顶级线路运营商接入机房，网络覆盖整个北美、部分欧洲、亚洲地区。美国机房发展建设早，基础设施完善，是海外服务器最热门的选择。',
            pictureUrl: `/dataCenter/mgsf03.jpg`,
            videoUrl: `/dataCenter/mgsf03.mp4`,
            videoTimeLong: '00:02:58',
            details: {
                title: '设施详情',
                des: '1735 Lundy Avenue, San Jose, CA, 美国',
                phone: '+1833-544-2200',
                list: [
                    {
                        icon: `/dataCenter/far-fa-building.svg`,
                        text: '103420平方英尺 整体空间',
                    },
                    {
                        icon: `/dataCenter/arcoDesign-common.svg`,
                        text: '54488平方英尺 托管空间',
                    },
                    {
                        icon: `/dataCenter/antOutline-thunderbolt.svg`,
                        text: '4.6兆瓦 总功率',
                    },
                    {
                        icon: `/dataCenter/iconPark-multi-function-knife.svg`,
                        text: '0 产品',
                    },
                    {
                        icon: `/dataCenter/riLine-flight-takeoff-line.svg`,
                        text: '2.49英里 到最近机场',
                    }
                ]
            },
            standard: {
                hugeText: '我们的机房标准',
                data: [
                    {
                        imgUrl: `/dataCenter/standard1.svg`,
                        firstRowText: 'ISP合作指南',
                        secondRowText: '全球网络ISP合作商超过30余家'
                    },
                    {
                        imgUrl: `/dataCenter/standard2.svg`,
                        firstRowText: '电力可用率',
                        secondRowText: '机房电力可用率：99.99%'
                    },
                    {
                        imgUrl: `/dataCenter/standard3.svg`,
                        firstRowText: 'TA级标准',
                        secondRowText: '国际TA级标准IA-942的T3+等级'
                    },
                    {
                        imgUrl: `/dataCenter/standard4.svg`,
                        firstRowText: '专线互联',
                        secondRowText: '实现全球专线连接网络'
                    }
                ]
            },
            facility: {
                hugeText: '数据中心的设施',
                data: [
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '设施', // 标题
                        list: [
                            {
                                key: '建筑',
                                value: 'IT&T / 工业大厦改建数据中心'
                            },
                            {
                                key: '数据中心面积（GFA）',
                                value: '约429,000平方呎'
                            },
                            {
                                key: '层高',
                                value: '5 m (4.7 m 净空)'
                            },
                            {
                                key: '楼面承重',
                                value: '10-12 帕'
                            },
                            {
                                key: '尺寸',
                                value: '42U、45U、48U、52U机架IT&T / 工业大厦改建数据中心'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '力量', // 标题
                        list: [
                            {
                                key: 'UPS',
                                value: 'N+1 / 2N UPS 配置需要 15 分钟 备用电池'
                            },
                            {
                                key: '电源连接',
                                value: '双电源/UPS 电源到机架'
                            },
                            {
                                key: '电压',
                                value: '220 V / 单相 50 Hz'
                            },
                            {
                                key: '电源供应',
                                value: '每个机架平均 3 kVA 高功率区 高达 9 kVA'
                            },
                            {
                                key: '发电机组',
                                value: '2N设计'
                            },
                            {
                                key: '备用柴油',
                                value: '多个油箱容量 85,000 升'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '冷却', // 标题
                        list: [
                            {
                                key: '机房空调',
                                value: 'N+1 CRAC 设计冷热通道前流/下流系统设计'
                            },
                            {
                                key: '冷水机组',
                                value: '通过双馈独立冷水机立管的双分配路径冷'
                            },
                            {
                                key: '温度',
                                value: '温度22 +/- 2 摄氏度'
                            },
                            {
                                key: '湿度',
                                value: '50 +/- 10%'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '安全', // 标题
                        list: [
                            {
                                key: '监控监控',
                                value: '24 小时监控 CCTV 数字录像'
                            },
                            {
                                key: '楼宇保安',
                                value: '24小时入口保安控制出入'
                            },
                            {
                                key: '访问控制',
                                value: '访问控制系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '火灾和漏水检测', // 标题
                        list: [
                            {
                                key: '灭火',
                                value: '基于气体的 FM-200 / Novec 1230 灭火系统 /'
                            },
                            {
                                key: '漏水检测',
                                value: '远距离式水质检测系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '连通性', // 标题
                        list: [
                            {
                                key: '网络',
                                value: '用于电信电缆接入的双馈楼引入'
                            },
                            {
                                key: '数据线接入',
                                value: 'Cat 5E、Cat 6、SM/MM 光纤、DS3、E1、同轴'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: '菲律宾VITRO Makati 2数据中心',
            id: 6,
            introduce: 'JiMCloud菲律宾机房位于马尼拉，菲律宾是东南亚核心国家之一。近几年，菲律宾政府对数据中心行业也开始有更多的关注，对相关产业给予了更多的支持。同时，菲律宾是全球用户数量增长最快的社交媒体国家，菲律宾的蓬勃发展的互联网环境， 让许多企业开始纷纷进军菲律宾。以菲律宾为中心，能辐射到东南亚到各个主要城市。',
            pictureUrl: `/dataCenter/Zenlayer.jpg`,
            videoUrl: `/dataCenter/Zenlayer.mp4`,
            videoTimeLong: '00:01:30',
            details: {
                title: '设施详情',
                des: 'Bagong Ilog, Pasig City, Metro Manila, Philippines',
                phone: '+1 866-417-8330',
                list: [
                    {
                        icon: `/dataCenter/far-fa-building.svg`,
                        text: '175311平方英尺 整体空间',
                    },
                    {
                        icon: `/dataCenter/arcoDesign-common.svg`,
                        text: '93498平方英尺 托管空间',
                    },
                    {
                        icon: `/dataCenter/antOutline-thunderbolt.svg`,
                        text: '4兆瓦 总功率',
                    },
                    {
                        icon: `/dataCenter/iconPark-multi-function-knife.svg`,
                        text: '25 产品',
                    },
                    {
                        icon: `/dataCenter/riLine-flight-takeoff-line.svg`,
                        text: '59英里 到最近机场',
                    }
                ]
            },
            standard: {
                hugeText: '我们的机房标准',
                data: [
                    {
                        imgUrl: `/dataCenter/standard1.svg`,
                        firstRowText: 'ISP合作指南',
                        secondRowText: '全球网络ISP合作商超过30余家'
                    },
                    {
                        imgUrl: `/dataCenter/standard2.svg`,
                        firstRowText: '电力可用率',
                        secondRowText: '机房电力可用率：99.99%'
                    },
                    {
                        imgUrl: `/dataCenter/standard3.svg`,
                        firstRowText: 'TA级标准',
                        secondRowText: '国际TA级标准IA-942的T3+等级'
                    },
                    {
                        imgUrl: `/dataCenter/standard4.svg`,
                        firstRowText: '专线互联',
                        secondRowText: '实现全球专线连接网络'
                    }
                ]
            },
            facility: {
                hugeText: '数据中心的设施',
                data: [
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '设施', // 标题
                        list: [
                            {
                                key: '建筑',
                                value: 'IT&T / 工业大厦改建数据中心'
                            },
                            {
                                key: '数据中心面积（GFA）',
                                value: '约429,000平方呎'
                            },
                            {
                                key: '层高',
                                value: '5 m (4.7 m 净空)'
                            },
                            {
                                key: '楼面承重',
                                value: '10-12 帕'
                            },
                            {
                                key: '尺寸',
                                value: '42U、45U、48U、52U机架IT&T / 工业大厦改建数据中心'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '力量', // 标题
                        list: [
                            {
                                key: 'UPS',
                                value: 'N+1 / 2N UPS 配置需要 15 分钟 备用电池'
                            },
                            {
                                key: '电源连接',
                                value: '双电源/UPS 电源到机架'
                            },
                            {
                                key: '电压',
                                value: '220 V / 单相 50 Hz'
                            },
                            {
                                key: '电源供应',
                                value: '每个机架平均 3 kVA 高功率区 高达 9 kVA'
                            },
                            {
                                key: '发电机组',
                                value: '2N设计'
                            },
                            {
                                key: '备用柴油',
                                value: '多个油箱容量 85,000 升'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '冷却', // 标题
                        list: [
                            {
                                key: '机房空调',
                                value: 'N+1 CRAC 设计冷热通道前流/下流系统设计'
                            },
                            {
                                key: '冷水机组',
                                value: '通过双馈独立冷水机立管的双分配路径冷'
                            },
                            {
                                key: '温度',
                                value: '温度22 +/- 2 摄氏度'
                            },
                            {
                                key: '湿度',
                                value: '50 +/- 10%'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '安全', // 标题
                        list: [
                            {
                                key: '监控监控',
                                value: '24 小时监控 CCTV 数字录像'
                            },
                            {
                                key: '楼宇保安',
                                value: '24小时入口保安控制出入'
                            },
                            {
                                key: '访问控制',
                                value: '访问控制系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '火灾和漏水检测', // 标题
                        list: [
                            {
                                key: '灭火',
                                value: '基于气体的 FM-200 / Novec 1230 灭火系统 /'
                            },
                            {
                                key: '漏水检测',
                                value: '远距离式水质检测系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '连通性', // 标题
                        list: [
                            {
                                key: '网络',
                                value: '用于电信电缆接入的双馈楼引入'
                            },
                            {
                                key: '数据线接入',
                                value: 'Cat 5E、Cat 6、SM/MM 光纤、DS3、E1、同轴'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: '新加坡RACK CENTRAL数据中心',
            id: 7,
            introduce: 'JimCloud新加坡机房位于新加坡，新加坡目前是在亚太最具竞争力的数据中心的国家，新加坡政治稳定、基础设施完善、有良好的政府政策、拥有众多跨国企业的基础。东南亚是亚太互联网蓬勃发展的核心地区之一，同时新加坡拥有优越的地理优势，辐射了东盟市场、澳大利亚等地区，是出海企业的首选。',
            pictureUrl: `/dataCenter/xjpRackCentral.webp`,
            videoUrl: `/dataCenter/xjpRackCentral.mp4`,
            videoTimeLong: '00:02:23',
            details: {
                title: '设施详情',
                des: '1 Serangoon North Ave 6, Singapore',
                phone: '+1 844-370-2500',
                list: [
                    {
                        icon: `/dataCenter/far-fa-building.svg`,
                        text: '157153平方英尺 整体空间',
                    },
                    {
                        icon: `/dataCenter/arcoDesign-common.svg`,
                        text: '98572平方英尺 托管空间',
                    },
                    {
                        icon: `/dataCenter/antOutline-thunderbolt.svg`,
                        text: '7.3兆瓦 总功率',
                    },
                    {
                        icon: `/dataCenter/iconPark-multi-function-knife.svg`,
                        text: '0 产品',
                    },
                    {
                        icon: `/dataCenter/riLine-flight-takeoff-line.svg`,
                        text: '8.08英里 到最近机场',
                    }
                ]
            },
            standard: {
                hugeText: '我们的机房标准',
                data: [
                    {
                        imgUrl: `/dataCenter/standard1.svg`,
                        firstRowText: 'ISP合作指南',
                        secondRowText: '全球网络ISP合作商超过30余家'
                    },
                    {
                        imgUrl: `/dataCenter/standard2.svg`,
                        firstRowText: '电力可用率',
                        secondRowText: '机房电力可用率：99.99%'
                    },
                    {
                        imgUrl: `/dataCenter/standard3.svg`,
                        firstRowText: 'TA级标准',
                        secondRowText: '国际TA级标准IA-942的T3+等级'
                    },
                    {
                        imgUrl: `/dataCenter/standard4.svg`,
                        firstRowText: '专线互联',
                        secondRowText: '实现全球专线连接网络'
                    }
                ]
            },
            facility: {
                hugeText: '数据中心的设施',
                data: [
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '设施', // 标题
                        list: [
                            {
                                key: '建筑',
                                value: 'IT&T / 工业大厦改建数据中心'
                            },
                            {
                                key: '数据中心面积（GFA）',
                                value: '约429,000平方呎'
                            },
                            {
                                key: '层高',
                                value: '5 m (4.7 m 净空)'
                            },
                            {
                                key: '楼面承重',
                                value: '10-12 帕'
                            },
                            {
                                key: '尺寸',
                                value: '42U、45U、48U、52U机架IT&T / 工业大厦改建数据中心'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '力量', // 标题
                        list: [
                            {
                                key: 'UPS',
                                value: 'N+1 / 2N UPS 配置需要 15 分钟 备用电池'
                            },
                            {
                                key: '电源连接',
                                value: '双电源/UPS 电源到机架'
                            },
                            {
                                key: '电压',
                                value: '220 V / 单相 50 Hz'
                            },
                            {
                                key: '电源供应',
                                value: '每个机架平均 3 kVA 高功率区 高达 9 kVA'
                            },
                            {
                                key: '发电机组',
                                value: '2N设计'
                            },
                            {
                                key: '备用柴油',
                                value: '多个油箱容量 85,000 升'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '冷却', // 标题
                        list: [
                            {
                                key: '机房空调',
                                value: 'N+1 CRAC 设计冷热通道前流/下流系统设计'
                            },
                            {
                                key: '冷水机组',
                                value: '通过双馈独立冷水机立管的双分配路径冷'
                            },
                            {
                                key: '温度',
                                value: '温度22 +/- 2 摄氏度'
                            },
                            {
                                key: '湿度',
                                value: '50 +/- 10%'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '安全', // 标题
                        list: [
                            {
                                key: '监控监控',
                                value: '24 小时监控 CCTV 数字录像'
                            },
                            {
                                key: '楼宇保安',
                                value: '24小时入口保安控制出入'
                            },
                            {
                                key: '访问控制',
                                value: '访问控制系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '火灾和漏水检测', // 标题
                        list: [
                            {
                                key: '灭火',
                                value: '基于气体的 FM-200 / Novec 1230 灭火系统 /'
                            },
                            {
                                key: '漏水检测',
                                value: '远距离式水质检测系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '连通性', // 标题
                        list: [
                            {
                                key: '网络',
                                value: '用于电信电缆接入的双馈楼引入'
                            },
                            {
                                key: '数据线接入',
                                value: 'Cat 5E、Cat 6、SM/MM 光纤、DS3、E1、同轴'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: '韩国moack数据中心',
            id: 8,
            introduce: '韩国 Moack数据中心数据中心，是中国电信国际于 2016 年开放的国际 T3+ 标准数据中心。数据中心位LGU 是韩国大型数据中心之一，位于首尔加山，机柜数量超过5000+JimCloud自发展初期即与 Moack 数据中心达成紧密的长期合作，逐年扩容机柜组、服务器硬件、网络设备及 CN2 带宽资源。',
            pictureUrl: `/dataCenter/hg.jpg`,
            videoUrl: `/dataCenter/hg.mp4`,
            videoTimeLong: '00:00:33',
            details: {
                title: '设施详情',
                des: '9 Great Oaks Boulevard，圣何塞，加利福尼亚州，美国',
                phone: '+1833-544-2200',
                list: [
                    {
                        icon: `/dataCenter/far-fa-building.svg`,
                        text: '175311平方英尺 整体空间',
                    },
                    {
                        icon: `/dataCenter/arcoDesign-common.svg`,
                        text: '93498平方英尺 托管空间',
                    },
                    {
                        icon: `/dataCenter/antOutline-thunderbolt.svg`,
                        text: '15兆瓦 总功率',
                    },
                    {
                        icon: `/dataCenter/iconPark-multi-function-knife.svg`,
                        text: '0 产品',
                    },
                    {
                        icon: `/dataCenter/riLine-flight-takeoff-line.svg`,
                        text: '41.64英里 到最近机场',
                    }
                ]
            },
            standard: {
                hugeText: '我们的机房标准',
                data: [
                    {
                        imgUrl: `/dataCenter/standard1.svg`,
                        firstRowText: 'ISP合作指南',
                        secondRowText: '全球网络ISP合作商超过30余家'
                    },
                    {
                        imgUrl: `/dataCenter/standard2.svg`,
                        firstRowText: '电力可用率',
                        secondRowText: '机房电力可用率：99.99%'
                    },
                    {
                        imgUrl: `/dataCenter/standard3.svg`,
                        firstRowText: 'TA级标准',
                        secondRowText: '国际TA级标准IA-942的T3+等级'
                    },
                    {
                        imgUrl: `/dataCenter/standard4.svg`,
                        firstRowText: '专线互联',
                        secondRowText: '实现全球专线连接网络'
                    }
                ]
            },
            facility: {
                hugeText: '数据中心的设施',
                data: [
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '设施', // 标题
                        list: [
                            {
                                key: '建筑',
                                value: 'IT&T / 工业大厦改建数据中心'
                            },
                            {
                                key: '数据中心面积（GFA）',
                                value: '约429,000平方呎'
                            },
                            {
                                key: '层高',
                                value: '5 m (4.7 m 净空)'
                            },
                            {
                                key: '楼面承重',
                                value: '10-12 帕'
                            },
                            {
                                key: '尺寸',
                                value: '42U、45U、48U、52U机架IT&T / 工业大厦改建数据中心'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '力量', // 标题
                        list: [
                            {
                                key: 'UPS',
                                value: 'N+1 / 2N UPS 配置需要 15 分钟 备用电池'
                            },
                            {
                                key: '电源连接',
                                value: '双电源/UPS 电源到机架'
                            },
                            {
                                key: '电压',
                                value: '220 V / 单相 50 Hz'
                            },
                            {
                                key: '电源供应',
                                value: '每个机架平均 3 kVA 高功率区 高达 9 kVA'
                            },
                            {
                                key: '发电机组',
                                value: '2N设计'
                            },
                            {
                                key: '备用柴油',
                                value: '多个油箱容量 85,000 升'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '冷却', // 标题
                        list: [
                            {
                                key: '机房空调',
                                value: 'N+1 CRAC 设计冷热通道前流/下流系统设计'
                            },
                            {
                                key: '冷水机组',
                                value: '通过双馈独立冷水机立管的双分配路径冷'
                            },
                            {
                                key: '温度',
                                value: '温度22 +/- 2 摄氏度'
                            },
                            {
                                key: '湿度',
                                value: '50 +/- 10%'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '安全', // 标题
                        list: [
                            {
                                key: '监控监控',
                                value: '24 小时监控 CCTV 数字录像'
                            },
                            {
                                key: '楼宇保安',
                                value: '24小时入口保安控制出入'
                            },
                            {
                                key: '访问控制',
                                value: '访问控制系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '火灾和漏水检测', // 标题
                        list: [
                            {
                                key: '灭火',
                                value: '基于气体的 FM-200 / Novec 1230 灭火系统 /'
                            },
                            {
                                key: '漏水检测',
                                value: '远距离式水质检测系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '连通性', // 标题
                        list: [
                            {
                                key: '网络',
                                value: '用于电信电缆接入的双馈楼引入'
                            },
                            {
                                key: '数据线接入',
                                value: 'Cat 5E、Cat 6、SM/MM 光纤、DS3、E1、同轴'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: '台湾台北数据中心',
            id: 9,
            introduce: '台湾作为亚太区的重要互联地区，自然成为跨境业务的多点冗余选择之一。JimCloudTier3+台湾机房靠近多条海缆登陆点，与中国电信、PCCW、NTT等多家顶级电信运营商合作，接入高冗余出口带宽。JimCloud台湾服务器更是针对内地网络推出回国优化线路。基于全冗余网络架构，三网直连线路高速直连中国内地骨干网络，确保低延迟高稳定表现。',
            pictureUrl: `/dataCenter/tb.webp`,
            videoUrl: `/dataCenter/tb.mp4`,
            videoTimeLong: '00:01:30',
            details: {
                title: '设施详情',
                des: '9 Great Oaks Boulevard，圣何塞，加利福尼亚州，美国',
                phone: '+1833-544-2200',
                list: [
                    {
                        icon: `/dataCenter/far-fa-building.svg`,
                        text: '175311平方英尺 整体空间',
                    },
                    {
                        icon: `/dataCenter/arcoDesign-common.svg`,
                        text: '93498平方英尺 托管空间',
                    },
                    {
                        icon: `/dataCenter/antOutline-thunderbolt.svg`,
                        text: '15兆瓦 总功率',
                    },
                    {
                        icon: `/dataCenter/iconPark-multi-function-knife.svg`,
                        text: '0 产品',
                    },
                    {
                        icon: `/dataCenter/riLine-flight-takeoff-line.svg`,
                        text: '41.64英里 到最近机场',
                    }
                ]
            },
            standard: {
                hugeText: '我们的机房标准',
                data: [
                    {
                        imgUrl: `/dataCenter/standard1.svg`,
                        firstRowText: 'ISP合作指南',
                        secondRowText: '全球网络ISP合作商超过30余家'
                    },
                    {
                        imgUrl: `/dataCenter/standard2.svg`,
                        firstRowText: '电力可用率',
                        secondRowText: '机房电力可用率：99.99%'
                    },
                    {
                        imgUrl: `/dataCenter/standard3.svg`,
                        firstRowText: 'TA级标准',
                        secondRowText: '国际TA级标准IA-942的T3+等级'
                    },
                    {
                        imgUrl: `/dataCenter/standard4.svg`,
                        firstRowText: '专线互联',
                        secondRowText: '实现全球专线连接网络'
                    }
                ]
            },
            facility: {
                hugeText: '数据中心的设施',
                data: [
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '设施', // 标题
                        list: [
                            {
                                key: '建筑',
                                value: 'IT&T / 工业大厦改建数据中心'
                            },
                            {
                                key: '数据中心面积（GFA）',
                                value: '约429,000平方呎'
                            },
                            {
                                key: '层高',
                                value: '5 m (4.7 m 净空)'
                            },
                            {
                                key: '楼面承重',
                                value: '10-12 帕'
                            },
                            {
                                key: '尺寸',
                                value: '42U、45U、48U、52U机架IT&T / 工业大厦改建数据中心'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '力量', // 标题
                        list: [
                            {
                                key: 'UPS',
                                value: 'N+1 / 2N UPS 配置需要 15 分钟 备用电池'
                            },
                            {
                                key: '电源连接',
                                value: '双电源/UPS 电源到机架'
                            },
                            {
                                key: '电压',
                                value: '220 V / 单相 50 Hz'
                            },
                            {
                                key: '电源供应',
                                value: '每个机架平均 3 kVA 高功率区 高达 9 kVA'
                            },
                            {
                                key: '发电机组',
                                value: '2N设计'
                            },
                            {
                                key: '备用柴油',
                                value: '多个油箱容量 85,000 升'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '冷却', // 标题
                        list: [
                            {
                                key: '机房空调',
                                value: 'N+1 CRAC 设计冷热通道前流/下流系统设计'
                            },
                            {
                                key: '冷水机组',
                                value: '通过双馈独立冷水机立管的双分配路径冷'
                            },
                            {
                                key: '温度',
                                value: '温度22 +/- 2 摄氏度'
                            },
                            {
                                key: '湿度',
                                value: '50 +/- 10%'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '安全', // 标题
                        list: [
                            {
                                key: '监控监控',
                                value: '24 小时监控 CCTV 数字录像'
                            },
                            {
                                key: '楼宇保安',
                                value: '24小时入口保安控制出入'
                            },
                            {
                                key: '访问控制',
                                value: '访问控制系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '火灾和漏水检测', // 标题
                        list: [
                            {
                                key: '灭火',
                                value: '基于气体的 FM-200 / Novec 1230 灭火系统 /'
                            },
                            {
                                key: '漏水检测',
                                value: '远距离式水质检测系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '连通性', // 标题
                        list: [
                            {
                                key: '网络',
                                value: '用于电信电缆接入的双馈楼引入'
                            },
                            {
                                key: '数据线接入',
                                value: 'Cat 5E、Cat 6、SM/MM 光纤、DS3、E1、同轴'
                            }
                        ]
                    }
                ]
            }
        },
        {
            name: '柬埔寨数据中心',
            id: 10,
            introduce: 'JimCloud香港一期机房位于沙田，拥有低延迟及优质网关，可高速连接内地及世界各地。香港是大陆的出海网关，辐射亚太地区和东南亚地区，香港的IDC基础设施完善，电力供应稳定，以及具备高安全性的数据隐私保护措施。',
            pictureUrl: `/dataCenter/megatwo-photo-1.jpg`,
            videoUrl: `/dataCenter/megatwo-photo-1.mp4`,
            videoTimeLong: '00:02:23',
            details: {
                title: '设施详情',
                des: '9 Great Oaks Boulevard，圣何塞，加利福尼亚州，美国',
                phone: '+1833-544-2200',
                list: [
                    {
                        icon: `/dataCenter/far-fa-building.svg`,
                        text: '175311平方英尺 整体空间',
                    },
                    {
                        icon: `/dataCenter/arcoDesign-common.svg`,
                        text: '93498平方英尺 托管空间',
                    },
                    {
                        icon: `/dataCenter/antOutline-thunderbolt.svg`,
                        text: '15兆瓦 总功率',
                    },
                    {
                        icon: `/dataCenter/iconPark-multi-function-knife.svg`,
                        text: '0 产品',
                    },
                    {
                        icon: `/dataCenter/riLine-flight-takeoff-line.svg`,
                        text: '41.64英里 到最近机场',
                    }
                ]
            },
            standard: {
                hugeText: '我们的机房标准',
                data: [
                    {
                        imgUrl: `/dataCenter/standard1.svg`,
                        firstRowText: 'ISP合作指南',
                        secondRowText: '全球网络ISP合作商超过30余家'
                    },
                    {
                        imgUrl: `/dataCenter/standard2.svg`,
                        firstRowText: '电力可用率',
                        secondRowText: '机房电力可用率：99.99%'
                    },
                    {
                        imgUrl: `/dataCenter/standard3.svg`,
                        firstRowText: 'TA级标准',
                        secondRowText: '国际TA级标准IA-942的T3+等级'
                    },
                    {
                        imgUrl: `/dataCenter/standard4.svg`,
                        firstRowText: '专线互联',
                        secondRowText: '实现全球专线连接网络'
                    }
                ]
            },
            facility: {
                hugeText: '数据中心的设施',
                data: [
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '设施', // 标题
                        list: [
                            {
                                key: '建筑',
                                value: 'IT&T / 工业大厦改建数据中心'
                            },
                            {
                                key: '数据中心面积（GFA）',
                                value: '约429,000平方呎'
                            },
                            {
                                key: '层高',
                                value: '5 m (4.7 m 净空)'
                            },
                            {
                                key: '楼面承重',
                                value: '10-12 帕'
                            },
                            {
                                key: '尺寸',
                                value: '42U、45U、48U、52U机架IT&T / 工业大厦改建数据中心'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '力量', // 标题
                        list: [
                            {
                                key: 'UPS',
                                value: 'N+1 / 2N UPS 配置需要 15 分钟 备用电池'
                            },
                            {
                                key: '电源连接',
                                value: '双电源/UPS 电源到机架'
                            },
                            {
                                key: '电压',
                                value: '220 V / 单相 50 Hz'
                            },
                            {
                                key: '电源供应',
                                value: '每个机架平均 3 kVA 高功率区 高达 9 kVA'
                            },
                            {
                                key: '发电机组',
                                value: '2N设计'
                            },
                            {
                                key: '备用柴油',
                                value: '多个油箱容量 85,000 升'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '冷却', // 标题
                        list: [
                            {
                                key: '机房空调',
                                value: 'N+1 CRAC 设计冷热通道前流/下流系统设计'
                            },
                            {
                                key: '冷水机组',
                                value: '通过双馈独立冷水机立管的双分配路径冷'
                            },
                            {
                                key: '温度',
                                value: '温度22 +/- 2 摄氏度'
                            },
                            {
                                key: '湿度',
                                value: '50 +/- 10%'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '安全', // 标题
                        list: [
                            {
                                key: '监控监控',
                                value: '24 小时监控 CCTV 数字录像'
                            },
                            {
                                key: '楼宇保安',
                                value: '24小时入口保安控制出入'
                            },
                            {
                                key: '访问控制',
                                value: '访问控制系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '火灾和漏水检测', // 标题
                        list: [
                            {
                                key: '灭火',
                                value: '基于气体的 FM-200 / Novec 1230 灭火系统 /'
                            },
                            {
                                key: '漏水检测',
                                value: '远距离式水质检测系统'
                            }
                        ]
                    },
                    {
                        icon: `/dataCenter/facility.png`, // 图标
                        title: '连通性', // 标题
                        list: [
                            {
                                key: '网络',
                                value: '用于电信电缆接入的双馈楼引入'
                            },
                            {
                                key: '数据线接入',
                                value: 'Cat 5E、Cat 6、SM/MM 光纤、DS3、E1、同轴'
                            }
                        ]
                    }
                ]
            }
        }
    ]
}