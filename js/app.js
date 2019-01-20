var app = new Vue({
    el: "#app",
    data: {
        username: "",
        password: "",
        showTable: false,
        files: [],
        isLoading: false
    },
    methods: {
        getFiles: function () {
            isLoading = true;
            this.files = [
                {
                    name: "carrot",
                    fileSize: 102401,
                    dateModified: "2018-01-01",
                    id: 'e82e3f5f-1430-47cb-84af-f42f986f114b',
                    type: 'png'
                },
                {
                    name: "duck",
                    fileSize: 20480100,
                    dateModified: "2017-01-01",
                    id: '1b92d92f-a993-4b32-836f-cf1fd0a37053',
                    type: 'mp4'
                }
            ];
            isLoading = false;
        },
        download: function (fileName) {
            this.$http.get(`api/file/${fileName}`).then((response) => {
                this.products = response.body;
                this.showTable = true;
            });
        }
    },
    computed: {
        validUsername: function () {
            return this.username.length > 1 && this.username.length < 20;
        },
        validPassword: function () {
            var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,}$/;
            return !!re.exec(this.password);
        },
        canGetFiles: function () {
            return this.validUsername && this.validPassword;
        }
    }
});