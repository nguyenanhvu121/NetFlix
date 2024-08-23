import { useState } from "react";
import Header from "../../DefaultLayout/Header";
import Footer from "../../DefaultLayout/Footer";
import "./index.css";
import down from "./Image/down.png";
import align from "./Image/align.png";
import menu from "./Image/menu.png";
import Content from "../../Page/ContentFilmPage";
function Index() {
  // fake Api
  const api = {
    Action: [
      {
        id: 1,
        list: [
          { 
            id : 1,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeO7219ddEB-Sx4P0SN6OLfwViLmM4PrtkwKzQpYXKjI63JDIUr-0N1_KFFmxWXS8R0dWuKgHIiIonrZ5nzzsDpUjY0MzDSj_6B-X8t99Zs0SRIgR2pMsP_qHaIUMPbl7gCuIXrH4TEHUVa64Z3sRZdE1SzrX_y6q0s.jpg?r=b7a",
            link: "",
          },
          { 
            id : 2,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbX6YNljyyBOA97I8oTFMS-IEKzc5WhW-mypoCGSWQbg30Yq6nscfV2dtPJIotcAfSUSDUn6eUVM9mJKa1ltkQ-GzK1qO_kaykE.jpg?r=d86",
            link: "",
          },
          { 
            id : 3,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTdvk9o39_Pvadru4-5ksiO8TADWft7wgEPtOikgZCUUeJe2XQNnDX7cEeDH4wQGX2ZLvRF9YHhfCZkTxuffKjVeyRXUwwwIC11rdVOhl5x-kvz4Uhh4N7FIqczPAvkzr4BQ.jpg?r=54c",
            link: "",
          },
          { 
            id : 4,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdANqZFRbYzmDWkgJB8AASfVFKHl_gbHtOC0hR06zvx_vp8feGF_8TrYHowJY3Ld60_UXvJxvBg9QTuSjRomffa6ugqVo9O2tDI.jpg?r=4a4",
            link: "",
          },
          { 
            id : 5,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRfNss3GUbMAMdISUV-7k6jeMqTGQQNrZRwrHrIPyLdMZkoWLhdvJziKXSzqT3u9WYhd36Pag9tcNJPcb8qDaK6YAH5Gpj7ZQ4M.jpg?r=e10",
            link: "",
          },
          { 
            id : 6,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeSFnmKEfm_ngolqtE-jzoTkAJPrfPhofXuPWJ1n0DPGG90k4EtfaXIwRp4SXPfZaSxCSzzYkIVqrPfrCyzd8Qs9EbG_Wa_rU24.jpg?r=ed3",
            link: "",
          },
          { 
            id : 7,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdCuBBjIvnOwIhJCh6qQ-_nyP-NtG0ttzYeKpVWvO0-SGBPBK29ugLYXJCsycK7L5BhjfKRnFS61_QSCjPY0xXt8AdzOpB9PaF4.jpg?r=cd2",
            link: "",
          },
          { 
            id : 8,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeqyN2a1820Quwu4h_FZc0o55AI8mOXuY61chKz-Xy2YWOr6BMzbJXiyrhoINFWc_iS5j8pLBQCRZ0byw8rsxFCsXeY5Wiw8m8s.jpg?r=c84",
            link: "",
          },
          { 
            id : 9,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaJ3la7Pi5zXE_LxKvhkFhHnjaksL4BHwo4X4TisfU4TslIANeQMSdBqO5y5dSK-DI1lUmg4lANCxsAoA2Xo7sDMY0TVSgpjkp7thh2BjnKqp3vIon8wasSwMuED3Aq1zZsq.jpg?r=847",
            link: "",
          },
          { 
            id : 10,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdsF1_9nlFiyhx4pz3gLPym0oqYG6zh_CTzdtjCq7Uytg0MqcWczMxQgY7iGwhnFVuQakl8Ou8BMrGLQmtOUIY9yn4B2nkW2h-8oOabpK52xgp2cz4O6oIvy9Mt-MWSqccTJ.jpg?r=930",
            link: "",
          },
          { 
            id : 11,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXYP-AjSlxEjBbgBCMoSACNw4OAcKvkxzsPHCz7E3Vz68QtFTLysN7vj39Elve1k3v3hBPrKLYilKQyZ6BoSkmmuWINK-5TgioQ.jpg?r=2f8",
            link: "",
          },
          { 
            id : 12,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWB5KgxG8BPYwj4o_rZ1qfyX05PGtp9waIkNS6ZodtHZGI4ezOepv3729IuKb3daBLt-1RLmIKAn_LXw1R0mkSmHSVCYrGXCFw0.jpg?r=073",
            link: "",
          },
          { 
            id : 13,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYoeeNhgIrsMtO8r3A1Mc8al6FefE6uBOeUUaQV9ra6ZPNXgxwW5qZxBwFSYdzq__UdMKZQfmCngnKM8oZCfZRVkTeEuxvjg0L4.jpg?r=801",
            link: "",
          },
          { 
            id : 14,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABe2XUMH-nZU5z7JHGFCHrQeFfW1cZv64p1b7ztNMpQSysX50QdgDFHA0URNpYR0B5jpqvJ8EAnSajeNa8g3NhIwseO6NRwXMGR4.jpg?r=2b0",
            link: "",
          },
          { 
            id : 15,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQALIg8xyXGoJjuv46AGq8M4-nf7V_gOAhL59Il4OUexsD4cABrSWarSzDbY6xoXQKRZrQcpDatwMtKd6HfKcnx3GSNH7CHX7xA.jpg?r=a31",
            link: "",
          },
        ],
      },
      {
        id: 2,
        list: [
          { 
            id : 1,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQAQxD3nFRmJVZdvyWKvXIw3oyWeVhHP1aLFHZBZAsvEngN1PBGmUnIcenqny__0mMnDoA0XOjxcSxhQXXlRQSXiMkDDetfnrbr6daefd9E6Zw62W8Erie69NOKD79wppU_4.jpg?r=1c8",
            link: "",
          },
          { 
            id : 2,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTv8OW6dbVUzvecLMJHuPJRawao1h-e2zI4NSk7KYAtloLb6GALBMsUo_i3a5q1ngdnrx7nKQ1QyGQmK27HbPnsjoZtf5ck4kYc.jpg?r=b20",
            link: "",
          },
          { 
            id : 3,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXScbg2GU4cuGiET9JAU_J8UIiB4Du-T34qIKCrciV-qYDxSqqbjXEP4n888uvfYDSje4hjKR_nKBDr2JngtxsqZacvgoSqY2wo.jpg?r=33d",
            link: "",
          },
          { 
            id : 4,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYHDbgQM3vcsQarY48ojlNyqC8rJYQeK5tbGUQh3TcHd5b3NCpHo-_-E2YAObc4P7mOc9aigU0E04aMvOz9oLFaqrIy6WeYwHOwFXmyipm52EeeQXujZP_mZ3_22ExPxB52TR5EWNMgFN-YmG_7oQByhd2VSAxKeCdc.jpg?r=634",
            link: "",
          },
          { 
            id : 5,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSMFTt2MSsYUsedE4JqubpsQgYYWH8G6X8miv-Kr03Dg2kWF6FlKZ1MZ-AoWhtLkr0J_px2DuyQnm43wHzBmo3KGFXsOxSFxcFWnTu9wHYGMqyc6S-hG-NJIjjGgc4QRGkQb.jpg?r=b32",
            link: "",
          },
          { 
            id : 6,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRgXvkKNgL7vpuAK2oaUTEdsErNTLf0BVoR0hi5lYCVNzY5aAfkBpVjHtyYqv07PUYPK2xfZWy1ugKQbT1Qu3r8-4OtGe6BNowA.jpg?r=54f",
            link: "",
          },
          { 
            id : 7,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaFD6tQiHqi04OW2ccqnRhuUhnnSYISd0Rdl4Xd-WVlHlFPSCMnJhp-C-98WgR-nW89kIQACWNVAsu2PDNoe-QW0jLWz1dKvaGI.jpg?r=fff",
            link: "",
          },
          { 
            id : 8,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSPQYLSdXgxa3DLED8KKjfYDVufnARiPXs6q8AnhKc7PDgwcOoGTO6Oeqt1-Y0NHa0QuaHkmHrg7cfsVjHAoCQCGiCnp7CKsFR8.jpg?r=712",
            link: "",
          },
          { 
            id : 9,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZuvtIDRPXcaNjRCtyRaZeQhv-ay6-dowUKpHbQc0AZQlcJTfdG9nNEl9puQ_CNJLE55oOxoshjF4qdWF59lw27O-6pizHlgL8U.jpg?r=793",
            link: "",
          },
          { 
            id : 10,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdkb-0PDqhvNzvRDyakov5BN8OD_aSgzg2lOYlMLpVu2QqdstSsvWmERcTzo9jmuJS4i-oNOrqnbDxPb-aYsqaH5f5fAHoR0_-M.jpg?r=2e2",
            link: "",
          },
          { 
            id : 11,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfnGQyYPQvqqnCR54c6UUi-31cDODe3ZvmUghcIrxduu_L0iMordV6RQrG5jX3J6RxwhJmBWwEbECG6NC-6zjeNeYk8ufPLu_o0.jpg?r=f75",
            link: "",
          },
          { 
            id : 12,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXOQEz9KZpdfUy5BmL3dtjCa6ZWDXyl7NmzSdwp2b2-PvrqabT2E2OPTStu7FeuV6693L5cunMh2oNR-8QpKdEYYFHbmm43nrsI.jpg?r=0a0",
            link: "",
          },
          { 
            id : 13,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXJxC2D83J-Gj4A2kvokDD69p90T8l495FjN3oXm6iqVPnTLBpqYzKf-_Wz_lwl3XOibp4I09gfDI5yDzXa1gbfB5lzVtsQcuHU.jpg?r=7f9",
            link: "",
          },
        ],
      },
      {
        id: 3,
        list: [
          { 
            id : 1,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQBC86SGD1GARdybC_0p60W41AiK6jgXPoTY94UpaAX5UsO3CpvN4e6gWUeIxc9-nRuv6VNaCs5c7VouI588kfF2HPErSFbAF8U.jpg?r=d01",
            link: "",
          },
          { 
            id : 2,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa31AQf4-MMWhI-lpFWEldLLqvQyo4qEVsGTJKKkviNitr_bbp3UKjgrEJKKVrTYha5RuCwzL_grFh0iODaELHhBvu2at42PeeM.jpg?r=1e6",
            link: "",
          },
          { 
            id : 3,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbTJOtAnC1EAf5Eha1yDSrjYfvjGwFa1Pwt8dMdJ2UDMkJpkJwPC9t4BDEmEUr_n1Lb6gIY6IA4sMHfSdTb85YGVVYfXbHQvG18.jpg?r=12d",
            link: "",
          },
          { 
            id : 4,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc5VJAN3n71WlJTV0A42X0aY75k-xOIc09QN_kj1YpQPw4-6l3VbV-b8_hxHispkn3UxdkPTrhjp_wnsuA9gg1-mpartj9PyTCc.jpg?r=fe8",
            link: "",
          },
          { 
            id : 5,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfC3o3XN0PnOvnEZbaxGh6c3xDdXSb0Xo7N1Mt-FBIjmU6cvEHN6fjioZVZTXcw1-7JYVoOGYKXYQ91VUKsaEPib2ZpJYy-szGc.jpg?r=716",
            link: "",
          },
          { 
            id : 6,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeMH7GMQluPxJC1kVc8w44lrv_6FOSQrVxBafUdmFQA5ifOlTsMJe11RP4aTdPwENhHOldYq2OtanDPJmj5j5nPpD2qsKPN4En4.jpg?r=163",
            link: "",
          },
          { 
            id : 7,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTA0GC-Usr5y01mX_opv_G7akzKFDECORyKBbptMsBIy0IaBpBGd_1xpgMdjMsI5ssTHqiz6jWhyBVst8oQjBwMJqRr-t0Fu1Q3sGndUzLG_T2HbLxAedfyPC22B6Z8kwuap.jpg?r=8a0",
            link: "",
          },
          { 
            id : 8,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTWv_Zmtd6z5-jN1LelLojvBH8OHZKpj-filDNYvFKM1jEKBwMVAUSFe8QQhkdWkwNBGJL7H7lxm5TTw57YJZYWaUPodeG84HyE.jpg?r=bb3",
            link: "",
          },
          { 
            id : 9,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQGFpyPGDN6dLBgeAw0N0P6E0LO3zTqMrLxTTKJN9shsZfvOAyLj7pdE5nKL56vLK5iKiKPfgPmvimYCzMdn_AZehFzeoYp2FGs.jpg?r=697",
            link: "",
          },
          { 
            id : 10,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaoJ0rQtUSqTWgfEw9Al-4jxGXeNjFz5u7WgVOQ7wIssoma9g8c1m_k1apoTXvQQkGgeNw3u-XLV6tbxE6KWBtu14gzc6MLIH4M.jpg?r=3d5",
            link: "",
          },
          { 
            id : 11,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbxx00MlmZBHguToQRxMP-DVbgibrm5pCiz3N30uIUKE5BAMj3whqGOqJyhRdtApBBQb2wvTlNGTMcMeMvhx8RnxEkdSLAUNRIQ.jpg?r=ebe",
            link: "",
          },
          { 
            id : 12,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYmtU7xR8SqG6MEMdxeEDKxf3WzBSULVILZT1A021Zf6pjEYJ81bOSAyNXWG6UbO-vYXvUjsU0tMIQLkUj9FaF5LZojbSRTST7s.jpg?r=488",
            link: "",
          },
          { 
            id : 13,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaKcE0ZSqdFxihHiE7ksEuXYXDplZSuhePPnElVJe8yuFx6B_B4hfvgJ38zVGJquqWuKAQYfV0eguY8I9EhkdO8V24WzBMqJsVQ.jpg?r=171",
            link: "",
          },
          { 
            id : 14,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS1GlTCSB-rZ1n5uKKIKVpejvCBVoM5wsqKwl33DXE5xh6eAkT8x8judWaJRe-erz2vm-3RLC-wZ8guiWjq1JqptYKFnsYVTQm0k1c4swie9h6wC7AuraQ8lghptC-3oaNx6.jpg?r=b78",
            link: "",
          },
          { 
            id : 15,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbVZf3aJ-0kDUYNwXI78ERZyGbZdJFs-Gskjr7YQHqu15KB6wwjPGZS8PPczHfVZi_6INI2CXellHPUOaoOpeBux9NOAgJ5PsTI.jpg?r=561",
            link: "",
          },
        ],
      },
      {
        id: 4,
        list: [
          { 
            id : 1,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRCqq49ohxXrxRZtMa4fdrUl-DUknkltGkHAiQBNouYjPP0lRuEsfISLpisowt9YYS_QovqyGea6Mk6AJpXsQYDiNIhRFkiXSKY.jpg?r=136",
            link: "",
          },
          { 
            id : 2,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTZOjjt2W1XBGy8J4V6IUJGtcLfPQy_y927sfVwaKJNgJ6T32rzzOxz1-oz3p04kxKCkVLWrg3hB8MbQrPRjdIMqeqapVybHM_o.jpg?r=504",
            link: "",
          },
          { 
            id : 3,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZoQszT9tHoArV4MTHtKMKFOvxSuQF0yIZ7CXNwOqnW_yYA8ueUAFn5GdWhy_6zd1zIvWXVpmJV-0fjscWDtbVHzIFK-3voR5cQ.jpg?r=7dc",
            link: "",
          },
          { 
            id : 4,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV4YNtD21yTfaKO8mFzaajYupsbkZJz8zgTqk5SbHVR9xOTqGnGpepCL83p81u1g79_Nek0vxv-DEq4FC0f4kMCn9dJJyRUyfu8.jpg?r=f96",
            link: "",
          },
          { 
            id : 5,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWiw2LYjqEci33fHiYyonqNk3T6X5--AZlsCjYT2OLQ4DECvOgrKhyZezVJwRaw3_8gVWjuKz7WxeEYe0QRfsuwAQPKyf4gDCts.jpg?r=893",
            link: "",
          },
          { 
            id : 6,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUwZ9s__Rk6dAw2p6DkeycXTF5LK0DK5qnvzu7Uj_hFdbdPpCg1Rr7dUpOS2J2aHfdragtYlz4KCn4B5zbNAPmJuFtVaC1A62pA.jpg?r=dbf",
            link: "",
          },
          { 
            id : 7,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXBSVsadqM31ucwj0h3_u4kfwKsQpsPo8JrFMoJV4ErimmJTiFDFKRW08qzhXh2UirrTI974IPA_EYWAUDXi4rFVf8hg3RlwFlI.jpg?r=a64",
            link: "",
          },
          { 
            id : 8,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfdxdLh3JtkXk9QD6uqoGLJZ5kKVKCwdpkJLOh4jr2HeS19gKOOFxkcW2AepgXgS87F71SJpA_bSTv0c40Ac4zSaGAhIuUOLPW4.jpg?r=7e2",
            link: "",
          },
          { 
            id : 9,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbmogXKZI6mEh3lk6Az-Y9v1bteYiGlbI6vc3b2rd28dQpE2-QNFq6f5r7TqPrSH4mqj45sSasmzvl-gaPrBZGADpneM6jwi7KQ.jpg?r=3c4",
            link: "",
          },
          { 
            id : 10,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZtDm5eWmVg7jeh3vM7vylsvSC3Yn5SOmu6GnDHUIFE2QYT0xOQV0BULL2nfllaykG2kloR2OevtM7n_Zrayd35lDGFvkwdexJMpphPpOvkawkCnROW2oB2_QMB9CVzgKvQeMw.jpg?r=9c4",
            link: "",
          },
          { 
            id : 11,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdYnAmsqkf9ibBiJYzBQfqNzAM2mYAnFUk4o4jN3sUcm6krm3kdEbiUd9ReR0tlz_7S5sn3x3lNixoeKne7vwx99QV9uIt27IpBXYYPAqd3A-zcLJ73tKLZkg7EIweVyHxFkTQ.jpg?r=c71",
            link: "",
          },
          { 
            id : 12,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRfxfeF_MJ6NLmZTgP7dSJFvYvuRpQf0MJvwtOUudFwK-ELOmHTVlX6919-9j60I2JjPFkaV3K8hlfwkYeymQuXac-cw-wfONN-rV6o5Gk04YU9gRgPAL8paeruBT4zZBNMT.jpg?r=854",
            link: "",
          },
          { 
            id : 13,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZRO0rZNNk7tXWioHRWEy2oV4LEQbGHtsCQ0ecKp4z8DBIOwiSSnsML9SW94CpgdZf0FLtVvl8wb-uhDvM6-KjD9HK6nHwmKeufApsFHVPKLBM-nQRXSqrho2oTd1f-hKVNp.jpg?r=0fe",
            link: "",
          },
          { 
            id : 14,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRvoNokeYjPJYpX3qzQJQ4E10ewi1txXV9yzpHeSyEfjLucsTkODK_x5e8TL4NdN5xDTwa1rsjLjFSZiRcuxntXhyWn2CzXYqZz0eFKuN19LY9JOn-4JcbKz9LN-VB-WpCvA.jpg?r=910",
            link: "",
          },
        ],
      },
      {
        id: 5,
        list: [
          { 
            id : 1,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTUUok_hrzXN-5yUiEp1hs8xJQNpEO6FPtXnF6yyYdOY30Y7SyBxJdyjMSjJMgbPwPLijdHNhxtGAx7j-vps6MaSdpFuePEZqMA.jpg?r=0e1",
            link: "",
          },
          { 
            id : 2,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTOSK2p-fpxAe7sxlE5KEotx3UeatEhUQSZzI8aY8iaxvewE2ZKrXAB9958AvudeAcBQPZ8vz9vepQfMvca2CdX_xEplzk55PnSiyBCGCmR7qWG9PxwPULJUxG6qfW8NlWwj.jpg?r=b8b",
            link: "",
          },
          { 
            id : 3,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVecfILStjF6VvRDlflBpX_ffadgKOmZtYZYUWYepa7HbmwAhduJTX6AzOe0w1nBuNUQ1Ux5nldRvgzGVyEry4nr8GX6jfhaEMjjSrN8FHp5G-lEwhDcqZAc9PkzjF5528dC.jpg?r=b39",
            link: "",
          },
          { 
            id : 4,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeEvhYN8eX2Olw4GxTLtgFi-vk8XoRfIUTi4bjw_Nac834kRcxEfQ81jZvg0j1BYHzkm_plcmGOOosbF79YSOP6sCarDzvjOXPDDIGBgwNGa_u-x3biFELSH63i1WCwa9gBz.jpg?r=bb1",
            link: "",
          },
          { 
            id : 5,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcGMwtceHiRW5eWywcV9MR5dhqtL_q5sjxmXFBojSzs6ULxDksm7ALkIUw7uXEuuX0TCvevbSAp0aoYPWTbeRoEw6ySRvT6d1vaWf-4ntwywzGZOaPm7vl54l9CcwRen7ZPC.jpg?r=3bb",
            link: "",
          },
          { 
            id : 6,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVppVtXLF_ClRZvxNXLDiuNbSuIAYn8TiYn0pUpUfjOx2VEABR8UeaTNjkUlydRgN7ev1Q-f3S0KfY94e9m8DysHZnBAVZFmQ5M35Pus-Gi_G6T_q23Lv7sss4aAmj3kYjLk.jpg?r=afd",
            link: "",
          },
          { 
            id : 7,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZieFE8QFLuKcdklLS4g_xnGOplYg1cnzgOzdKKO68LwWoOfm8Ak3QRcfrrI50AYX6HGkmlgMG2pZL5m2Te4ni5SBT1m-ufTWAfkN8sjDmU17iL6UT4XD4TffQvDXX-RQOmE.jpg?r=b5d",
            link: "",
          },
          { 
            id : 8,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABai1nh56TkJZoDVaWZN4PKXMd8CMJe9k1_zQAiVMbXKvwGbgSmrf4chRPjzM6xg7aa4BaePEA_FZbE2ZZmF43z01FQYrhPgsZr0PTN6vAei-opW4zxdK1lE50R45aVk7NfDV.jpg?r=67b",
            link: "",
          },
          { 
            id : 9,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABatCDqGIq7iQufU_8RA-HcubsPbEWGR_OZ2nPM9gUQKCl-e3MTYfjw24GfO2KDb12j3icIqLeO96bL9koyL5YrPHXfxJKkJijFgRUZybPzxLvig_eiDkGJg0N_nQQuethMZr.jpg?r=11b",
            link: "",
          },
          { 
            id : 10,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTDfk9c6BlrHZekapSz-qHyoIJ6eip6DWNyAeoScgtO8fXDOPfKFO9dPYjrivBJ00RryOSTse_Gu6nS37TwdWLCwSUsW3ba3jnY.jpg?r=811",
            link: "",
          },
          { 
            id : 11,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYCUnKbHq_vsVpHszs-2nyUsiK0-cMB95AvBH8nvjhlWgqUgnzs-rlguVoQHLNjj6SbSjmryxhPpGXE_022Ck100-aUCSYXe4yIIyIHWkqGHBFw854nc5X8ya5Ctcq3OsAjn.jpg?r=f80",
            link: "",
          },
        ],
      },
    ],
    Animation: [
      {
        id: 1,
        list: [
          { 
            id : 1,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXzl_8JQpkWnfi7kAzoXRm3hp58uo6lYE9U5RMrXpR-32IlHeIy4UbJyNfFOl2gvnQ03vFr-xCmdJ1ccNeJcuMp0DNrrFgXcGmlNPgqyJxrLB3pluuQaCxgUDQ5e4wGHJ1Ac1n0DHh_XbEuyMuC9dWIRDXEK2pVxKY4.jpg?r=899",
            link: "",
          },
          { 
            id : 2,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS9FbNTfORX95tkQYjbyggpUGtro4cvWjK-dFXe6IppOJjdP-bACWDm0t7oDtkR6EniYHcEWCukfOw9H0-5kIxgf41jsuBqA3fQ.jpg?r=ce6",
            link: "",
          },
          { 
            id : 3,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZHntRx0cu_A5Cg46stU74cCfu71weOY6b0uF_mze1A-mBPpKeuJ29p_UZ2YwRAE5mm2nKMviVL3r1Af8Oaglv7FApF-PHNNdECLdv_0znxBkvhsnDjs2192fbkzajoefgvC.jpg?r=fda",
            link: "",
          },
          { 
            id : 4,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWyYQBxApNvekliu9-Qxnvsyvdq8Km55y7yvF9cQyuExSQDYHqXdnoKjPMRFlu8-fqr_PssLFZ2WDEhmc1j0IY6tmBG4f8FLH6g.jpg?r=a2b",
            link: "",
          },
          { 
            id : 5,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbgzviEU6rbEZDDGCNTQXkZZpYx092XGDd1i92Yu4nHovr0EHgDbdQhGRNNIQ_ain-UeazVUL-wN6DEC4x_aa3axoqXnds4E1G4.jpg?r=541",
            link: "",
          },
          { 
            id : 6,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT6FlvUfrQiugYGfZEIuyhYr7mDlXm6MiUW9Ltr9u-nyQvvOtfCyTu0jpBqeGt8RBL7__WPJdwEH-XWedMie8gWdjDsxsTHXgvc.jpg?r=53e",
            link: "",
          },
          { 
            id : 7,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT_IO6JMj_EIaKjgPLfEyO-8TkgHiRHBu6b4WlKhbKllUt2A2bAoTVV3z-HExKARycWa2zBJZYgQ6uuXj1O1tUmNlhQ2eh8-pok.jpg?r=bf2",
            link: "",
          },
          { 
            id : 8,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeaTC1ebuhs9oDDxF1j-f2zkZvfM2l4LCtVYhPZteM4qxW9YdeEAfgY9Iu1qzZ54c4j38nhpkeD3vNOOu_zr7YhfDrbG22BV4cY.jpg?r=5d7",
            link: "",
          },
          { 
            id : 9,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcwSuEaiw4wVzipVYEIf5AdwhA2liyHs_lxCQ4ClJ9xc-n3oB7iMh0G_IXWSBaX637SK_lGGCghlyOg4MRqx2F0ujUmItZuMDto.jpg?r=15e",
            link: "",
          },
          { 
            id : 10,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXi-PtFjbwvJWEyLSQ0RNrMmV9lWrHfb4C5zjmHIScYVRy428GAd2UPMo0OfLwYCXEyvQFUZeFNf1AGEhTUZ0kJDes2f3BGH3k4.jpg?r=946",
            link: "",
          },
          { 
            id : 11,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUjKbGGwoX35_ChrvR0ni6Opa5Sw01FK8-a6PvGYXuNA3Dr5P-v_5H18fhgRX9kI-jBjgfW8S_glltwfyUxIf8GUgXwrDyIHOWmtQVQikv2BEZiWE8UHS5Vn6TCETiLqZ29t5iF_gWxtXT44RwLVzEnraNKezhEo-2l8vkwVon33vDiHTjKoa8hbd-Pxphj7Bu6KC9UQD1vs8YQp-n03Jb71splv8Y6zC1S9038n0m1D09FhB5QTNeXBX-iCm9-MAj92ckG1p0cc5TwJ0ZZBf0rKsVZKeM86KsW7qdatmp1oP_h4UOIE3R9IInjLvxK7_vRBni0Bol2oPNvisDK44v_wkPqFXqovfdEbUf6k5PUl_ktymPYTMgjUl1SnJ7zZ6yAGxC1W00xAKFonFI2HcqlwqtPW2BHIxm-N_ktUn1Iv8pfnV7IsTfXS1sD39vvAPKOrZlkuVLISkg.jpg?r=66e",
            link: "",
          },
          { 
            id : 12,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABW75hF8bNGyMOfwtURotzwVXtG_fzFkgacOWPWpxaniPQ_fObUxQkW24j2KM1U6Ks2WQtIBFlZoU66qSRqxjKYkNkl0KcwWEmX7owdkuj2qy44aEhN-b5N01DdblLljMUACG.jpg?r=f93",
            link: "",
          },
          { 
            id : 13,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQsbwZHuwT7u0z_7B6cy9qykC0U0v-i9gdx8LN6jfecWaVrle8uY9BxX_vlTz4C-vRY0H2PHObJL8TrcD8OlcexxSu3w9-H1ekY.jpg?r=818",
            link: "",
          },
          { 
            id : 14,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZOeiWDghPMGcbXopZKXNRSPhI2LG09EHwMhxLucKhCFxGIYo6TVMZIiaSVqU8b1FncEfibZ93-x_1GJJBipe3lf6rf9wJ489zj6kXFJLyl9gBK0vo4FswSWCrVC6jyWKdpV.jpg?r=463",
            link: "",
          },
          { 
            id : 15,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVn_fOhj7xfjam8CXbSutrLGSDvs0JVVDfZphkeEH0t-vEuZElv2_YXynaO2zIA5fDTHEPsXVOYFmbreMKD9C_zvSBGnHXKBN_VdiXvA_3B3LSegXL3DbJ4Z2Jp6vgzvmSl8rqh9p8U8lSzZ6Oc-O2GvvFdyUmAg6LgTNiIIOn2SnDiARsAVk-jdJ6NAqRU7m53yEWhxcuFQGbxEQFdDeHkRbVM2A8SxTJDUjWahBqZPtuOpDD9BDpYWsaNDhXOKZoNX8t8gyLtv1M2kiCKAFLJHU73ywCjvCKBnMA.jpg?r=6ad",
            link: "",
          },
          { 
            id : 16,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUMovAJ1x0qViOiLC2rUfa3_2KWyZGA70Zv755kZUWYF6LjS0ZwGp-VgTF3yqvfaHb_CdBixTULLUsyIfwUINBiqjHitv2Gf82w.jpg?r=937",
            link: "",
          },
        ],
      },
      {
        id: 2,
        list: [
          {
              
            id : 1,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV2X6xP1yMI7R4SZ5E9Vm7CtieIJj-b4D4P9blAngTgJfLouEeMcf_OHPLv0Xi8xck7pULPYFDVQum_f5HYKyegRomUtS9vPFTY.jpg?r=df6",
            link: "",
          },
          {
              
            id : 2,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYKBeu_AaqfaZ7ckHWlFYk3TPB5zMihd0Rtg313DB6C8IeMgp8EEpd7oDVnKuBXvL4JyInTKPfOV9iQfD1p4QQt-pnEPu6oSC0M.jpg?r=aaa",
            link: "",
          },
          {
              
            id : 3,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZsdFUqvjPEp-IB66CjNJ0iOSGxFGue1y2uqcv6oEiho9DTB2K-W2K27jtya7k41zeZrMw3ciX6_Pus0JB92SzSwosK3MGx7qfrARymShqj7N9zfxZpItVnlzeyr-HxLm-EgOrk-O1Bg9uO1RyxIM61nN77SngMrO21UgaYgkMomTdpQQfg0-L-p9kGegFSMjlU-xPXxAcTWIKMOtPJRnxyEEqbX2i-3DtLKS4_z_1bQI23vVRqipy5OsQ-wfBoRQZyrOWO_gYUDAiwknLyCXqWBlEJ-Zej5v8PsjUZc0BLLr0Tbuv2EeGAg1V_ibmrk6sTgrGx-1rhq7U7kZ0pc6dHutrJclm3zKJMnZvXfm_DYwMt_0s7p8lm1iLMiOT78yA7iQS7SnI1fpOQIhSlYeq99XtAVyjv7JkhaeTUVxKFYk_oVJA.jpg?r=945",
            link: "",
          },
          {
              
            id : 4,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQEU8TySiremu-y4ytTRvKPjgB1eMh3B-_olssMDo1Dsb16VmDy77uI_1HL_qMJ6qO3Bsdfh8dEO4_wnwhBxdzV5n_f9dPgvZVY.jpg?r=3e0",
            link: "",
          },
          {
              
            id : 5,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXAaw75_9_vCEjrI9AKcxA1clPat88oSdJqnY9edugeOECi-zV8MDl_I9ULaEGBW95CdT7mqIXOFpWetM9CXqYfrpSBFasXVp7o.jpg?r=ba8",
            link: "",
          },
          {
              
            id : 6,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTrFwL2K67D034us0f3_eedqrj1kv2nyNsGLgWdMyqvWawA-YHCr2_6-GuFphuhWbrM7llFUKo03jVPHnGxP1Q8imPk7rcBzjPi0jr5qdYV8Ge8RTxnG7baOj3lS9hmkZ_Yt2bOWhnm4eX5534NW4Kokvdi_ACgIvHFDWOGAeRBCIII90BUt80UCfC82CR4Qk2XvrdAgijWjm_tDUEtZ9IUErxGmiXFboMdyaRkpzA2OdFWrEU9zuovc4WjjHD37t-jV5PhJHyQ_U-vi7g_YPux2CMiWSezFDs_p1g.jpg?r=5c9",
            link: "",
          },
          {
              
            id : 7,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABULuuNMIHrPk_iQTg4MHbvuMb8xUBFtgPvpH34f7-XLLYMxbJ1RJYlyHCbU74JgT0uJhUp6gu4_xXuoTSUxBp_nYMtdCz54nyxDjOcRwUOAzcStv05RachJcu6t4hpGppMrv.jpg?r=c3b",
            link: "",
          },
          {
              
            id : 8,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQRzTH93n2Boe7t4rprnkWnYkK1JCP2iofa5_JaN4KLI1RZRUrs6HoVV_CyRitKgUGCb9p6RMpsK6Xr5iyqgN1h_bzzMkjPnUnI.jpg?r=e0a",
            link: "",
          },
          {
              
            id : 9,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQgEQesgTg8G904Hi1phZi3MkaNSaW_p33d1hArBFFO0P70E0IhZ_zAmvXAxq62jXyW7gtziN9iyaXGuqG0GmXbupMOomz6feCw.jpg?r=e4a",
            link: "",
          },
          {
              
            id : 10,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcbizvvobKDYX8kPDrbj_h0cMcBSS-XqY7gWLX4DFoqyRoqZe2MsZzPXhNZ-61YPTTvP9UYXkyu6r30aZq59_RM9Xc1RNUklLtmCw4PLxCTPXHcHY-L7YpGQytr6UxOj7PtB.jpg?r=650",
            link: "",
          },
          {
              
            id : 11,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc2xie4WrugCx23RFy7ftovgop_zzEw5jfgmGKCipKQgA3Hm0thqidppvFfflTwaEOxuPjlYP_Vunh_hHUPCxRfzNnZFUBHAjJtTbHYoeJ3U0I20mb4TfNxb6_s8SeKLQiof.jpg?r=c61",
            link: "",
          },
          {
              
            id : 12,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaaw8YNzMK2gvR9aK8XzjzqWGxVMuGB1dtvCYs-5Q4_iG8Al0gx4aINNgYL16E3_KkuLGU51jy6qD8cg1o8UkbBvqrujZPS51xkFE9vAG2ZjtqoGIZAE2EIQaRk13TnJojX8.jpg?r=5a7",
            link: "",
          },
          {
              
            id : 13,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcK94fRR3bL74I6EN6d8zoWU5tFFBqNGqEUOy_-MfbHiVgezE3r2sadjQU1u4CWup_1zEC8wepy9oaUw0koike-u5ylr9-UeAXU.jpg?r=3e6",
            link: "",
          },
          {
              
            id : 14,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT32nFDr2ufEebZBBJC0u6lKyMWS8RUrzWPOGL7LHFOa70e63Kqc8j0ECY3-JYhpfkMRZeVRckhkVbFGSgtXC21QD_cl0YC2rU7-Quz0ujWclcSiAWMDyDOMyhFTNVhZHW-V.jpg?r=d8a",
            link: "",
          },
        ],
      },
      {
        id: 3,
        list: [
          { 
            id : 1,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT32nFDr2ufEebZBBJC0u6lKyMWS8RUrzWPOGL7LHFOa70e63Kqc8j0ECY3-JYhpfkMRZeVRckhkVbFGSgtXC21QD_cl0YC2rU7-Quz0ujWclcSiAWMDyDOMyhFTNVhZHW-V.jpg?r=d8a",
            link: "",
          },
          { 
            id : 2,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTLBIcX8YPv-Z6kDBFDvyhHP79h37QB54Se4atw3VmEnQMkUl25OHMPmiw62izJaFuJwGKfsGA9iitIY_zlRdBKqK-IevBAPVE8mi_2sQKpgk-mVRfnvKqyzdMjJY8mFrhsH.jpg?r=97c",
            link: "",
          },
          { 
            id : 3,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbWaPN0LntHvfU74oJ79ZkSzebeN0h4gxiFL0IU8A4n4ywBIVMJ5eGTP4SUbMePo7AaqeWGdJCsisWDBwBTt6lNJsflRF9_zFVI.jpg?r=0ba",
            link: "",
          },
          { 
            id : 4,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSTf6O8lq22n86c9kF0h6StVz1v_G0NRbV8QD9AW8D7jyecub6nYuSxZf7vlqlZSRGAXsgNbygDmhF0CCM0f1M8sxxbApAo4Kf7QWQmZAWn7GpvepaLSMbM4dXDzuXOWGEhq.jpg?r=e15",
            link: "",
          },
          { 
            id : 5,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQw4D-qwoqeZntFYv3bzu96V1uqjm5ON7LPO6o1cPkOH40K9Br-Y-0_sQB2nVU1ZMgVtI3WFy2SrH1_9Vl2sDR1VCeTiXDbjJBk.jpg?r=bc3",
            link: "",
          },
          { 
            id : 6,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVWVJyNYE9Q3-Kbv1oCLI46n66V5v9SVlzElj3TWlzUuYvJT3qjtgf6WsKLMrYXzcI8D-4n4XTS5McrChmliLGlznkoXX27rLfVJi4GqzeFAuM7llg8OVzSzZfMtHNn1WwAW.jpg?r=903",
            link: "",
          },
          { 
            id : 7,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSi8KbskgUMO2g3LWlhb8FimKZYObAOolEdO1p5JcLpbuy7BGUm9YaOOnXVql_LTbXzcVM4IU9uaq9dVS4I6tR2xaBYvgx1uCKk7cjyt_bapEaBDY3R3mlG5t2WtAvHrvwF9.jpg?r=810",
            link: "",
          },
          { 
            id : 8,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXdLpiBSm70d1d1gmgYDwM19rBjLRhr0cXHPqHtlKktxcBY-JMIFNkS2CA93aH5wj1RerF9eXx6qISP-QxvF3dlDagrVSXSldPyMEik8X0IO7So4AWmdCY-xLasj8kApXMaE.jpg?r=f76",
            link: "",
          },
          { 
            id : 9,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbKWSV3QQ0L7SmGx-jgkVSjAutVb_9tYCSZzXOzA8a3k7xdLSy8W9SgJGA2WaE2EMv_kSJQJPQzfGF3_JEfH_VcjovaVD8YiPF2i9hAuGem0C5YlLitP88Y9Ropvra0oNm6l.jpg?r=307",
            link: "",
          },
          { 
            id : 10,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX7CSpg7yif6zasCN78u4urvp-DcfwG1cQrl5ltSwbgyJPdTUiibtejGScP9nHl5ksJkGiUybW8bPU0atlpbMy-syt9avfjy8H-mVlPbk2jrww_oA9YBetkoC8pVY_kc089K.jpg?r=9a3",
            link: "",
          },
          { 
            id : 11,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTDYHZI3D_8wHMAUEK7AHj5khJvTnjIkX8ERSeqPIYbqx6iWSlBGEtyGrfVfJcrodbxjd1tvb1_-WXXRwEsBQPySOLa6i7-vyCVQcYq2xTHTTUhYyYl7tevG2vMFSmxY7oxw.jpg?r=777",
            link: "",
          },
          { 
            id : 12,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS2M6WMl5l4facrtclW-Mgj48clelLa1KcQk9vzKuyoqO4lcpCaDXo16FmameUK4C7RsOfVfDqjJG92anlmeL677iOwe6U47UFY.jpg?r=e2d",
            link: "",
          },
          { 
            id : 13,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdrMMWzDUs4ZhkDd7ZhEEQQAM8oIDGuTAXte0O1D0eDhh1ger5R4uzYn0LTAEyjA-53qBzMzjLNPrIJjr1SzoppQHTM20nEnfJiCsJFh9iL0IQHZqLfKGCcoxF1sE8nkkLLR.jpg?r=66c",
            link: "",
          },
          { 
            id : 14,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSNzycF99S-qWQSW8XFUtsC8djmZJ5QRwS52XMVvInuQ6BAobG6L8hayC5VGZB5yX9GHmSfeSYak_tnvgH7AA9CEDTNiOi-gyqQ.jpg?r=a57",
            link: "",
          },
          { 
            id : 15,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSgFE16nY3iuI0mcCrWLYbtfFUUp6Sy0skjxDHiqwryXSJ2D9mqn6NFZPPSpN8iwblfLnKA1T8RaKSMGnTe__4yqv5DX7uaqKdw.jpg?r=d7a",
            link: "",
          },
          { 
            id : 16,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUTWzwdmIHKKnyOBpCQga2Klaw7Tgl1ZvgaJ7BsbROmy5J1bjYVhnjXS_A3VlBvAvR24UCcI0qsZcJpVis9NqMdCPWVmg7ipbfk.jpg?r=acd",
            link: "",
          },
        ],
      },
      {
        id: 4,
        list: [
          { 
            id : 17,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWX1y8RGHS4gIUvfFqqhE-lD-walUs42qoGS_anJ4pMnkLxZzuvL5kyH-y0XdoysqCAXAT55_cHw6qV76lI9-KUyYehbc1-KPt0.jpg?r=881",
            link: "",
          },
          { 
            id : 18,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfBteXbLIRopz3ZRvcNhvmed0TULpilpCCxCcl2PQvG8kRTwVieSoaXoI6krHpQYZvjKqlisnn4Do6HS128fInrE_TZKxb5y2oHJxxqzun1OZ1DXCE4cdgDwLpZqGkQA0YfZ.jpg?r=17e",
            link: "",
          },
          { 
            id : 19,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQHaibtme7lSzB6m5SqyIcalkuTeZU5aTbzG9rigTVMWdnt5en9heK31kIAofNLPn8pV1p-bNTHlYcpHT_K_IOt8jmJAMc2ajR8.jpg?r=45b",
            link: "",
          },
          { 
            id : 10,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc7Ug7gkHAb3vuT9B07fIgrYslw7wHTRBNK16H7X8sqJIuFQhZ8Pgd7IY_qKF_5MorV6aGmlk1dd19j_N3M0qVFINoaxxlCT55A.jpg?r=e02",
            link: "",
          },
          { 
            id : 21,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfaqywCdDqn1nZLxfvmVMg9ITt69WGROWYvzAKYXbtp9kd_WPRNJI9uS4C5GOf-SMT45InMOaAS3XwesTmtUTiSLSqiNy_zVJs8.jpg?r=64b",
            link: "",
          },
          { 
            id : 22,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSrUl_mvaWkoFOvi_iAqwDV0tgJ-6bJb6_quuRJyBUME2NbNR6DKkrkS1FxHZBERmf0exr0B-_GP2bq5TrQYbWlKHdTiad4IGAAyPlzGldh5yPRVmed3yjvot_RT1QfmB7A5.jpg?r=6f0",
            link: "",
          },
          { 
            id : 23,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY0DH58XtXM03V8Y0Ga5xOLuhbJX1mOa3-imp5kY9NB74f4OKXmlnWHHA5HCJ6Q0QcsleG87JXH2ha8Czfrcy3bEkHLGFNjM7u4GlVwgIMqaTFHgnOW-jgPp0CRlHM1qaGah.jpg?r=3c5",
            link: "",
          },
          { 
            id : 24,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYuMlqEu02YLCJfr60WlzxgHUjBtUeieIbOfyLQfeF0hINnN2hUIAzOVdqCf1HjrdU2nB63OGJ0AcqQd0UNvXzTgz0wIsednOe5folkUoNL4mFHu2uKgKZFuEDIffsKRHKR3.jpg?r=4ee",
            link: "",
          },
          { 
            id : 25,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcHmjBZI6qXb1Xl7lzsXmD1wqL__0mpOHodyocNAE-x8j1ZtAFuWWfh7fxdYDBzsXhan6UrUuulJGx6p5QK0-9RQrVt4vQjvA0E.jpg?r=185",
            link: "",
          },
          { 
            id : 26,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdLrOWsuefg2xcvA-wPSRVkEr5GwXj06iC1URchS9UH2JCRj6oOTirXwWreBtDjzamGQQ1LGqeV2GTmEiVpnSWXWqTorWn5wTXPMSjNKlkuRUWEQoBB2xB1DcgXruzEFtnyS.jpg?r=930",
            link: "",
          },
          { 
            id : 27,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXAdidJXhMaBCIUw5msiiLob2iakSLQwwMf71IfVnxkbnpbvu00c91sVq8kVq4lS6RWixUUUuz1KZ3XL6RXQfKxyOIZPZGYl6x09_VZjgzaCDt3FW1Z2WjJykNjr4NRveq5u.jpg?r=14c",
            link: "",
          },
        ],
      },
    ],
    Drama: [
      {
        id: 1,
        list: [
          {
              
            id: 1,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTuK_OsQQIB4H0gu2Vmq81bLH2sVb8NSF2yNHHs89wnR3AhZM5_3nPAl342gCwC4fqCK9esUr0ePEATxGtuw3FaCkX0M5RdosB3jFVzvoPjuUvjnLRDew4ZZDqWHu9-0nj5q.jpg?r=525",
            link: "",
          },
          {
              
            id: 2,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTd6w5OSrhcRJEWcaeo-yQrn3kcXDybWv3Zn4_MBPyNa38P3cApnTpFR3_uNSX2-6SegnFY3IRPioYBtlwmXWcTjg46FDKPURw0.jpg?r=ecd",
            link: "",
          },
          {
              
            id: 3,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXZT_sDQVfPU22BClAGny1dKCk6xGNrJ6_JmVQwMGxptSbQeTu6EkXwsO-WJo-hOAGg78BzFRbu7fgddZ6CsJIOG4YmCVXqzqDY.jpg?r=821",
            link: "",
          },
          {
            id: 4,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWTLXslKtx2SouqOH-uTCLE72HHbYkUukuJPnb0ArHklDQZGb9G2SGX3hNkbLpRrVRs5pUg34WOiN2vVGWBRlcL1wVylspk2JCY.jpg?r=94c",
            link: "",
          },
          {
            id: 5,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaPpftEvz5l2T_EImpTBhHTtH3HiJiYUIBKVpC-hxraH89XOeC_CsdsoNIE0yJf9p1ZgtCFYUj6b3HLdzVELadeBeXFy6Ee4SAwYrRBchnNT0eB6Y0UmX6sH56m_zdIAMwZH.jpg?r=4e5",
            link: "",
          },
          {
            id: 6,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABerw_1zzYcPwv-GZUD4GgcjDf4dUZTN7jBZuXZ_O_H0W5GaDlNgqAQZ-IGIuHqEdtmwRud_6IHAnQUio55FjLRPA-NBbg_LiT9UkuTJZdsY4nlOujoImGKjAU7ldg3yjvuTA.jpg?r=cfa",
            link: "",
          },
          {
            id: 7,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS9xdX5A3kimW38cpILO7K82dvCSiPhAI6okJVtp-QYZE0r90J9z_Li0aEMMMdbZ4kRFex1qe7P61z37JzVfhBAQPULYZLEv2_4.jpg?r=67b",
            link: "",
          },
          {
            id: 8,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd3ssnm79ijbymsUFSNT6XTrTwaE8t9Srq5RM5wfa2WDVVrs3f_-rKEt2n0UEByJoxtdftVgwun9JYk9rWvfbWlCubVmyPE7qzk.jpg?r=c7d",
            link: "",
          },
          {
            id: 9,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd3ssnm79ijbymsUFSNT6XTrTwaE8t9Srq5RM5wfa2WDVVrs3f_-rKEt2n0UEByJoxtdftVgwun9JYk9rWvfbWlCubVmyPE7qzk.jpg?r=c7d",
            link: "",
          },
          {
            id: 10,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRh98E9KYZg69YI---77jZB8su54FYLdxxPCOeDNlwpD7F73T5LbbvUThU8utjjJAJAmDowlrXAmdE4YWeT-XXd0dXlaRbvU5Z4.jpg?r=ec5",
            link: "",
          },
          {
            id: 11,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf07LF6QpTXBlEZ_JsJ3eDsKvGSEIxVfgOLhbA4eV4r9DsqSrK7oasCP5RY555ART0fKwhvfDYZie3VPKEnltUxTn99ktuIGRRA.jpg?r=dcb",
            link: "",
          },
          {
            id: 12,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVSVZN593agA4IqovYqXl0RUxuDvwX7CrhkTSzid_Xi-sVVLodHkcCR7JN2wlQnkaIXs0bzvdL44BhSBmTwMaSszmPTOfjIrPGw.jpg?r=783",
            link: "",
          },
          {
            id: 13,
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfDgKJFZVwnIB2q1vkzdLkyB7M9NUzT0eLTn-9Xe9MiWsSEqLkvlzqcFnyhPH13LZDfgyvQpaOsKnr-t5rE7E70Syz_6gpIsByE.jpg?r=ffb",
            link: "",
          },
        ],
      },
      {
        id: 2,
        list: [
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWHqs_WxmRZhmTLKZlKHqYnQE_rwDi6Dy03LcEVqWOqzGUN_cEswLp38ia0A4rsH5LFKKAy-KkXOxosHlNioR6y2YZCZQomWD3oxrshQ1C3JbhcdgafKL0OdgRuG-wxGytpt.jpg?r=542",
            link: "",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUCtKMVWM_pOjbbdGToTAUCjW4GnSmJ1ieB1KC5KKYTNjSv8ROPvPk8SKPv1DEpdHRmAFfSw7IXloMogX1IFVF1YQsUv1G0E1naHk0aqQj33rJ5UjotE2OL_LNdVdf1QEJxd.jpg?r=141",
            link: "",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbc25cXqvC8oasaejfF1LXgAT2acPbDCxRPl5X0ZIoUoFwc53LADeE0XkjZeP1e5X-QvLSVi1_BVZNpkNagIlxU6l-3OteSWLm-FoxA8pLQjxAKkWnnzTqtjoRZbvOfR6Evh.jpg?r=7f8",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfJyYew80S1ySOpNJ7hiUqAVF547l22QSSkOpAuCxJGvB9gpKvF3NWLO2WjfIGfuLT-v8C1wde-WG5CqgsdOF6La0YLP9Rd349BYOE7xUqovJdDtP4h52JuFVn4f3WAM5-8R.jpg?r=732",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR5F26T0uaHaoB1sGTJO7-iqaOe8rMHaIXTp-8me1k_Au8vfRXFnVxD3P9HkugmEm5Dz3pSJlSdIwT1vcG8m_Qon3tS11_Q4Olo.jpg?r=5c0",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYXhSf30Ylec4L9iV72cf-oJPPA3r2C6tsI-K_TDX5JS9gSNUEl-00MjJM2qg93fInH8Cef_NLp48LcbERmxKvjYc20cq0CanaAxJrBq1E7PTQKOz247-XqyItn_jixO5ekn.jpg?r=50d",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRxYbzZ7_xV01FUKYSgGOMkpbQkktv2gBZDHCVxK29R0ouzF5p2bE-OZHzFLxR0l_RTwRg3TRafqA0FQtqXWKXuFwObjKaSYyDI.jpg?r=908",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVl_2FfsAuQ95ytMwVLYCzohvEOtQVGfY9qhY8si0DPK-vnPDRvA6uneZhQvThEzKumij7vHLbetNFRNJ_tMyT-faa_wuJh5DwsUbnO-b4a4Zv9tV0FunPYl7UMPXywCVN4C.jpg?r=1a6",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbnPMeLiNrljhenQ3karvi20mAUGoyiNRi-6RjrnESccc02rKoFMSettJnKEKUVBePZTMX5r8E5uCDvjPZcJOEDI4rgsbOChwqY.jpg?r=dd6",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTsldz9yiYiiJNY620so23EAdLbHNHHnH92UFnoVhLr9taS-BEB2ns5F2tq2kKG5YnvJmetXsqK4n3W9KHOye1merkKbsR0dXns.jpg?r=9a3",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTsldz9yiYiiJNY620so23EAdLbHNHHnH92UFnoVhLr9taS-BEB2ns5F2tq2kKG5YnvJmetXsqK4n3W9KHOye1merkKbsR0dXns.jpg?r=9a3",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQGgptS65hqzwL_A0TYT2vQHwMMymilT9gT6CRfrhrDPOpmNXZDZYfuqkY6pq7Y-NfD0Xm50iEpBX2A9Z7I6BxYnhNVSrMQvbX7UWxBMFmEqkTYLlVQWDzgDU4DDy0oAPZ7S.jpg?r=1a9",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcSdaUMPFCrlKuA8fHYRONiwUd1yJFpGBZkBzB_0OeFWJ1gMoyAVhpq_7wTTCL1HUUwhBXu6LmUiHrsiLaSPClrnje-rCXx4sFWEpJN-V9aCn6rPHaPAxIDU5bnteiytJXFv.jpg?r=938",
          },
        ],
      },
      {
        id: 2,
        list: [
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb1YDvsHptfpIMjI2ScIxjIZ7QG6r9d-rErDRjB8UDg-pFMPG7M_jvRAXO5eWxbAZKKxPPS36ceoQUEx5pfzw5IjgczjiVBTtPbHmURYJHKe7SqH7g7gUr2RIqIQz-ShcRkg.jpg?r=3cc",
          },
          {
            img: "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVXp0Rj_LOG2UXTNYt8hVNbfgH-xiS27P5uehX560JP7BwMQGynIGiBK9tLUJdUo512X_H6VtdxUSiYRR3SfAMYhf66VcnXtSveWn8Zjcy9mILPVrNtZLAFwzyplqWLFi2uZ.jpg?r=605",
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTqf6Q5iCds_Jqe3fNnhabtOxqeGDHAFSXo0hoYSLl0vMGRusG08zREPUbSF_8PoNTZij84yg6if0xbE4EOFVulBSVVXP9I3Xqaxgjb8x6Jtgp_xlKQXc9cayA8OD4JyR02e.jpg?r=32b"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa04ZxjLCSuOTfhqAgvq1IiOJgOSCMDerqcO0fN2O1CoFbA7QZvaGNdfHjhAaWcDdrPuQEY9q_BpcC2NXvM_sQ2uxzGgbdyzvEFU873attvdY_Tld6ZAplMH6CAucjNNCiow.jpg?r=dc3"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABY7TUv_zreBuEHwHynCmXQ0YxEBrAWfzEt39keM6M1TOqDxGRvQhxUJ8uWt4OZdVWJGrJYuy7ice1nmF-ktSszJ90z4jnPNXKQo.jpg?r=a57"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQHTX2E8JpJC9emUuIXTGdPhv9lVF2RCErwL3YoUAfBaGbjx8XMoZfPhz-yqrr-OG3XYHgujypPIe0dPz6-ekGAkIsFBDnx0tH0.jpg?r=aae"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABafNuMxPdw1zOzRhzoEy91amNbbdCjR2qT3y2izM7MivW5ZlW4a1jBaqvl-5cDF8cGk8Cfcg37f40UP2J38KsDXY2fFdUsRk7mY.jpg?r=471"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX6mKUi5KGJBd7O5BPtjdLs5QrOkXlTRwpvera0AhrQAkn-HLYSqjinXhH49XnJ-EFrnjeLakKIa39eyB0SVtAw7KWYRvtpKhIU.jpg?r=76a"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQZ_zlCxQ8k5oOs_FKaKgSjWCb_OsThVMHay_cyNWbcOtXbaGGRwL9zjlQgq00_mZx1oqnnTbC3Ly0d5NxSwc-h-_9dGq6xqAPABahDea_rndxOiUqnYV9faZjQE41Vi8no2yL94Qa46aKmahNBtRg1344qAY6QJy1g8ZP0U53DBePPzK23q6x5usbhjpfdR_ZjhI3FA4h-jsB28fkhoicr4cwAWKMxayIVy9KaMAqApYB_bibnaJ8tFkrbLHl04QAKAobQFtaLXGbM0UAa-6b1Xfdz6jUE6Y57GqA.jpg?r=111"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXNiioPKUc82pfaKHag92QhrNctjEESr5HP1Gqw8VcdsKUHo1F0h4o6uWsTtqqUP9b-9Qk4aWfqFTQ-ld8YQi5t7I-f2cE8Am1U0ZwYmaV-uEZophtLm2wsWMSf6jkSJPDFj.jpg?r=bc9"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRh98E9KYZg69YI---77jZB8su54FYLdxxPCOeDNlwpD7F73T5LbbvUThU8utjjJAJAmDowlrXAmdE4YWeT-XXd0dXlaRbvU5Z4.jpg?r=ec5"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVGtX5Awt5mMFw5DpvKNZMYR3ujCGgVjeoYSV2jF6XI0Fgqsj-ZEWqTyStAJNO0fk1YLYXdXNrzx__GUPCuRZloIyXbZ0O-mghc.jpg?r=eb7"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ_q50lctAOCvd7poYe1maHqpOS5CwoRMRVfNIRW6JJ_mW-XCy3nk_O8QtxEZXDxuRLOxoba49q5wQHQXPF7v2L-n-tCGNmGIWQapdQaa4Eks0FFF7GS6f_lGh7dVNGFcZdJ.jpg?r=f18"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc0a7tJ6oCiuEW1EtcXeijJib-MotOT6Ro8tkm0lQ4OEIVe5R0zNxmzxubM-62H_giz39kMS3yKobJsg7sR01bIGRt-YMQ6mWQI.jpg?r=5e4"
          }
        ],
      },
      {
        id : 4,
        list : [
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABc0a7tJ6oCiuEW1EtcXeijJib-MotOT6Ro8tkm0lQ4OEIVe5R0zNxmzxubM-62H_giz39kMS3yKobJsg7sR01bIGRt-YMQ6mWQI.jpg?r=5e4"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbhb0C3BFLYEYx2h7dKFIjsWpA8f-X7jhbzjmMmRNBTrwNKiAlm6MxpqrKKwJ4dBXl_aIUIjvFx23mFFodfcfy-OPmINPFqGcPg.jpg?r=51e"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRCMd4b1_Ysrjs9R5Do6aFfEmnVHiSVM8WJbQ_Cu1dS34dJRsYWHpBtMt1SQ2gpIYF0oXMRoLTxKDcIqpfRZnVubSqq9yN2bT_k.jpg?r=5e0"
          },
          {
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT5NfLy7d-zVZxL0GFU2ChKaNAGeCa3z-pLHWKVBFGSHc1X1GEOn3xgUBNVeGc4TY_F2GmFkU-oC1iUKKFMrq2-2n82GU6ks8Ls.jpg?r=e30"
          }
        ]
      }
    ],
    Scary : [
      {
        id : 1,
        list : [
          {
            
            id : 1,
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbOrFpyPOPk6gkd8x3RY6jazvFszQCmpbKpP8RnatN_jV9aV1gP07QofIcz24qDPI0nicspRL-mhjoElZOJlCneEm_1vgyl6GDOJ6Q2LJ-_cqjrwPE_urABVFy7bxdJkGcOR.jpg?r=1c7",            
          },
          {
            id : 2,
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYX4fGztWyz06WoSOoQ8vgsUwKOmy8O27YD3vVd36WxNHeQ9s3MKqwCTjdjwpB_9UdPS4CC1wP5QAQn-C5JS7oquSAgiWyVCUwY.jpg?r=037"
          },
          {
            id : 3,
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZjPcY7Zhpke-n9orz4y2E6dYXQNhzz1YAx-XOxdP5mM4_FndsHnCkv3vME-RsWroZTsEICeW1F2FODm_tdegsOy0Ih_rtJCRaY.jpg?r=e75"
          },
          {
            id : 4,
            img : "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZ9oQUN4ztgGwfaITX4wl59v1v6zbRyXkkke2CEDAiW7MbnUXkmxPzDyxdHb2t2sBs56KkBQhOr_EZ6rQUIV9qFihJX_wuRRY_kRSKFNFz1A6XKZxWKtS1NbeXXDfTxwkdstW5xG46o950jgzmtz-5PVcjKSJzFF5eKl7y9EF5BSi_GR_Kodql3gecuvJk6PAr3OMGLJ6-rXlXyoMgnu5Rq5woILvx5N4m-L7FIp8uF7EGf7e6gQ0QSFM4uVaHvGi3aJJz3hYkLoUhZvNTT1W_fKvJFMKLFHP1LZ4w.jpg?r=f23"
          }
        ]      
      }
    ]
  };
  const [data, setData] = useState(api.Action);
  return (
    <div className="show">
      <Header />
      <div style={{ padding: "100px 4% 0% 4%" }} className="main">
        <div className="film-header flex">
          <div className="film-title-left flex">
            <h1>Phim</h1>
            <select
            // only test              
              onChange={(event) => {
                if (event.target.value == "Action") {
                  setData(api.Action);
                } else if (event.target.value == "Animation") {
                  setData(api.Animation);
                } else if (event.target.value == "Drama") {
                  setData(api.Drama);
                } else if (event.target.value == "Scary"){
                  setData(api.Scary);
                }
              }}
              name=""
              id=""
            >
              <option value="Action">Hành động</option>
              <option value="Animation">Hoạt hình</option>
              <option value="Drama">Chính kịch</option>
              <option value="Scary">Kinh dị</option>
            </select>
          </div>
          <div className="film-title-right">
            <div className="select flex">
              <div className="aligh flex">
                <img src={align} alt="" />
              </div>
              <div className="menu flex">
                <span>
                  <img src={menu} alt="" />
                </span>
                <select name="" id="">
                  <option value="">A-Z</option>
                  <option value="">A-Z Series</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="film-content">
          <Content a={data} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
