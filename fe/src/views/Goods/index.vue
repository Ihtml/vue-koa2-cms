<template>
  <div>
    <a-card
      :title="simple ? $$.PAGE_META.DASHBOARD.RECENT.LEFT_TITLE : ''"
    >
      <div v-if="!simple">
        <h2>{{ $$.PAGE_META.TOPIC_MGR.PAGE_TITLE }}</h2>

        <a-divider />

        <space-between>
          <div class="search">
            <a-input-search
              :placeholder="`根据药品名搜索`"
              enter-button
              v-model:value="keyword"
              @search="onSearch"
            />

            <a v-if="isSearch" href="javascript:;" @click="backAll">返回</a>
          </div>

          <div>
            <a-button
              @click="show = true"
              v-only-admin
            >
              添加一条
            </a-button>
          </div>
        </space-between>

        <a-divider />
      </div>

      <a-table
        :columns="columns"
        :data-source="list"
        :pagination="false"
        bordered
        :scroll="{ x: 'max-content' }"
        :rowKey="(record) => record._id"
      >
        <template #expirationDate="data">
          {{ formatTimestamp(data.record.expirationDate) }}
        </template>

        <template #producedDate="data">
          {{ formatTimestamp(data.record.producedDate) }}
        </template>

        <template #classify="{ record }">
          {{ getClassifyTitleById(record.classify) }}
        </template>

        <template #count="data">
          <a href="javascript:;" @click="updateCount('IN_COUNT', data.record)">入库</a>
          {{ data.record.count }}
          <a href="javascript:;" @click="updateCount('OUT_COUNT', data.record)">出库</a>
        </template>

        <template #actions="record" v-if="!simple">
          <a href="javascript:;" @click="toDetail(record)">详情</a>
          &nbsp;
          <a v-only-admin href="javascript:;" @click="update(record)">编辑</a>
          &nbsp;
          <a v-only-admin href="javascript:;" @click="remove(record)">删除</a>
        </template>
      </a-table>
      <flex-end v-if="!simple" style="margin-top: 24px;">
        <a-pagination
          v-model:current="curPage"
          :total="total"
          :page-size="10"
          @change="setPage"
        />
      </flex-end>
    </a-card>

    <add-one
      v-model:show="show"
      @getList="getList"
    />

    <update
      v-model:show="showUpdateModal"
      :good="curEditGood"
      @update="updateCurGood"
    />
  </div>
</template>

<script src="./index.jsx"></script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
