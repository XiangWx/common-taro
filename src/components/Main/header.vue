<template>
    <div class="headerBox">
       <div class="myheader">
        <div class="left">
            <span @click="handleBtn" :model='isCollapse' class="iconfont icon-open1" :class="!isCollapse?'show_in':'show_out'"></span>
            <span>管理控制台</span>
        </div>
        <div class="right">
            <div class="rightItem">
                <span>主题色</span>
                <div class="rightList">
                    <ul class="list">
                    <li>默认</li>
                    <li>珊瑚色</li>
                </ul>
                </div>
            </div>
            <div class="rightItem">
            <span>工单</span>
            <div  class="rightList"> 
                <ul  class="list">
                    <li>我的工单</li>
                    <li>提交工单</li>
                </ul>
            </div>
            </div>
             <div class="rightItem">
                <span>消息</span>
                <div class="rightList itemList"> 
                    <div class="message">
                        <span>未读消息</span>
                        <a href="javascript:;">进入消息中心</a>
                    </div>
                    <ul class="list">
                        <li>
                        <p>系统将于9月10日进行升级。。。。</p>
                        <p>2019-06-05 09：10</p>
                         </li>
                        <li>
                            <p>系统将于9月10日进行升级。。。。</p>
                            <p>2019-06-05 09：10</p>
                        </li>
                    </ul>
                </div>
             </div>
        </div>
       </div>
    </div>
</template>
<script>
export default{
      name: 'Myheader',
      data(){
          return{
            isCollapse:false, //是否展开
          }
      },
      methods:{
          handleBtn(){
              this.isCollapse = !this.isCollapse
          }
      }
}
</script>
<style lang="less" scoped>
   
    .headerBox{
        p{
            color: #ddd;
        }
        .myheader{
            height: 50px;
            background-color: #252a2f;  
            color: #fff;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            padding: 0 30px;
            .left{
            .show_in {
                transition: all 0.6s;
                transform: rotate(0deg);
                }
                .show_out {
                transition: all 0.6s;
                transform: rotate(90deg);
                }
                span{
                    margin-right: 10px
                }
            }
            .right{
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: center;
                line-height: 50px;
                & > div {
                    cursor: pointer;
                }
                .rightItem{
                    height: 50px;
                    position: relative;
                    padding: 0 20px;
                     &:hover{
                     .rightList{
                          display: block
                      }
                    }
                    .rightList{
                        min-width: 120px;
                        display: none;
                        position: absolute;
                        top: 50px;
                        right: 0;
                        background: #252a2f;
                        ul.list{
                            display:block;
                            li{
                             padding:10px;
                             border-bottom: 1px solid #333;
                             p{
                                 line-height: 26px;
                             }
                             &:hover{
                                 color: #409eff!important
                             }
                            }
                        }
                    }
                    .itemList{
                        min-width: 280px;
                        padding: 10px;
                        text-align: left;
                        color: #ddd;
                        .message{
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            padding: 0 5px;
                            line-height: 46px
                        }
                        ul.list{
                            li{
                                padding:10px;
                                line-height: 30px;
                                &:hover{
                                color: #409eff!important
                             }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

