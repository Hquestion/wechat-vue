/**
 * Created by Administrator on 2016/7/4.
 */
var chineseImg = require('./assets/img/chinese.png'),
    mathImg = require('./assets/img/math.png'),
    englishImg = require('./assets/img/english.png'),
    physicsImg = require('./assets/img/physics.png'),
    chemistryImg = require('./assets/img/chemistry.png'),
    geographyImg = require('./assets/img/geography.png'),
    biologyImg = require('./assets/img/biology.png'),
    historyImg = require('./assets/img/history.png'),
    politicsImg = require('./assets/img/politics.png');
export default {
    DOMAIN: 'http://www.51jyfw.com',
    ROUTER: '/BootStrap/WX',
    subjectIconMap: {
        '语文': chineseImg,
        '数学': mathImg,
        '英语': englishImg,
        '历史': historyImg,
        '地理': geographyImg,
        '政治': politicsImg,
        '生物': biologyImg,
        '物理': physicsImg,
        '化学': chemistryImg
    }
}