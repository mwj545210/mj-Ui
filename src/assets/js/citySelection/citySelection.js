Vue.component('city-selection', {
    template: `<div class="box">
    <div class="c-search">
      <div style="width: 85%;flex: 1;">
        <input type="text" class="search-text" v-model="searchContent"
                 placeholder="输入搜索的城市名">
      </div>
      <button class="cancel" @click="back">取消</button>
    </div>
    <div class="list-view" ref="listView" v-show="searchContent == ''">
      <div>
        <div v-for="(sort, index) in sortedData" class="list-group" :key="sort.detail.id" ref="listGroup">
          <h2 v-if="index != 0" class="list-group-title">{{ sort.initials }}</h2>
          <div v-if="index != 0">
            <div v-for="detail in sort.detail" class="list-group-item" :key="detail.id"
                 @click="chooseCity(detail.city)">
              <span class="name">{{ detail.city }}</span>
            </div>
          </div>
          <div v-if="index == 0" style="background: #ffffff">
            <p class="cityTitle">当前定位城市:  <span>{{value}}</span></p>
          </div>
        </div>
      </div>
      <div class="list-shortcut">
        <div>
          <div v-for="(item, index) in shortcutList"
               class="item"
               :data-index="index"
               :key="item.id"
               @touchstart="onShortcutStart"
               @touchmove.stop.prevent="onShortcutMove"
               :class="{'current': currentIndex === index}"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>

    <div class="history" v-show="searchContent != ''">
      <div class="listItem" v-for="result in resultList" @click="chooseCity(result)"><p>{{result}}</p></div>
    </div>
  </div>`,
    name: "Location",
    props: {
        'value': ''
    },
    data() {
        return {
            scrollY: 0,
            currentIndex: 0,
            searchContent: '',
            sortedData: [],
            resultList: [],
        }
    },
    created() {
        // 传入的汉字属性名必须为name
        const pinyinData = cityData.map(item => ({
            detail: item,
            initials: item.pinyin.toUpperCase().slice(0,1)
        }));
        //定位
        let local = '定位';
        this.sortedData.push({initials: local});

        // todo 生成26个字母的数组对象
        this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
        for (let letter of this.letters) {
            this.sortedData.push({initials: letter});
        }
        // todo 过滤掉没有信息的字母对象
        this.sortedData = this.sortedData.filter(item => {
            item.detail = [];
            //自定义定位与热门
            if (item.initials === '定位') {
                item.detail.push('');
            }
            pinyinData.map(pData => {
                if (item.initials == pData.initials) {
                    item.detail.push(pData.detail);
                }
            });
            return item.detail.length > 0;
        });


        this.touch = {}
        // 初始化 better-scroll 必须要等 dom 加载完毕
        setTimeout(() => {
            this._initSrcoll()
            this._calculateHeight()
        }, 20)
    },
    methods: {
        _initSrcoll() {
            this.scroll = new BScroll(this.$refs['listView'], {
                probeType: 3,
                click: true
            })

            this.scroll.on('scroll', (pos) => {
                this.scrollY = pos.y
            })
        },
        onShortcutStart(e) {
            // 获取到绑定的 index
            let index = e.target.getAttribute('data-index')
            // 使用 better-scroll 的 scrollToElement 方法实现跳转
            this.scrollToElement(index)

            // 记录一下点击时候的 Y坐标 和 index
            let firstTouch = e.touches[0].pageY
            this.touch.y1 = firstTouch
            this.touch.anchorIndex = index
        },
        onShortcutMove(e) {
            // 再记录一下移动时候的 Y坐标，然后计算出移动了几个索引
            let touchMove = e.touches[0].pageY
            this.touch.y2 = touchMove
            // 这里的 16.7 是索引元素的高度
            let delta = Math.floor((this.touch.y2 - this.touch.y1) / 16.7)

            // 计算最后的位置
            // * 1 是因为 this.touch.anchorIndex 是字符串，用 * 1 偷懒的转化一下
            let index = this.touch.anchorIndex * 1 + delta
            this.scrollToElement(index)
        },
        scrollToElement(index) {
            // 处理边界情况
            // 因为 index 通过滑动距离计算出来的
            // 所以向上滑超过索引框框的时候就会 < 0，向上就会超过最大值
            if (index < 0) {
                return
            } else if (index > this.listHeight.length - 2) {
                index = this.listHeight.length - 2
            }
            // listHeight 是正的， 所以加个 -
            this.scrollY = -this.listHeight[index]
            this.scroll.scrollToElement(this.$refs.listGroup[index])
        },
        _calculateHeight() {
            this.listHeight = []
            const list = this.$refs.listGroup
            let height = 0
            this.listHeight.push(height)
            for (let i = 0; i < list.length; i++) {
                let item = list[i]
                height += item.clientHeight
                this.listHeight.push(height)
            }
        },
        chooseCity(city) {
            this.searchContent = "";
            this.$emit('input', city);
            this.back();
        },
        back() {
            this.$emit('cancel',false);
            this.scroll.scrollToElement(this.$refs.listGroup[0])
        }
    },
    computed: {
        shortcutList() {
            return this.sortedData.map((sorted) => {
                return sorted.initials
            })
        }
    },
    watch: {
        searchContent: {
            handler:function (newVal, oldVal) {
                this.resultList = [];
                for (let sort of this.sortedData) {
                    if (sort.detail.length > 0) {
                        for (let detail of sort.detail) {
                            if (detail.city) {
                                if (detail.city.indexOf(newVal) !== -1) {
                                    this.resultList.push(detail.city);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
