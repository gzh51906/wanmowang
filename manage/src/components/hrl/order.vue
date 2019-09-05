<template>
  <div class="body">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            <input type="checkbox" ref="all" v-on:click="allcheck" />全选
            <input type="checkbox" v-on:click="nonecheck" />反选
          </th>
          <th scope="col">#</th>
          <th scope="col">事件</th>
          <th scope="col">时间</th>
          <th scope="col">是否完成</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,id) in datalist" v-bind:class="{'table-primary':item.done}" :key="item">
          <th>
            <input type="checkbox" v-model="item.ischecked" v-on:click="lgcheck(id,$event)" />
          </th>
          <th scope="row">{{id+1}}</th>
          <td>{{item.content}}</td>
          <td>{{new Date(item.time)}}</td>
          <td>{{item.done?'yes':'no'}}</td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                type="button"
                class="btn btn-outline-success"
                v-on:click="completeThing(id)"
              >完成</button>
              <button type="button" class="btn btn-outline-danger" v-on:click="removedata(id)">删除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: [
        {
          content: "思念一个人",
          time: "1314",
          done: false,
          ischecked: false
        }
      ],
      keyword: ""
    };
  }
};
</script>