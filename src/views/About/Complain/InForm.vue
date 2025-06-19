<template>
    <!-- 投诉举报表单 -->
    <ModuleCard :is-padding="false" :showHeader="false">
        <div class="complain-form">
            <div class="navs">
                <div class="title">意见反馈</div>
                <div class="navs-list">
                    <div class="item" @click="switchInform(1)" :class="{ active: currentCategoryNum == 1 }">IP滥用投诉</div>
                    <div class="item" @click="switchInform(2)" :class="{ active: currentCategoryNum == 2 }">非法网站接入投诉</div>
                    <div class="item" @click="switchInform(3)" :class="{ active: currentCategoryNum == 3 }">售前投诉</div>
                    <div class="item" @click="switchInform(4)" :class="{ active: currentCategoryNum == 4 }">售后投诉</div>
                </div>
            </div>
            <div class="content">
                <div class="title">本页仅受理基于JIMCLOUD服务（如物理机、云产品等服务）搭建的网站所出现的滥用、侵权、非法、色情等违法违规问题。</div>
                <div class="content-des">反馈须知：如果您发现在JIMCLOUD产品中出现违规内容，请再次举报。</div>


                <!-- 表单1 -->
                <el-form ref="ruleFormRef1" :model="ruleForm1" label-position="top" :rules="fromRules1" status-icon>
                    <el-form-item v-if="currentCategoryNum == 1 || currentCategoryNum == 2" label="本人身份：" required>
                        <el-radio-group v-model="ruleForm1.idCard">
                            <el-radio :label="0" size="large">个人</el-radio>
                            <el-radio :label="1" size="large">企业</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item v-if="currentCategoryNum == 3 || currentCategoryNum == 4" label="标题：" prop="caption">
                        <el-input v-model="ruleForm1.caption" />
                    </el-form-item>
                    <el-form-item label="投诉链接：" prop="link">
                        <el-input v-model="ruleForm1.link" />
                    </el-form-item>
                    <el-form-item label="问题说明（请您详细说明遇到的情况以及申请原因）：" prop="problemDes">
                        <el-input :rows="10" type="textarea" v-model="ruleForm1.problemDes" />
                    </el-form-item>
                    <el-form-item v-if="currentCategoryNum == 3 || currentCategoryNum == 4" label="我的建议：" prop="suggest">
                        <el-input :rows="10" type="textarea" v-model="ruleForm1.suggest" />
                    </el-form-item>
                    <el-form-item label="附件（支持.png、.jpg、.jpeg、.txt、.rar、.doc、.xls、.xlsx、.zip、.7z格式，文件大小不超过50MB）：">
                        <el-upload v-model:file-list="fileList"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" list-type="picture-card"
                            :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                            <el-icon>
                                <Plus />
                            </el-icon>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="联系邮箱（留下您的联系邮箱，我们将处理结果通知给您）：" prop="email">
                        <el-input v-model="ruleForm1.email" />
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="submitForm(ruleFormRef1)" type="primary">提交表单</el-button>
                    </el-form-item>
                </el-form>

            </div>
        </div>
    </ModuleCard>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules, UploadProps, UploadUserFile } from 'element-plus'
let router = useRouter()
let gotoView = (url: string) => {
    router.push(url)
}

let currentCategoryNum = ref(1)
let switchInform = (num: number) => {
    currentCategoryNum.value = num
}


// 上床图片
const imageUrl = ref('')
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}
const fileList = ref<UploadUserFile[]>([
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url!
    dialogVisible.value = true
}

// 表单数据
const ruleFormRef1 = ref<FormInstance>()
const ruleForm1 = reactive({
    caption: '',
    suggest: '',
    idCard: 0,
    link: '',
    problemDes: '',
    email: ''
})
const fromRules1 = reactive<FormRules>({
    caption: [
        { required: true, message: '标题不能为空！', trigger: 'blur' }
    ],
    suggest: [
        { required: true, message: '建议不能为空！', trigger: 'blur' }
    ],
    link: [
        { required: true, message: '投诉链接不能为空！', trigger: 'blur' }
    ],
    problemDes: [
        { required: true, message: '问题说明不能为空！', trigger: 'blur' }
    ],
    email: [
        { required: true, message: '问题说明不能为空！', trigger: 'blur' }
    ]
})

// 提交表单
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

</script>
<style lang="less" scoped>
.complain-form {
    display: flex;

    .navs,
    .content {
        padding: 40px 0;
    }

    .title {
        font-size: @h3-text-size;
        color: @primary-text-color;
        font-weight: 600;
        margin-bottom: 21px;
    }

    .navs {
        width: 240px;
        border-right: 1px solid rgba(243, 245, 248, 1);

        .navs-list {
            .item {
                font-size: @h5-text-size;
                color: @regular-text-color;
                line-height: 45px;
                padding: 0 20px;
                cursor: pointer;

                &:hover {
                    background-color: @primary-color;
                    color: #fff;
                }
            }

            .active {
                background-color: @primary-color;
                color: #fff;
            }
        }
    }

    .content {
        flex: 1;
        padding-left: 70px;

        .content-des {
            font-size: @h6-text-size;
            color: @regular-text-color;
            margin-bottom: 65px;
        }
    }
}
</style>