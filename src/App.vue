<template>
  <div class="userDataContainer" id='userInfromation'>
    <div v-if="data" class="userData">
      <div  class="user-name">{{ data?.name }}</div>
      <div class="user-address">{{ data?.adresse }}</div>
      <div class="user-phone">{{ data?.telefonnummer }}</div>
    </div>
    <div v-else class="noLogIn" id="noLogIn" >
      <div>Um Daten zu sehen bitte einloggen.</div>  
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getContent() {
      return JSON.parse(localStorage.getItem("user.info"));
    },
  },
  mounted() {
    window.addEventListener("user-data-changed", (event) => {
      this.data = JSON.parse(event.detail.storage);
    });
  },
  data() {
    return {
      data: null,
    };
  },
};
</script>

<style>
.search-bar {
  width: 300px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #dcadcd;
  border-radius: 5px;
}

.userData {
  margin-top: 20px;
  border: 1px solid #dcadcd;
  padding: 10px;
  border-radius: 5px;
}

.userDataContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-name {
  font-weight: bold;
  font-size: 20px;
}

.user-address,
.user-phone {
  margin-top: 5px;
}

.item-list {
  list-style: none;
  padding: 0;
}

.item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.item:last-child {
  border-bottom: none;
}
</style>
