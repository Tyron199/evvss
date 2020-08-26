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
        dark: true,
        themes: {
            light: {
                primary: colors.blueGrey.base,
                secondary: colors.blueGrey.darken4,
                warning: colors.orange.accent4,
                success: colors.green.accent4,
                error: colors.red.accent4
            },
            dark: {
                primary: colors.blueGrey.base,
                secondary: colors.blueGrey.darken4,
                warning: colors.orange.accent4,
                success: colors.green.accent4,
                error: colors.red.accent4,
            },
        },
    },
});