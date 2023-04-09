<template>
    <section class="user-list">
        <section class="search-bar">
            <section class="item">
                <section class="title">用户名称</section>
                <section class="item-content">
                    <el-input v-model="username"></el-input>
                </section>
            </section>
            <section class="item">
                <el-button type="primary">查询</el-button>
                <el-button type="success" @click="openAdd">添加</el-button>
            </section>
        </section>
        <section class="content">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="username" label="用户名称" width="180" />
                <el-table-column prop="createTime" label="注册日期" width="180" />
                <el-table-column prop="userType" label="用户类型" width="180" />
                <el-table-column prop="createdBy" label="创建人" width="180" />
                <el-table-column prop="email" label="邮箱" width="180" />
                <el-table-column prop="phone" label="手机号码" width="180" />
                <el-table-column prop="remark" label="描述" />
                <el-table-column prop="action" label="操作" width="180">
                    <template #default="scope">
                        <el-button size="small" type="warning" @click="toEdit(scope.row)">修改</el-button>

                        <el-popconfirm width="220" confirm-button-text="确定" cancel-button-text="取消" :icon="InfoFilled"
                            icon-color="#626AEF" title="确认删除" @confirm="toDelete(scope.row)" @cancel="cancelEvent">
                            <template #reference>
                                <el-button size="small" type="danger">删除</el-button></template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </section>
    </section>

    <el-dialog v-model="dialogVisible" :title="title" width="30%">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="用户名称" prop="name">
                <el-input v-model="ruleForm.username" />
            </el-form-item>
            <el-form-item label="手机号码" prop="name">
                <el-input v-model="ruleForm.phone" />
            </el-form-item>

            <el-form-item label="邮箱" prop="name">
                <el-input v-model="ruleForm.email" />
            </el-form-item>

            <el-form-item label="描述" prop="name">
                <el-input v-model="ruleForm.remark" />
            </el-form-item>

        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="cancelAdd(ruleFormRef)">取消</el-button>
                <el-button type="primary" @click="submitAdd(ruleFormRef)">
                    确定
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">

import { reactive, ref } from 'vue'
import { InfoFilled } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
let username = ref('')
const tableData = [
    {
        id: '1',
        createTime: '2016-05-03',
        username: 'robert-jx',
        userType: '超级管理员',
        remark: 'No. 189, Grove St, Los Angeles',
        createdBy: 'robert-jx',
        email: 'robert-jx@email'
    },
    {
        id: '2',
        createTime: '2016-05-02',
        username: '张三',
        userType: '入库员',
        remark: 'No. 189, Grove St, Los Angeles',
        createdBy: 'robert-jx',
        email: 'robert-jx@email'
    },
    {
        id: '3',
        createTime: '2016-05-04',
        username: '李四',
        userType: '采购员',
        remark: 'No. 189, Grove St, Los Angeles',
        createdBy: 'robert-jx',
        email: 'robert-jx@email'
    },
    {
        id: '4',
        createTime: '2016-05-01',
        username: '王五',
        userType: '普通用户',
        remark: 'No. 189, Grove St, Los Angeles',
        createdBy: 'robert-jx',
        email: 'robert-jx@email'
    },
]

// table操作
const toEdit = (row: any) => {
    console.log(row.username);
    ruleForm.username = row.username;
    ruleForm.remark = row.remark;
    ruleForm.phone = row.phone;
    ruleForm.email = row.email;
    formId = row.id;
    title.value = '修改用户'
    dialogVisible.value = true;
}
const toDelete = (row: any) => {
    console.log(row);
    let list: any = [];
    tableData.forEach(element => {
        if (row.id != element.id) list.push(element)
    });
    tableData.values = list.values
    console.log(tableData);


}
const cancelEvent = () => {
    console.log('cancel!')
}

// 表单
let title = ref('添加用户')
let formId = ref('')
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    username: '',
    remark: '',
    phone: '',
    email: ''
})

const rules = reactive<FormRules>({
    username: [
        { required: true, message: 'Please input Activity username', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ]
})


// 添加

const dialogVisible = ref(false)
const openAdd = () => {
    dialogVisible.value = true
}
const cancelAdd = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    dialogVisible.value = false
}

const submitAdd = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
            console.log(ruleForm);

        } else {
            console.log('error submit!', fields)
        }
    })
}

</script>

<style lang="scss" scoped>
.user-list {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;

    .search-bar {
        width: 100%;
        height: 30px;
        display: flex;

        .item {
            width: 25%;
            height: 100%;
            display: flex;
            line-height: 30px;

            .title {
                height: 100%;
                width: 100px;
                font-size: 16px;
                font-weight: bold;
                color: #999;
            }

            .item-content {
                width: calc(100% - 150px);
                height: 100%;
            }
        }
    }

    .content {
        width: 100%;
        height: calc(100% - 90px);
        margin: 15px 0;
    }
}
</style>