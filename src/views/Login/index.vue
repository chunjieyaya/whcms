<template>
  <div
    class="login-box"
    v-loading="loading"
    element-loading-background="rgba(255, 255, 255, 0.8)"
    element-loading-text="登录中，请稍后..."
  >
    <div class="box">
      <!-- 左边提示 -->
      <div class="b-tips">
        <div class="bg"><img src="./images/bg.png" alt="" /></div>
        <div>
          <div class="b-title">登录即享超值福利</div>
          <div class="b-item">
            <img src="./images/1.png" alt="" />
            <div>
              <div class="normal">首购享特惠</div>
              <div class="normal">丰富产品即可体验，极致性能收购低至0元起</div>
            </div>
          </div>
          <div class="b-item">
            <img src="./images/2.png" alt="" />
            <div>
              <div class="normal">全线路支撑</div>
              <div class="normal">丰富产品即可体验，极致性能收购低至0元起</div>
            </div>
          </div>
          <div class="b-item">
            <img src="./images/3.png" alt="" />
            <div>
              <div class="normal">尊享服务</div>
              <div class="normal">
                尊享1V1售前服务，客服7*24小时在线客服7*24小时在线
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-card class="login-main">
        <!-- 标题 -->
        <div class="title second">登录JIMCLOUD账号</div>

        <el-tabs model-value="first">
          <el-tab-pane name="first">
            <template #label>
              <div style="font-size: 18px">账号登录</div>
            </template>
            <!-- 表单 -->
            <el-form
              class="form"
              ref="ruleFormRef"
              :model="userForm"
              :rules="rules"
            >
              <el-form-item prop="email">
                <el-input
                  size="large"
                  placeholder="请输入用户名/邮箱"
                  v-model="userForm.email"
                />
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  size="large"
                  placeholder="请输入登录密码"
                  show-password
                  v-model="userForm.password"
                />
              </el-form-item>
              <div class="btn-submit">
                <el-button
                  @click="submitForm(ruleFormRef)"
                  type="primary"
                  size="large"
                  >登录</el-button
                >
              </div>
            </el-form>
          </el-tab-pane>
        </el-tabs>

        <!-- 服务条约 -->
        <div class="agreement descriptive">
          登录即表示您已同意JIMCLOUD<span
            class="agreement-btn"
            @click="serverdialogVisible = true"
            >服务协议</span
          >和<span class="agreement-btn" @click="privacydialogVisible = true"
            >隐私条款</span
          >
        </div>

        <!-- 其他 -->
        <div class="others">
          <div>其他登录方式</div>
          <!-- <el-button type="primary" link>忘记密码</el-button>
                    <el-button @click="gotoView('/signin')" link>没有账号？<span>去注册</span></el-button> -->
        </div>

        <el-divider border-style="dashed"></el-divider>

        <!-- 问题 -->
        <div class="problem">
          <div class="problem-text">
            <el-button link>忘记密码</el-button>
            <el-divider direction="vertical" />
            <el-button link>忘记账号</el-button>
            <el-divider direction="vertical" />
            <el-button @click="gotoView('/signin')" link
              >注册JIMCLOUD账户</el-button
            >
            <el-divider direction="vertical" />
            <el-button link>其他问题</el-button>
          </div>
          <div class="problem-des">
            原登录方式不可用、密码无法找回、无法接收验证码以及其他登陆异常，请提交工单处理
          </div>
        </div>
      </el-card>
    </div>
  </div>

  <!-- 服务条款 -->
  <el-dialog
    v-model="serverdialogVisible"
    title="服务条款"
    top="80px"
    width="1200px"
  >
    <el-scrollbar height="700px">
      <p
        class="MsoNormal"
        style="
          margin: 0cm 0cm 0.0001pt;
          text-align: justify;
          font-size: 10.5pt;
          font-family: DengXian;
          white-space: normal;
        "
      >
        <span lang="EN-US" style="font-size: 10.5pt"
          >Jimcloud是一家注册在香港的互联网服务提供商，Jimcloud为客户提供基于数据中心基础设施及互联网基础设施之上的服务器租赁、机柜托管、互联网带宽以及专线连接等服务。<br />
          <br />
          &nbsp;<br />
          <br />
          Jimcloud承诺为用户提供7*24小时不间断的数据服务以及客户响应，为客户提供优质的互联网带宽及稳定的数据中心服务。本条款从购买之日起生效，指您对本条款的认可，即代表您愿意接受“Jimcloud服务器服务条款”中的明确规定、若您不能接受如下“服务条款”请勿直接购买、如因产生任何纠纷矛盾，Jimcloud不承担条款之外的责任，一律用户自行承担、或对Jimcloud服务器服务条款中不明确的，可咨询Jimcloud在线客服了解详情，有利于您在Jimcloud服务平台消费权益的保障。<br />
          <br />
          &nbsp;<br />
          <br />
          用户权利<br />
          <br />
          1.&nbsp; &nbsp;
          用户在完成支付后，享有正常、持续以及稳定使用相关产品的权利。<br />
          <br />
          2.&nbsp; &nbsp; 用户在完成支付后，享自由支配相关产品的权利。<br />
          <br />
          3.&nbsp; &nbsp; 产品明页面与交付产品一致。<br />
          <br />
          &nbsp;<br />
          <br />
          用户义务<br />
          <br />
          1.&nbsp; &nbsp;
          用户需在本网后台个人资料中完善自己的联系方式、避免服务产品到期无法接收到系统通知或其他应急问题无法获取Jimcloud的最新消息。<br />
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
          4.&nbsp;
          &nbsp;Jimcloud保留当接到投诉或政府及法院指令的情况下，做出以下行为的权力<br />
          <br />
          a. 接到政府命令而关闭用户所使用的服务器或IP地址<br />
          <br />
          b.
          接到法院或侦察机构的相关文件，而需要遵循指令提供相应的数据、证据甚至关闭用户服务器等<br />
          <br />
          c.
          接到第三方的投诉或委托律师提交的律师函件及证据，而需要对用户的服务器进行关闭及证据保全<br />
          <br />
          d.
          当Jimcloud的网络安全部门接到第三方或IP管理部门的投诉，对滥用IP地址的行为进行制止<br />
          <br />
          e.
          当Jimcloud的网络安全部门主动侦测到用户的非法攻击行为时，对用户的服务器或网络连接进行终止<br />
          <br />
          f.
          当Jimcloud的上游供应商因客户的信息内容或行为而遭到投诉或调查时，Jimcloud需进行必要的配合，包括但不限于提交证据或切断该用户的使用<br />
          <br />
          5.&nbsp; &nbsp;
          重要：如果客户违反以上相关条款，Jimcloud将停止其主机运行服务，所有款项将不给予退款申请，Jimcloud保留删除主机和暂停主机
          直至删除会员账号等权利。<br />
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
          1.&nbsp; &nbsp;
          Jimcloud提供每台主机每月一次免费重装系统。如超出1次限制，Jimcloud将收取每次30元重装费。<br />
          <br />
          2.&nbsp; &nbsp;用户可自由选择Debian、CentOS、Ubuntu，
          32bit或64bit等linux系统，Windwos系列可选择Windows
          2003、Windows2008（需要自行激活）<br />
          <br />
          &nbsp;<br />
          <br />
          免责条款<br />
          <br />
          有以下情形之一的，Jimcloud不负任何责任：<br />
          <br />
          1.&nbsp; &nbsp;
          因用户欠费、不续费或者遗忘续费导致的服务器无法访问（使用）或数据丢失等。<br />
          <br />
          2.&nbsp; &nbsp;
          因用户的操作或其他相关行为不当导致的服务器无法访问（使用）或数据丢失等。<br />
          <br />
          3.&nbsp; &nbsp;
          因用户的网站内容或使用行为违反本条款用户义务规定导致的无法访问或数据丢失等<br />
          <br />
          4.&nbsp; &nbsp;
          因战争、武装冲突、罢工、骚乱、暴动等重大社会非正常事件导致的无法访问或数据丢失等。<br />
          <br />
          5.&nbsp; &nbsp;
          因地震、海啸、台风、海浪、洪水、蝗灾、风暴、冰雹、沙尘暴、火山爆发、山体滑坡、雪崩、泥石流等重然灾害导致的无法访问或数据丢失等。<br />
          <br />
          6.&nbsp; &nbsp;
          由于非我方所能控制的，且导致广泛的互联网传输故障的原因，例如灾害、人为破坏、战争导致的电信基础设施故障；由于黑客攻击行为导致的大面积网络故障而受到的影响。<br />
          <br />
          7.&nbsp; &nbsp;
          Jimcloud建议用户为了数据安全和业务稳定运行，对数据进行定期的备份，Jimcloud没有义务为用户提供任何数据的备份。<br />
          <br />
          &nbsp;<br />
          <br />
          退款政策<br />
          <br />
          1.&nbsp; &nbsp;
          服务器产品自完成支付之日起算，24小时内无条件退款，之后如中途退用按天计费。<br />
          <br />
          2.&nbsp; &nbsp;有以下情形之一的，不退款：<br />
          <br />
          &nbsp; &nbsp; &nbsp; a.
          恶意试用Jimcloud服务器产品，恶意购买服务器用于非法用途（流量攻击，木马传播等）<br />
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
          2.&nbsp; &nbsp;
          用户若违反本服务条款用户义务规定的，Jimcloud将直接删除用户的所有资料，不提供形式备份和补偿。<br />
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
      <div style="text-align: right; margin: 40px 0">
        <el-button type="primary" @click="serverdialogVisible = false"
          >确认</el-button
        >
      </div>
    </el-scrollbar>
  </el-dialog>

  <!-- 隐私条款 -->
  <el-dialog
    v-model="privacydialogVisible"
    title="隐私条款"
    top="80px"
    width="1200px"
  >
    <el-scrollbar height="700px">
      <p
        class="MsoNormal"
        style="
          margin: 0cm 0cm 0.0001pt;
          text-align: justify;
          white-space: normal;
        "
      >
        <span lang="EN-US" style="font-family: DengXian; font-size: 10.5pt"
          >1. 解释<br />
          <br />
          a. 本隐私条例适a用于JIMCLOUD所有用户。<br />
          <br />
          b. 当您注册成为JIMCLOUD用户时即表示您同意本条例。<br />
          <br />
          <br />
          <br />
          2.
          收集的资料类型：我们可能通过不同方式收集用户资料，包括但不限于，当访客访问我们的网页，注册用户账户，下单，提交服务工单，使用我们的服务等等。<br />
          <br />
          a.
          个人资料：个人资料是用于识别您的身份，或者与您联系的资料，包括但不限于姓名，邮箱，电话，地址，以及第三方支付网关的资料。这些资料在您注册用户的时候收集。出于验证的目的，我们可能会要求提供能验证您的身份的资料。<br />
          <br />
          b.
          非个人资料：所有访客的用于统计或其他分析的资料，包括但不限于IP地址，浏览器信息，电脑信息，屏幕信息等。<br />
          <br />
          <br />
          <br />
          3.&nbsp; 浏览器文字档案 (Cookies)：我们的网站使用小型文字档案
          (Cookies)
          增强用户体验。用户的浏览器Cookies放在用户的硬盘中，用于记录和追踪访客。访客可以更改浏览器设置以拒绝Cookies。<br />
          <br />
          <br />
          <br />
          4.&nbsp;
          我们如何使用收集的资料：我们会基于以下目的，收集和使用个人资料。<br />
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
          f.
          我们使用非个人资料用于统计和其他分析目的，为了更好的了解访客位置以及帮助更好的设计网页。<br />
          <br />
          &nbsp;<br />
          <br />
          5.&nbsp; 我们如何保护资料<br />
          <br />
          我们使用合适的数据收集，存储，处理，以及安全措施去防止未经许可的访问、更改、批量或注销用户的个人信息、用户名、密码、交易信息以及其他存储在我们网站的数据。用户和网站之间的敏感和私人数据交换是基于安全的、加密的、基于数字签名的SSL通道。<br />
          <br />
          &nbsp;<br />
          <br />
          6.
          第三方数据披露：非个人资料将会基于统计和其他的分析目的披露给第三方，我们不会披露用户的个人资料给第三方，以下情况除外：<br />
          <br />
          a. 基于法律、法院令、或其他的法律要求。<br />
          <br />
          b.
          潜在的商业合并、并购、债务融资或类似交易，或在破产等事件中潜在的业务收购方，或作为公司资产转移给一个或多个第三方。<br />
          <br />
          c. 代表我们提供服务的第三方（如支付网关）。<br />
          <br />
          d.
          如果用户通过推广链接访问并注册，用户的姓名可能会披露给推广提供者，以让他们知道用户通过推广链接注册。<br />
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
      <div style="text-align: right; margin: 40px 0">
        <el-button type="primary" @click="privacydialogVisible = false"
          >确认</el-button
        >
      </div>
    </el-scrollbar>
  </el-dialog>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import useUserStore from "@/stores/user";
let userStore = useUserStore();
let router = useRouter();

// 用户表单
let loading = ref(false);
const ruleFormRef = ref<FormInstance>();
let userForm = reactive({
  email: "",
  password: "",
});
const rules = reactive<FormRules>({
  email: [
    { required: true, message: "用户名或邮箱不能为空！", trigger: "blur" },
  ],
  password: [{ required: true, message: "密码不能为空！", trigger: "blur" }],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        loading.value = true;
        const res = await userStore.ClientLogin(
          userForm.email,
          userForm.password
        );
        try {
          await userStore.ClientDetail();
          ElMessage({
            message: res,
            type: "success",
          });
          loading.value = false;
          router.push("/");
        } catch (error) {
          console.log(error);
          loading.value = false;
        }
      } catch (error: any) {
        ElMessage({
          message: error,
          type: "error",
        });
        loading.value = false;
      }
    } else {
      ElMessage({
        message: "输入框内容有误，请注意检查！",
        type: "error",
      });
    }
  });
};

// 跳转页面
let gotoView = (url: string) => {
  router.push(url);
};

let serverdialogVisible = ref(false);
let privacydialogVisible = ref(false);
</script>
<style lang="less" scoped>
@media only screen and (max-width: 1200px) {
  .b-tips {
    display: none !important;
  }
}

.login-box {
  width: 100%;
  margin: auto;
  position: relative;
  height: calc(100vh - 99px);
  min-height: 840px;
  background-color: #edeff3;
  overflow: hidden;

  .box {
    width: 1200px;
    display: flex;
    justify-content: center;
    position: absolute;
    height: 647px;
    overflow: visible;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .b-tips {
      flex: 1;
      height: 647px;
      position: relative;
      display: flex;
      justify-content: center;

      .bg {
        width: 850px;
        overflow: hidden;
        position: absolute;
        bottom: -250px;
        left: -150px;
        z-index: -1;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .b-title {
        font-size: 38px;
        font-weight: 600;
        margin-bottom: 45px;
      }

      .b-item {
        display: flex;
        align-items: center;
        font-size: 16px;
        margin-bottom: 35px;

        img {
          width: 35px;
          height: 35px;
          margin-right: 15px;
        }
      }
    }
  }

  /deep/.el-tabs__nav-wrap::after {
    position: static !important;
  }

  /deep/.el-tabs__item.is-active {
    color: @primary-color !important;
  }

  .login-main {
    width: 525px;
    height: 647px;
    padding: 0 34px 0 36px;
    border-radius: 15px;

    .title {
      font-size: @h3-text-size;
      margin: 31px 0 34px 0;
    }

    .el-form {
      margin-top: 34px;
    }

    .btn-submit {
      padding: 20px 0 22px 0;

      .el-button {
        width: 100%;
        height: 45px;
      }
    }

    .agreement {
      margin-bottom: 13px;
      font-size: @h6-text-size;

      span {
        color: @primary-color;
        cursor: pointer;
      }
    }

    .others {
      margin-bottom: 30px;
      font-size: @h6-text-size;
    }

    .problem {
      .problem-text {
        margin-bottom: 19px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .problem-des {
        line-height: 1.5;
        font-size: @h6-text-size;
      }
    }
  }
}
</style>