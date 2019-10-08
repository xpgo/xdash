$(document).ready(function () {
    $("html, body").animate({scrollTop: 0}, "fast");
});

// Search Start
var form = document.getElementById("form");
var google = document.getElementById("google");
var scholar = document.getElementById("scholar");
var bing = document.getElementById("bing");
var dogedoge = document.getElementById("dogedoge");
var baidu = document.getElementById("baidu");
var haosou = document.getElementById("haosou");
var sogou = document.getElementById("sogou");
var taobao = document.getElementById("taobao");
var tmall = document.getElementById("tmall");
var jd = document.getElementById("jd");
var pansou = document.getElementById("pansou");
var github = document.getElementById("github");

var searchLeft = document.getElementById("searchLeft");
var searchCenter = document.getElementById("searchCenter");
var inputBottom = document.getElementById("inputBottom");
var searchRight = document.getElementById("searchRight");
var searchSubmit = document.getElementById("searchSubmit");
var submit = document.getElementById("submit");
searchLeft.onclick = function () {
    searchCenter.value = "";
    searchCenter.focus();
};

searchRight.onclick = function () {
    searchSubmit.click();
};

var domainCookies = document.cookie;
if (domainCookies) {
    var searchCookie = Cookies.get('search');
    if (searchCookie) {
        switch (searchCookie) {
            case "google":
                defaultSearchGoogle();
                break;
            case "scholar":
                defaultSearchScholar();
                break;
            case "bing":
                defaultSearchBing();
                break;
            case "dogedoge":
                defaultSearchDogedoge();
                break;
            case "baidu":
                defaultSearchBaidu();
                break;
            case "haosou":
                defaultSearchHaosou();
                break;
            case "sogou":
                defaultSearchSogou();
                break;
            case "taobao":
                defaultSearchTaobao();
                break;
            case "tmall":
                defaultSearchTmall();
                break;
            case "jd":
                defaultSearchJD();
                break;
            case "pansou":
                defaultSearchPansou();
                break;
            case "github":
                defaultSearchGithub();
                break;
            default:
                defaultSearchBaidu();
        }
    } else {
        defaultSearchBaidu();
    }
} else {
    defaultSearchBaidu();
}


// Google
google.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "Google";
    form.action = "https://www.google.com/search";
    searchCenter.name = "q";
    inputBottom.name = "newwindow";
    inputBottom.value = "0";
    Cookies.set('search', 'google', { expires: 30, path: '' });
};
// Scholar
scholar.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "Scholar";
    form.action = "https://scholar.google.com/scholar";
    searchCenter.name = "q";
    inputBottom.name = "hl";
    inputBottom.value = "zh-CN";
    Cookies.set('search', 'scholar', { expires: 30, path: '' });
};
// Bing
bing.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "Bing";
    form.action = "https://www.bing.com/search";
    searchCenter.name = "q";
    Cookies.set('search', 'bing', { expires: 30, path: '' });
};
// Dogedoge
dogedoge.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "Doge";
    form.action = "https://www.dogedoge.com/results";
    searchCenter.name = "q";
    Cookies.set('search', 'dogedoge', { expires: 30, path: '' });
};
// Baidu
baidu.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "Baidu";
    form.action = "https://www.baidu.com/s";
    searchCenter.name = "wd";
    Cookies.set('search', 'baidu', { expires: 30, path: '' });
};
// Haosou
haosou.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "Haosou";
    form.action = "https://www.haosou.com/s";
    searchCenter.name = "q";
    Cookies.set('search', 'haosou', { expires: 30, path: '' });
};
// Sogou
sogou.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "Sougou";
    form.action = "https://www.sogou.com/web";
    searchCenter.name = "query";
    Cookies.set('search', 'sogou', { expires: 30, path: '' });
};
// Taobao
taobao.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "Taobao";
    form.action = "https://s.taobao.com/search";
    searchCenter.name = "q";
    Cookies.set('search', 'taobao', { expires: 30, path: '' });
};
// Tmall
tmall.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "Tmall";
    form.action = "https://list.tmall.com/search_product.htm";
    searchCenter.name = "q";
    Cookies.set('search', 'tmall', { expires: 30, path: '' });
};
// JD
jd.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "Jingdong";
    form.action = "https://search.jd.com/Search";
    searchCenter.name = "keyword";
    inputBottom.name = "enc";
    inputBottom.value = "UTF-8";
    Cookies.set('search', 'jd', { expires: 30, path: '' });
};
// PanSou
pansou.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "Pansou";
    form.action = "http://www.pansou.com/";
    searchCenter.name = "q";
    Cookies.set('search', 'pansou', { expires: 30, path: '' });
};
// GitHub
github.onclick = function () {
    clearInputBottom();
    searchRight.innerHTML = "Github";
    form.action = "https://github.com/search";
    searchCenter.name = "q";
    Cookies.set('search', 'github', { expires: 30, path: '' });
};

// Clear Hidden Input
function clearInputBottom() {
    inputBottom.name = "";
    inputBottom.value = "";
}

// 搜索函数
function defaultSearchGoogle() {
    searchRight.innerHTML = "Google";
    form.action = "https://www.google.com/search";
    searchCenter.name = "q";
    inputBottom.name = "newwindow";
    inputBottom.value = "0";
}
function defaultSearchScholar() {
    searchRight.innerHTML = "Scholar";
    form.action = "https://scholar.google.com/scholar";
    searchCenter.name = "q";
    inputBottom.name = "hl";
    inputBottom.value = "zh-CN";
}
function defaultSearchBing() {
    searchRight.innerHTML = "Bing";
    form.action = "https://www.bing.com/search";
    searchCenter.name = "q";
}
function defaultSearchDogedoge() {
    searchRight.innerHTML = "Doge";
    form.action = "https://www.dogedoge.com/results";
    searchCenter.name = "q";
}
function defaultSearchBaidu() {
    searchRight.innerHTML = "Baidu";
    form.action = "https://www.baidu.com/s";
    searchCenter.name = "wd";
}
function defaultSearchHaosou() {
    searchRight.innerHTML = "Haosou";
    form.action = "https://www.so.com/s";
    searchCenter.name = "q";
}
function defaultSearchSogou() {
    searchRight.innerHTML = "Sougou";
    form.action = "https://www.sogou.com/web";
    searchCenter.name = "query";
}
function defaultSearchTaobao() {
    searchRight.innerHTML = "Taobao";
    form.action = "https://s.taobao.com/search";
    searchCenter.name = "q";
}
function defaultSearchTmall() {
    searchRight.innerHTML = "Tmall";
    form.action = "https://list.tmall.com/search_product.htm";
    searchCenter.name = "q";
}
function defaultSearchJD() {
    searchRight.innerHTML = "Jingdong";
    form.action = "https://search.jd.com/Search";
    searchCenter.name = "keyword";
    inputBottom.name = "enc";
    inputBottom.value = "UTF-8";
}
function defaultSearchPansou() {
    searchRight.innerHTML = "Pansou";
    form.action = "http://www.pansou.com/";
    searchCenter.name = "q";
}
function defaultSearchGithub() {
    searchRight.innerHTML = "Github";
    form.action = "https://github.com/search";
    searchCenter.name = "q";
}

function formCheck() {
    if (searchCenter.value == "") { return false; }
}

searchCenterPlaceholder();

submit.onclick = function () {
    searchCenter.focus();
    setTimeout(function () { searchCenterPlaceholder(); }, 50);
};

function searchCenterPlaceholder() {
    var str = searchRight.innerHTML;
    searchCenter.placeholder = "Input to search";
}
// Search End

