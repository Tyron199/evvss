module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {

  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        directories: {
          buildResources: "buildResources"
        },
        appId: 'electron-vue-vuetify-sqlite-sequelize'
        // cscLink: "*BASE64 STRING HERE*",
        // cscKeyPassword: "*PASSWORD*"
      }
    }
  }
}
/*
----Signing
https://stackoverflow.com/questions/84847/how-do-i-create-a-self-signed-certificate-for-code-signing-on-windows

makecert -r -pe -n "CN=My CA" -ss CA -sr CurrentUser -a sha256 -cy authority -sky signature -sv MyCA.pvk MyCA.cer

certutil -user -addstore Root MyCA.cer

makecert -pe -n "CN=My SPC" -a sha256 -cy end -sky signature -ic MyCA.cer -iv MyCA.pvk -sv MySPC.pvk MySPC.cer

(Put 2 cers in c:\\certs and run next command from C:\Program Files (x86)\Windows Kits\8.1\bin\x86)
./pvk2pfx -pvk c:\\certs\\MySPC.pvk -spc c:\\certs\\MySPC.cer -pfx c:\\certs\\MySPC.pfx -po 123123123
*/