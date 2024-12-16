import homepagebg from "../../../public/assets/images/homepagebg.jpg";
import { getTranslations } from "next-intl/server";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const getCollections = () => {
  return [
    {
      name: "Kermansah",
      products: [
        {
          code: "0041A",
          id: "cm4q9tca0021t13ii21gzrd2o",
          name: "Vizon",
          files: [
            {
              id: "cm4qe60pq0000wwxxh4gy2fcz",
              url: "https://r2.hocecomv1.com/uploads/1734314654997-qlm9lssgxq8-0041A-vizon-1.png",
              name: "1734314654997-qlm9lssgxq8-0041A-vizon-1.png",
            },
            {
              id: "cm4qefbjm000010dv44fpjkfx",
              url: "https://r2.hocecomv1.com/uploads/1734315089061-vgh3q71hoc-0041A-vizon-2.png",
              name: "1734315089061-vgh3q71hoc-0041A-vizon-2.png",
            },
          ],
        },
        {
          code: "0039A",
          id: "cm4reg2xs000tj1pxsf4tksdc",
          name: "Vizon",
          files: [
            {
              id: "cm4reg6qs000uj1pxpn6p9k09",
              url: "https://r2.hocecomv1.com/uploads/1734375595740-lxhl1sy9am8-0039A-vizon-1.png",
              name: "1734375595740-lxhl1sy9am8-0039A-vizon-1.png",
            },
            {
              id: "cm4regbk6000vj1pxs69bmq9s",
              url: "https://r2.hocecomv1.com/uploads/1734375601975-thynuth40x-0039A-vizon-2.png",
              name: "1734375601975-thynuth40x-0039A-vizon-2.png",
            },
          ],
        },
        {
          code: "0039A",
          id: "cm4regk4x000wj1px5zfw2f39",
          name: "Vizon Gold",
          files: [
            {
              id: "cm4regoot000xj1pxy31m43oz",
              url: "https://r2.hocecomv1.com/uploads/1734375618899-xr9lqh4m82-0039A-vizon-gold-1.png",
              name: "1734375618899-xr9lqh4m82-0039A-vizon-gold-1.png",
            },
            {
              id: "cm4regrob000yj1pxb41bkbr2",
              url: "https://r2.hocecomv1.com/uploads/1734375622767-ndy37buz4xb-0039A-vizon-gold-2.png",
              name: "1734375622767-ndy37buz4xb-0039A-vizon-gold-2.png",
            },
          ],
        },
        {
          code: "0039A",
          id: "cm4regz8c000zj1px2r3s8lkp",
          name: "Red Gold",
          files: [
            {
              id: "cm4reh2mi0010j1px1jd4dy2x",
              url: "https://r2.hocecomv1.com/uploads/1734375636914-325yhg9kxsw-0039A-red-gold-1.png",
              name: "1734375636914-325yhg9kxsw-0039A-red-gold-1.png",
            },
            {
              id: "cm4reh6620011j1px53x9mvpk",
              url: "https://r2.hocecomv1.com/uploads/1734375641596-vxam0pjs18b-0039A-red-gold-2.png",
              name: "1734375641596-vxam0pjs18b-0039A-red-gold-2.png",
            },
          ],
        },
        {
          code: "0039A",
          id: "cm4rehe1d0012j1pxdbb9sage",
          name: "Red",
          files: [
            {
              id: "cm4rehhck0013j1pxd6s7cmib",
              url: "https://r2.hocecomv1.com/uploads/1734375655840-igq9jqfp4sr-0039A-red-1.png",
              name: "1734375655840-igq9jqfp4sr-0039A-red-1.png",
            },
            {
              id: "cm4rehkrd0014j1pxpr2k0xdr",
              url: "https://r2.hocecomv1.com/uploads/1734375660428-8c6h8bv51x6-0039A-red-2.png",
              name: "1734375660428-8c6h8bv51x6-0039A-red-2.png",
            },
          ],
        },
        {
          code: "0039A",
          id: "cm4rehvhc0015j1pxno41yxs5",
          name: "Dark Grey Gold",
          files: [
            {
              id: "cm4rehz800016j1pxwnvy1mg1",
              url: "https://r2.hocecomv1.com/uploads/1734375679244-ljc35mfcdrk-0039A-darkgrey-gold-2.png",
              name: "1734375679244-ljc35mfcdrk-0039A-darkgrey-gold-2.png",
            },
            {
              id: "cm4rei5au0017j1px5es7xsjv",
              url: "https://r2.hocecomv1.com/uploads/1734375686946-yem2zficjlf-0039A-darkgrey-gold-1.png",
              name: "1734375686946-yem2zficjlf-0039A-darkgrey-gold-1.png",
            },
          ],
        },
        {
          code: "0039A",
          id: "cm4reicas0018j1px12likvav",
          name: "Dark Grey",
          files: [
            {
              id: "cm4reih4b0019j1pxwl9ldlib",
              url: "https://r2.hocecomv1.com/uploads/1734375702437-0ajj3ibridt-0039A-darkgrey-1.png",
              name: "1734375702437-0ajj3ibridt-0039A-darkgrey-1.png",
            },
            {
              id: "cm4reikdp001aj1pxbfs6ulck",
              url: "https://r2.hocecomv1.com/uploads/1734375706688-pwtl6zehqqk-0039A-darkgrey-2.png",
              name: "1734375706688-pwtl6zehqqk-0039A-darkgrey-2.png",
            },
          ],
        },
        {
          code: "0039A",
          id: "cm4reitoh001bj1pxuji5zmnl",
          name: "Black Gold",
          files: [
            {
              id: "cm4reixwu001cj1pxvhytg9zd",
              url: "https://r2.hocecomv1.com/uploads/1734375724095-t6dr2bvx9md-0039A-black-gold-1.png",
              name: "1734375724095-t6dr2bvx9md-0039A-black-gold-1.png",
            },
          ],
        },
        {
          code: "0039A",
          id: "cm4rej32f001dj1pxg3ro28un",
          name: "Black",
          files: [
            {
              id: "cm4rej6zb001ej1px9ybe6efd",
              url: "https://r2.hocecomv1.com/uploads/1734375735906-9g30r1ala5n-0039A-black-1.png",
              name: "1734375735906-9g30r1ala5n-0039A-black-1.png",
            },
          ],
        },
        {
          code: "0039A",
          id: "cm4rejbko001fj1pxeqk3k7yn",
          name: "Beige",
          files: [
            {
              id: "cm4rejewt001gj1px8cmjb2e6",
              url: "https://r2.hocecomv1.com/uploads/1734375746155-njp0bzq3m4q-0039A-beige-1.png",
              name: "1734375746155-njp0bzq3m4q-0039A-beige-1.png",
            },
          ],
        },
        {
          code: "0041A",
          id: "cm4re7obh0000j1px0foy0ioq",
          name: "Red Gold",
          files: [
            {
              id: "cm4re7xdn0001j1pxkrffu44t",
              url: "https://r2.hocecomv1.com/uploads/1734375210198-mlczn9kfzj-0041A-red-gold-1.png",
              name: "1734375210198-mlczn9kfzj-0041A-red-gold-1.png",
            },
          ],
        },
        {
          code: "0041A",
          id: "cm4re88k50002j1pxcbg0n5uv",
          name: "Red",
          files: [
            {
              id: "cm4re8f3k0003j1pxyy7rx2eb",
              url: "https://r2.hocecomv1.com/uploads/1734375233198-zln9gdk6x6-0041A-red-1.png",
              name: "1734375233198-zln9gdk6x6-0041A-red-1.png",
            },
            {
              id: "cm4re8jbi0004j1px68hhr78b",
              url: "https://r2.hocecomv1.com/uploads/1734375238258-ajuc1lgx4k5-0041A-red-2.png",
              name: "1734375238258-ajuc1lgx4k5-0041A-red-2.png",
            },
          ],
        },
        {
          code: "0041A",
          id: "cm4re979d0005j1px7kh8ukm4",
          name: "Dark Grey",
          files: [
            {
              id: "cm4re9cm10006j1pxa6aoa177",
              url: "https://r2.hocecomv1.com/uploads/1734375276457-4uyn9hnkcr9-0041A-darkgrey-1.png",
              name: "1734375276457-4uyn9hnkcr9-0041A-darkgrey-1.png",
            },
          ],
        },
        {
          code: "0041A",
          id: "cm4re9scr0007j1pxmc4gg8um",
          name: "Dark Grey Gold",
          files: [
            {
              id: "cm4re9vqf0008j1pxoo4lp3pc",
              url: "https://r2.hocecomv1.com/uploads/1734375301433-wrq3jd2311-0041A-darkgrey-gold-1.png",
              name: "1734375301433-wrq3jd2311-0041A-darkgrey-gold-1.png",
            },
          ],
        },
        {
          code: "0041A",
          id: "cm4recan50009j1px1catgzcf",
          name: "Black Gold",
          files: [
            {
              id: "cm4recect000aj1pxkqdyok7b",
              url: "https://r2.hocecomv1.com/uploads/1734375418953-64lcf6wrreq-0041A-black-gold-1.png",
              name: "1734375418953-64lcf6wrreq-0041A-black-gold-1.png",
            },
          ],
        },
        {
          code: "0041A",
          id: "cm4recjzl000bj1pxv3zp38uq",
          name: "Black",
          files: [
            {
              id: "cm4recoay000cj1pxlbxxev0z",
              url: "https://r2.hocecomv1.com/uploads/1734375431690-0j64deo2td0v-0041A-black-1.png",
              name: "1734375431690-0j64deo2td0v-0041A-black-1.png",
            },
          ],
        },
        {
          code: "0041A",
          id: "cm4recyic000dj1pxxpjlnufz",
          name: "Beige Gold",
          files: [
            {
              id: "cm4red21k000ej1pxskhkoc1d",
              url: "https://r2.hocecomv1.com/uploads/1734375449682-uuo9w6vwm7q-0041A-beige-gold-1.png",
              name: "1734375449682-uuo9w6vwm7q-0041A-beige-gold-1.png",
            },
          ],
        },
        {
          code: "0041A",
          id: "cm4red5v2000fj1px8dodsxjb",
          name: "Beige",
          files: [
            {
              id: "cm4reda4b000gj1pxi60zonf1",
              url: "https://r2.hocecomv1.com/uploads/1734375459921-yk8qzb7dqv-0041A-beige-1.png",
              name: "1734375459921-yk8qzb7dqv-0041A-beige-1.png",
            },
          ],
        },
        {
          code: "0040A",
          id: "cm4ree3rw000hj1pxiggwspu5",
          name: "Vizon",
          files: [
            {
              id: "cm4ree815000ij1pxg6llngxz",
              url: "https://r2.hocecomv1.com/uploads/1734375504005-lljaw18jjgi-0040A-vizon-1.png",
              name: "1734375504005-lljaw18jjgi-0040A-vizon-1.png",
            },
          ],
        },
        {
          code: "0040A",
          id: "cm4reegrr000jj1pxfbj8z7kd",
          name: "Red Gold",
          files: [
            {
              id: "cm4reeldk000kj1px3ef8i973",
              url: "https://r2.hocecomv1.com/uploads/1734375520644-nect1x2fbbf-0040A-red-gold-1.png",
              name: "1734375520644-nect1x2fbbf-0040A-red-gold-1.png",
            },
            {
              id: "cm4reep1v000lj1pxcv7fft80",
              url: "https://r2.hocecomv1.com/uploads/1734375525954-xiekee3jwyf-0040A-red-gold-2.png",
              name: "1734375525954-xiekee3jwyf-0040A-red-gold-2.png",
            },
          ],
        },
        {
          code: "0040A",
          id: "cm4reewz3000mj1pxyf1i529k",
          name: "Red",
          files: [
            {
              id: "cm4ref0sk000nj1px21u0gt7v",
              url: "https://r2.hocecomv1.com/uploads/1734375541282-s65txgyf58d-0040A-red-1.png",
              name: "1734375541282-s65txgyf58d-0040A-red-1.png",
            },
            {
              id: "cm4ref4am000oj1pxo1by4ufa",
              url: "https://r2.hocecomv1.com/uploads/1734375545902-7mbildn0jx3-0040A-red-2.png",
              name: "1734375545902-7mbildn0jx3-0040A-red-2.png",
            },
          ],
        },
        {
          code: "0040A",
          id: "cm4refag2000pj1px0stmnruc",
          name: "Black",
          files: [
            {
              id: "cm4reffyy000qj1pxo5tp7g7v",
              url: "https://r2.hocecomv1.com/uploads/1734375560954-8ss1e8dv10x-0040A-black-1.png",
              name: "1734375560954-8ss1e8dv10x-0040A-black-1.png",
            },
          ],
        },
        {
          code: "0040A",
          id: "cm4refnh6000rj1pxj0n5tuur",
          name: "Dark Grey",
          files: [
            {
              id: "cm4refs0s000sj1pxg5abh8gh",
              url: "https://r2.hocecomv1.com/uploads/1734375576524-jpb0psktvok-0040A-darkgrey-1.png",
              name: "1734375576524-jpb0psktvok-0040A-darkgrey-1.png",
            },
          ],
        },
        {
          code: "0039A",
          id: "cm4rejjfr001hj1pxej9srta6",
          name: "Beige Gold",
          files: [
            {
              id: "cm4rejn4y001ij1pxppukwuwc",
              url: "https://r2.hocecomv1.com/uploads/1734375756827-2yspwbkmyic-0039A-beige-gold-1.png",
              name: "1734375756827-2yspwbkmyic-0039A-beige-gold-1.png",
            },
          ],
        },
      ],
    },
    {
      name: "Rubi",
      products: [
        {
          code: "0479A",
          id: "cm4revd86001jj1pxalklj38h",
          name: "Red",
          files: [
            {
              id: "cm4revnap001kj1pxp7coytj0",
              url: "https://r2.hocecomv1.com/uploads/1734376316652-f6leqqwrgrc-0479A-red-1.png",
              name: "1734376316652-f6leqqwrgrc-0479A-red-1.png",
            },
            {
              id: "cm4revwd0001lj1pxss37x0pz",
              url: "https://r2.hocecomv1.com/uploads/1734376328643-odcytspcnxl-0479A-red-2.png",
              name: "1734376328643-odcytspcnxl-0479A-red-2.png",
            },
          ],
        },
        {
          code: "0353A",
          id: "cm4rf6ctc0007deaiivxi1f8n",
          name: "Blue Navy",
          files: [
            {
              id: "cm4rf6xd60009deaif088rkci",
              url: "https://r2.hocecomv1.com/uploads/1734376843040-ul2b4s0fjf9-0353A-blue-navy-2.png",
              name: "1734376843040-ul2b4s0fjf9-0353A-blue-navy-2.png",
            },
            {
              id: "cm4rf6mhp0008deaip4d1kj1v",
              url: "https://r2.hocecomv1.com/uploads/1734376828661-oepbh7y4txr-0353A-blue-navy-1.png",
              name: "1734376828661-oepbh7y4txr-0353A-blue-navy-1.png",
            },
          ],
        },
        {
          code: "0479A",
          id: "cm4rewjde001mj1pxbi0hau5o",
          name: "Navy",
          files: [
            {
              id: "cm4rewn3i001nj1pxgumolpte",
              url: "https://r2.hocecomv1.com/uploads/1734376363303-492t4lgxet2-0479A-navy-1.png",
              name: "1734376363303-492t4lgxet2-0479A-navy-1.png",
            },
            {
              id: "cm4rewrho001oj1pxlyfcs73b",
              url: "https://r2.hocecomv1.com/uploads/1734376369013-1rmxrq4yjao-0479A-navy-2.png",
              name: "1734376369013-1rmxrq4yjao-0479A-navy-2.png",
            },
          ],
        },
        {
          code: "0469A",
          id: "cm4rex0jq001pj1pxfgbzwu10",
          name: "Red",
          files: [
            {
              id: "cm4rex8g7001qj1px2l7079s4",
              url: "https://r2.hocecomv1.com/uploads/1734376390653-9pc1atc3old-0469A-red-1.png",
              name: "1734376390653-9pc1atc3old-0469A-red-1.png",
            },
            {
              id: "cm4rexdij001rj1px1phb3rmg",
              url: "https://r2.hocecomv1.com/uploads/1734376397655-mr3rw1wg1jl-0469A-red-2.png",
              name: "1734376397655-mr3rw1wg1jl-0469A-red-2.png",
            },
          ],
        },
        {
          code: "0469A",
          id: "cm4rexjkh001sj1pxb6261289",
          name: "Navy",
          files: [
            {
              id: "cm4rexx9n001uj1pxre0oyzh5",
              url: "https://r2.hocecomv1.com/uploads/1734376423101-v2pv4an18ga-0469A-navy-2.png",
              name: "1734376423101-v2pv4an18ga-0469A-navy-2.png",
            },
            {
              id: "cm4rexrbi001tj1px8augj950",
              url: "https://r2.hocecomv1.com/uploads/1734376415294-7izeo1iullg-0469A-navy-1.png",
              name: "1734376415294-7izeo1iullg-0469A-navy-1.png",
            },
          ],
        },
        {
          code: "0390A",
          id: "cm4reygpn001vj1pxzle4perq",
          name: "Red",
          files: [
            {
              id: "cm4reyq2h001wj1px63odweoh",
              url: "https://r2.hocecomv1.com/uploads/1734376460273-ogcbh3anqv-0390A-red-1.png",
              name: "1734376460273-ogcbh3anqv-0390A-red-1.png",
            },
          ],
        },
        {
          code: "0390A",
          id: "cm4rez144001xj1pxvlwx7bfi",
          name: "Dark Grey",
          files: [
            {
              id: "cm4rezexc001zj1pxf2cx0z47",
              url: "https://r2.hocecomv1.com/uploads/1734376492521-7gw92zixfoh-0390A-darkgrey-2.png",
              name: "1734376492521-7gw92zixfoh-0390A-darkgrey-2.png",
            },
            {
              id: "cm4rez9zm001yj1pxuww2o5gs",
              url: "https://r2.hocecomv1.com/uploads/1734376486054-qrr7wteqqla-0390A-darkgrey-1.png",
              name: "1734376486054-qrr7wteqqla-0390A-darkgrey-1.png",
            },
          ],
        },
        {
          code: "0390A",
          id: "cm4rezojg0020j1pxytzkj388",
          name: "Black",
          files: [
            {
              id: "cm4rf00vv0022j1px6igdyu25",
              url: "https://r2.hocecomv1.com/uploads/1734376521109-hexyrylfxdf-0390A-black-2.png",
              name: "1734376521109-hexyrylfxdf-0390A-black-2.png",
            },
            {
              id: "cm4rezw9c0021j1pxfwoqhjww",
              url: "https://r2.hocecomv1.com/uploads/1734376514894-je6gr1bm1z-0390A-black-1.png",
              name: "1734376514894-je6gr1bm1z-0390A-black-1.png",
            },
          ],
        },
        {
          code: "0390A",
          id: "cm4rf0e2p0023j1px9l8pttdh",
          name: "Navy",
          files: [
            {
              id: "cm4rf0igy0024j1pxg9gq0wfl",
              url: "https://r2.hocecomv1.com/uploads/1734376543995-dtb1n1gr1gk-0390A-navy-1.png",
              name: "1734376543995-dtb1n1gr1gk-0390A-navy-1.png",
            },
            {
              id: "cm4rf0mqp0025j1pxma85um5g",
              url: "https://r2.hocecomv1.com/uploads/1734376549352-0vd29ogtetgq-0390A-navy-2.png",
              name: "1734376549352-0vd29ogtetgq-0390A-navy-2.png",
            },
          ],
        },
        {
          code: "0354A",
          id: "cm4rf14980026j1px3u665uvu",
          name: "Red Navy",
          files: [
            {
              id: "cm4rf21ca0028j1px172s38xg",
              url: "https://r2.hocecomv1.com/uploads/1734376614886-5jsb33k36i6-0354A-red-navy-1.png",
              name: "1734376614886-5jsb33k36i6-0354A-red-navy-1.png",
            },
            {
              id: "cm4rf26240029j1pxd5njhyd1",
              url: "https://r2.hocecomv1.com/uploads/1734376621099-t9ue80pa9ys-0354A-red-navy-2.png",
              name: "1734376621099-t9ue80pa9ys-0354A-red-navy-2.png",
            },
          ],
        },
        {
          code: "0354A",
          id: "cm4rf1ftw0027j1pxkscoxbgo",
          name: "Navy Red",
          files: [
            {
              id: "cm4rf2u9k002bj1pxeapqlrgy",
              url: "https://r2.hocecomv1.com/uploads/1734376652307-ij0c88udcbb-0354A-navy-red-2.png",
              name: "1734376652307-ij0c88udcbb-0354A-navy-red-2.png",
            },
            {
              id: "cm4rf2p59002aj1pxxirxchhw",
              url: "https://r2.hocecomv1.com/uploads/1734376645669-eaide0ee8ma-0354A-navy-red-1.png",
              name: "1734376645669-eaide0ee8ma-0354A-navy-red-1.png",
            },
          ],
        },
        {
          code: "0353A",
          id: "cm4rf4l240000deaieofyp14m",
          name: "Red Navy",
          files: [
            {
              id: "cm4rf4uoi0001deai6r4h7bgh",
              url: "https://r2.hocecomv1.com/uploads/1734376745856-loj3x0nd21-0353A-red-navy-1.png",
              name: "1734376745856-loj3x0nd21-0353A-red-navy-1.png",
            },
            {
              id: "cm4rf571q0003deai8d3onr4h",
              url: "https://r2.hocecomv1.com/uploads/1734376762309-it6koesrfn9-0353A-red-navy-3.png",
              name: "1734376762309-it6koesrfn9-0353A-red-navy-3.png",
            },
            {
              id: "cm4rf4z7z0002deai3l2o2a23",
              url: "https://r2.hocecomv1.com/uploads/1734376752254-0phxye0ygqwi-0353A-red-navy-2.png",
              name: "1734376752254-0phxye0ygqwi-0353A-red-navy-2.png",
            },
          ],
        },
        {
          code: "0353A",
          id: "cm4rf5f1n0004deaifeupfal2",
          name: "Navy Red",
          files: [
            {
              id: "cm4rf5ufc0006deaiuf0c0jfx",
              url: "https://r2.hocecomv1.com/uploads/1734376792661-31pig57w47a-0353A-navy-red-2.png",
              name: "1734376792661-31pig57w47a-0353A-navy-red-2.png",
            },
            {
              id: "cm4rf5plb0005deai7rmpfgm7",
              url: "https://r2.hocecomv1.com/uploads/1734376786222-ze0iyjuaxoa-0353A-navy-red-1.png",
              name: "1734376786222-ze0iyjuaxoa-0353A-navy-red-1.png",
            },
          ],
        },
        {
          code: "0116A",
          id: "cm4rf7gov000adeaitd5jysjb",
          name: "Red",
          files: [
            {
              id: "cm4rf7v3e000cdeai3mltd98i",
              url: "https://r2.hocecomv1.com/uploads/1734376886862-c2h0tzgijpc-0116A-red-2.png",
              name: "1734376886862-c2h0tzgijpc-0116A-red-2.png",
            },
            {
              id: "cm4rf7pd8000bdeaibcryy00o",
              url: "https://r2.hocecomv1.com/uploads/1734376879424-b250f0c3uww-0116A-red-1.png",
              name: "1734376879424-b250f0c3uww-0116A-red-1.png",
            },
          ],
        },
        {
          code: "0116A",
          id: "cm4rf89dj000ddeaiitt2hlqi",
          name: "Navy",
          files: [
            {
              id: "cm4rf8pzu000edeaii90w7e3u",
              url: "https://r2.hocecomv1.com/uploads/1734376918829-qfn5kht9sz-0116A-navy-1.png",
              name: "1734376918829-qfn5kht9sz-0116A-navy-1.png",
            },
            {
              id: "cm4rf8uro000fdeai7x02c7kp",
              url: "https://r2.hocecomv1.com/uploads/1734376933044-lp7z83dbmbf-0116A-navy-2.png",
              name: "1734376933044-lp7z83dbmbf-0116A-navy-2.png",
            },
          ],
        },
      ],
    },
  ];
};

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const t = await getTranslations("home");
  const collections = getCollections();

  const collectionNameToFind = ((await searchParams).collection as string)?.toLowerCase() ?? "kermansah";

  const collectionToShow = (
    await Promise.all(
      collections.map(async (collection) => ({
        ...collection,
        matches: collection.name.toLowerCase() === collectionNameToFind,
      }))
    )
  ).find((result) => result.matches);
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={homepagebg}
        alt="background image for homepage - oriental rug"
        className="-mt-24 h-[500px] w-full -z-10"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="max-w-screen-md absolute mt-24 text-white bg-gray-600/50 p-12 pb-8 rounded-xl backdrop-blur-sm flex flex-col items-center mx-12">
        <h2 className="text-4xl font-bold">{t("title")}</h2>
        <h3 className="text-2xl font-semibold">{t("subtitle")}</h3>
        <Link href="#collections" className="text-2xl font-semibold">
          <SlArrowDown size={52} className="text-azure-grey mt-6" />
        </Link>
      </div>
      <div className="w-full flex items-center pt-6 pb-10 px-12 -mt-12 rounded-xl bg-white shadow-xl max-w-screen-xl flex-col relative gap-6">
        <a id="collections" className="absolute -top-[100px]" />
        <div className="w-full flex flex-wrap gap-12 justify-center">
          {collections.map((collection, i) => (
            <Link
              key={i}
              type="button"
              className="text-lg font-semibold hover:bg-gray-500/30 duration-500 px-2 py-1"
              href={"?collection=" + encodeURIComponent(collection.name.toLowerCase())}
            >
              {collection.name}
            </Link>
          ))}
        </div>

        <div className="w-full flex flex-wrap bg-white max-w-screen-xl items-center justify-center mb-6">
          {collectionToShow!.products.map((prod, j) => (
            <div key={j} className="h-[400px] w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 pb-4">
              <div className="h-full duration-500 pb-4 group rounded-xl border-3 shadow-md border-gray-700 flex flex-col gap-2 items-center overflow-hidden hover:shadow-azure-blue">
                {prod.files.length > 1 ? (
                  <>
                    <div className="relative w-full h-[300px]">
                      <div className="absolute top-0 left-0 w-full h-full group-hover:opacity-0 duration-300">
                        <Image
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 20vw"
                          src={prod.files[0].url}
                          fill
                          alt="background image for homepage - oriental rug"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 duration-300 transform scale-110 group-hover:scale-100">
                        <Image
                          sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 20vw"
                          src={prod.files[1].url}
                          fill
                          alt="background image for homepage - oriental rug"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-[300px]">
                    <div className="absolute top-0 left-0 w-full h-full duration-300">
                      <Image
                        sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 20vw"
                        src={prod.files[0].url}
                        fill
                        alt="background image for homepage - oriental rug"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                )}
                <div className="h-[50px] mb-2">
                  <p className="font-semibold text-center group-hover:text-azure-blue">{prod.name}</p>
                  <p className="text-sm text-center">{prod.code}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-white flex flex-col items-center pt-6 mx-12">
        <div className="w-full max-w-screen-2xl px-4 flex flex-col items-center gap-12">
          <div className="flex flex-col w-full">
            <h2 className="text-2xl font-semibold mx-auto w-min whitespace-nowrap mb-6">{t("why-us")}</h2>
            <p className="max-w-[800px] w-full mx-auto">{t("why-us-text")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
