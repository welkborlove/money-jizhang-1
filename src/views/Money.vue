<template >
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord" />
    <Tabs :data-source="recordTypeList"
        :value.sync="record.type"
    />
    <div class="FormItem">
      <Notes field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"
      :value="record.notes"
       />
    </div>
    <Tags @update:value="record.tags = $event"/>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import { Component } from "vue-property-decorator";
import recordTypeList from "@/constants/recordTypeList";
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tabs ,Tags, Notes, NumberPad },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
   recordTypeList = recordTypeList;

  record: RecordItem = { tags: [], notes: "", type: "-", amount: 0 };
  created() {
    this.$store.commit("fetchRecords");
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    if(!this.record.tags || this.record.tags.length===0){
     return window.alert('请选择至少一个标签');
    }
    this.$store.commit("createRecord", this.record);
    if(this.$store.state.createRecordError === null){
       window.alert('已保存');
       this.record.notes ='';
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.FormItem {
  padding: 12px 0;
}
</style>
