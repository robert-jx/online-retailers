<template>
    <section class="order-statistics">
        <section class="search-bar">
            <section class="item">
                <section class="title">订单编号</section>
                <section class="item-content">
                    <el-input v-model="username"></el-input>
                </section>
            </section>
            <section class="item">
                <section class="title">下单日期</section>
                <section class="item-content">

                    <el-date-picker style="width: 100%;" v-model="createDate" type="daterange" range-separator="To"
                        start-placeholder="Start date" end-placeholder="End date" size="default" />
                </section>
            </section>
            <section class="item">
                <el-button type="primary">查询</el-button>
            </section>
        </section>
        <section class="content">
            <base-line :id="'baseLine'" :width="'800px'" :height="'600px'" title="订单统计"></base-line>

            <base-bar :id="'baseBar'" :width="'800px'" :height="'600px'" title="订单统计"></base-bar>
        </section>
    </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

import baseLine from '@/components/echarts/base-line/index.vue'
import baseBar from '@/components/echarts/base-bar/index.vue'

let username = ref('')
let createDate = ref([])

</script>

<style lang="scss" scoped>
.order-statistics {
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
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 20px 0;
    }
}
</style>