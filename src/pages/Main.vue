<template>
    <div class="mainBox">
        <el-container>
           <v-menu></v-menu>
         <el-container>
           <el-header style="height: 50px;">
               <v-header></v-header>
           </el-header>
            <el-main>
             <div class="main-container">
                <transition name="slide-fade" mode="out-in">
                    <!-- 路由匹配到的组件显示在这里 动画进入 -->
                <router-view></router-view>
                </transition>
            </div>
            </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import Header from '../components/Main/header.vue'
import Menu from '../components/Main/Menu.vue'
import Tabs from '../components/Main/Tabs.vue'
export default {
    name:'Main',
    components:{
        'v-header':Header,
        'v-menu':Menu,
        'v-tabs':Tabs
    }
}
</script>
<style lang="less" scoped>
 .el-header{
      padding:0;  
    }
.container{
    display: flex;
    background: #EAEDF1;
    position: absolute;
    top: 41px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow: hidden
}
 .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(0.5, 0.3, 0.6, 0.5);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
