<template>
    <div class="wrapper ">
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>
<style scoped>
    .content{
        width: calc(100% - 180px);
        float: left;
        position: relative;
    }
</style>
<script>
    import vSidebar from './Sidebar.vue';
    export default {
        data() {
            return {

            }
        },
        components:{
            vSidebar
        }
    }
</script>