import axios from 'axios'

const state = {
    menuList:[]
}

const mutations = {
    GETMENULIST (state,data){
        state.menuList = data
    }
}

const actions = {
    getMenuList ({commit}) {
    //    this.$post(url).then(res=>{
    //     if (res.data && res.data.code === '00000000') {
    //         console.log(res.data)
    //         commit('GETMENULIST',res.data.data)
    //     }
    //    }).catch(err=>{
    //     console.log(err)
    // }) 
    commit('GETMENULIST',[
    {id:'1',path:'SystemLimit',text:'权限管理'},
    {id:'2',path:'SystemMenu',text:'菜单管理'},
    {id:'3',path:'SystemParent',text:'角色管理'},
    {id:'4',path:'SystemUser',text:'用户管理'},
    {id:'5',path:'SystemRole',text:'组织结构管理'},
    ]),
    console.log('111')
}
}


export default{
    state,
    mutations,
    actions
}