<template>
    <!--必须要写的跟标签-->
     <header class="header"><!--header class="msite_header"-->
    <!--Slot的通俗理解是“占坑”，在组件模板中占好了位置，当使用该组件标签时候，组件标签里面的内容就会自动填坑（替换组件模板中<slot>位置），
    当插槽也就是坑<slot name= ” mySlot ” >有命名时，组件标签中使用属性slot= ” mySlot ” 的元素就会替换该对应位置内容； 
        solt传递标签
    -->
          <slot name="left"></slot>
          <span class="header_title">
            <span class="header_title_text ellipsis">{{title}}</span>
          </span>
          <slot name="right"></slot>
    </header>
</template>
<script>
    export default{
        props:{
            title:String
        }
    }
</script>

<style lang="stylus" rel='stylesheet/stylus'>
//添加
          .header
            background-color #02a774
            position fixed
            z-index 100
            left 0
            top 0
            width 100%
            height 45px
            .header_search
              position absolute
              left 15px
              top 50%
              transform translateY(-50%)
              width 10%
              height 50%
              .icon-sousuo
                font-size 25px
                color #fff
            .header_title
              position absolute
              top 50%
              left 50%
              transform translate(-50%, -50%)
              width 50%
              color #fff
              text-align center
              .header_title_text
                font-size 20px
                color #fff
                display block
            .header_login
              font-size 14px
              color #fff
              position absolute
              right 15px
              top 50%
              transform translateY(-50%)
              .header_login_text
                color #fff
          //添加
</style>