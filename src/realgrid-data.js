import { ValueType } from "realgrid";

export const fields = [{
    fieldName: 'name',
    dataType: ValueType.TEXT,
},
{
    fieldName: 'symbol',
    dataType: ValueType.TEXT,
},
{
    fieldName: 'quotes',
    dataType: ValueType.OBJECT,
    objectKey: 'price'
},
];

export const columns = [{
    name: "name",
    fieldName: "name",
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "종목",
        showTooltip: true,
        tooltip:'<span style="color: red;">이름</span>',
    },
    renderer: {
        type:"text",
        showTooltip: true
    }
},
{
    fieldName: "symbol",
    name: "symbol",
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "기호",
        showTooltip: true,
        tooltip:'<span style="color: red;">이름</span>',
    },
    renderer: {
        type:"text",
        showTooltip: true
    },
},
{
    fieldName: "quotes",
    name: "quotes",
    objectKey: 'price',
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "가격(KRW)",
        showTooltip: true,
        tooltip:'<span style="color: red;">이름</span>',
    },
    renderer: {
        type:"text",
        showTooltip: true
    },
    displayCallback : function(grid,index,value) {
        var tmp = '';
        tmp =  '₩' + Number(value.KRW.price.toFixed()).toLocaleString();
        return tmp
    },
},
{
    fieldName: "quotes",
    name: "quotes",
    objectKey: 'percent_change_1h',
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "변동률(1시간)",
        showTooltip: true,
        tooltip:'<span style="color: red;">이름</span>',
    },
    renderer: {
        type:"text",
        showTooltip: true
    },
    displayCallback : function(grid,index,value) {
        var tmp = '';
        tmp = Number(value.KRW.percent_change_1h.toFixed(3)).toLocaleString() + '%';
        return tmp
    },
    styleCallback: function(grid, dataCell){
        var ret = {}
         if(dataCell.value.KRW.percent_change_24h.toString().includes('-')){
            ret.styleName = "minusColor"
         } else {
            ret.styleName = "plusColor"
         }
        return ret;
      }
},
{
    fieldName: "quotes",
    name: "quotes",
    objectKey: 'percent_change_24h',
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "변동률(24시간)",
        showTooltip: true,
        tooltip:'<span style="color: red;">이름</span>',
    },
    renderer: {
        type:"text",
        showTooltip: true
    },
    displayCallback : function(grid,index,value) {
        var tmp = '';
        tmp =  Number(value.KRW.percent_change_24h.toFixed(3)).toLocaleString() + '%';
        return tmp
    },
    styleCallback: function(grid, dataCell){
        var ret = {}
         if(dataCell.value.KRW.percent_change_24h.toString().includes('-')){
            ret.styleName = "minusColor"
         } else {
            ret.styleName = "plusColor"
         }
        return ret;
      }
},
{
    fieldName: "quotes",
    name: "quotes",
    objectKey: 'volume_24h',
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "거래량(24시간)",
        showTooltip: true,
        tooltip:'<span style="color: red;">이름</span>',
    },
    renderer: {
        type:"text",
        showTooltip: true
    },
    displayCallback : function(grid,index,value) {
        var tmp = '';
        tmp =  '₩' + Number((value.KRW.volume_24h / 1000000000000).toFixed(2)) + 'T'
        return tmp
    },
},
]

