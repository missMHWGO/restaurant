<template>
  <div class="imgBox" v-bdstyle="compentstyle">
    ![](info.filePath)
  </div>
  <div class="btnBox">
    <input type="file" class="hidden" v-bindimgid="compentid" @change="sendFile">
    <div class="btn" @click="checkFile">上传</div>
    <div class="perBar" v-binduploadper="picUploadPer"></div>
  </div>
</template>

<script>
  import { fileImage } from ""

  export default {
    props: ['compentstyle', 'compentid'],
    data() {
      return {
        info: {
          imgName: '',
          imgPath: './../assets/ic_upload_img_default.jpg',
          imgPreviewPath: ''
        },
        picUploadPer: "",
        isFinish: false,
      }
    },
    watch: {
      'info': function (now, old) {
        this.$dispatch('imgFormChild', now, this.compentid)
      }
    },
    methods: {
      checkFile() {
        let DOM = this.els[this.compentid]
        DOM.click()
      },
      sendFile(e) {
        this.picUploadPer = ''
        this.isFinish = false

        let image = e.target,
        file = image.files[0]

        this.fileInfo(file)
        this.uploadImg(file)
      },
      postImagePath(imgObj) {
        this.$dispatch('imgFormChild', imgObj)
      },
      fileInfo(file) {
        this.fileName = file.name
        this.fileSize = parseInt(file.size / 1000) + "KB"
      },
      uploadImg(file) {
        let _this = this

        function getData(data) {
          let img = data.files[0]
          _this.info = img
        }

        function getPer(per) {
          _this.picUploadPer = per
          _this.isFinish = per == "100" ? true : false
        }

        fileImage(file, getData, getPer)
      }
    }
  }

</script>
