<template>
  <div class="c_wrap">
    <header class="c_header">
      <div @click="handleBack" class="back">
        <i class="el-icon-arrow-left"></i>
        返回
      </div>
      <el-button type="primary" class="c_btn" round @click="handleEdit">
        编辑
      </el-button>
    </header>

    <section class="c_body">
      <div class="c_header_item_info">
        <div v-for="item in showInfoList" :key="item.key" :class="{
          'title': item.type === 'title',
          'line': item.type === 'line'
        }">
          <template v-if="item.type ==='title'">
            <div>{{ item.label }}</div>
          </template>
          <template v-else-if="item.custom">
            <div>{{ item.label }}</div>
            <div> {{ showValueMap(item.key,itemInfo[item.key] )}}</div>
          </template>
          <template v-else-if="item.custom2">
            <div>{{ item.label }}</div>
            <div class="upload_item">
              <template v-for="i in itemInfo.attachmentList" >
                <div v-if="/\.(jpg|png|gif|jpeg)$/.test(i)"  :key="i">
                  <img :src='i' alt="">
                </div>
                <div v-else  :key="i">
                  <video :src="i" controls></video>
                </div>
              </template>
            </div>
          </template>
          <template v-else>
            <div>{{ item.label }}</div>
            <div>{{ itemInfo[item.key] }}</div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      showInfoList: [
        { key: "title1", label: "基础信息", type: "title"},
        { key: "infoSource", label: "信息来源" },
        { key: "infoNo", label: "情报编号" },
        { key: "sysUserId", label: "上报人" , custom: true},
        { key: "reportTime", label: "上报时间" },
        { key: "orgId", label: "上报单位" , custom: true},

        { key: "title2", label: "情报信息", type: "title" },
        { key: "title", label: "情报标题", type: "line" },
        { key: "infoBody", label: "正文", type: "line" },

        { key: "title3", label: "审核信息", type: "title" },
        { key: "status", label: "审核状态", type: "line" , custom: true},
        { key: "employed", label: "是否录用", type: "line" , custom: true},
        { key: "remark", label: "审核意见", type: "line" },

        { key: "attachmentList", label: "附件", type: 'line', custom2: true }
      ]
    }
  },
  computed: {
    ...mapState({
      itemInfo: state => state.infoSubmit.infoSubmitItem,
      psList: state => state.policeStationList,
      policeList: state => state.policeList,
      statusList: state => state.infoSubmitstatusList,
      employedList: state => state.employedList
    })
  },
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions([
      'getInfoSubmitDetailAction',
      'getPoliceListAction',
      'getPoliceStationListAction',
    ]),
    handleBack () {
      this.$router.go(-1)
    },
    handleEdit () {
      const id = this.$route.query.id
      console.log(id)
      this.$router.push({ 
        name: "InfoSubmitEdit",
        query: { id }
      })
    },
    showValueMap (type, id) {
      let arr  = []
      if(type !== 'status') {
        switch (type) {
          case 'orgId':
            arr = this.psList
            break;
          case 'sysUserId':
            arr = this.policeList
            break;
          case  'employed':
            arr = this.employedList
            break;
          default:
            arr = []
            break;
        }
        const item = arr.find(item => item.id === id) || {}
        return item.name
      }else {
        const item = this.statusList.find(item => item.status === id) || {}
        return item.label
      }
    },
    init () {
      const id = this.$route.query.id

      this.getInfoSubmitDetailAction(id)
        .then(res => {
          console.log('res-->', res)
          if(res.infoSource === "情报员上报") {
            this.showInfoList.splice(2, 0, {
              key: "personNo", label: "信息员编号" 
            })
          }
          this.getPoliceListAction(res.orgId)
        })
        .catch(err => console.log(err))

      this.getPoliceStationListAction()
        .catch(err => console.log(err))
    }
  },
}

</script>
<style lang="scss" scoped>
  @import './index.scss';
  .c_body {
    box-shadow: none !important;
  }

  .upload_item {
    margin-right: 20px;
    display: flex;
    justify-content: flex-start;
    > div {
      width: 120px;
      height: 120px;
      margin-right: 20px;
      > img {
        width: 100%;
        height: 100%;
      }
      > video {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>