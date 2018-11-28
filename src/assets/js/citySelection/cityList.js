var cityData = [
  {
    "id": 110001,
    "city": "北京",
    "pinyin": "beijing"
  },
  {
    "id": 120001,
    "city": "天津",
    "pinyin": "tianjin"
  },
  {
    "id": 130001,
    "city": "石家庄",
    "pinyin": "jiazhuang"
  },
  {
    "id": 130002,
    "city": "唐山",
    "pinyin": "tangshan"
  },
  {
    "id": 130003,
    "city": "秦皇岛",
    "pinyin": "qinhuangdao"
  },
  {
    "id": 130004,
    "city": "邯郸",
    "pinyin": "handan"
  },
  {
    "id": 130005,
    "city": "邢台",
    "pinyin": "xingtai"
  },
  {
    "id": 130006,
    "city": "保定",
    "pinyin": "baoding"
  },
  {
    "id": 130007,
    "city": "张家口",
    "pinyin": "zhangjiakou"
  },
  {
    "id": 130008,
    "city": "承德",
    "pinyin": "chengde"
  },
  {
    "id": 130009,
    "city": "沧州",
    "pinyin": "cangzhou"
  },
  {
    "id": 13010,
    "city": "廊坊",
    "pinyin": "langfang"
  },
  {
    "id": 131001,
    "city": "衡水",
    "pinyin": "hengshui"
  },
  {
    "id": 140001,
    "city": "太原",
    "pinyin": "taiyuan"
  },
  {
    "id": 140002,
    "city": "大同",
    "pinyin": "datong"
  },
  {
    "id": 140003,
    "city": "阳泉",
    "pinyin": "yangquan"
  },
  {
    "id": 140004,
    "city": "长治",
    "pinyin": "zhangzhi"
  },
  {
    "id": 140005,
    "city": "晋城",
    "pinyin": "jincheng"
  },
  {
    "id": 140006,
    "city": "朔州",
    "pinyin": "shuozhou"
  },
  {
    "id": 140007,
    "city": "晋中",
    "pinyin": "jinzhong"
  },
  {
    "id": 140008,
    "city": "运城",
    "pinyin": "yuncheng"
  },
  {
    "id": 140009,
    "city": "忻州",
    "pinyin": "xinzhou"
  },
  {
    "id": 14010,
    "city": "临汾",
    "pinyin": "linfen"
  },
  {
    "id": 141001,
    "city": "吕梁",
    "pinyin": "lvliang"
  },
  {
    "id": 150001,
    "city": "呼和浩特",
    "pinyin": "huhehaote"
  },
  {
    "id": 150002,
    "city": "包头",
    "pinyin": "baotou"
  },
  {
    "id": 150003,
    "city": "乌海",
    "pinyin": "wuhai"
  },
  {
    "id": 150004,
    "city": "赤峰",
    "pinyin": "chifeng"
  },
  {
    "id": 150005,
    "city": "通辽",
    "pinyin": "tongliao"
  },
  {
    "id": 150006,
    "city": "鄂尔多斯",
    "pinyin": "eerduosi"
  },
  {
    "id": 150007,
    "city": "呼伦贝尔",
    "pinyin": "hulunbeier"
  },
  {
    "id": 150008,
    "city": "巴彦淖尔",
    "pinyin": "bayannaoer"
  },
  {
    "id": 150009,
    "city": "乌兰察布",
    "pinyin": "wulanchabu"
  },
  {
    "id": 152002,
    "city": "兴安盟",
    "pinyin": "xinganmeng"
  },
  {
    "id": 152005,
    "city": "锡林郭勒盟",
    "pinyin": "xilinguolemeng"
  },
  {
    "id": 152009,
    "city": "阿拉善盟",
    "pinyin": "alashanmeng"
  },
  {
    "id": 210001,
    "city": "沈阳",
    "pinyin": "shenyang"
  },
  {
    "id": 210002,
    "city": "大连",
    "pinyin": "dalian"
  },
  {
    "id": 210003,
    "city": "鞍山",
    "pinyin": "anshan"
  },
  {
    "id": 210004,
    "city": "抚顺",
    "pinyin": "fushun"
  },
  {
    "id": 210005,
    "city": "本溪",
    "pinyin": "benxi"
  },
  {
    "id": 210006,
    "city": "丹东",
    "pinyin": "dandong"
  },
  {
    "id": 210007,
    "city": "锦州",
    "pinyin": "jinzhou"
  },
  {
    "id": 210008,
    "city": "营口",
    "pinyin": "yingkou"
  },
  {
    "id": 210009,
    "city": "阜新",
    "pinyin": "fuxin"
  },
  {
    "id": 21010,
    "city": "辽阳",
    "pinyin": "liaoyang"
  },
  {
    "id": 211001,
    "city": "盘锦",
    "pinyin": "panjin"
  },
  {
    "id": 211002,
    "city": "铁岭",
    "pinyin": "tieling"
  },
  {
    "id": 211003,
    "city": "朝阳",
    "pinyin": "chaoyang"
  },
  {
    "id": 211004,
    "city": "葫芦岛",
    "pinyin": "huludao"
  },
  {
    "id": 220001,
    "city": "长春",
    "pinyin": "zhangchun"
  },
  {
    "id": 220002,
    "city": "吉林",
    "pinyin": "jilin"
  },
  {
    "id": 220003,
    "city": "四平",
    "pinyin": "siping"
  },
  {
    "id": 220004,
    "city": "辽源",
    "pinyin": "liaoyuan"
  },
  {
    "id": 220005,
    "city": "通化",
    "pinyin": "tonghua"
  },
  {
    "id": 220006,
    "city": "白山",
    "pinyin": "baishan"
  },
  {
    "id": 220007,
    "city": "松原",
    "pinyin": "songyuan"
  },
  {
    "id": 220008,
    "city": "白城",
    "pinyin": "baicheng"
  },
  {
    "id": 222004,
    "city": "延边朝鲜族自治州",
    "pinyin": "yanbianchaoxianzuzizhizhou"
  },
  {
    "id": 230001,
    "city": "哈尔滨",
    "pinyin": "haerbin"
  },
  {
    "id": 230002,
    "city": "齐齐哈尔",
    "pinyin": "qiqihaer"
  },
  {
    "id": 230003,
    "city": "鸡西",
    "pinyin": "jixi"
  },
  {
    "id": 230004,
    "city": "鹤岗",
    "pinyin": "hegang"
  },
  {
    "id": 230006,
    "city": "大庆",
    "pinyin": "daqing"
  },
  {
    "id": 230007,
    "city": "伊春",
    "pinyin": "yichun"
  },
  {
    "id": 230008,
    "city": "佳木斯",
    "pinyin": "jiamusi"
  },
  {
    "id": 230009,
    "city": "七台河",
    "pinyin": "qitaihe"
  },
  {
    "id": 23010,
    "city": "牡丹江",
    "pinyin": "mudanjiang"
  },
  {
    "id": 231001,
    "city": "黑河",
    "pinyin": "heihe"
  },
  {
    "id": 231002,
    "city": "绥化",
    "pinyin": "suihua"
  },
  {
    "id": 232007,
    "city": "大兴安岭地区",
    "pinyin": "daxinganlingdiqu"
  },
  {
    "id": 310001,
    "city": "上海",
    "pinyin": "shanghai"
  },
  {
    "id": 320001,
    "city": "南京",
    "pinyin": "nanjing"
  },
  {
    "id": 320002,
    "city": "无锡",
    "pinyin": "wuxi"
  },
  {
    "id": 320003,
    "city": "徐州",
    "pinyin": "xuzhou"
  },
  {
    "id": 320004,
    "city": "常州",
    "pinyin": "changzhou"
  },
  {
    "id": 320005,
    "city": "苏州",
    "pinyin": "suzhou"
  },
  {
    "id": 320006,
    "city": "南通",
    "pinyin": "nantong"
  },
  {
    "id": 320007,
    "city": "连云港",
    "pinyin": "lianyungang"
  },
  {
    "id": 320008,
    "city": "淮安",
    "pinyin": "huaian"
  },
  {
    "id": 320009,
    "city": "盐城",
    "pinyin": "yancheng"
  },
  {
    "id": 32010,
    "city": "扬州",
    "pinyin": "yangzhou"
  },
  {
    "id": 321001,
    "city": "镇江",
    "pinyin": "zhenjiang"
  },
  {
    "id": 321002,
    "city": "泰州",
    "pinyin": "taizhou"
  },
  {
    "id": 321003,
    "city": "宿迁",
    "pinyin": "suqian"
  },
  {
    "id": 330001,
    "city": "杭州",
    "pinyin": "hangzhou"
  },
  {
    "id": 330002,
    "city": "宁波",
    "pinyin": "ningbo"
  },
  {
    "id": 330003,
    "city": "温州",
    "pinyin": "wenzhou"
  },
  {
    "id": 330004,
    "city": "嘉兴",
    "pinyin": "jiaxing"
  },
  {
    "id": 330005,
    "city": "湖州",
    "pinyin": "huzhou"
  },
  {
    "id": 330006,
    "city": "绍兴",
    "pinyin": "shaoxing"
  },
  {
    "id": 330007,
    "city": "金华",
    "pinyin": "jinhua"
  },
  {
    "id": 330008,
    "city": "衢州",
    "pinyin": "quzhou"
  },
  {
    "id": 330009,
    "city": "舟山",
    "pinyin": "zhoushan"
  },
  {
    "id": 33010,
    "city": "台州",
    "pinyin": "taizhou1"
  },
  {
    "id": 331001,
    "city": "丽水",
    "pinyin": "lishui"
  },
  {
    "id": 340001,
    "city": "合肥",
    "pinyin": "hefei"
  },
  {
    "id": 340002,
    "city": "芜湖",
    "pinyin": "wuhu"
  },
  {
    "id": 340003,
    "city": "蚌埠",
    "pinyin": "bangbu"
  },
  {
    "id": 340004,
    "city": "淮南",
    "pinyin": "huainan"
  },
  {
    "id": 340005,
    "city": "马鞍山",
    "pinyin": "maanshan"
  },
  {
    "id": 340006,
    "city": "淮北",
    "pinyin": "huaibei"
  },
  {
    "id": 340007,
    "city": "铜陵",
    "pinyin": "tongling"
  },
  {
    "id": 340008,
    "city": "安庆",
    "pinyin": "anqing"
  },
  {
    "id": 34010,
    "city": "黄山",
    "pinyin": "huangshan"
  },
  {
    "id": 341001,
    "city": "滁州",
    "pinyin": "chuzhou"
  },
  {
    "id": 341002,
    "city": "阜阳",
    "pinyin": "fuyang"
  },
  {
    "id": 341003,
    "city": "宿州",
    "pinyin": "suzhou1"
  },
  {
    "id": 341004,
    "city": "巢湖",
    "pinyin": "chaohu"
  },
  {
    "id": 341005,
    "city": "六安",
    "pinyin": "liuan"
  },
  {
    "id": 341006,
    "city": "亳州",
    "pinyin": "bozhou"
  },
  {
    "id": 341007,
    "city": "池州",
    "pinyin": "chizhou"
  },
  {
    "id": 341008,
    "city": "宣城",
    "pinyin": "xuancheng"
  },
  {
    "id": 350001,
    "city": "福州",
    "pinyin": "fuzhou"
  },
  {
    "id": 350002,
    "city": "厦门",
    "pinyin": "xiamen"
  },
  {
    "id": 350003,
    "city": "莆田",
    "pinyin": "putian"
  },
  {
    "id": 350004,
    "city": "三明",
    "pinyin": "sanming"
  },
  {
    "id": 350005,
    "city": "泉州",
    "pinyin": "quanzhou"
  },
  {
    "id": 350006,
    "city": "漳州",
    "pinyin": "zhangzhou"
  },
  {
    "id": 350007,
    "city": "南平",
    "pinyin": "nanping"
  },
  {
    "id": 350008,
    "city": "龙岩",
    "pinyin": "longyan"
  },
  {
    "id": 350009,
    "city": "宁德",
    "pinyin": "ningde"
  },
  {
    "id": 360001,
    "city": "南昌",
    "pinyin": "nanchang"
  },
  {
    "id": 360002,
    "city": "景德镇",
    "pinyin": "jingdezhen"
  },
  {
    "id": 360003,
    "city": "萍乡",
    "pinyin": "pingxiang"
  },
  {
    "id": 360004,
    "city": "九江",
    "pinyin": "jiujiang"
  },
  {
    "id": 360005,
    "city": "新余",
    "pinyin": "xinyu"
  },
  {
    "id": 360006,
    "city": "鹰潭",
    "pinyin": "yingtan"
  },
  {
    "id": 360007,
    "city": "赣州",
    "pinyin": "ganzhou"
  },
  {
    "id": 360008,
    "city": "吉安",
    "pinyin": "jian"
  },
  {
    "id": 360009,
    "city": "宜春",
    "pinyin": "yichun1"
  },
  {
    "id": 36010,
    "city": "抚州",
    "pinyin": "fuzhou1"
  },
  {
    "id": 361001,
    "city": "上饶",
    "pinyin": "shangrao"
  },
  {
    "id": 370001,
    "city": "济南",
    "pinyin": "jinan"
  },
  {
    "id": 370002,
    "city": "青岛",
    "pinyin": "qingdao"
  },
  {
    "id": 370003,
    "city": "淄博",
    "pinyin": "zibo"
  },
  {
    "id": 370004,
    "city": "枣庄",
    "pinyin": "zaozhuang"
  },
  {
    "id": 370005,
    "city": "东营",
    "pinyin": "dongying"
  },
  {
    "id": 370006,
    "city": "烟台",
    "pinyin": "yantai"
  },
  {
    "id": 370007,
    "city": "潍坊",
    "pinyin": "weifang"
  },
  {
    "id": 370008,
    "city": "济宁",
    "pinyin": "jining"
  },
  {
    "id": 370009,
    "city": "泰安",
    "pinyin": "taian"
  },
  {
    "id": 37010,
    "city": "威海",
    "pinyin": "weihai"
  },
  {
    "id": 371001,
    "city": "日照",
    "pinyin": "rizhao"
  },
  {
    "id": 371002,
    "city": "莱芜",
    "pinyin": "laiwu"
  },
  {
    "id": 371003,
    "city": "临沂",
    "pinyin": "linyi"
  },
  {
    "id": 371004,
    "city": "德州",
    "pinyin": "dezhou"
  },
  {
    "id": 371005,
    "city": "聊城",
    "pinyin": "liaocheng"
  },
  {
    "id": 371006,
    "city": "滨州",
    "pinyin": "binzhou"
  },
  {
    "id": 371007,
    "city": "荷泽",
    "pinyin": "heze"
  },
  {
    "id": 410001,
    "city": "郑州",
    "pinyin": "zhengzhou"
  },
  {
    "id": 410002,
    "city": "开封",
    "pinyin": "kaifeng"
  },
  {
    "id": 410003,
    "city": "洛阳",
    "pinyin": "luoyang"
  },
  {
    "id": 410004,
    "city": "平顶山",
    "pinyin": "pingdingshan"
  },
  {
    "id": 410005,
    "city": "安阳",
    "pinyin": "anyang"
  },
  {
    "id": 410006,
    "city": "鹤壁",
    "pinyin": "hebi"
  },
  {
    "id": 410007,
    "city": "新乡",
    "pinyin": "xinxiang"
  },
  {
    "id": 410008,
    "city": "焦作",
    "pinyin": "jiaozuo"
  },
  {
    "id": 410009,
    "city": "濮阳",
    "pinyin": "puyang"
  },
  {
    "id": 41010,
    "city": "许昌",
    "pinyin": "xuchang"
  },
  {
    "id": 411001,
    "city": "漯河",
    "pinyin": "luohe"
  },
  {
    "id": 411002,
    "city": "三门峡",
    "pinyin": "sanmenxia"
  },
  {
    "id": 411003,
    "city": "南阳",
    "pinyin": "nanyang"
  },
  {
    "id": 411004,
    "city": "商丘",
    "pinyin": "shangqiu"
  },
  {
    "id": 411005,
    "city": "信阳",
    "pinyin": "xinyang"
  },
  {
    "id": 411006,
    "city": "周口",
    "pinyin": "zhoukou"
  },
  {
    "id": 411007,
    "city": "驻马店",
    "pinyin": "zhumadian"
  },
  {
    "id": 420001,
    "city": "武汉",
    "pinyin": "wuhan"
  },
  {
    "id": 420002,
    "city": "黄石",
    "pinyin": "huang"
  },
  {
    "id": 420003,
    "city": "十堰",
    "pinyin": "shiyan"
  },
  {
    "id": 420005,
    "city": "宜昌",
    "pinyin": "yichang"
  },
  {
    "id": 420006,
    "city": "襄樊",
    "pinyin": "xiangfan"
  },
  {
    "id": 420007,
    "city": "鄂州",
    "pinyin": "ezhou"
  },
  {
    "id": 420008,
    "city": "荆门",
    "pinyin": "jingmen"
  },
  {
    "id": 420009,
    "city": "孝感",
    "pinyin": "xiaogan"
  },
  {
    "id": 42010,
    "city": "荆州",
    "pinyin": "jingzhou"
  },
  {
    "id": 421001,
    "city": "黄冈",
    "pinyin": "huanggang"
  },
  {
    "id": 421002,
    "city": "咸宁",
    "pinyin": "xianning"
  },
  {
    "id": 421003,
    "city": "随州",
    "pinyin": "suizhou"
  },
  {
    "id": 422008,
    "city": "恩施土家族苗族自治州",
    "pinyin": "entujiazumiaozuzizhizhou"
  },
  {
    "id": 430001,
    "city": "长沙",
    "pinyin": "changsha"
  },
  {
    "id": 430002,
    "city": "株洲",
    "pinyin": "zhuzhou"
  },
  {
    "id": 430003,
    "city": "湘潭",
    "pinyin": "xiangtan"
  },
  {
    "id": 430004,
    "city": "衡阳",
    "pinyin": "hengyang"
  },
  {
    "id": 430005,
    "city": "邵阳",
    "pinyin": "shaoyang"
  },
  {
    "id": 430006,
    "city": "岳阳",
    "pinyin": "yueyang"
  },
  {
    "id": 430007,
    "city": "常德",
    "pinyin": "changde"
  },
  {
    "id": 430008,
    "city": "张家界",
    "pinyin": "zhangjiajie"
  },
  {
    "id": 430009,
    "city": "益阳",
    "pinyin": "yiyang"
  },
  {
    "id": 43010,
    "city": "郴州",
    "pinyin": "chenzhou"
  },
  {
    "id": 431001,
    "city": "永州",
    "pinyin": "yongzhou"
  },
  {
    "id": 431002,
    "city": "怀化",
    "pinyin": "huaihua"
  },
  {
    "id": 431003,
    "city": "娄底",
    "pinyin": "loudi"
  },
  {
    "id": 433001,
    "city": "湘西",
    "pinyin": "xiangxitujiazumiaozuzizhizhou"
  },
  {
    "id": 440001,
    "city": "广州",
    "pinyin": "guangzhou"
  },
  {
    "id": 440002,
    "city": "韶关",
    "pinyin": "shaoguan"
  },
  {
    "id": 440003,
    "city": "深圳",
    "pinyin": "shenzhen"
  },
  {
    "id": 440004,
    "city": "珠海",
    "pinyin": "zhuhai"
  },
  {
    "id": 440005,
    "city": "汕头",
    "pinyin": "shantou"
  },
  {
    "id": 440006,
    "city": "佛山",
    "pinyin": "foshan"
  },
  {
    "id": 440007,
    "city": "江门",
    "pinyin": "jiangmen"
  },
  {
    "id": 440008,
    "city": "湛江",
    "pinyin": "zhanjiang"
  },
  {
    "id": 440009,
    "city": "茂名",
    "pinyin": "maoming"
  },
  {
    "id": 441002,
    "city": "肇庆",
    "pinyin": "zhaoqing"
  },
  {
    "id": 441003,
    "city": "惠州",
    "pinyin": "huizhou"
  },
  {
    "id": 441004,
    "city": "梅州",
    "pinyin": "meizhou"
  },
  {
    "id": 441005,
    "city": "汕尾",
    "pinyin": "shanwei"
  },
  {
    "id": 441006,
    "city": "河源",
    "pinyin": "heyuan"
  },
  {
    "id": 441007,
    "city": "阳江",
    "pinyin": "yangjiang"
  },
  {
    "id": 441008,
    "city": "清远",
    "pinyin": "qingyuan"
  },
  {
    "id": 441009,
    "city": "东莞",
    "pinyin": "dongguan"
  },
  {
    "id": 442000,
    "city": "中山",
    "pinyin": "zhongshan"
  },
  {
    "id": 445001,
    "city": "潮州",
    "pinyin": "chaozhou"
  },
  {
    "id": 445002,
    "city": "揭阳",
    "pinyin": "jieyang"
  },
  {
    "id": 445003,
    "city": "云浮",
    "pinyin": "yunfu"
  },
  {
    "id": 450001,
    "city": "南宁",
    "pinyin": "nanning"
  },
  {
    "id": 450002,
    "city": "柳州",
    "pinyin": "liuzhou"
  },
  {
    "id": 450003,
    "city": "桂林",
    "pinyin": "guilin"
  },
  {
    "id": 450004,
    "city": "梧州",
    "pinyin": "wuzhou"
  },
  {
    "id": 450005,
    "city": "北海",
    "pinyin": "beihai"
  },
  {
    "id": 450006,
    "city": "防城港",
    "pinyin": "fangchenggang"
  },
  {
    "id": 450007,
    "city": "钦州",
    "pinyin": "qinzhou"
  },
  {
    "id": 450008,
    "city": "贵港",
    "pinyin": "guigang"
  },
  {
    "id": 450009,
    "city": "玉林",
    "pinyin": "yulin"
  },
  {
    "id": 45010,
    "city": "百色",
    "pinyin": "baise"
  },
  {
    "id": 451001,
    "city": "贺州",
    "pinyin": "hezhou"
  },
  {
    "id": 451002,
    "city": "河池",
    "pinyin": "hechi"
  },
  {
    "id": 451003,
    "city": "来宾",
    "pinyin": "laibin"
  },
  {
    "id": 451004,
    "city": "崇左",
    "pinyin": "chongzuo"
  },
  {
    "id": 460001,
    "city": "海口",
    "pinyin": "haikou"
  },
  {
    "id": 460002,
    "city": "三亚",
    "pinyin": "sanya"
  },
  {
    "id": 500003,
    "city": "重庆",
    "pinyin": "chongqing"
  },
  {
    "id": 510001,
    "city": "成都",
    "pinyin": "chengdu"
  },
  {
    "id": 510003,
    "city": "自贡",
    "pinyin": "zigong"
  },
  {
    "id": 510004,
    "city": "攀枝花",
    "pinyin": "panzhihua"
  },
  {
    "id": 510005,
    "city": "泸州",
    "pinyin": "luzhou"
  },
  {
    "id": 510006,
    "city": "德阳",
    "pinyin": "deyang"
  },
  {
    "id": 510007,
    "city": "绵阳",
    "pinyin": "mianyang"
  },
  {
    "id": 510008,
    "city": "广元",
    "pinyin": "guangyuan"
  },
  {
    "id": 510009,
    "city": "遂宁",
    "pinyin": "suining"
  },
  {
    "id": 51010,
    "city": "内江",
    "pinyin": "neijiang"
  },
  {
    "id": 511001,
    "city": "乐山",
    "pinyin": "leshan"
  },
  {
    "id": 511003,
    "city": "南充",
    "pinyin": "nanchong"
  },
  {
    "id": 511004,
    "city": "眉山",
    "pinyin": "meishan"
  },
  {
    "id": 511005,
    "city": "宜宾",
    "pinyin": "yibin"
  },
  {
    "id": 511006,
    "city": "广安",
    "pinyin": "guangan"
  },
  {
    "id": 511007,
    "city": "达州",
    "pinyin": "dazhou"
  },
  {
    "id": 511008,
    "city": "雅安",
    "pinyin": "yaan"
  },
  {
    "id": 511009,
    "city": "巴中",
    "pinyin": "bazhong"
  },
  {
    "id": 512000,
    "city": "资阳",
    "pinyin": "ziyang"
  },
  {
    "id": 513002,
    "city": "阿坝藏族羌族自治州",
    "pinyin": "abazangzuqiangzuzizhizhou"
  },
  {
    "id": 513003,
    "city": "甘孜藏族自治州",
    "pinyin": "ganzizangzuzizhizhou"
  },
  {
    "id": 513004,
    "city": "凉山彝族自治州",
    "pinyin": "liangshanyizuzizhizhou"
  },
  {
    "id": 520001,
    "city": "贵阳",
    "pinyin": "guiyang"
  },
  {
    "id": 520002,
    "city": "六盘水",
    "pinyin": "liupanshui"
  },
  {
    "id": 520003,
    "city": "遵义",
    "pinyin": "zunyi"
  },
  {
    "id": 520004,
    "city": "安顺",
    "pinyin": "anshun"
  },
  {
    "id": 522002,
    "city": "铜仁地区",
    "pinyin": "tongrendiqu"
  },
  {
    "id": 522003,
    "city": "黔西南布依族苗族自治州",
    "pinyin": "qianxinanbuyizumiaozuzizhizhou"
  },
  {
    "id": 522004,
    "city": "毕节地区",
    "pinyin": "bijiediqu"
  },
  {
    "id": 522006,
    "city": "黔东南苗族侗族自治州",
    "pinyin": "qiandongnanmiaozudongzuzizhizhou"
  },
  {
    "id": 522007,
    "city": "黔南布依族苗族自治州",
    "pinyin": "qiannanbuyizumiaozuzizhizhou"
  },
  {
    "id": 530001,
    "city": "昆明",
    "pinyin": "kunming"
  },
  {
    "id": 530003,
    "city": "曲靖",
    "pinyin": "qujing"
  },
  {
    "id": 530004,
    "city": "玉溪",
    "pinyin": "yuxi"
  },
  {
    "id": 530005,
    "city": "保山",
    "pinyin": "baoshan"
  },
  {
    "id": 530006,
    "city": "昭通",
    "pinyin": "zhaotong"
  },
  {
    "id": 530007,
    "city": "丽江",
    "pinyin": "lijiang"
  },
  {
    "id": 530008,
    "city": "思茅",
    "pinyin": "simao"
  },
  {
    "id": 530009,
    "city": "临沧",
    "pinyin": "lincang"
  },
  {
    "id": 532003,
    "city": "楚雄彝族自治州",
    "pinyin": "chuxiongyizuzizhizhou"
  },
  {
    "id": 532005,
    "city": "红河哈尼族彝族自治州",
    "pinyin": "honghehanizuyizuzizhizhou"
  },
  {
    "id": 532006,
    "city": "文山壮族苗族自治州",
    "pinyin": "wenshanzhuangzumiaozuzizhizhou"
  },
  {
    "id": 532008,
    "city": "西双版纳傣族自治州",
    "pinyin": "xishuangbannadaizuzizhizhou"
  },
  {
    "id": 532009,
    "city": "大理白族自治州",
    "pinyin": "dalibaizuzizhizhou"
  },
  {
    "id": 533001,
    "city": "德宏傣族景颇族自治州",
    "pinyin": "dehongdaizujingpozuzizhizhou"
  },
  {
    "id": 533003,
    "city": "怒江傈僳族自治州",
    "pinyin": "nujianglisuzuzizhizhou"
  },
  {
    "id": 533004,
    "city": "迪庆藏族自治州",
    "pinyin": "diqingzangzuzizhizhou"
  },
  {
    "id": 540001,
    "city": "拉萨",
    "pinyin": "lasa"
  },
  {
    "id": 542001,
    "city": "昌都地区",
    "pinyin": "changdoudiqu"
  },
  {
    "id": 542002,
    "city": "山南地区",
    "pinyin": "shannandiqu"
  },
  {
    "id": 542003,
    "city": "日喀则地区",
    "pinyin": "rikazediqu"
  },
  {
    "id": 542004,
    "city": "那曲地区",
    "pinyin": "neiqudiqu"
  },
  {
    "id": 542005,
    "city": "阿里地区",
    "pinyin": "alidiqu"
  },
  {
    "id": 542006,
    "city": "林芝地区",
    "pinyin": "linzhidiqu"
  },
  {
    "id": 610001,
    "city": "西安",
    "pinyin": "xian"
  },
  {
    "id": 610002,
    "city": "铜川",
    "pinyin": "tongchuan"
  },
  {
    "id": 610003,
    "city": "宝鸡",
    "pinyin": "baoji"
  },
  {
    "id": 610004,
    "city": "咸阳",
    "pinyin": "xianyang"
  },
  {
    "id": 610005,
    "city": "渭南",
    "pinyin": "weinan"
  },
  {
    "id": 610006,
    "city": "延安",
    "pinyin": "yanan"
  },
  {
    "id": 610007,
    "city": "汉中",
    "pinyin": "hanzhong"
  },
  {
    "id": 610008,
    "city": "榆林",
    "pinyin": "yulin"
  },
  {
    "id": 610009,
    "city": "安康",
    "pinyin": "ankang"
  },
  {
    "id": 61010,
    "city": "商洛",
    "pinyin": "shangluo"
  },
  {
    "id": 620001,
    "city": "兰州",
    "pinyin": "lanzhou"
  },
  {
    "id": 620002,
    "city": "嘉峪关",
    "pinyin": "jiayuguan"
  },
  {
    "id": 620003,
    "city": "金昌",
    "pinyin": "jinchang"
  },
  {
    "id": 620004,
    "city": "白银",
    "pinyin": "baiyin"
  },
  {
    "id": 620005,
    "city": "天水",
    "pinyin": "tianshui"
  },
  {
    "id": 620006,
    "city": "武威",
    "pinyin": "wuwei"
  },
  {
    "id": 620007,
    "city": "张掖",
    "pinyin": "zhangye"
  },
  {
    "id": 620008,
    "city": "平凉",
    "pinyin": "pingliang"
  },
  {
    "id": 620009,
    "city": "酒泉",
    "pinyin": "jiuquan"
  },
  {
    "id": 62010,
    "city": "庆阳",
    "pinyin": "qingyang"
  },
  {
    "id": 621001,
    "city": "定西",
    "pinyin": "dingxi"
  },
  {
    "id": 621002,
    "city": "陇南",
    "pinyin": "longnan"
  },
  {
    "id": 622009,
    "city": "临夏回族自治州",
    "pinyin": "linxiahuizuzizhizhou"
  },
  {
    "id": 623000,
    "city": "甘南藏族自治州",
    "pinyin": "gannanzangzuzizhizhou"
  },
  {
    "id": 630001,
    "city": "西宁",
    "pinyin": "xining"
  },
  {
    "id": 632001,
    "city": "海东地区",
    "pinyin": "haidongdiqu"
  },
  {
    "id": 632002,
    "city": "海北藏族自治州",
    "pinyin": "haibeizangzuzizhizhou"
  },
  {
    "id": 632003,
    "city": "黄南藏族自治州",
    "pinyin": "huangnanzangzuzizhizhou"
  },
  {
    "id": 632005,
    "city": "海南藏族自治州",
    "pinyin": "hainanzangzuzizhizhou"
  },
  {
    "id": 632006,
    "city": "果洛藏族自治州",
    "pinyin": "guoluozangzuzizhizhou"
  },
  {
    "id": 632007,
    "city": "玉树藏族自治州",
    "pinyin": "yushuzangzuzizhizhou"
  },
  {
    "id": 632008,
    "city": "海西蒙古族藏族自治州",
    "pinyin": "haiximengguzuzangzuzizhizhou"
  },
  {
    "id": 640001,
    "city": "银川",
    "pinyin": "yinchuan"
  },
  {
    "id": 640002,
    "city": "石嘴山",
    "pinyin": "zuishan"
  },
  {
    "id": 640003,
    "city": "吴忠",
    "pinyin": "wuzhong"
  },
  {
    "id": 640004,
    "city": "固原",
    "pinyin": "guyuan"
  },
  {
    "id": 640005,
    "city": "中卫",
    "pinyin": "zhongwei"
  },
  {
    "id": 650001,
    "city": "乌鲁木齐",
    "pinyin": "wulumuqi"
  },
  {
    "id": 650002,
    "city": "克拉玛依",
    "pinyin": "kelamayi"
  },
  {
    "id": 652001,
    "city": "吐鲁番地区",
    "pinyin": "tulufandiqu"
  },
  {
    "id": 652002,
    "city": "哈密地区",
    "pinyin": "hamidiqu"
  },
  {
    "id": 652003,
    "city": "昌吉回族自治州",
    "pinyin": "changjihuizuzizhizhou"
  },
  {
    "id": 652007,
    "city": "博尔塔拉蒙古自治州",
    "pinyin": "boertalamengguzizhizhou"
  },
  {
    "id": 652008,
    "city": "巴音郭楞蒙古自治州",
    "pinyin": "bayinguolengmengguzizhizhou"
  },
  {
    "id": 652009,
    "city": "阿克苏地区",
    "pinyin": "akesudiqu"
  },
  {
    "id": 653000,
    "city": "克孜勒苏柯尔克孜自治州",
    "pinyin": "kezilesukeerkezizizhizhou"
  },
  {
    "id": 653001,
    "city": "喀什地区",
    "pinyin": "kashendiqu"
  },
  {
    "id": 653002,
    "city": "和田地区",
    "pinyin": "hetiandiqu"
  },
  {
    "id": 654003,
    "city": "阿勒泰地区",
    "pinyin": "aletaidiqu"
  },
  {
    "id": 810001,
    "city": "香港",
    "pinyin": "xianggang"
  }
]