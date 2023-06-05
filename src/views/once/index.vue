<template>
  <el-card>
    <el-row :gutter="20" class="header"
      ><el-col :span="7">
        <el-input
          :placeholder="$t('table.placeholder')"
          clearable
          v-model="queryForm.query"
        >
        </el-input>
      </el-col>
      <el-button type="primary" :icon="Search">Search</el-button>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="stock_name" label="股票名称" width="180" />
      <el-table-column prop="date" label="涨停日期" width="180" />
      <el-table-column prop="callback" label="回撤幅度" />
      <el-table-column prop="plate" label="板块" />
      <el-table-column
        prop="concepts"
        label="概念"
        :scopedSlots="{ default: 'conceptsSlot' }"
      >
        <template #conceptsSlot="{ row }">
          <div>
            <el-tag
              v-for="(concept, index) in row.concepts"
              :key="index"
              class="ml-2"
              type="info"
              >{{ concept }}</el-tag
            >
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="region" label="地区" />
    </el-table>
  </el-card>
</template>

<script setup>
import { onceList } from '@/api/once'
import { ref } from 'vue'
const queryForm = ref({
  query: '',
  pagenum: '',
  pagesize: ''
})
const tableData = ref([
  {
    stock_name: '',
    date: '',
    callback: '',
    concepts: [],
    region: '',
    plate: ''
  }
])
const initData = async () => {
  tableData.value = await onceList()
}
initData()
</script>

<style lang="scss" scoped>
.header {
  padding: 16px;
  box-sizing: border-box;
}
</style>
