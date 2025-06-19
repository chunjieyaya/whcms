<template>
    <!-- 配置 -->
    <ModuleCard :showHeader="false" :isPadding="false">
        <div class="server-config">

            <!-- 标题 -->
            <div class="caption">主机租赁</div>
            <el-tabs v-model="baseConfig">
                <el-tab-pane label="基础配置" name="config">
                    <!-- 表单 -->
                    <el-form :model="serverForm" label-position="left" label-width="120px">
                        <!-- 区域 -->
                        <el-form-item label="地域">
                            <div>
                                <el-radio-group v-model="serverForm.area" size="large">
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
                        <el-form-item label="产品类别">
                            <div>
                                <el-radio-group v-model="serverForm.productType">
                                    <el-radio label="a" size="large" border>香港CN2</el-radio>
                                    <el-radio label="b" size="large" border>香港站群</el-radio>
                                    <el-radio label="c" size="large" border>香港GPU</el-radio>
                                    <el-radio label="d" size="large" border>香港CLA</el-radio>
                                </el-radio-group>
                                <div class="tips">
                                    不同地域的实例之间内网互不相通；选择靠近您客户的地域，可降低网络时延、提高您客户的访问速度
                                </div>
                            </div>
                        </el-form-item>


                        <!-- 实例 -->
                        <el-form-item label="实例">
                            <el-tabs v-model="instance" style="width: 100%" class="instance">
                                <el-tab-pane label="配置选项" name="custom">
                                    <el-table :data="customConfig" ref="customConfigTableRef" :highlight-current-row="true"
                                        border style="width: 100%" @current-change="handleCurrentChange">
                                        <el-table-column prop="model" label="机型" />
                                        <el-table-column prop="CPU" label="CPU" width="90" />
                                        <el-table-column prop="RAM" label="内存" width="90" />
                                        <el-table-column prop="hardDisk" label="硬盘" width="90" />
                                        <el-table-column prop="dataDisk" label="带宽" width="90" />
                                        <el-table-column prop="IP" label="IP" width="90" />
                                        <el-table-column prop="price" label="参考费用">
                                            <template #default="scope">
                                                <span class="table-price">{{ scope.row.price }}</span>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </el-tab-pane>
                            </el-tabs>
                        </el-form-item>

                        <!-- 区域 -->
                        <el-form-item label="带宽类型选择">
                            <div>
                                <el-radio-group v-model="serverForm.bandwidthType" size="large">
                                    <el-radio border label="优化回国" />
                                    <el-radio border label="普通回国" />
                                    <el-radio border label="国际带宽" />
                                </el-radio-group>
                                <div class="tips">
                                    不同地域的实例之间内网互不相通；选择靠近您客户的地域，可降低网络时延、提高您客户的访问速度
                                </div>
                            </div>

                        </el-form-item>


                        <!-- 操作系统 -->
                        <el-form-item label="镜像选择">
                            <el-select v-model="serverForm.os1" :teleported="false" style="margin-right: 10px;"
                                size="large">
                                <el-option label="CentOS" value="CentOS" />
                                <el-option label="Windows" value="Windows" />
                            </el-select>
                            <el-select v-model="serverForm.os2" :teleported="false" size="large">
                                <el-option label="CentOS 06" value="CentOS 06" />
                                <el-option label="CentOS 07" value="CentOS 07" />
                            </el-select>
                        </el-form-item>

                        <!-- 带宽 -->
                        <el-form-item label="ddos防护IP">
                            <el-slider v-model="serverForm.ddos" style="width: 900px;" :min="1" :max="30"
                                :show-tooltip="false" show-input />
                        </el-form-item>

                        <!-- 管理面板 -->
                        <el-form-item label="管理面板">
                            <el-switch v-model="serverForm.adminPanel" active-text="支持" />
                        </el-form-item>

                        <!-- 购买数量 -->
                        <el-form-item label="购买数量">
                            <el-input-number v-model="serverForm.buyNum" :min="1" />
                        </el-form-item>

                        <!-- 购买时长 -->
                        <el-form-item label="购买时长">
                            <el-select v-model="serverForm.buyTime" :teleported="false">
                                <el-option label="每月" value="每月" />
                                <el-option label="每季" value="每季" />
                                <el-option label="半年" value="半年" />
                                <el-option label="每年" value="每年" />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="服务协议">
                            <div class="agreement descriptive"><el-checkbox v-model="serverForm.agree"
                                    label="我已阅读并已同意JIMCLOUD" size="large" /><span class="agreement-btn"
                                    @click="serverdialogVisible = true">服务协议</span>和<span class="agreement-btn"
                                    @click="privacydialogVisible = true">隐私条款</span></div>
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
                                <div class="title">产品组</div>
                                <div class="text">
                                    <span class="info">SG-CN2</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">产品规格</div>
                                <div class="text">
                                    <span class="info">SG-新加坡独立服务器-新加坡E3-1230系列</span>
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
                                <div class="title">硬盘</div>
                                <div class="text">
                                    <span class="info">+1TSSD</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">带宽</div>
                                <div class="text">
                                    <span class="info">1 Mbps</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">IP数量</div>
                                <div class="text">
                                    <span class="info">3IP</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">内网</div>
                                <div class="text">
                                    <span class="info">内网</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="item">
                                <div class="title">系统</div>
                                <div class="text">
                                    <span class="info">Ubuntu</span>
                                    <span class="price">$200/月</span>
                                </div>
                            </div>

                            <div class="total-price">
                                <span class="info">总价</span>
                                <span class="price">$12.50USD</span>
                            </div>
                        </div>
                    </el-popover>
                    <el-button type="primary" size="large">立即购买</el-button>
                </div>
            </div>
        </ModuleCard>
    </div>


    <!-- 服务条款 -->
    <el-dialog v-model="serverdialogVisible" title="服务条款" top="80px" width="1200px">
        <el-scrollbar height="700px">
            <p class="MsoNormal"
                style="margin:0cm 0cm 0.0001pt;text-align:justify;font-size:10.5pt;font-family:DengXian;white-space:normal;">
                <span lang="EN-US"
                    style="font-size:10.5pt;">Jimcloud是一家注册在香港的互联网服务提供商，Jimcloud为客户提供基于数据中心基础设施及互联网基础设施之上的服务器租赁、机柜托管、互联网带宽以及专线连接等服务。<br />
                    <br />
                    &nbsp;<br />
                    <br />
                    Jimcloud承诺为用户提供7*24小时不间断的数据服务以及客户响应，为客户提供优质的互联网带宽及稳定的数据中心服务。本条款从购买之日起生效，指您对本条款的认可，即代表您愿意接受“Jimcloud服务器服务条款”中的明确规定、若您不能接受如下“服务条款”请勿直接购买、如因产生任何纠纷矛盾，Jimcloud不承担条款之外的责任，一律用户自行承担、或对Jimcloud服务器服务条款中不明确的，可咨询Jimcloud在线客服了解详情，有利于您在Jimcloud服务平台消费权益的保障。<br />
                    <br />
                    &nbsp;<br />
                    <br />
                    用户权利<br />
                    <br />
                    1.&nbsp; &nbsp; 用户在完成支付后，享有正常、持续以及稳定使用相关产品的权利。<br />
                    <br />
                    2.&nbsp; &nbsp; 用户在完成支付后，享自由支配相关产品的权利。<br />
                    <br />
                    3.&nbsp; &nbsp; 产品明页面与交付产品一致。<br />
                    <br />
                    &nbsp;<br />
                    <br />
                    用户义务<br />
                    <br />
                    1.&nbsp; &nbsp; 用户需在本网后台个人资料中完善自己的联系方式、避免服务产品到期无法接收到系统通知或其他应急问题无法获取Jimcloud的最新消息。<br />
                    <br />
                    2.&nbsp; &nbsp;
                    由于Jimcloud是一家香港公司，因此用户在使用Jimcloud产品时需遵守香港法令，同时，香港地区法律并没有赋予服务提供商审查用户内容的权力及义务，因此，使用者需自行审查并遵守相关规定。需遵守的法规包括但不限于以下内容<br />
                    <br />
                    a.《电脑罪行条例》<br />
                    <br />
                    b.《电子交易条例》<br />
                    <br />
                    c.《非应邀电子信息条例》<br />
                    <br />
                    d.《个人资料/隐私条例》<br />
                    <br />
                    e.《版权条例》<br />
                    <br />
                    3.&nbsp; &nbsp; 同时，Jimcloud禁止用户使用本公司资源从事以下用途：<br />
                    <br />
                    a. 敏感政治用途<br />
                    <br />
                    b. 任何黑客或攻击行为<br />
                    <br />
                    c. 发送垃圾邮件<br />
                    <br />
                    d. 涉及任何刑事犯罪的行为<br />
                    <br />
                    4.&nbsp; &nbsp;Jimcloud保留当接到投诉或政府及法院指令的情况下，做出以下行为的权力<br />
                    <br />
                    a. 接到政府命令而关闭用户所使用的服务器或IP地址<br />
                    <br />
                    b. 接到法院或侦察机构的相关文件，而需要遵循指令提供相应的数据、证据甚至关闭用户服务器等<br />
                    <br />
                    c. 接到第三方的投诉或委托律师提交的律师函件及证据，而需要对用户的服务器进行关闭及证据保全<br />
                    <br />
                    d. 当Jimcloud的网络安全部门接到第三方或IP管理部门的投诉，对滥用IP地址的行为进行制止<br />
                    <br />
                    e. 当Jimcloud的网络安全部门主动侦测到用户的非法攻击行为时，对用户的服务器或网络连接进行终止<br />
                    <br />
                    f. 当Jimcloud的上游供应商因客户的信息内容或行为而遭到投诉或调查时，Jimcloud需进行必要的配合，包括但不限于提交证据或切断该用户的使用<br />
                    <br />
                    5.&nbsp; &nbsp; 重要：如果客户违反以上相关条款，Jimcloud将停止其主机运行服务，所有款项将不给予退款申请，Jimcloud保留删除主机和暂停主机 直至删除会员账号等权利。<br />
                    <br />
                    &nbsp;<br />
                    <br />
                    服务期限<br />
                    <br />
                    Jimcloud将从用户完成支付之日起，至用户申请退款、欠费、不续费、遗忘续费而被注销为止为用户提供服务器服务。<br />
                    <br />
                    &nbsp;<br />
                    <br />
                    技术服务<br />
                    <br />
                    1.&nbsp; &nbsp; Jimcloud提供每台主机每月一次免费重装系统。如超出1次限制，Jimcloud将收取每次30元重装费。<br />
                    <br />
                    2.&nbsp; &nbsp;用户可自由选择Debian、CentOS、Ubuntu， 32bit或64bit等linux系统，Windwos系列可选择Windows
                    2003、Windows2008（需要自行激活）<br />
                    <br />
                    &nbsp;<br />
                    <br />
                    免责条款<br />
                    <br />
                    有以下情形之一的，Jimcloud不负任何责任：<br />
                    <br />
                    1.&nbsp; &nbsp; 因用户欠费、不续费或者遗忘续费导致的服务器无法访问（使用）或数据丢失等。<br />
                    <br />
                    2.&nbsp; &nbsp; 因用户的操作或其他相关行为不当导致的服务器无法访问（使用）或数据丢失等。<br />
                    <br />
                    3.&nbsp; &nbsp; 因用户的网站内容或使用行为违反本条款用户义务规定导致的无法访问或数据丢失等<br />
                    <br />
                    4.&nbsp; &nbsp; 因战争、武装冲突、罢工、骚乱、暴动等重大社会非正常事件导致的无法访问或数据丢失等。<br />
                    <br />
                    5.&nbsp; &nbsp; 因地震、海啸、台风、海浪、洪水、蝗灾、风暴、冰雹、沙尘暴、火山爆发、山体滑坡、雪崩、泥石流等重然灾害导致的无法访问或数据丢失等。<br />
                    <br />
                    6.&nbsp; &nbsp; 由于非我方所能控制的，且导致广泛的互联网传输故障的原因，例如灾害、人为破坏、战争导致的电信基础设施故障；由于黑客攻击行为导致的大面积网络故障而受到的影响。<br />
                    <br />
                    7.&nbsp; &nbsp; Jimcloud建议用户为了数据安全和业务稳定运行，对数据进行定期的备份，Jimcloud没有义务为用户提供任何数据的备份。<br />
                    <br />
                    &nbsp;<br />
                    <br />
                    退款政策<br />
                    <br />
                    1.&nbsp; &nbsp; 服务器产品自完成支付之日起算，24小时内无条件退款，之后如中途退用按天计费。<br />
                    <br />
                    2.&nbsp; &nbsp;有以下情形之一的，不退款：<br />
                    <br />
                    &nbsp; &nbsp; &nbsp; a. 恶意试用Jimcloud服务器产品，恶意购买服务器用于非法用途（流量攻击，木马传播等）<br />
                    <br />
                    &nbsp; &nbsp; &nbsp; b. 违反本条款中用户义务条款的。<br />
                    <br />
                    &nbsp;<br />
                    <br />
                    违约责任<br />
                    <br />
                    1.&nbsp; &nbsp;
                    Jimcloud保证服务器在正常情况下达到99.99%在线的标准，若用户证明Jimcloud无法这一标我们在认定之后，将给予延长服务期作为补偿。本条款免责条款中规定的内容及其他用错或不可抗力因素除外。<br />
                    <br />
                    2.&nbsp; &nbsp; 用户若违反本服务条款用户义务规定的，Jimcloud将直接删除用户的所有资料，不提供形式备份和补偿。<br />
                    <br />
                    3.&nbsp; &nbsp;
                    用户若违反本服务条款并照成严重的后果，或恶劣影响，Jimcloud将不仅删除用户有资料，并且不提供备份和补偿，还将积极配合有关部门的工作，向有关部门提供相关资料作为证据。<br />
                    <br />
                    <br />
                    <br />
                    <br />
                    服务条款更改<br />
                    <br />
                    Jimcloud保留随时更改服务条款的权利。当我们更改的时候，我们会修改底部的最近更新日期。我们鼓励用户频繁的查看此页面，以便及时得知最新的条例。您知道并同意定期查看最新的服务条款是您的责任。<br />
                    <br />
                    <br />
                    <br />
                    20200429<br />
                    <br />
                    JIMCLOUD TECHNOLOGY PTE. LTD.<br />
                </span>
            </p>
            <div style="text-align: right; margin: 40px 0;">
                <el-button type="primary" @click="serverdialogVisible = false">确认</el-button>
            </div>
        </el-scrollbar>
    </el-dialog>


    <!-- 隐私条款 -->
    <el-dialog v-model="privacydialogVisible" title="隐私条款" top="80px" width="1200px">
        <el-scrollbar height="700px">
            <p class="MsoNormal" style="margin:0cm 0cm 0.0001pt;text-align:justify;white-space:normal;">
                <span lang="EN-US" style="font-family:DengXian;font-size:10.5pt;">1. 解释<br />
                    <br />
                    a. 本隐私条例适a用于JIMCLOUD所有用户。<br />
                    <br />
                    b. 当您注册成为JIMCLOUD用户时即表示您同意本条例。<br />
                    <br />
                    <br />
                    <br />
                    2. 收集的资料类型：我们可能通过不同方式收集用户资料，包括但不限于，当访客访问我们的网页，注册用户账户，下单，提交服务工单，使用我们的服务等等。<br />
                    <br />
                    a.
                    个人资料：个人资料是用于识别您的身份，或者与您联系的资料，包括但不限于姓名，邮箱，电话，地址，以及第三方支付网关的资料。这些资料在您注册用户的时候收集。出于验证的目的，我们可能会要求提供能验证您的身份的资料。<br />
                    <br />
                    b. 非个人资料：所有访客的用于统计或其他分析的资料，包括但不限于IP地址，浏览器信息，电脑信息，屏幕信息等。<br />
                    <br />
                    <br />
                    <br />
                    3.&nbsp; 浏览器文字档案 (Cookies)：我们的网站使用小型文字档案 (Cookies)
                    增强用户体验。用户的浏览器Cookies放在用户的硬盘中，用于记录和追踪访客。访客可以更改浏览器设置以拒绝Cookies。<br />
                    <br />
                    <br />
                    <br />
                    4.&nbsp; 我们如何使用收集的资料：我们会基于以下目的，收集和使用个人资料。<br />
                    <br />
                    a. 为用户提供订购服务。<br />
                    <br />
                    b. 处理付款。<br />
                    <br />
                    c. 基于用户的服务进行联系，或者回复用户的咨询。<br />
                    <br />
                    d. IP定位和防欺诈。<br />
                    <br />
                    e. 发送关于用户的服务和产品的电子邮件。<br />
                    <br />
                    f. 我们使用非个人资料用于统计和其他分析目的，为了更好的了解访客位置以及帮助更好的设计网页。<br />
                    <br />
                    &nbsp;<br />
                    <br />
                    5.&nbsp; 我们如何保护资料<br />
                    <br />
                    我们使用合适的数据收集，存储，处理，以及安全措施去防止未经许可的访问、更改、批量或注销用户的个人信息、用户名、密码、交易信息以及其他存储在我们网站的数据。用户和网站之间的敏感和私人数据交换是基于安全的、加密的、基于数字签名的SSL通道。<br />
                    <br />
                    &nbsp;<br />
                    <br />
                    6. 第三方数据披露：非个人资料将会基于统计和其他的分析目的披露给第三方，我们不会披露用户的个人资料给第三方，以下情况除外：<br />
                    <br />
                    a. 基于法律、法院令、或其他的法律要求。<br />
                    <br />
                    b. 潜在的商业合并、并购、债务融资或类似交易，或在破产等事件中潜在的业务收购方，或作为公司资产转移给一个或多个第三方。<br />
                    <br />
                    c. 代表我们提供服务的第三方（如支付网关）。<br />
                    <br />
                    d. 如果用户通过推广链接访问并注册，用户的姓名可能会披露给推广提供者，以让他们知道用户通过推广链接注册。<br />
                    <br />
                    &nbsp;<br />
                    <br />
                    7. 隐私条例更改<br />
                    <br />
                    JIMCLOUD保留随时更改隐私条例的权利。当我们更改的时候，我们会修改结尾的最近更新日期。我们鼓励用户频繁的查看此页面，以便及时得知最新的条例。您知道并同意定期查看最新的隐私条例是您的责任。<br />
                    <br />
                    &nbsp;<br />
                    <br />
                    20200429<br />
                    <br />
                    JIMCLOUD TECHNOLOGY PTE. LTD<br />
                    <br />
                    <br />
                </span>
            </p>
            <div style="text-align: right; margin: 40px 0;">
                <el-button type="primary" @click="privacydialogVisible = false">确认</el-button>
            </div>
        </el-scrollbar>
    </el-dialog>
</template>





<script lang="ts" setup>
import { ElTable } from 'element-plus'
import { RefreshLeft } from '@element-plus/icons-vue'

// 云服务器表单
let serverForm = reactive({
    area: '中国',
    productType: 'a',
    instanceRapid: 1,
    bandwidthType: '优化回国',
    os1: 'CentOS',
    os2: 'CentOS 06',
    ddos: 10,
    adminPanel: true,
    buyNum: 1,
    buyTime: '每月',
    agree: false,
})

// 基础配置
let baseConfig = ref('config')

// 实例 默认快速配重
let instance = ref('custom')
let switchRapidItem = (num: any) => {
    serverForm.instanceRapid = num
}

// 实例 自定义配置
let customConfig = reactive([
    {
        model: '标准型S6',
        CPU: '1 Core',
        RAM: '1 GB',
        hardDisk: '40 GB',
        dataDisk: '0 GB',
        IP: '1个',
        price: '$135/月'
    },
    {
        model: '标准型S7',
        CPU: '2 Core',
        RAM: '4 GB',
        hardDisk: '40 GB',
        dataDisk: '0 GB',
        IP: '1个',
        price: '$135/月'
    },
    {
        model: '标准型S8',
        CPU: '4 Core',
        RAM: '8 GB',
        hardDisk: '40 GB',
        dataDisk: '0 GB',
        IP: '1个',
        price: '$135/月'
    }
])
const currentRow = ref()
const customConfigTableRef = ref<InstanceType<typeof ElTable>>()
const handleCurrentChange = (val: any | undefined) => {
    currentRow.value = val
    console.log(currentRow.value)
}


// 协议
let serverdialogVisible = ref(false)
let privacydialogVisible = ref(false)

</script>



<style lang="less" scoped>
.datadisk-type {
    /deep/ .el-select-dropdown {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
    }
}

.agreement {
    margin-bottom: 13px;
    font-size: @h6-text-size;
    display: flex;
    align-items: center;

    span {
        color: @primary-color;
        cursor: pointer;
    }
}


// 配置
.server-config {
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

.table-price {
    color: @primary-color;
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

                .item-num,
                .total-price {
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #eee;
                    padding: 10px 0;
                }

                .total-price {
                    .price {
                        font-size: @h3-text-size;
                        color: @primary-color;
                    }
                }
            }
        }
    }
}</style>