<template>
    <section class="login">
        <section class="box">
            <section class="title">登 录</section>
            <section class="form">

                <el-form :model="form" label-width="" :rules="rules">
                    <el-form-item label="" prop="username" class="form-line">
                        <el-input v-model="form.username" placeholder="账号/手机/邮箱" />
                    </el-form-item>
                    <el-form-item label="" prop="password" class="form-line">
                        <el-input type="password" v-model="form.password" placeholder="请输入密码" show-password />
                    </el-form-item>
                    <el-form-item label="" class="form-line">
                        <el-checkbox v-model="form.remember" label="记住我" name="type" />
                    </el-form-item>
                    <el-form-item class="form-line">
                        <el-button class="form-button" type="primary" @click="submitForm(ruleFormRef)">
                            登 录
                        </el-button>
                    </el-form-item>
                </el-form>
            </section>
        </section>
    </section>
</template>

<script setup lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const form = {
    username: '',
    password: '',
    remember: ''
}
const rules = {
    username: [
        { required: true, message: '请输入账号/手机/邮箱', trigger: 'blur' },
        { min: 3, max: 10, message: '账号长度在3到10之间', trigger: 'blur' },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
        },
        { min: 3, max: 10, message: '密码长度在3到10之间', trigger: 'blur' },
    ],
}
const submitForm = () => {
    console.log(123);

}

</script>

<style lang="scss" scoped>
.login {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('@/assets/image/background.jpg') no-repeat;
    background-size: cover;

    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 500px;
        height: 600px;
        transform: translate(-50%, -50%);
        border-radius: 15px;
        background-color: #fff;
        box-shadow: 10px 10px 10px black;
        box-sizing: border-box;
        padding: 24px;

        .title {
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 24px;
            color: var(--title-color);
            font-weight: 600;
        }

        .form {
            width: 100%;
            margin: 30px 0;

            .form-line {
                margin: 30px 0;
            }

            .form-button {
                width: 100%;
            }
        }
    }
}
</style>