<template>
    <!-- 帮助文档 -->
    <div class="ecs-docs">
        <div class="item" v-for="item in data">
            <div class="card-header" :style="{ backgroundImage: `url(${headerBgImg})` }">
                <span class="title">{{ item.title }}</span>
                <slot></slot>
            </div>
            <div class="card-body" :style="{ backgroundImage: `url(${bodyBgImg})` }">
                <div v-for="li in item.list" class="li" :style="{borderBottom: showBorder ? '1px solid #cbcbcb' : 'none',marginTop: showBorder ? '20px' : '0'}">
                    <li>{{ li.name }} </li>
                    <el-icon v-if="showArrows">
                        <ArrowRight />
                    </el-icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
let props = defineProps({
    data: {
        type: Object,
        default: [
            {
                title: '产品介绍',
                bgImg: '',
                list: [
                    {
                        name: '什么是天翼云弹性云主机',
                        path: ''
                    },
                    {
                        name: '天翼云弹性云主机的功能',
                        path: ''
                    },
                    {
                        name: '天翼云弹性云主机的实例规格组',
                        path: ''
                    }
                ]
            },
            {
                title: '操作指导',
                bgImg: '',
                list: [
                    {
                        name: '购买云主机',
                        path: ''
                    },
                    {
                        name: '登录云主机',
                        path: ''
                    },
                    {
                        name: '变更云主机规格',
                        path: ''
                    }
                ]
            },
            {
                title: '最佳实践',
                bgImg: '',
                list: [
                    {
                        name: '手动部署Java Web',
                        path: ''
                    },
                    {
                        name: '搭建FTP',
                        path: ''
                    },
                    {
                        name: '在天翼云上配置NTP服务器',
                        path: ''
                    }
                ]
            }
        ]
    },
    bodyBgImg: {
        type: String
    },
    headerBgImg: {
        type: String
    },
    showArrows: {
        type: Boolean,
        default: true
    },
    showBorder: {
        type: Boolean,
        default: true
    }
})


</script>

<style lang="less" scoped>
.ecs-docs {
    display: flex;
    padding: 20px 0;

    .item {
        background-color: #f3f4f6;
        flex: 1;
        margin-right: 20px;
        font-size: @h5-text-size;
        color: @primary-text-color;

        &:last-child {
            margin: 0;
        }

        .card-body {
            background-size: 100% 100%;
            padding: 0 35px;

            .li {
                cursor: pointer;
                transition: .1s;
                padding-bottom: 5px;
                font-size: @h6-text-size;
                display: flex;
                align-items: center;
                justify-content: space-between;

                li {
                    list-style-type: disc !important;
                }

                &:last-child {
                    border: none !important;
                    padding-bottom: 40px;
                }

                &:hover {
                    transform: scale(1.05);
                    color: @primary-color;
                }
            }
        }


        .card-header {
            padding: 20px 35px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-size: cover;

            .title {
                font-size: @h5-text-size;
                color: @primary-text-color;
                font-weight: 600;
            }
        }
    }
}
</style>