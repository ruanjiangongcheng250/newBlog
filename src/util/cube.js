const cb = {};

//操作cookie的方法
cb.CookieParser = {
    setCookie: function (name, value, expireDays) {
        if (expireDays == null) expireDays = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + expireDays * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
    },
    getCookie: function (name) {
        var arr, reg = new RegExp('(^|)' + name + '=([^;]*)(;|$)');
        if (arr = document.cookie.match(reg)) {
            return arr[2];
        } else {
            return null;
        }
    },
    delCookie: function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var val = this.getCookie(name);
        if (val != null) {
            document.cookie = name + '=' + val + ';expires=' + exp.toGMTString();
        }
    }
};

export default cb;