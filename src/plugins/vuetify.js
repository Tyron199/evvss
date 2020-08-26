import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa',
    },
    theme: {
        themes: {
            light: {
                primary: colors.blueGrey.darken3,
                secondary: colors.grey.darken1,
                warning: colors.orange.accent3,
                success: colors.green.accent3,
                error: colors.red.accent3,
            },
            dark: {
                primary: colors.blueGrey.darken1,
                secondary: colors.grey.darken1,
                warning: colors.orange.accent3,
                success: colors.green,
                error: colors.red,
            },
        },
    },
});