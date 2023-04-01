<template>
    <section class="layout">
        <section class="navbar">
            <navbar></navbar>
        </section>
        <section class="content">
            <section class="left"></section>
            <section class="right">
                <router-view></router-view>
            </section>
        </section>
    </section>
</template>

<script setup lang="ts">
import navbar from './header.vue'

</script>

<style lang="scss" scoped>
.layout {
    width: 100%;
    height: 100%;

    .navbar {
        width: 100%;
        height: 60px;
    }

    .content {
        width: 100%;
        height: calc(100% - 60px);
    }
}
</style>