// 头部 
export let header = {
    hugeText: '网络挂载',
    des: '网络挂载硬盘可以为物理服务器提供高效、灵活、可靠的存储解决方案，同时也可以带来数据备份、容灾、高可用等优点。此外，网络挂载硬盘还支持在线扩容、多种加密方式等丰富的功能和特性，能够更好地满足不同业务场景的需求',
    bgImg: `/serverRental/header.png`,
    btns: [
        {
            text: '立即使用',
            path: '',
            type: 'primary',
            plain: false,
            link: false
        },
        {
            text: '帮助文档',
            path: '',
            type: 'primary',
            plain: true,
            link: false
        }
    ]
}

// 固定导航
export let fixNav = [
    {
        label: '产品优势',
        href: '#advantage',
        top: 0
    },
    {
        label: '推荐产品',
        href: '#hot',
        top: 1058
    },
    {
        label: '应用场景',
        href: '#scene',
        top: 1642
    },
    {
        label: '相关产品',
        href: '#same',
        top: 2333
    }
]

/**
 * 产品优势
 */
export let advantage = {
    headline: '产品优势',
    data: [
        {
            imgUrl: `/cooperativePartner/joinus1.png`,
            title: '数据安全',
            des: 'CDS提供实时监控IOPS和吞吐量，掌握硬盘监控情况',
            detail: '单盘容量最大支持32TB，单个主机CVM可挂载16块云硬盘，累计512TB。您可以自由配置存储容量，按需扩容，以满足您的业务数据需求，轻松应对 TB/PB 级的大数据处理。',
            btn: {
                text: '加入我们',
                url: ''
            }
        },
        {
            imgUrl: `/cooperativePartner/joinus1.png`,
            title: '弹性配置',
            des: '支持自动化部署和弹性伸缩，随着业务需求变化，自动调整节点数量和计算资源，提高系统的可扩展性和灵活性',
            detail: '单磁盘容量最大支持32TB，单个 CVM 累计可挂载640TB，您可以自由配置存储容量，按需扩容，以满足您的业务数据扩容需求，灵活应对 TB/PB 级数据的大数据处理场景。',
            btn: {
                text: '加入我们',
                url: ''
            }
        },
        {
            imgUrl: `/cooperativePartner/joinus1.png`,
            title: '容灾备份',
            des: '支持备份数据的快速恢复，包括定期备份和实时备份等多种方式，确保数据安全可靠',
            detail: 'JimCloud CBS 提供高达99.9999999%的数据可靠性以保护您的应用程序免受组件故障的威胁。',
            btn: {
                text: '加入我们',
                url: ''
            }
        },
        {
            imgUrl: `/cooperativePartner/joinus1.png`,
            title: '简单易用',
            des: '提供简单易用的控制台和API接口，方便用户管理和操作硬盘及相关资源',
            detail: '通过简单的创建、挂载、卸载、删除等操作即可管理及使用云硬盘，节省人工管理部署成本。',
            btn: {
                text: '加入我们',
                url: ''
            }
        }
    ]
}


// 应用场景
export let scene = {
    headline: '应用场景',
    data: [
        {
            name: '高性能计算',
            img: `/nkMount/scene1.svg`,
            list: [
                {
                    title: '高性能计算',
                    list: [
                        '高性能计算应用场景，部署分布式文件系统，如Lustre，需要高性能存储的支持。建议选用建议选用极速型SSD、超高IO云硬盘'
                    ]
                },
                {
                    title: '优势',
                    list: [
                        '超高性能：单盘最高50,000 IOPS，350MB/s吞吐量',
                        '超低时延：访问时延低至1ms',
                        '大容量：单盘最大容量达32TB'
                    ]
                }
            ]
        },
        {
            name: 'NoSQL/关系数据库 ',
            img: `/nkMount/scene2.svg`,
            list: [
                {
                    title: 'NoSQL/关系型数据库/数据仓库',
                    list: [
                        '适用于读写密集型应用场景，部署各类数据库、数据仓库，如SQL Server、MySQL、RAC 、SAP HANA等，建议选用极速型SSD、超高IO云硬盘'
                    ]
                },
                {
                    title: '优势',
                    list: [
                        '超高性能：单盘最高50,000 IOPS，350MB/s吞吐量',
                        '超低时延：访问时延低至1ms',
                        '大容量：单盘最大容量达32TB'
                    ]
                }
            ]
        },
        {
            name: '企业核心集群应用',
            img: `/nkMount/scene3.svg`,
            list: [
                {
                    title: '企业核心集群应用',
                    list: [
                        '适用于企业核心集群应用系统，如Microsoft 故障转移集群(WSFS)、RAC等，利用共享云硬盘，满足集群应用系统的部署要求'
                    ]
                },
                {
                    title: '优势',
                    list: [
                        '高性能：BMS 与共享云硬盘结合， 为集群应用提供更高性能',
                        '支持多实例：可同时挂载给16个实例，支持更复杂的集群应用',
                        '高可靠：3副本备份，数据持久性达99.9999999%，保障数据安全可靠'
                    ]
                }
            ]
        },
        {
            name: '企业应用系统',
            img: `/nkMount/scene4.svg`,
            list: [
                {
                    title: '企业应用系统',
                    list: [
                        '该场景部署企业关键应用程序，如SAP、Microsoft Exchange 和 Microsoft SharePoint。建议选用通用型SSD云硬盘，满足企业组织多样化的办公需求'
                    ]
                },
                {
                    title: '优势',
                    list: [
                        '高可靠：3副本存储，数据持久性高达99.9999999%',
                        '高扩展：硬盘可随时扩容，性能线性增长',
                        '大容量：单盘最大容量达32TB'
                    ]
                }
            ]
        },
        {
            name: '开发测试',
            img: `/nkMount/scene5.svg`,
            list: [
                {
                    title: '开发测试',
                    list: [
                        '该场景部署开发测试应用程序。建议选用通用型SSD或高IO云硬盘，满足开发、测试、部署、运维的需求'
                    ]
                },
                {
                    title: '优势',
                    list: [
                        '高可靠：3副本存储，数据持久性高达99.9999999%',
                        '高扩展：硬盘可随时扩容，性能线性增长',
                        '大容量：单盘最大容量达32TB'
                    ]
                }
            ]
        }
    ]
}

// 相关产品
export let sameProduct = {
    headline: '相关产品',
    data: [
        {
            title: '香港独立服务器',
            des: '接入 CTGNet/CN2 GIA、HGC、HKBN 等高速回国网络,中国访问稳定时延 30-60ms',
            path: '',
            img: `/nkMount/same1.png`
        },
        {
            title: '美国独立服务器',
            des: '接入 CTGNet/CN2 GIA 高速回国，中国访问稳定时延 120-180ms',
            path: '',
            img: `/nkMount/same1.png`
        },
        {
            title: '香港站群服务器',
            des: '接入 CTGNet/CN2 GIA、HGC、HKBN 等高速回国网络务,中国访问稳定时延 30-60ms',
            path: '',
            img: `/nkMount/same1.png`
        }
    ]
}
