<template>
    <!-- 配置 -->
    <ModuleCard :showHeader="false" :isPadding="false">
        <div class="ecs-config">

            <!-- 标题 -->
            <div class="caption">弹性云服务器</div>
            <el-tabs v-model="baseConfig">
                <el-tab-pane label="基础配置" name="config">
                    <!-- 表单 -->
                    <el-form :model="ecsForm" label-position="left" label-width="120px">
                        <!-- 区域 -->
                        <el-form-item label="地域">
                            <div>
                                <el-radio-group v-model="ecsForm.area" size="large">
                                    <el-radio border label="中国" />
                                    <el-radio border label="韩国" />
                                    <el-radio border label="日本" />
                                </el-radio-group>
                                <div class="tips">
                                    不同地域的实例之间内网互不相通；选择靠近您客户的地域，可降低网络时延、提高您客户的访问速度
                                </div>
                            </div>

                        </el-form-item>


                        <!-- 可用区 -->
                        <el-form-item label="可用区">
                            <div>
                                <el-radio-group v-model="ecsForm.validArea">
                                    <el-radio label="a" size="large" border>香港A区</el-radio>
                                    <el-radio label="b" size="large" border>香港B区</el-radio>
                                    <el-radio label="c" size="large" border>香港C区</el-radio>
                                    <el-radio label="d" size="large" border>香港E区</el-radio>
                                </el-radio-group>
                                <div class="tips">
                                    不同地域的实例之间内网互不相通；选择靠近您客户的地域，可降低网络时延、提高您客户的访问速度
                                </div>
                            </div>
                        </el-form-item>


                        <!-- 实例 -->
                        <el-form-item label="实例">
                            <el-tabs v-model="instance" style="width: 100%" class="instance">
                                <el-tab-pane label="快速配置" name="rapid">
                                    <div class="rapid">
                                        <el-card v-for="item in 3" @click="switchRapidItem(item)"
                                            :class="{ 'rapid-active': ecsForm.instanceRapid == item }">
                                            <div class="title">基础配置（2核8GB）</div>
                                            <div class="item">有一定访问量网站或APP</div>
                                            <div class="item">系统盘：50GB,通用型SSD云硬盘</div>
                                            <div class="item">数据盘：无</div>
                                        </el-card>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="自定义配置" name="custom">
                                    <el-table :data="customConfig" ref="customConfigTableRef" :highlight-current-row="true"
                                        border style="width: 100%" @current-change="handleCurrentChange">
                                        <el-table-column prop="example" label="实例" />
                                        <el-table-column prop="VCPU" label="VCPU" width="90" />
                                        <el-table-column prop="RAM" label="内存" width="90" />
                                        <el-table-column prop="systemDisk" label="系统盘" width="90" />
                                        <el-table-column prop="dataDisk" label="数据盘" width="90" />
                                        <el-table-column prop="IPv4" label="IPv4" width="90" />
                                        <el-table-column prop="price" label="参考费用">
                                            <template #default="scope">
                                                <span class="table-price">{{ scope.row.price }}</span>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </el-tab-pane>
                            </el-tabs>
                        </el-form-item>

                        <!-- 数据盘 -->
                        <el-form-item v-if="instance == 'custom'" label="数据盘">
                            <el-table :data="dataDisks" border style="width: 100%"
                                :row-style="{ position: 'relative', 'z-index': 0 }">
                                <el-table-column prop="name" label="用途" width="150" />
                                <el-table-column prop="type" label="类型">
                                    <template #default="scope">
                                        <div class="datadisk-type">
                                            <el-select v-model="scope.row.type" size="large">
                                                <el-option label="通用型SSD云硬盘" value="通用型SSD云硬盘" />
                                                <el-option label="通用型SSD云硬盘" value="通用型SSD云硬盘" />
                                            </el-select>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="num" label="容量">
                                    <template #default="scope">
                                        <el-input-number v-model="scope.row.num" :min="1" /> GB
                                    </template>
                                </el-table-column>
                                <el-table-column prop="num" label="容量">
                                    <template #default="scope">
                                        <el-input-number v-model="scope.row.num" :min="1" /> GB
                                    </template>
                                </el-table-column>
                                <template #append>
                                    <div class="dataDisk-btn">
                                        <span @click="addDataDisk">添加数据盘</span> 你还可添加20个
                                    </div>
                                </template>
                            </el-table>
                        </el-form-item>

                        <!-- 带宽 -->
                        <el-form-item v-if="instance == 'custom'" label="带宽">
                            <el-slider v-model="ecsForm.bandwidth" style="width: 900px;" :min="1" :max="30"
                                :show-tooltip="false" show-input />
                        </el-form-item>

                        <!-- 操作系统 -->
                        <el-form-item label="操作系统">
                            <el-select v-model="ecsForm.os1" :teleported="false" style="margin-right: 10px;" size="large">
                                <el-option label="CentOS" value="CentOS" />
                                <el-option label="Windows" value="Windows" />
                            </el-select>
                            <el-select v-model="ecsForm.os2" :teleported="false" size="large">
                                <el-option label="CentOS 06" value="CentOS 06" />
                                <el-option label="CentOS 07" value="CentOS 07" />
                            </el-select>
                        </el-form-item>

                        <!-- 网络类型 -->
                        <el-form-item label="网络类型">
                            <el-radio-group v-model="ecsForm.networkType">
                                <el-radio label="VPC网络" size="large" border>VPC网络</el-radio>
                                <el-radio label="经典网络" size="large" border>经典网络</el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <!-- 安全组 -->
                        <el-form-item label="安全组">
                            <div>
                                <el-radio-group v-model="ecsForm.securityGroup">
                                    <el-radio label="默认安全组" size="large" border>默认安全组</el-radio>
                                </el-radio-group>
                                <div class="tips">
                                    更多实例配置，请选择 <el-button type="primary" link>自定义配置</el-button>
                                </div>
                            </div>
                        </el-form-item>


                        <!-- 登录方式 -->
                        <el-form-item label="登录方式">
                            <div>
                                <el-radio-group v-model="loginType" size="large">
                                    <el-radio-button label="auto">自动生成密码</el-radio-button>
                                    <el-radio-button label="custom">自定义密码</el-radio-button>
                                </el-radio-group>
                                <div style="margin-top: 20px; width: 400px;">
                                    <el-form-item label="登录密码：" style="margin-bottom: 15px;" label-width="90">
                                        <el-input size="large" v-model="ecsForm.password" show-password>
                                            <template #append>
                                                <el-button @click="switchPassword" :icon="RefreshLeft" />
                                            </template>
                                        </el-input>
                                    </el-form-item>
                                    <el-form-item label="确认密码：" style="margin-bottom: 0px;" label-width="90">
                                        <el-input size="large" v-model="ecsForm.password" show-password>
                                        </el-input>
                                    </el-form-item>
                                </div>
                            </div>
                        </el-form-item>

                        <!-- 购买数量 -->
                        <el-form-item label="购买数量">
                            <el-input-number v-model="ecsForm.buyNum" :min="1" />
                        </el-form-item>

                        <!-- 购买时长 -->
                        <el-form-item label="购买时长">
                            <el-select v-model="ecsForm.buyTime" :teleported="false">
                                <el-option label="每月" value="每月" />
                                <el-option label="每季" value="每季" />
                                <el-option label="半年" value="半年" />
                                <el-option label="每年" value="每年" />
                            </el-select>
                        </el-form-item>

                        <!-- 自动续费 -->
                        <el-form-item label="自动续费">
                            <el-checkbox v-model="ecsForm.autoRenew" label="自动续费" size="large" />
                        </el-form-item>

                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </div>
    </ModuleCard>

    <!-- 总计 -->
    <div class="total">
        <ModuleCard :showHeader="false" :isPadding="false">
            <div class="content">
                <div class="left">配置价格：<span class="vip-price">$1111.11</span><span
                        class="original-price">原价：$3000.00</span>
                </div>
                <div class="right">
                    <el-popover :teleported="false" placement="top-start" title="配置详情" :offset="20" :width="300"
                        trigger="click">
                        <template #reference>
                            <el-button link>配置费用详情</el-button>
                        </template>
                        <div class="config-list">

                            <div class="item">
                                <div class="title">地域</div>
                                <div class="text">
                                    <span class="info">中国</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">可用区</div>
                                <div class="text">
                                    <span class="info">香港C区</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">网络类型</div>
                                <div class="text">
                                    <span class="info">VPC网络</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">CPU</div>
                                <div class="text">
                                    <span class="info">1 Core</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">内存</div>
                                <div class="text">
                                    <span class="info">1 GB</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">操作系统</div>
                                <div class="text">
                                    <span class="info">CentOS-7.6.1810-x64</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">系统盘</div>
                                <div class="text">
                                    <span class="info">40 GB</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">数据盘</div>
                                <div class="text">
                                    <span class="info">0 GB</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">公网带宽</div>
                                <div class="text">
                                    <span class="info">1 Mbps</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">IPv4</div>
                                <div class="text">
                                    <span class="info">1</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item-num">
                                <span class="info">购买数量</span>
                                <span class="price">1</span>
                            </div>

                            <div class="total-price">
                                <span class="info">总价</span>
                                <span class="price">$12.50USD</span>
                            </div>
                        </div>
                    </el-popover>

                    <el-button type="primary" size="large" @click="goView('/order')">立即购买</el-button>
                </div>
            </div>
        </ModuleCard>
    </div>
</template>


<script lang="ts" setup>
import { ElTable } from 'element-plus'
import { RefreshLeft } from '@element-plus/icons-vue'

let router = useRouter()
let goView = (str: string)=>{
    router.push(str)
}

// 云服务器表单
let ecsForm = reactive({
    area: '中国', // 地域
    validArea: 'a', // 可用区
    instanceRapid: 1, //
    bandwidth: 10,
    os1: 'CentOS',
    os2: 'CentOS 06',
    networkType: 'VPC网络',
    securityGroup: '默认安全组',
    password: '',
    confirmPassword: '',
    buyNum: 1,
    buyTime: '每月',
    autoRenew: true,
})

// 基础配置
let baseConfig = ref('config')

// 实例 默认快速配重
let instance = ref('rapid')
let switchRapidItem = (num: any) => {
    ecsForm.instanceRapid = num
}

// 实例 自定义配置
let customConfig = reactive([
    {
        example: '标准型S6',
        VCPU: '1 Core',
        RAM: '1 GB',
        systemDisk: '40 GB',
        dataDisk: '0 GB',
        IPv4: '1个',
        price: '$135/月'
    },
    {
        example: '标准型S7',
        VCPU: '2 Core',
        RAM: '4 GB',
        systemDisk: '40 GB',
        dataDisk: '0 GB',
        IPv4: '1个',
        price: '$135/月'
    },
    {
        example: '标准型S8',
        VCPU: '4 Core',
        RAM: '8 GB',
        systemDisk: '40 GB',
        dataDisk: '0 GB',
        IPv4: '1个',
        price: '$135/月'
    }
])
const currentRow = ref()
const customConfigTableRef = ref<InstanceType<typeof ElTable>>()
const handleCurrentChange = (val: any | undefined) => {
    currentRow.value = val
    console.log(currentRow.value)
}

// 数据盘
let dataDisks = reactive([
    {
        name: '数据盘',
        type: '通用型SSD云硬盘',
        num: 1
    }
])
// 添加数据盘
let addDataDisk = () => {
    if (dataDisks.length >= 20) {
        return
    }
    dataDisks.push({
        name: '数据盘',
        type: '通用型SSD云硬盘',
        num: 1
    })
}

// 密码生成
let loginType = ref('custom')
watch(loginType, () => {
    switchPassword()
})
// 生成随机密码
function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    return password
}
// 切换随机密码
let switchPassword = () => {
    let pw = ''
    if (loginType.value == 'auto') {
        pw = createPassword()
    }
    ecsForm.password = pw
    ecsForm.confirmPassword = pw
}

</script>



<style lang="less" scoped>
.datadisk-type {
    /deep/ .el-select-dropdown {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
    }
}


.table-price {
    color: @primary-color;
}

// 配置
.ecs-config {
    margin: 30px 0;

    // 标题
    .caption {
        font-size: @h2-text-size;
        color: @primary-text-color;
        margin-bottom: 25px;
    }

    // 表单
    .el-form {
        margin-top: 20px;

        .el-form-item {
            margin-bottom: 55px;
        }
    }


    // 实例
    .instance {
        .rapid {
            padding: 10px;
            display: flex;

            .el-card {
                font-size: @h7-text-size;
                margin-right: 10px;
                cursor: pointer;

                div {
                    line-height: 1.5;
                }

                .title {
                    color: @primary-text-color;
                }

                .item {
                    color: @regular-text-color;
                }
            }

            .rapid-active {
                border-color: @primary-color;
                box-shadow: 0px 0px 5px @primary-color;
                background-color: #fff9f5;
            }
        }
    }

    // 提示
    .tips {
        font-size: @h7-text-size;
        color: @regular-text-color;
        margin-top: 10px;
    }

}

.dataDisk-btn {
    padding: 10px 0;
    text-align: center;

    span {
        color: @primary-color;
        cursor: pointer;
    }
}

// 总计
.total {
    box-shadow: 0px 0px 13px 4px rgb(233, 232, 232);

    .content {
        padding: 30px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
            font-size: @h5-text-size;
            color: @primary-text-color;

            .vip-price {
                margin-right: 20px;
                font-size: @h2-text-size;
                color: @primary-color;
            }

            .original-price {
                font-size: @h6-text-size;
                color: @regular-text-color;
                text-decoration: line-through;
            }
        }

        .right {
            display: flex;
            align-items: end;

            .el-button {
                margin-left: 50px;
            }

            .config-list {
                font-size: @h5-text-size;

                .item {
                    margin-top: 5px;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 5px;
                    .title {
                        margin-bottom: 5px;
                        color: @regular-text-color;
                        font-weight: 600;
                        font-size: @h6-text-size;
                    }

                    .text {
                        display: flex;
                        justify-content: space-between;
                        color: @primary-text-color;
                        font-size: @h7-text-size;

                        .info{
                            width: 180px;
                        }

                        .price {
                            color: @primary-text-color;
                            font-weight: 600;
                        }
                    }

                }
                .item-num,.total-price{
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #eee;
                    padding: 10px 0;
                }
                .total-price {
                    .price{
                        font-size: @h3-text-size;
                        color: @primary-color;
                    }
                }
            }
        }
    }
}
</style>