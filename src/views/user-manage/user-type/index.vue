<template>
    <section class="user-type">
        <section class="search-bar">
            <section class="item">
                <section class="title">用户类型</section>
                <section class="item-content">
                    <el-input></el-input>
                </section>
            </section>
            <section class="item">
                <el-button type="primary">查询</el-button>
                <el-button type="success">添加</el-button>
            </section>
        </section>
        <section class="content">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="name" label="类型名称" width="180" />
                <el-table-column prop="date" label="创建日期" width="180" />
                <el-table-column prop="createBy" label="创建人" width="180" />
                <el-table-column prop="address" label="描述" />
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
</template>

<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue'
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]

// table操作
const toEdit = (row: object) => {
    console.log(row);

}
const toDelete = (row: object) => {
    console.log(row);

}
const cancelEvent = () => {
    console.log('cancel!')
}
</script>

<style lang="scss" scoped>
.user-type {
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