<template>
<el-aside width="200px">
    <div class="menuBox">
        <el-col :span="24" style="padding-top:50px">
            <el-menu
            :default-active="this.$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#252a2f"
            text-color="#fff"
            router
            >
            <template v-for="(item,index) in menuList">
               <el-submenu :index="'/'+item.path" :key="index">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
                </template>
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item :index="'/'+item.path">{{item.text}}</el-menu-item>
            </el-submenu>
            </template>
            </el-menu>
        </el-col> 
    </div>
    </el-aside>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
  export default {
    computed:{
    ...mapState({
      menuList: state => state.menuList.menuList,
    }),
    },
    data(){
        return{
        //    menuList:[
        //        {id:1,path:'SystemLimit',text:'权限管理'},
        //        {id:2,path:'SystemMenu',text:'菜单管理'},
        //        {id:3,path:'SystemParent',text:'角色管理'},
        //        {id:4,path:'SystemUser',text:'用户管理'},
        //        {id:5,path:'SystemRole',text:'组织结构管理'},
        //    ] 
        }
    },
    methods: {
        ...mapActions(['getMenuList']),
      handleOpen(key, keyPath) {
        
      },
      handleClose(key, keyPath) {
        
      }
    },
   created () {
    this.getMenuList()
  }
   
  }
</script>
<style lang="less" scoped>
.menuBox{
    overflow-y:auto;
    height: 800px;
}
.el-aside{
    background: #252a2f;
    color: #333;
    text-align: center;
    overflow: hidden;
}

</style>
