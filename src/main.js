import Vue from 'vue';
import App from './App.vue';
import data from './data';
import dataNotice from './notices';
import showAlert from './func';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alert(data.message);

showAlert(dataNotice.noticeHello);
showAlert(dataNotice.noticeUser);
