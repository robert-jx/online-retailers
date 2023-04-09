<template>
    <section class="goods-type">
        <section class="search-bar">
            <section class="item">
                <section class="title">商品类型</section>
                <section class="item-content">
                    <el-input v-model="userType"></el-input>
                </section>
            </section>
            <section class="item">
                <el-button type="primary">查询</el-button>
                <el-button type="success" @click="openAdd">添加</el-button>
            </section>
        </section>
        <section class="content">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="name" label="类型名称" width="180" />
                <el-table-column prop="date" label="创建日期" width="180" />
                <el-table-column prop="createdBy" label="创建人" width="180" />
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
            <el-form-item label="类型名称" prop="name">
                <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="类型描述" prop="remark">

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
let userType = ref('')
const tableData = [
    {
        id: '1',
        date: '2016-05-03',
        name: '数码',
        remark: 'No. 189, Grove St, Los Angeles',
        createdBy: 'robert-jx'
    },
    {
        id: '2',
        date: '2016-05-02',
        name: '母婴',
        remark: 'No. 189, Grove St, Los Angeles',
        createdBy: 'robert-jx'
    },
    {
        id: '3',
        date: '2016-05-04',
        name: '图书',
        remark: 'No. 189, Grove St, Los Angeles',
        createdBy: 'robert-jx'
    },
    {
        id: '4',
        date: '2016-05-01',
        name: '男鞋',
        remark: 'No. 189, Grove St, Los Angeles',
        createdBy: 'robert-jx'
    },
]

// table操作
const toEdit = (row: any) => {
    console.log(row.name);
    ruleForm.name = row.name;
    ruleForm.remark = row.remark;
    formId = row.id;
    title.value = '修改类型'
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
let title = ref('添加类型')
let formId = ref('')
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    name: '',
    remark: '',
})

const rules = reactive<FormRules>({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
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
.goods-type {
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