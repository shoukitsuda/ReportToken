<template>
  <div class="filecard-content" v-if="report != null">
    <h3 class="report-subject">科目:{{report.subject}}</h3>
    <div class="file-card">
      <div class="report-details">
        <h5 class="report-title">{{ report.detail }}</h5>
        <img
        src="~/assets/images/reportoken-logo.png"
        class="reportoken"
        style="text-align:center"/>
      </div>
    </div>
  </div>
</template>
<script>
import { db, firebase } from "~/plugins/firebase";
export default {
  props: ["report"],
  data() {
    return {
      value: 3.7,
      reportIndex: 0,
      shareUserAddress: "",
      reports: [],
      Report: null,
    };
  },
};
</script>

<style scoped>
.filecard-content {
  display: inline-block;
}
.file-card {
  display: block;
  background-color: #fff;
  position: relative;
  width: 200px;
  height: 282px;
  margin: 15px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 10 10px 10px black;
}
.file-card:before {
  height: 0;
  position: absolute;
  right: 0;
  content: "";
  border-top: solid 30px #f4f4f4;
  border-left: solid 30px transparent;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3),
    -1px 1px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), -2px 2px 2px rgba(0, 0, 0, 0.2);
}
.file-card:after {
  height: 0;
  display: block;
  position: absolute;
  right: 0;
  content: "";
  border-bottom: solid 30px rgba(255, 255, 255, 0.8);
  border-right: solid 30px transparent;
  top: 0;
}

.report-details {
  position: relative;
  padding: 10px;
  text-align: center;
}
.report-semester {
  position: absolute;
  top: -9px;
  right: -5px;
}
.report-grade {
  position: absolute;
  top: -9px;
  right: 50px;
}
.report-exp {
  margin: 0;
  padding: 0;
  height: 75px;
  overflow: scroll;
}
.report-title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.reportoken{
  margin: 0 auto;
  margin-top: 100px;
  width: 80px;
  height: auto;
}

.report-subject{
  color: rgba(0, 0, 0, 0.38);
}
.download {
  position: absolute;
  display: flex;
  right: -10px;
  bottom: 75px;
}
</style>
