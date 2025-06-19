<template>
    <!-- 公司介绍 -->
    <HeaderPad :bgImage="header.bgImg" height="410px">
        <div class="header">
            <div class="headline-introduce">{{ header.introduce }}</div>
            <div class="headline-title">{{ header.hugeText }}</div>
            <div class="text">{{ header.des }}</div>
            <div class="btns">
                <el-button size="large" type="primary" @click="gotoView(header.btns.path)">{{ header.btns.text
                }}</el-button>
            </div>
        </div>
    </HeaderPad>

    <!-- 介绍 -->
    <div class="introduce">
        <div class="content viewMinAndMax">
            <div class="introduce-item" v-for="item in datashow">
                <div class="left">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="right">
                    <div class="title">{{ item.title }}</div>
                    <div class="des">{{ item.des }}</div>
                </div>
            </div>
        </div>
    </div>

    <!-- 固定导航 -->
    <FixedNav :navs="fixNav"></FixedNav>


    <!-- 新用户专场 -->
    <ModuleCard id="newUser" bg-color="#f3f5f8" headline-text="新用户专场" des="新用户秒杀新用户秒杀新用户秒杀新用户秒杀">
        <div class="newUser">
            <div class="ad">
                <div class="left">
                    <div class="title">
                        <span>新用户</span>·精选
                    </div>
                    <div class="des">
                        新用户秒杀新用户秒杀新用户秒杀新用户秒杀，新用户秒杀
                    </div>
                    <div class="btn">
                        <el-button type="primary">立即选购</el-button>
                    </div>
                </div>
                <div class="right">
                    <img src="../../assets/Icon/10.png" alt="">
                </div>
                <!-- 倒计时 -->
                <div class="count-down">
                    <el-icon><AlarmClock /></el-icon>距离本场结束剩 <span>17</span>天<span>06</span>时<span>39</span>分<span>35</span>秒
                </div>
                <div class="tag">注册账号 抢私享福利好礼</div>
            </div>
            <div class="item" v-for="item in 6">
                <div class="detail">
                    <div class="title">云服务器（地区）</div>
                    <div class="detail-item">
                        <span>产品规格</span>
                        <span>1核1G</span>
                    </div>
                    <div class="detail-item">
                        <span>云系统盘</span>
                        <span>50G性能型</span>
                    </div>
                    <div class="detail-item">
                        <span>云数据盘</span>
                        <span>无</span>
                    </div>
                    <div class="detail-item">
                        <span>带宽</span>
                        <span>2M</span>
                    </div>
                    <div class="detail-item">
                        <span>购买时长</span>
                        <span>1月</span>
                    </div>
                </div>
                <div class="price">
                    <div class="price-text">
                        <div class="now">
                            <span>$980</span>/月
                        </div>
                        <div class="origin">原价：$980/月</div>
                    </div>
                    <div class="price-btn">
                        <el-button type="primary">立即秒杀</el-button>
                    </div>
                </div>
            </div>
        </div>
    </ModuleCard>

    <!-- 云服务器专场 -->
    <ModuleCard id="cloudServer" bg-color="#f9f9fa" headline-text="云服务器专场" des="新用户秒杀新用户秒杀新用户秒杀新用户秒杀">
        <div class="hot">
            <div class="products">
                <GridLayout :col="4">
                    <div class="products-item" v-for="item in 4">
                        <!-- 标题 -->
                        <div class="item-header">
                            <div class="txt">香港E5-2660</div>
                            <div class="des">2022年度热销机型</div>
                        </div>
                        <!-- 选项 -->
                        <div class="options">
                            <el-form label-width="68" label-position="left">
                                <el-form-item label="带宽">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="硬盘">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="IP数">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="购买时长">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </div>
                        <!-- 价格 -->
                        <div class="price">
                            <div class="discount">
                                <el-tag class="ml-2" effect="dark">限时优惠价</el-tag>
                                <div class="text"><span>$980</span>/月</div>
                            </div>
                            <div class="original">
                                <el-text tag="del">原价：1400/月</el-text>
                            </div>
                        </div>
                        <!-- 按钮 -->
                        <div class="btn">
                            <el-button type="primary">立即抢购</el-button>
                        </div>
                    </div>
                </GridLayout>
            </div>
        </div>
    </ModuleCard>

    <!-- 物理机专场 -->
    <ModuleCard id="server" headline-text="物理机专场" des="新用户秒杀新用户秒杀新用户秒杀新用户秒杀">
        <div class="hot">
            <div class="products">
                <GridLayout :col="4">
                    <div class="products-item" v-for="item in 4">
                        <!-- 标题 -->
                        <div class="item-header">
                            <div class="txt">香港E5-2660</div>
                            <div class="des">2022年度热销机型</div>
                        </div>
                        <!-- 选项 -->
                        <div class="options">
                            <el-form label-width="68" label-position="left">
                                <el-form-item label="带宽">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="硬盘">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="IP数">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="购买时长">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </div>
                        <!-- 价格 -->
                        <div class="price">
                            <div class="discount">
                                <el-tag class="ml-2" effect="dark">限时优惠价</el-tag>
                                <div class="text"><span>$980</span>/月</div>
                            </div>
                            <div class="original">
                                <el-text tag="del">原价：1400/月</el-text>
                            </div>
                        </div>
                        <!-- 按钮 -->
                        <div class="btn">
                            <el-button type="primary">立即抢购</el-button>
                        </div>
                    </div>
                </GridLayout>
            </div>
        </div>
    </ModuleCard>

    <!-- ddos专场 -->
    <ModuleCard id="ddos" bg-color="#f9f9fa" headline-text="ddos防护专场" des="新用户秒杀新用户秒杀新用户秒杀新用户秒杀">
        <div class="hot">
            <div class="products">
                <GridLayout :col="4">
                    <div class="products-item" v-for="item in 4">
                        <!-- 标题 -->
                        <div class="item-header">
                            <div class="txt">香港E5-2660</div>
                            <div class="des">2022年度热销机型</div>
                        </div>
                        <!-- 选项 -->
                        <div class="options">
                            <el-form label-width="68" label-position="left">
                                <el-form-item label="带宽">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="硬盘">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="IP数">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="购买时长">
                                    <el-select v-model="value" placeholder="Select" :teleported="false">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </div>
                        <!-- 价格 -->
                        <div class="price">
                            <div class="discount">
                                <el-tag class="ml-2" effect="dark">限时优惠价</el-tag>
                                <div class="text"><span>$980</span>/月</div>
                            </div>
                            <div class="original">
                                <el-text tag="del">原价：1400/月</el-text>
                            </div>
                        </div>
                        <!-- 按钮 -->
                        <div class="btn">
                            <el-button type="primary">立即抢购</el-button>
                        </div>
                    </div>
                </GridLayout>
            </div>
        </div>
    </ModuleCard>

</template>


<script lang="ts" setup>
import { header, datashow,fixNav } from './configData'

let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}


const value = ref('')
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]

</script>
<style lang="less" scoped>
// 头部
.header {
    width: 500px;
    padding-top: 80px;
    height: 100%;
    color: @primary-text-color;
    position: relative;
    z-index: 1;

    .headline-introduce {
        font-size: @h6-text-size;
        margin-bottom: 5px;
    }

    .headline-title {
        font-size: @h1-text-size;
        margin-bottom: 5px;
    }

    .text {
        font-size: @h5-text-size;
        line-height: @paragraph-line-height;
        color: @primary-text-color;
        margin-bottom: 10px;
    }
}

// 介绍
.introduce {
    position: absolute;
    width: 100%;
    left: 0;
    top: 385px;
    z-index: 88;

    background-color: rgba(255, 255, 255, 0.7);

    .content {
        height: 85px;
        display: flex;
        justify-content: space-between;

        .introduce-item {
            display: flex;
            align-items: center;

            .left {
                margin-right: 5px;

                img {
                    width: 52px;
                    height: 40px;
                }
            }

            .right {
                .title {
                    font-size: @h6-text-size;
                    color: @primary-text-color;
                    margin-bottom: 5px;
                }

                .des {
                    font-size: @h7-text-size;
                    color: @regular-text-color;
                }
            }
        }
    }

}

// 新用户专场
.newUser {
    display: grid;
    grid-template-columns: repeat(4, minmax(290px, 1fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    .ad {
        padding: 10px 30px;
        grid-column-start: 1;
        grid-column-end: 3;
        background-image: url('./images/newUserAd.png');
        background-size: cover;
        display: flex;
        align-items: center;
        position: relative;

        .count-down{
            width: 100%;
            padding: 5px 0;
            position: absolute;
            top: 0;
            left: 0;
            text-align: center;
            font-size: @h6-text-size;
            background-image: url('./images/tip-l.png');
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;

            span{
                display: inline-block;
                background-color: @primary-color;
                padding: 5px;
                color: #fff;
                margin: 0 5px;
            }
            .el-icon{
                margin-right: 5px;
                font-size: @h5-text-size;
            }
        }
        .tag {
            position: absolute;
            bottom: 0;
            right: 0;
            height: 30px;
            line-height: 30px;
            background: linear-gradient(-88.27deg, rgba(255, 156, 83, 1) 1.52%, rgba(255, 255, 255, 0) 98.3%);
            font-size: @h6-text-size;
            color: #fff;
            padding-right: 15px;
        }

        .left {

            .title {
                font-size: @h2-text-size;
                margin-bottom: 15px;

                span {
                    color: @primary-color;
                }
            }

            .des {
                font-size: @h5-text-size;
                margin-bottom: 15px;
            }
        }

        .right {
            text-align: right;

            img {
                width: 200px;
                height: 200px;
            }
        }
    }

    .item {
        height: 295px;

        .detail {
            padding: 30px 20px;
            background-image: url('./images/newUserAdItem.png');
            background-size: cover;
            height: 240px;

            .title {
                font-size: @h3-text-size;
                margin-bottom: 15px;
            }

            .detail-item {

                margin-bottom: 10px;
                font-size: @h6-text-size;

                span {
                    &:first-child {
                        display: inline-block;
                        width: 100px;
                    }

                }
            }
        }

        .price {
            height: 55px;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            

            .price-text {
                .now {
                    span {
                        color: @primary-color;
                        font-size: @h3-text-size;
                        margin-right: 5px;
                    }
                }

                .origin {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                    text-decoration: line-through;
                }
            }
        }
    }
}

// 热门推荐
.hot {
    .products {
        .products-item {
            border-radius: 10px;
            overflow: hidden;
            transition: .2s;
            background-color: #fff;
            box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.1);

            &:hover {
                transform: scale(1.05);
            }

            .item-header {
                padding: 20px;
                margin-bottom: 20px;
                background-size: cover;

                .txt {
                    font-size: @h5-text-size;
                    color: @primary-text-color;
                    margin-bottom: 10px;
                }

                .des {
                    font-size: @h6-text-size;
                    color: @regular-text-color;
                }
            }

            .options {
                padding: 0 20px;
            }

            .price {
                padding: 50px 20px 20px;
                background-image: url('./images/product.png');
                background-repeat: no-repeat;
                background-position: right;

                .discount {
                    .text {
                        font-size: @h5-text-size;
                        color: @primary-text-color;

                        span {
                            font-size: @h2-text-size;
                            color: @primary-color;
                            margin-right: 5px;
                        }
                    }

                }
            }

            .btn {
                .el-button {
                    width: 100%;
                    height: 45px;
                }
            }
        }
    }
}
</style>